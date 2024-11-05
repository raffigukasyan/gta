import UserLayout from "../../components/ui/UserLayout.jsx";
import {CreateHeader} from "../../components/ui/appeal/CreateHeader.jsx";
import {SelectFilter} from "../../components/ui/SelectFilter.jsx";
import {useState} from "react";
import {Label} from "../../components/ui/appeal/Label.jsx";
import {Bounce, toast, ToastContainer} from "react-toastify";

import { addFileToAppeal, createAppeal } from "../../utils/axios.js";
import PlayerComplaint from "./appeals/PlayerComplaint.jsx";
import DonatProblem from "./appeals/DonatProblem.jsx";
import Technician from "./appeals/Technician.jsx";
import Appealing from "./appeals/Appealing.jsx";
import Admin from "./appeals/Admin.jsx";
import { useNavigate } from "react-router-dom";

import 'react-toastify/dist/ReactToastify.css';


export const CreateAppeal = () => {
    const [selectAppeal, setSelectAppeal] = useState(null);

    const appeals = [
        {id: 1, value: 'Жалоба на игрока', slug: 'playerСomplaint'},
        {id: 2, value: 'Обжалование наказания', slug: 'appealing'},
        {id: 3, value: 'Жалоба на администрацию', slug: 'admin'},
        {id: 4, value: 'Текнический вопрос/проблема', slug: 'technician'},
        {id: 5, value: 'Проблема с донатом',  slug: 'problemDonat'}
    ];

    const navigate = useNavigate();

    const postForm = async (data, files = false) => {
        try {
            const created = await createAppeal({...data, type: selectAppeal?.slug});
            if(files) {
                await addFileToAppeal(files, created.id)
            }
            toast.success("Обращение создано успешно!", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
            navigate('/appeal');
            
        } catch(err) {
            console.error(err);
        }
    }
    

    return <UserLayout>
        <div id="appeal" className={'flex flex-col col-span-4 w-full h-fit bg-[rgba(255,255,255,0.02)]'}>
            <CreateHeader />
            <div className={'px-[18px] bg-[rgba(255,255,255,0.05)] py-7'}>
                <h5 className={'text-xl font-bold mb-4'}>Новое обращение</h5>
                <div className={'flex flex-col gap-y-5'}>
                    <div>
                        <Label>Тема обращения</Label>
                        <SelectFilter select={selectAppeal} onChange={setSelectAppeal} optionsClass={'mt-2 bg-white/10'}
                                      options={appeals} title={'Выберите тему обращения'}/>
                    </div>
                    {
                        selectAppeal?.slug === 'playerСomplaint' ? 
                        <PlayerComplaint parentForm={(data) => postForm(data)} />: null
                    }
                    {
                        selectAppeal?.slug === 'problemDonat' ?
                        <DonatProblem parentForm={(data, files) => postForm(data, files)} />: null
                    }
                    {
                        selectAppeal?.slug === 'technician' ?
                        <Technician parentForm={(data) => postForm(data)} /> : null
                    }
                    {
                        selectAppeal?.slug === 'appealing' ?
                        <Appealing parentForm={(data) => postForm(data)} /> : null

                    }
                    {
                        selectAppeal?.slug === 'admin' ?
                        <Admin parentForm={(data) => postForm(data)} /> : null

                    }
                </div>
            </div>
        </div>
        <ToastContainer />
    </UserLayout>
}