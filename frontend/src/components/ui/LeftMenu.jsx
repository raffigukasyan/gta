import { useState } from "react";
import Account from "./Account";
import BlueButton from "./BlueButton";
import { Button } from "./Button";
import { Icon } from "@iconify/react";
import InfoCard from "./InfoCard";
import { LEFT_MENU_INFO } from "../../consts/leftMenuInfo";
import { useNavigate } from "react-router-dom";

export default function LeftMenu() {
	const user = JSON.parse(localStorage.getItem("user"));
	const profiles = [
		user?.character1,
		user?.character2,
		user?.character3,
	].filter(Boolean);
	const [active, setActive] = useState(Number(localStorage.getItem('activeAccount') ?? profiles[0].idkey));
	const navigate = useNavigate();
	const leftMenuItems = LEFT_MENU_INFO(user);

	const changeActiveAccount = (id) => {
		setActive(id); 
		localStorage.setItem('activeAccount', id);
		window.dispatchEvent(new Event('changeAccount'));
	}

	const logout = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		navigate('/')
	}

	const scrollTo = () => {
		if(window.matchMedia('(max-width: 1000px)').matches) {
			document.getElementById('appeal').scrollIntoView({behavior: 'smooth'})
		}
	}

	return (
		<nav className="flex flex-col gap-[43px] w-full max-w-[306px] max-lg:max-w-[none] text-white">
			<div className="hidden max-lg:flex flex-col gap-[8px] mb-[8px]">
					<h2 className="text-[24px] font-bold">Личный кабинет</h2>
					<span className="text-[10px]">
						Список топ 25 самых богатых игроков проекта, хочешь попсать в этот список? Тогда зайди на сервер и стремись к успехам.
					</span>
				</div>
			<section className="flex gap-[15px] w-full">
				<div className="flex w-full flex-col gap-[10px] text-white text-[16px]">
					<div onClick={() => navigate('/account')} className="rounded-[8px] cursor-pointer flex justify-between items-center pl-[15px]  bg-[rgba(33,37,44,67%)]">
						<div className="cursor-pointer" >
							<span>Личный кабинет:</span>{" "}
							<span className="font-bold">{user.login}</span>
						</div>
						<div className="pl-[30px]">
							<img src="/img/Avatar.png" alt="" />
						</div>
					</div>
					<div className="flex gap-[10px]">
						<Button
							onClick={logout}
							className={
								"bg-[rgba(255,44,69,24%)] hover:bg-[rgba(255,44,69,1)] group hover:shadow-[0px_0px_33.1px_rgba(255,44,69,0.58)] transition-all duration-300; text-white flex items-center px-[15px] !py-[12px] transition-all duration-300 active:shadow-[inset_0px_0px_6.7px_rgba(0,0,0,0.62)]"
							}>
							<div className="flex items-center justify-center h-full group">
								<Icon
									className="w-6 h-6 text-[#FF2C45] group-hover:text-white"
									icon="solar:exit-bold"
								/>
								<span className="pl-2 text-[#FF2C45] group group-hover:text-white">
									Выйти
								</span>
							</div>
						</Button>
						<BlueButton
							className={
								"!px-[15px] !py-[12px] justify-center flex items-center"
							}
							onClick={() => navigate('/replenishment')}
							>
							<Icon
								className="w-6 h-6"
								icon="solar:dollar-bold"
							/>
							<span className="pl-2">Пополнить счёт</span>
						</BlueButton>
					</div>
					<button onClick={() => {navigate('/appeal');scrollTo()}} className="flex rounded-[8px] justify-between items-center px-[15px] py-[12px] bg-[rgba(255,255,255,5%)]">
						<div className="flex items-center">
							<Icon
								icon={"mdi:comment-alert"}
								className="w-6 h-6"
							/>
							<span className="pl-2">Создать обращение</span>
						</div>
					</button>
					<button onClick={() => {navigate('/settings'); scrollTo()}} className="flex rounded-[8px] items-center px-[15px] py-[12px] bg-[rgba(255,255,255,5%)]">
						<div className="flex items-center w-full h-full">
							<Icon
								icon={"material-symbols:settings"}
								className="w-6 h-6"
							/>
							<span className="pl-2">Настройки</span>
						</div>
					</button>
				</div>
			</section>
			<section className="flex flex-col w-full">
				
				<div className="flex flex-col text-white text-[16px]">
					<h3 className="font-bold pb-[9px] border-b-[1px] border-[rgba(255,255,255,13%)]">
						Ваши персонажи
					</h3>
				</div>
				<div className="mt-[14px]">
					{profiles?.map((item, idx) => (
						<Account
							idx={idx}
                            setActive={(id) => changeActiveAccount(id)}
							key={item?.idkey}
							active={active === item?.idkey}
							idkey={item?.idkey}
							number={idx + 1}
							level={item.lvl}
							name={item.firstname + " " + item.lastname}
						/>
					))}
				</div>
			</section>
			<section id="appeal" className="flex flex-col w-full">
				<div className="flex flex-col text-white text-[16px]">
					<h3 className="font-bold border-b-[1px] pb-[9px] border-[rgba(255,255,255,13%)]">
						Информация об аккаунте
					</h3>
					<div className="w-full text-[14px] h-full mt-[14px]">
						<div className="mt-[10px]">
							{leftMenuItems.map((item) => (
								<InfoCard
									key={item.id}
									icon={item.icon}
									field={item.field}
									text={item.text}
									iconColor={item.iconColor}
								/>
							))}
						</div>
					</div>
				</div>
			</section>
		</nav>
	);
}
