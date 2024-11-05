import { Label } from "../../../components/ui/appeal/Label";
import { Input } from "../../../components/ui/appeal/Input";
import { Textarea } from "../../../components/ui/appeal/Textarea";
import { SelectFilter } from "../../../components/ui/SelectFilter";

import { useEffect, useState } from "react";
import { FileField } from "../../../components/ui/appeal/FileField";
import servers from "../../../consts/servers";
import BlueButton from "../../../components/ui/BlueButton";
import InputMask from 'react-input-mask';
import ErrorMessage from "../../../components/ui/appeal/ErrorMessage";

export default function DonatProblem({parentForm}) {
    const [email, setEmail] = useState()
    const [playerLogin, setPlayerLogin] = useState()
    const [nickName, setNickName] = useState()
    const [phone, setPhone] = useState()
    const [dateTime, setDateTime] = useState("")
    const [text, setText] = useState("");
    const [selectServer, setSelectServer] = useState(null);
    const [errorMessage, setErrorMessage] = useState({ text: "" });
    const [file, setFile] = useState();
    const [files, setFiles] = useState([]);
    const user = JSON.parse(localStorage.getItem('user'));

    const setErrorMsg = (text, label) => {
        setErrorMessage((error) => ({...error, [label]: text}))
    }

    const clearErrorMsg = (label) => {
        setErrorMessage((error) => ({...error, [label]: ''}))
    }

    const addToFiles = (value) => {
		if(files?.length === 4) {
			return
		}

		setFiles((text) => [...text, ...value]);
	}

    const deleteFromFiles = (idx) => {
		setFiles((text) => text.filter((item) => item?.id !== idx));
	}

    const postForm = async () => {

        if(!selectServer) {
            setErrorMsg('Выберите сервер', 'server')
            return
        } else {
            clearErrorMsg('server')
        }

        if(!text) {
            setErrorMsg('Введите текст', 'text')
            setErrorMessage((error) => ({...error, text: `Введите текст`}))
            return
        } else {
            clearErrorMsg('text')
        }
        const data = new FormData();
        let newFiles = files.map(item => (item?.file));
        if(file?.name) {
            newFiles = [...newFiles, file]
        }
        newFiles.map((item,i) => {
            data.append(`files[${i}]`, item)
        }) 
        
        
        await parentForm({
            server: selectServer.value,
            userId: user.idkey,
            email,
            playerLogin,
            nickName,
            phone,
            dateTime,
            text,
        }, data);
    }

    const addToText = (title, value) => {
        setText((text) => text + ' ' + title + ' ' + value.join(' ') + '\n')
    }
    
    const serversMock = Object.values(servers).map((item, i) => ({id: i, value: item}))
    return (
        <div>
        <h6 className={'text-xl font-bold mb-5'}>Новое обращение</h6>
        <div className={'flex flex-col gap-y-5'}>
            <div>
                <Label>Почта для связи ( привязанная почка аккаунта )</Label>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={'w-full'} placeholder={'email@gmail.com'}/>
            </div>
            <div>
                <Label>Игровой логин аккаунта</Label>
                <Input value={playerLogin} onChange={(e) => setPlayerLogin(e.target.value)} className={'w-full'} placeholder={'email@gmail.com'}/>
            </div>
            <div>
                <Label>Ваш ник (имя и фамилия персонажа)</Label>
                <Input value={nickName} onChange={(e) => setNickName(e.target.value)} className={'w-full'} placeholder={'email@gmail.com'}/>
            </div>
            <div>
                <Label>Сервер {" "} <ErrorMessage
						text={errorMessage?.server}
					/></Label>
                <SelectFilter title={'Выберите сервер'} options={serversMock}
                              optionsClass={'mt-2 bg-white/10'} value={selectServer} onChange={setSelectServer}/>
            </div>
            <div>
                <Label>Ваш номер телефона</Label>
                <InputMask mask="+7 999 999 - 99 - 99" value={phone} placeholder={'+7 000 000 - 00 - 00'} onChange={(e) => setPhone(e.target.value)}>
                    {(inputProps) => <Input {...inputProps} className={'w-full'}/>}
                </InputMask>
            </div>
            <div>
                <Label>Дата и время платежа</Label>
                <InputMask value={dateTime} onChange={(e) => setDateTime(e.target.value)} mask="99.99.9999 99:99" placeholder={'--.--.---- --:--'}>
                    {(inputProps) => <Input {...inputProps} className={'w-full'} />}
                </InputMask>
            </div>
            <FileField 
             onClick={() => addToFiles([{id: files?.at(-1)?.id ? files?.at(-1).id + 1 : 1}])}
             icon={"+"} value={file?.name} onChange={(e) => setFile(e)}/>
             {files?.length ? files.map((item, idx) => (
                <FileField 
                    key={item.id}
                    icon={"-"} 
                    value={files?.[idx]?.file?.name} 
                    onChange={(e) => files[idx].file = e}
                    onClick={() => deleteFromFiles(item.id)}
                />
             )) : null}
            <div className={'flex flex-col'}>
                <Label>Опишите ситуацию <ErrorMessage text={errorMessage?.text} /></Label>
                <Textarea value={text} onChange={(e) => setText(e.target.value)} className={'resize-none'} rows={5} placeholder={'Введите текст...'}/>
            </div>
        </div>
        <BlueButton onClick={() => postForm()} className={'ml-auto !max-w-[300px] mt-6 !py-4'}>Создать</BlueButton>
    </div>
    )
}