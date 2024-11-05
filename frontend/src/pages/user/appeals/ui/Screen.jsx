import { Input } from "../../../../components/ui/appeal/Input";
import { Label } from "../../../../components/ui/appeal/Label";
import BlueButton from "../../../../components/ui/BlueButton";
import { useEffect, useState } from "react";
import checkUrl from "../helpers/checkUrl";

export default function Screen({ screen, removeFromScreen, idx, onChange }) {
	const [name, setName] = useState(screen.name ?? "");
    useEffect(() => {
        onChange({name});
    }, [name])
	return (
		<div>
			<Label>Cкриншоты ( URL ) </Label>
			<div className={"flex gap-x-[6px] mt-[6px] w-full"}>
				<Input
					value={name}
					onChange={(e) => checkUrl(e, setName)}
					className={"w-full"}
					placeholder={"Ссылка, например - youtube"}
				/>
				<BlueButton
					onClick={() => removeFromScreen(idx)}
					className={"max-w-[40px]"}>
					-
				</BlueButton>
			</div>
		</div>
	);
}
