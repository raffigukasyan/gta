import UserLayout from "../../components/ui/UserLayout.jsx";

import BlueButton from "../../components/ui/BlueButton.jsx";
import {useNavigate, useParams} from "react-router-dom";
import { fetchMessages, getAppealById, sendMessage } from "../../utils/axios.js";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Input } from "../../components/ui/appeal/Input.jsx";
import moment from 'moment'
export const EditAppeal = ()  => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [data, setData] = useState({});
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState("");
    const user = JSON.parse(localStorage.getItem('user'));
    
    const [video, setVideo] = useState([]);
    const [screens, setScreens] = useState([]);
    const [offenders, setOffenders] = useState([]);
    const [files, setFiles] = useState([]);

    const persons = [
		{
			id: user.character1.idkey,
			value: user.character1.firstname + " " + user.character1.lastname,
		},
		user?.character2?.idkey
			? {
					id: user?.character2?.idkey,
					value:
						user?.character2?.firstname +
						" " +
						user?.character2?.lastname,
			  }
			: null,
		user?.character3?.idkey
			? {
					id: user.character3?.idkey,
					value:
						user?.character3?.firstname +
						" " +
						user?.character3?.lastname,
			  }
			: null,
	].filter(Boolean);

    const fetch = async () => {
        const appeal = await getAppealById(id)
        setData(appeal);
        setVideo(JSON.parse(appeal.videos));
        setScreens(JSON.parse(appeal.screens));
        setOffenders(JSON.parse(appeal.offenders));
        setFiles(JSON.parse(appeal.files));
        const data = await fetchMessages(id);
        setMessages(data);
    }

    const sendUserMessage = async () => {
        const active = localStorage.getItem('activeAccount');
        const characterName = persons.find(item => item.id == (active ?? user.character1.idkey)).value;
        
        await sendMessage(id, text, user.idkey, characterName);
        await fetch();
        setText("");
    }

	useEffect(() => {
		fetch();
        
	}, []);

    return <UserLayout>
        {data?.id &&
        <div id="appeal" className={'flex flex-col col-span-4 w-full h-fit bg-[rgba(255,255,255,0.02)]'}>
            <BlueButton onClick={() => navigate('/appeal')} className={'w-[117px] text-sm font-semibold text-white  py-3 max-lg:flex hidden my-3'}>
                Назад
            </BlueButton>
            <div className={'mb-[22px] flex justify-between py-[13px] px-5 bg-[rgba(255,255,255,0.05)]'}>
                <div className={'flex max-w-[210px] flex-col'}>
                <span
                    className={'text-sm font-medium text-[rgba(255,_255,_255,_0.45)]'}>Обращение {data?.idkey}</span>
                    <span className={'text-sm font-bold text-white'}>От {data?.characterName ?? data?.nickName}</span>
                </div>
                <div className={'flex items-center gap-x-5'}>
                    <span className={'font-semibold text-nowrap text-sm text-white'}> {moment(data?.created_at).format('DD.MM.YYYY HH:mm')}</span>
                    <BlueButton onClick={() => navigate('/appeal')} className={'w-[117px] text-sm font-semibold text-white  py-3 max-lg:hidden'}>
                        Назад
                    </BlueButton>
                </div>
            </div>
            
            <div className={'flex flex-col gap-y-5'}>
                <div className={'flex flex-col gap-y-5 py-[25px] px-[20px] bg-[rgba(255,255,255,0.04)]'}>
                    <h6 className={'text-xl font-bold mb-4'}>Ваше обращение</h6>
                    {offenders?.length ? offenders.map((item, idx) => (
                        <div className={'flex flex-col gap-y-2'} key={idx}>
                            <span className={'text-sm/4 text-white/45'}>Обвиняемый:</span>
                            <span className={'text-white font-bold max-lg:text-sm text-base'}>{item.offender}<span
                                className={'text-white/45'}>({data?.server})</span></span>
                        </div>
                    )) : null}
                    <div className={'flex flex-col gap-y-2'}>
                        <span className={'text-sm/4 text-white/45'}>Текст обращения:</span>
                        <span className={'text-white font-bold max-lg:text-sm text-base'} dangerouslySetInnerHTML={{__html: data.text}}></span>
                    </div>
                    {data.date ?
                        <div className={'flex flex-col gap-y-2'}>
                            <span className={'text-sm/4 text-white/45'}>Дата:</span>
                            <span className={'text-white font-bold max-lg:text-sm text-base'} >{data.date}</span>
                        </div>
                    : null}
                    {data.adminName ?
                        <div className={'flex flex-col gap-y-2'}>
                            <span className={'text-sm/4 text-white/45'}>Имя администратора</span>
                            <span className={'text-white font-bold max-lg:text-sm text-base'} >{data.adminName}</span>
                        </div>
                    : null}
                    {data.email ?
                        <div className={'flex flex-col gap-y-2'}>
                            <span className={'text-sm/4 text-white/45'}>Почта для связи:</span>
                            <span className={'text-white font-bold max-lg:text-sm text-base'} >{data.email}</span>
                        </div>
                    : null}
                     {data.phone ?
                        <div className={'flex flex-col gap-y-2'}>
                            <span className={'text-sm/4 text-white/45'}>Телефон:</span>
                            <span className={'text-white font-bold max-lg:text-sm text-base'} >{data.phone}</span>
                        </div>
                    : null}
                    {data.playerLogin ?
                        <div className={'flex flex-col gap-y-2'}>
                            <span className={'text-sm/4 text-white/45'}>Игровой логин:</span>
                            <span className={'text-white font-bold max-lg:text-sm text-base'} >{data.playerLogin}</span>
                        </div>
                    : null}
                    {data.nickName ?
                        <div className={'flex flex-col gap-y-2'}>
                            <span className={'text-sm/4 text-white/45'}>Ник:</span>
                            <span className={'text-white font-bold max-lg:text-sm text-base'} >{data.nickName}</span>
                        </div>
                    : null}
                    {data.dateTime ?
                        <div className={'flex flex-col gap-y-2'}>
                            <span className={'text-sm/4 text-white/45'}>Дата и время платежа:</span>
                            <span className={'text-white font-bold max-lg:text-sm text-base'} >{data.dateTime}</span>
                        </div>
                    : null}
                    <div className={'flex max-lg:gap-y-8 max-lg:flex-col'}>
                        <div className={`flex flex-col gap-2 ${video?.length ? 'mr-4' : ''}`}>
                            {video?.length ? video.map((item, idx) => (
                                    <div key={idx} className={'flex flex-col gap-y-2'}>
                                        {idx === 0 && <span className={'text-sm/4 text-white/45'}>Видео:</span>}
                                        <span className={'text-white font-bold max-lg:text-sm text-base'}>{item.name} </span>
                                    </div>
                                ))
                            : null}
                        </div>
                        <div className={`flex flex-col gap-2 ${screens?.length ? 'mr-4' : ''}`}>
                            {screens?.length ? screens.map((item, idx) => (
                                <div key={idx} className={'flex flex-col gap-y-2'}>
                                    {idx === 0 && <span className={'text-sm/4 text-white/45'}>Скриншоты:</span>}
                                    <span className={'text-white font-bold max-lg:text-sm text-base'}>{item.name} </span>
                                </div>
                            )) : null}
                        </div>
                        <div className={`flex flex-col gap-2 ${files?.length ? 'mr-2' : ''}`}>
                        {files?.length ? files.map((item, idx) => (
                        
                            <div key={idx} className="flex flex-col gap-y-2">
                                {idx === 0 && <span className={'text-sm/4 text-white/45'}>Файлы:</span>}
                                <a href={`${import.meta.env.VITE_BACKEND_URL}/files/${item}`} target="_blank" >Файл №{idx}</a>
                            </div>
                        
                        )) : null}
                        </div>
                    </div>
                    
                </div>
                
                {data?.closed_date && <div className={'flex flex-col gap-y-5 py-[25px] px-[20px] bg-[rgba(255,255,255,0.04)]'}>
                    <h7 className={'text-xl font-bold mb-4'}>Ответ администратора {messages[messages.at(-1)?.admin?.name]}</h7>
                    <div className={'text-white font-bold'}>
                         {/* <a href="" className={'text-[rgba(63,186,255,1)] underline'}>forum.dc-project.ru</a> */}
                         {messages[messages.at(-1)]?.content}
                    </div>
                </div>}
                {data?.status === 'wait' && <div className="mt-12 w-full">
                    <h2 className="text-center text-[24px]">Чат</h2>
                    <div className="flex w-full p-4 flex flex-col bg-[#212121]">
                        {messages?.length
                            ? messages?.map((item) => (
                                    <div
                                        key={item.id}
                                        className={`flex w-full mt-2 space-x-3 max-w-xs ${
                                            item?.user_id
                                                ? "ml-auto justify-end"
                                                : "mr-auto justify-start"
                                        }`}>
                                        <div>
                                            <div
                                                className={`${
                                                    item?.user_id
                                                        ? "bg-blue-600 text-white"
                                                        : "bg-gray-300 text-black"
                                                } p-3 pt-0 rounded-l-lg rounded-br-lg`}>
                                                <span className="text-[8px]">{item?.admin?.name ?? item.username}</span>
                                                <p className="text-sm">
                                                    {item.content}
                                                </p>
                                            </div>
                                            {/* <span className="text-xs text-gray-500 leading-none">{
                                                    moment.duration(moment(item.created_at).diff(new Date())).minutes()
                                                }</span> */}
                                        </div>
                                    </div>
                              ))
                            : null}
                    </div>
                    <div className="pt-4 pb-4 flex relative">
                        <Input
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            className="flex relative items-center h-10 w-full rounded px-3 text-sm"
                            type="text"
                            placeholder="Введите сообщение.."
                        />
                        <div onClick={sendUserMessage} className="absolute cursor-pointer right-2 mt-2">
                            <Icon icon={"majesticons:send"} className="w-6 h-6" />
                        </div>
                    </div>
                </div>}
            </div>
        </div>
        }
    </UserLayout>
}