import { DisclosureItem } from "../../../components/ui/DisclosureItem";
import { SelectFilter } from "../../../components/ui/SelectFilter";
import InputMask from "react-input-mask";
import { Input } from "../../../components/ui/appeal/Input";
import BlueButton from "../../../components/ui/BlueButton";
import { Textarea } from "../../../components/ui/appeal/Textarea";
import ErrorMessage from "../../../components/ui/appeal/ErrorMessage";
import { useState } from "react";
import servers from "../../../consts/servers";
import { Label } from "../../../components/ui/appeal/Label";
import Offender from "./Offender";
import Video from "./ui/Video";
import Screen from "./ui/Screen";
import checkUrl from "./helpers/checkUrl";

export default function PlayerComplaint({parentForm}) {
	const [selectServer, setSelectServer] = useState(null);
	const [selectPerson, setSelectPerson] = useState(null);

	const [date, setDate] = useState(null);
	const [time, setTime] = useState(null);
	const [text, setText] = useState("");
	const [video, setVideo] = useState("");
	const [screens, setScreens] = useState("");
	const [offender, setOffender] = useState("");
	const [playerName, setPlayerName] = useState("");
	const [offenders, setOffenders] = useState("");
	const [videos, setVideos] = useState([]);
	const [screenshots, setScreenshots] = useState([]);

	const [errorMessage, setErrorMessage] = useState({ text: "" });

	const addToOffenders = (value) => {
		if(offenders?.length === 4) {
			return
		}
		setOffenders((text) => [...text, ...value]);
	};

	const addToVideos = (value) => {
		if(videos?.length === 4) {
			return
		}

		setVideos((text) => [...text, ...value]);
	}


	const addToScreens = (value) => {
		if(screenshots?.length === 4) {
			return
		}

		setScreenshots((text) => [...text, ...value]);
	}

	const deleteFromOffenders = (idx) => {
		setOffenders((text) => text.filter((item) => item?.id !== idx));
	}

	const deleteFromVideos = (idx) => {
		setVideos((text) => text.filter((item) => item?.id !== idx));
	}

	const deleteFromScreens = (idx) => {
		setScreenshots((text) => text.filter((item) => item?.id !== idx));
	}

	const user = JSON.parse(localStorage.getItem("user"));
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
	const serversMock = Object.values(servers).map((item, i) => ({
		id: i,
		value: item,
	}));

	const setErrorMsg = (text, label) => {
		setErrorMessage((error) => ({ ...error, [label]: text }));
	};

	const clearErrorMsg = (label) => {
		setErrorMessage((error) => ({ ...error, [label]: "" }));
	};

	const postForm = async () => {
		console.log([...offenders, {offender, time, playerName}]);
		
		if (!selectServer) {
			setErrorMsg("Выберите сервер", "server");
			return;
		} else {
			clearErrorMsg("server");
		}

		if (!selectPerson) {
			setErrorMsg("Выберите персонажа", "person");
			return;
		} else {
			clearErrorMsg("person");
		}
		if (!text) {
			setErrorMsg("Введите текст", "text");
			setErrorMessage((error) => ({ ...error, text: `Введите текст` }));
			return;
		} else {
			clearErrorMsg("text");
		}

		await parentForm({
			server: selectServer.value,
			characterId: selectPerson.id,
			characterName: selectPerson.value,
			userId: user.idkey,
			offenders: [...offenders, {offender, time, playerName}],
			videos: [...videos, video?.length ? {name: video} : ""].filter(Boolean),
			screens: [...screenshots, screens ? {name: screens} : ""].filter(Boolean),
			date,
			text,
		});
	};

	return (
		<div className={"flex flex-col gap-y-5"}>
			<DisclosureItem head={"Правила подачи жалобы на игрока"}>
				Sed ut perspiciatis unde omnis iste natus error sit voluptatem
				accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
				quae ab i llo inventore veritatis et quasi architecto beatae
				vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
				voluptas sit aspernatur aut odit aut fugit, sed quia
				consequuntur magni dolores eos qui ratione voluptatem sequi
				nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
				sit amet, consectetur, adipisci velit, sed quia non numquam eius
				modi tempora incidunt ut labore et dolore magnam aliquam quaerat
				voluptatem. Ut enim ad minima veniam, quis nostrum
				exercitationem ullam corporis suscipit laboriosam, nisi ut
				aliquid ex ea commodi consequatur? Quis autem vel eum iure
				reprehenderit qui in ea voluptate velit esse quam nihil
				molestiae consequatur, vel illum qui dolorem eum fugiat quo
				voluptas nulla pariatur?
			</DisclosureItem>
			<div className={"flex flex-col gap-y-[6px]"}>
				<Label>
					Сервер и персонаж{" "}
					<ErrorMessage
						text={errorMessage?.server || errorMessage?.person}
					/>
				</Label>
				<SelectFilter
					select={selectServer}
					onChange={setSelectServer}
					options={serversMock}
					title={"Выберите сервер"}
					optionsClass={"mt-2 bg-white/10"}
				/>
				<SelectFilter
					select={selectPerson}
					onChange={setSelectPerson}
					options={persons}
					title={"Выберите персонажа"}
					optionsClass={"mt-2 bg-white/10"}
				/>
			</div>
			<div className="flex flex-col">
				<Label>Дата нарушения</Label>
				<InputMask
					value={date}
					onChange={(e) => setDate(e.target.value)}
					mask="99.99.9999"
					placeholder="--.--.----">
					{(inputProps) => <Input {...inputProps} type="text" />}
				</InputMask>
				{/* <Input type={'date'} className={'w-full'} placeholder={'--.--.----'}/> */}
			</div>
			<div className={"w-full"}>
				<Label>Нарушитель</Label>
				<div
					className={
						"w-full grid max-lg:gap-y-3 max-lg:grid-cols-1 grid-cols-[minmax(200px,263px)_minmax(200px,263px)_1fr_minmax(40px,40px)] gap-x-[6px]"
					}>
					<Input
						value={offender}
						onChange={(e) => setOffender(e.target.value)}
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
					<BlueButton
						onClick={() =>
							addToOffenders([
								{
									offender: "",
									time: "",
									playerName: "",
									id: offenders.at(-1)?.id ? offenders.at(-1)?.id + 1 : 1
								}
							])
						}>
						+
					</BlueButton>
				</div>
			</div>
				{offenders?.length ? offenders.map((item, idx) => {
					return <Offender 
								offender={item} 
								key={item.id} 
								idx={item.id} 
								deleteFromOffenders={(idx) => deleteFromOffenders(idx)} 
								onChange={(data) => offenders[idx] = {...data, id: item.id}}
							/>
				}
				) : null}
			<div className={"flex flex-col"}>
				<Label>
					Текст обращения <ErrorMessage text={errorMessage?.text} />
				</Label>
				<Textarea
					value={text}
					onChange={(e) => setText(e.target.value)}
					className={"resize-none"}
					rows={5}
					placeholder={"Введите текст..."}
				/>
			</div>
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
						value={video}
						onChange={(e) => checkUrl(e, setVideo)}
						className={"w-full"}
						placeholder={"Ссылка, например - youtube"}
					/>
					<BlueButton
						onClick={() => addToVideos([{name: "", id: videos?.at(-1)?.id ? videos?.at(-1).id + 1 : 1}])}
						className={"max-w-[40px]"}>
						+
					</BlueButton>
				</div>
			
			</div>
			{videos?.length ? videos.map((item, idx) => (
				<Video 
					key={item.id} 
					idx={item.id} 
					video={item} 
					onChange={(data) => videos[idx].name = data.name} 
					removeFromVideos={(id) => deleteFromVideos(id)} />
			)) : null}

			<div>
				<Label>Cкриншоты ( URL ) </Label>
				<div className="flex gap-x-[6px] mt-[6px] w-full">
					<Input
						value={screens}
						onChange={(e) => checkUrl(e, setScreens)}
						className={"w-full"}
						placeholder={"Ссылка, например - youtube"}
					/>
					<BlueButton
						onClick={() => addToScreens([{name: "", id: screenshots?.at(-1)?.id ? screenshots?.at(-1).id + 1 : 1}])}
						className={"max-w-[40px]"}>
						+
					</BlueButton>
				</div>

			</div>
			{screenshots?.length ? screenshots.map((item, idx) => (
				<Screen 
					key={item.id} 
					idx={item.id} 
					screen={item} 
					onChange={(data) => screenshots[idx].name = data.name} 
					removeFromScreen={(id) => deleteFromScreens(id)} />
			)) : null}
            <BlueButton onClick={() => postForm()} className={'ml-auto !max-w-[300px] mt-6 !py-4'}>Создать</BlueButton>
		</div>
	);
}
