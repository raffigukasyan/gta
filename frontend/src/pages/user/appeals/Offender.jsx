import { Input } from "../../../components/ui/appeal/Input";
import { Label } from "../../../components/ui/appeal/Label";
import BlueButton from "../../../components/ui/BlueButton";

import { useEffect, useState } from "react";
import InputMask from "react-input-mask";

export default function Offender({ offender, deleteFromOffenders, idx, onChange }) {
    console.log(offender)
	const [name, setName] = useState(offender.offender ?? "");
	const [time, setTime] = useState(offender.time ?? "");
	const [playerName, setPlayerName] = useState(offender.playerName ?? "");

    useEffect(() => {
        onChange({offender: name, time, playerName});
    }, [name,time,playerName])

	return (
		<div className={"w-full"}>
			<Label>Нарушитель</Label>
			<div
				className={
					"w-full grid max-lg:gap-y-3 max-lg:grid-cols-1 grid-cols-[minmax(200px,263px)_minmax(200px,263px)_1fr_minmax(40px,40px)] gap-x-[6px]"
				}>
				<Input
					value={name}
					onChange={(e) => setName(e.target.value)}
					type="number"
					placeholder={"Id нарушителя"}
				/>
				<InputMask
					value={time}
					onChange={(e) => setTime(e.target.value)}
					mask={"99:99"}>
					{(inputProps) => (
						<Input
							{...inputProps}
							placeholder="Время"
							type="text"
						/>
					)}
				</InputMask>
				<Input
					value={playerName}
					onChange={(e) => setPlayerName(e.target.value)}
					className={""}
					placeholder={"Имя игрока если знаете"}
				/>
				<BlueButton onClick={() => deleteFromOffenders(offender.id)}>
					-
				</BlueButton>
			</div>
		</div>
	);
}
