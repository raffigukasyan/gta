import PersonItem from "../ui/PersonItem";
import HeaderButton from "./HeaderButton";

export default function AccountInfo({ profiles, activeProfile }) {
	console.log(activeProfile)
	return (
		<div className="flex flex-col w-full text-[14px]">
			<HeaderButton
				primary={`Персонаж №
						${profiles.findIndex((item) => item.idkey === activeProfile.idkey) + 1}`}
				secondary={
					activeProfile.firstname +
					" " +
					activeProfile.lastname +
					" #" +
					activeProfile.idkey
				}
				buttonText={`Ур. ${activeProfile.lvl}`}
				icon="solar:star-fall-bold-duotone"
			/>
			<div className="py-[23.5px] px-[20px] w-full h-full bg-[rgba(255,255,255,2%)]">
				<PersonItem
					field={"Наличных"}
					value={
						"$ " +
						activeProfile?.money?.toString() 
							?.split(/(?=(?:\d{3})+$)/)
							?.join(" ")
					}
				/>
				<PersonItem
					field={"В банке"}
					value={
						"$" +
						activeProfile?.moneyBank?.balance
							?.split(/(?=(?:\d{3})+$)/)
							?.join(" ")
					}
				/>
				<PersonItem
					field={"Пол"}
					value={
						activeProfile?.gender === 1
							? "Мужской"
							: activeProfile?.gender === 0
							? "Женский"
							: ""
					}
				/>
				<PersonItem field={"Возраст"} value={activeProfile?.age} />
				<PersonItem field={"Телефон"} value={activeProfile?.sim} />
				<PersonItem
					field={"Номер карты"}
					value={activeProfile?.moneyBank?.id
						.toString()
						?.replace(/.{1,4}/g, "$& ")}
				/>
				<PersonItem
					field={"Здоровье"}
					value={activeProfile?.health + "%"}
					color={"text-[#E81246]"}
				/>
				<PersonItem
					field={"Голод"}
					value={activeProfile?.eat + "%"}
					color={"text-[#E8AC12]"}
				/>
				<PersonItem
					field={"Жажда"}
					value={activeProfile?.water + "%"}
					color={"text-[#52D5FF]"}
				/>
				<PersonItem
					field={"Предупреждений"}
					value={activeProfile?.warns + " из 3"}
				/>
				<PersonItem
					field={"Фракция"}
					value={
						activeProfile.fraction !== 0
							? activeProfile.fraction
							: "Нет"
					}
				/>
				<PersonItem
					field={"Наказания"}
					value={
						activeProfile?.fines !== 0
							? activeProfile?.fines
							: "Нет"
					}
				/>
				<PersonItem
					field={"Последний онлайн"}
					value={
						new Date(activeProfile?.lastseen).toLocaleDateString() +
						" " +
						new Date(activeProfile.lastseen).toLocaleTimeString(
							"ru",
							{ hour: "2-digit", minute: "2-digit" }
						)
					}
				/>
			</div>
		</div>
	);
}
