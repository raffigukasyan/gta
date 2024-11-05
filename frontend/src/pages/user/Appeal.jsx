import UserLayout from "../../components/ui/UserLayout.jsx";
import {InputSearch} from "../../components/ui/InputSearch.jsx";
import {SelectFilter} from "../../components/ui/SelectFilter.jsx";
import BlueButton from "../../components/ui/BlueButton.jsx";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import servers from '../../consts/servers';
import { getAppeal } from "../../utils/axios.js";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const Appeal = () => {
    const [selectedServer, setSelectedServer] = useState(null)
    const [selectedType, setSelectedType] = useState(null)
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [server, setServer] = useState(localStorage.getItem('server') ?? 1);
    
    const appeals = [
        {id: 1, value: 'Жалоба на игрока', slug: 'playerСomplaint'},
        {id: 2, value: 'Обжалование наказания', slug: 'appealing'},
        {id: 3, value: 'Жалоба на администрацию', slug: 'admin'},
        {id: 4, value: 'Текнический вопрос/проблема', slug: 'technician'},
        {id: 5, value: 'Проблема с донатом',  slug: 'problemDonat'}
    ];

    const serversMock = Object.values(servers).map((item, i) => ({id: i, value: item}))

    const itemStatuses = {
        'wait': 'На рассмотрении',
        'rejected':'Отклонено',
        'approved': 'Одобрена'
    }
    
    const fetch = async (search = "") => {
        const filters = {
            type: selectedType?.slug,
            server: selectedServer?.value,
        };
        
        const appeals = await getAppeal(search, encodeURIComponent(JSON.stringify(filters)));
        setData(appeals);
    }

    const statusColor = {
        'rejected': {text: 'text-[rgba(255,44,69,1)]', bg: 'max-lg:bg-[rgba(255,44,69,0.1)]'},
        'wait': {text: 'text-[rgba(255,174,52,1)]', bg: 'max-lg:bg-[rgba(255,196,108,0.1)]'},
        'approved': {text: 'text-[rgba(143,221,116,1)] ', bg:'max-lg:bg-[rgba(137,222,93,0.1)] '}
    }
    const navigate = useNavigate();

    useEffect(() => {
        fetch(search);
    }, [search, selectedServer, selectedType])
    return (
        <UserLayout>
            <section id="appeal" className={'flex flex-col col-span-4 w-full h-full bg-[rgba(255,255,255,0.02)]'}>
                <div className={'w-full mb-4 flex max-lg:gap-y-5 max-lg:flex-col justify-between items-center py-3 px-5 bg-[rgba(255,255,255,0.05)] max-lg:items-start'}>
                    <div className={'flex max-w-[210px] flex-col'}>
                        <span
                            className={'text-sm font-medium text-[rgba(255,_255,_255,_0.45)]'}>Список и создание</span>
                        <span className={'text-sm font-bold text-white'}>Обращение с вашим участием</span>
                    </div>
                    <div className={`flex max-lg:w-full max-lg:flex-col max-lg:gap-y-3 gap-x-2 ${server == 2 ? 'justify-end basis-[10%]' : ''}`}>
                        <InputSearch value={search} onChange={(e) => setSearch(e)} className={'max-lg:w-full max-lg:max-w-full w-[285px]'} placeholder={'Поиск...'}/>
                        {server == 1 ? 
                            <div className={'w-full max-lg:max-w-full max-w-[175px]'}>
                                <SelectFilter anchor={'bottom end'} select={selectedServer} onChange={setSelectedServer} optionsClass={'bg-[rgba(24,27,32,0.93)]'} title={'Выбрать сервер'} options={serversMock}/>
                            </div>
                        : null}
                        <div className={'w-full max-lg:max-w-full max-w-[175px]'}>
                            <SelectFilter anchor={'bottom end'} select={selectedType} onChange={setSelectedType} optionsClass={'bg-[rgba(24,27,32,0.93)]'} title={'Тип обращения'} options={appeals}/>
                        </div>
                    </div>
                    <BlueButton onClick={() => navigate('/appeal/create')} className={'max-lg:max-w-full max-w-[177px] text-xs py-[13px]'}>Создать обращение</BlueButton>
                </div>
                <div className={'w-full px-3 flex flex-col gap-y-3'}>
                    <div className={'grid max-lg:grid-cols-3 grid-cols-5 gap-y-2 py-3 px-5 bg-[rgba(255,255,255,0.05)]  rounded-md'}>
                        <div className={'text-white/45 text-sm'}>№</div>
                        <div className={'text-white/45 text-sm'}>Тип обращения</div>
                        <div className={'text-white/45 text-sm max-lg:text-right'}>От игрока</div>
                        <div className={'text-white/45 text-sm  max-lg:hidden'}>Дата и время</div>
                        <div className={'text-white/45 text-sm text-right  max-lg:hidden'}>Статус</div>
                    </div>
                    {
                        data?.length ? data.map((item) => {
                            return <div onClick={() => navigate(`/appeal/edit/${item.id}`)} key={item.id}
                                className={`cursor-pointer grid max-lg:grid-cols-3 grid-cols-5 gap-y-2 py-3 px-5  ${statusColor[item?.status]?.bg} bg-[rgba(255,255,255,0.05)] rounded-md`}>
                                <div className={'text-white text-sm'}>{item.idkey}</div>
                                <div className={'text-white text-sm'}>{appeals.find(val => val?.slug === item?.type)?.value}</div>
                                <div className={'text-white text-sm  max-lg:text-right'}>{item.characterId}</div>
                                <div className={'text-white text-sm  max-lg:hidden'}>{item.dateTime ?? item.date}</div>
                                <div className={` text-sm text-right font-bold max-lg:hidden ${statusColor[item.status]?.text}`}>{itemStatuses[item.status]}</div>
                            </div>
                        }) : null
                    }
                </div>
            </section>
        </UserLayout>
    )
}