import { Input } from "../../../../components/ui/appeal/Input";
import { Label } from "../../../../components/ui/appeal/Label";
import BlueButton from "../../../../components/ui/BlueButton";
import { useEffect, useState } from 'react';
import checkUrl from "../helpers/checkUrl";

export default function Video({video, removeFromVideos, idx, onChange}) {
    const [name, setName] = useState(video.name ?? "");
    useEffect(() => {
        onChange({name});
    }, [name])

    return (
        <div>
				<Label>
					Видео ( URL ){" "}
					<span className={"text-[rgba(255,44,69,1)]"}>
						Если прикладываете видео, в тексте обращения укажите
						там-коды
					</span>
				</Label>
				<div className={"flex gap-x-[6px] mt-[6px] w-full"}>
					<Input
						value={name}
						onChange={(e) => checkUrl(e, setName)}
						className={"w-full"}
						placeholder={"Ссылка, например - youtube"}
					/>
					<BlueButton
						onClick={() => removeFromVideos(idx)}
						className={"max-w-[40px]"}>
						-
					</BlueButton>
				</div>
			
			</div>
    )
}