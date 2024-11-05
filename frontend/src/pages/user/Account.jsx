import { useEffect, useState } from "react";
import UserLayout from "../../components/ui/UserLayout";
import { Icon } from "@iconify/react/dist/iconify.js";
import PersonItem from "../../components/ui/PersonItem";
import GreenBadge from "../../components/ui/GreenBadge";
import AccountInfo from "../../components/user/AccountInfo";
import HeaderButton from "../../components/user/HeaderButton";
import HouseItem from "../../components/user/HouseItem";
import BusinessItem from "../../components/user/BusinessItem";

export default function Account() {
	const user = JSON.parse(localStorage.getItem("user"));
	const profiles = [
		user?.character1,
		user?.character2,
		user?.character3,
	].filter(Boolean);
	const [activeProfile, setActiveProfile] = useState();

	useEffect(() => {
		const activeId = localStorage.getItem("activeAccount");
		if (activeId) {
			setActiveProfile(profiles.find((item) => item?.idkey == activeId));
		} else {
			setActiveProfile(profiles[0]);
		}
		window.addEventListener("changeAccount", () => {
			const activeId = localStorage.getItem("activeAccount");
			setActiveProfile(profiles.find((item) => item?.idkey == activeId));
		});
		console.log(activeProfile);
	}, [localStorage?.activeAccount]);
	return (
		<UserLayout>
			<section className="col-span-2 max-lg:col-span-6 max-lg:mt-[24px] text-white">
				{activeProfile ? (
					<AccountInfo activeProfile={activeProfile} profiles={profiles} />
				) : null}
			</section>
            <section className="col-span-2 flex flex-col max-lg:col-span-6 max-lg:mt-[24px]">
                <div className="flex max-lg:flex-col">
                    <section className="col-span-1 ml-[10px] w-full max-lg:col-span-6 max-lg:ml-0">
                        <HeaderButton primary={'Недвижимость'} secondary={'В собственности'} buttonText={`${customElements?.houses?.length ?? 0} шт.`} icon={'ph:house-fill'} />
                        <div className="py-[23.5px] pb-0 text-[14px] px-[20px] w-full bg-[rgba(255,255,255,2%)]">
                            <HouseItem text={'Квартира №66'} idx={1} />
                            <HouseItem text={'Квартира №66'} idx={2} />
                            <HouseItem idx={3} />
                        </div>
                    </section>
                    <section className="col-span-1 ml-[10px] w-full max-lg:ml-0 max-lg:col-span-6 max-lg:mt-[10px]">
                        <HeaderButton primary={'Бизнес'} secondary={'В собственности'} buttonText={`${customElements?.business?.length ?? 0} шт.`} icon={'bxs:business'} />
                        <div className="py-[23.5px] pb-0 text-[14px] px-[20px] w-full bg-[rgba(255,255,255,2%)]">
                            <BusinessItem text="АЗС №66" idx={1} />
                            <BusinessItem text="АЗС №66" idx={2} />
                            <BusinessItem idx={3} />
                        </div>
                    
                    </section>
                </div>
                <section className="col-span-2 h-full ml-[10px] mt-[30px] max-lg:ml-0">
                    <HeaderButton primary={'Транспорт'} secondary={'В собственности'} buttonText={activeProfile?.vehicles?.length ?? 0} icon={'cbi:tesla-car'} />
                    <div className="py-[23.5px] pt-0 flex flex-wrap pb-0 text-[14px] w-full bg-[rgba(255,255,255,2%)]">
                        {activeProfile?.vehicles?.map(item => (
                            <div key={item.id} className="flex justify-between border-[1px] border-[rgba(255,255,255,3%)] py-[20px] basis-1/2 bg-[rgba(255,255,255,2%)] max-2xl:basis-full">
                                <div className="flex justify-between px-[20px] w-full">
                                    <img className="max-w-[176px] basis-1/2 h-auto w-full" src={`https://3783f028-4bf1-4904-9638-a445df4809eb.selstorage.ru/vehicles/${item.model}.png`} alt="" />
                                    <div className="flex flex-col basis-1/2 pl-[35px] overflow-hidden">
                                        <span className="text-[18px] font-bold whitespace-nowrap overflow-hidden overflow-ellipsis">{item.name}</span>
                                        <span className="text-[rgba(255,255,255,45%)]">{item.model}</span>
                                        <span className="pt-2 text-[#9DDAFC]">В гараже</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </section>
		</UserLayout>
	);
}
