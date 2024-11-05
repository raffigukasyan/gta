import {
	Edit,
	SelectInput,
	useRecordContext,
	SimpleForm,
	TextField,
	SimpleShowLayout,
	ShowBase,
    useStore,
    useGetOne,
    useGetRecordId,
    
} from "react-admin";
import {
	AppealType,
	DateTimeClosedField,
	DateTimeField,
	StatusType,
} from "./List";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { adminSendMessage, fetchMessages } from "../../utils/axios";

import { Icon } from "@iconify/react/dist/iconify.js";
import { Input } from "../../components/ui/appeal/Input";

export const VideosField = () => {
    const record = useRecordContext();
    if(!record?.videos) return null;
    const videos = JSON.parse(record.videos);
    return <span>{videos.map(item => item.name + '\n')}</span>
}
export const ScreensField = () => {
    const record = useRecordContext();
    if(!record?.screens) return null;
    const screens = JSON.parse(record.screens);
    return <span>{screens.map(item => item.name + '\n')}</span>
}

export const OffendersField = () => {
    const record = useRecordContext();
    if(!record?.offenders) return null;
    const offenders = JSON.parse(record.offenders);
    return <span className="text-[12px]">{offenders.map(item => `Нарушитель: ${item.offender} Имя: ${item.playerName} '\n'`)}</span>
}

export const FilesField = () => {
    const record = useRecordContext();
    if(!record?.files) return null;
    const files = JSON.parse(record.files);
    return files.map((item, idx) => <a key={idx} href={`${import.meta.env.VITE_BACKEND_URL}/files/${item}`} target="_blank">Файл № {idx}</a>)
}

export default function Detail() {
    const choices = [
        { id: "wait", name: "На рассмотрении" },
		{ id: "rejected", name: "Отклонено" },
		{ id: "approved", name: "Одобрена" },
	];
    const record = useRecordContext();
    
	const { id } = useParams();

	const [messages, setMessages] = useState([]);
    const [text, setText] = useState("");
    const user = JSON.parse(localStorage.getItem('adminUser'));

	const fetch = async () => {
		const data = await fetchMessages(id);
		setMessages(data);
	};

    const sendMessage = async () => {
        await adminSendMessage(id, text, user.id);
        await fetch();
        setText("");
    }

	useEffect(() => {
		fetch();
        
	}, []);

    const Chat = () => {
        const record = useRecordContext();
        console.log(record)
        if(record?.status !== 'wait') {
            return
        }
        return <div className="mt-12 w-full">
            <h2 className="text-center text-[24px]">Чат</h2>
            <div className="flex w-full p-4 flex flex-col bg-[#212121]">
                {messages?.length
                    ? messages?.map((item) => (
                            <div
                                key={item.id}
                                className={`flex w-full mt-2 space-x-3 max-w-xs ${
                                    item?.admin_id
                                        ? "ml-auto justify-end"
                                        : "mr-auto justify-start"
                                }`}>
                                <div>
                                    <div
                                        className={`${
                                            item?.admin_id
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
                <div onClick={sendMessage} className="absolute cursor-pointer right-2 mt-2">
                    <Icon icon={"majesticons:send"} className="w-6 h-6" />
                </div>
            </div>
        </div>
    }

	return (
		<>
			<ShowBase contentEditable="false">
				<SimpleShowLayout
					className="bg-[#212121] mt-2"
					sx={{ fontSize: "20px !important" }}>
					<TextField source="id" label="#" />
                    <TextField source="idkey" label="ID" />
					<TextField label="Текст" source="text" />
					<AppealType label="Раздел" />
					<TextField source="characterName" label="Имя" />
					<TextField source="server" label="Сервер" />
					<TextField source="text" label="Текст" />
					<StatusType source="status" label="Тип" />
                    <VideosField source="videos" />
                    <ScreensField source="screens" />
                    <OffendersField source="offenders" />
                    <TextField source="adminName" label="Имя администратора" />
                    <TextField source="email" label="Почта для связи" />
                    <TextField source="playerLogin" label="Игровой логин" />
                    <TextField source="nickName" label="Ник" />
                    <TextField source="phone" label="Телефон" />
                    <TextField source="dateTime" label="Дата и время платежа" />
					<DateTimeField source="created_at" label="Дата обращения" />
                    <FilesField source="files" label="Файлы" />
					<DateTimeClosedField
						source="closedDate"
						label="Дата закрытия"
					/>
                    
				</SimpleShowLayout>
			</ShowBase>
			<Edit>
				<SimpleForm fontSize={"24px"}>
					<SelectInput
						label="Статус"
						source="status"
						choices={choices}
					/>
				</SimpleForm>
			</Edit>
			<ShowBase>
                <Chat source="type" />
            </ShowBase>
		</>
	);
}
