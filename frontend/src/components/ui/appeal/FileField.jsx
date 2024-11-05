import {Label} from "./Label.jsx";
import {Input} from "./Input.jsx";
import BlueButton from "../BlueButton.jsx";
import {UploadFIleIcon} from "../../Icons/UploadFIleIcon.jsx";
import {LikeIcon} from "../../Icons/LikeIcon.jsx";
import {Button} from "../Button.jsx";
import { useRef, useState } from "react";

export const FileField = ({onChange, value, icon, onClick = null}) => {
    const [name, setName] = useState();
    const inputRef = useRef(null);
    const openFile = () => {
        inputRef.current.click();
    }
    return (
        <div>
            <Label>Приложите выписку по карте ( в формате PDF )</Label>
            <div className={'flex max-lg:flex-col max-lg:gap-y-[6px] gap-x-[6px]'}>
                <input accept=".pdf" onChange={(e) => {onChange(e.target.files[0]); setName(e.target.files[0].name)}} type="file" className="hidden" ref={inputRef} />
                <Input disabled value={name} className={'w-full'} placeholder={''}/>
                <Button onClick={openFile} className={'max-lg:max-w-full max-lg:py-[14px] max-w-[50px] w-full border border-solid border-[rgba(63,_186,_255,_1)] bg-[rgba(52,_182,_255,_1)]'}>
                    <UploadFIleIcon />
                </Button>
                <BlueButton onClick={() => onClick()} className={'max-lg:max-w-full max-lg:py-[11px] max-lg:text-xs w-full max-w-[40px]'}>{icon}</BlueButton>
            </div>
        </div>
    )
}