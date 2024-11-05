<?php

namespace App\Http\Controllers;

use App\Models\Appeal;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class AppealsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $perPage = $request->perPage ?? 10;
        $page = $request->page ?? 1;
        return Appeal::paginate($perPage, ['*'], 'page', $page);
    }

    private function generateRandomCode() 
    {
        $digits = '0123456789'; // Все цифры
        $letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Заглавные буквы
    
        // Генерация по шаблону 00A-0A0A
        $randomString = 
            $digits[rand(0, 9)] .            // Первая цифра
            $digits[rand(0, 9)] .            // Вторая цифра
            $letters[rand(0, 25)] .          // Первая буква
            '-' .                            // Разделитель
            $digits[rand(0, 9)] .            // Третья цифра
            $letters[rand(0, 25)] .          // Вторая буква
            $digits[rand(0, 9)] .            // Четвёртая цифра
            $letters[rand(0, 25)];           // Третья буква
        
        return $randomString;
    }

    private function generateCode()
    {
        do {
            $randomCode = $this->generateRandomCode();
        } while (Appeal::where('idkey', '=', $randomCode)->exists());

        return $randomCode;
    }

    public function getAll(Request $request)
    {
        $perPage = $request->perPage ?? 15;
        $page = $request->page ?? 1;
        $filter = $request->filter;
        $sort = $request->sort;
        $accessLvl = $request->accessLvl;

        $appeal = new Appeal();
        if($filter) {
            $filters = json_decode($filter);
            foreach($filters as $key => $value)
            {
                $appeal = $appeal->where($key, '=', $value);
            }
        }
        if($sort) {
            $sorts = json_decode($sort);
            if($sorts[1] === 'ASC') {
                $appeal = $appeal->orderBy($sorts[0]);
            } else {
                $appeal = $appeal->orderByDesc($sorts[0]);
            }
            
        }
        $allowedTypes = [];

        if($accessLvl >= 3) {
            $allowedTypes = ['playerСomplaint'];
        }
        if($accessLvl >= 5) {
            $allowedTypes = ['playerСomplaint', 'appealing'];
        }
        if($accessLvl >= 7) {
            $allowedTypes = ['playerСomplaint', 'appealing', 'admin'];
        }
        if($accessLvl >= 9) {
            $allowedTypes = ['playerСomplaint', 'appealing', 'admin', 'technician'];
        }
        if($accessLvl >= 12) {
            $allowedTypes = ['playerСomplaint', 'appealing', 'admin', 'technician', 'problemDonat'];
        }
        $result = $appeal->whereIn('type', $allowedTypes)->paginate($perPage, ['*'], 'page', $page);
        return $result;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function getUserAppeal(Request $request) 
    {
        $search = $request->search;
        $filters = $request->filters;
        $appeal = Appeal::where('userId', '=', $request->user()->idkey);
        if($search) {
            $appeal = $appeal->where('idkey', 'LIKE', "%$search%");
        }
        if($filters ) {
            $filters = json_decode($filters);
            $type = $filters->type ?? '';
            $server = $filters->server ?? "";
            $appeal = $appeal->where([['type', 'LIKE', "%$type%"], ['server', 'LIKE', "%$server%"]]);
        }
        // if($filters) {
        //     return $filters;
            
        // }
        return $appeal->get();
    }
    public function store(Request $request)
    {
        $all = $request->all();
        if(isset($all['offenders']) && count($all['offenders'])) {
            $all['offenders'] = json_encode($request->get('offenders'));
        } else {
            unset($all['offenders']);
        }
        if(isset($all['videos']) && count($request->get('videos'))) {
            $all['videos'] = json_encode($request->get('videos'));
        } else {
            unset($all['videos']);
        }
        if(isset($all['screens']) && count($request->get('screens'))) {
            $all['screens'] = json_encode($request->get('screens'));
        } else {
            unset($all['screens']);
        }
        $appeal = Appeal::create([...$all, 'idkey' => $this->generateCode()]);
        return $appeal;
    }

    public function addFile(string $id, Request $request)
    {
        $appeal = Appeal::findOrFail($id);
        $path = [];
        $files = $request->file('files');
        
        foreach($files as $key => $value)
        {
            $name = $value->getClientOriginalName();
            $value->move(public_path() . '/files/', $name);
            $path = [...$path, $name];   
        }
        
        $appeal->update(['files' => json_encode($path)]);
        return true;
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Appeal::findOrFail($id);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $appeal = Appeal::findOrFail($id);
        $type = $request->get('status');
        $arr = ['status' => $type];
        if($type != 'wait') {
            $arr = [...$arr, 'closedDate' => now()];
        }
        $appeal->update($arr);
        return $appeal;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $appeal = Appeal::findOrFail($id);
        $appeal->delete();

        return response()->json(['message' => 'Appeal deleted successfully']);
    }
}
