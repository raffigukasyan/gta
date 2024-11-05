import { useEffect, useState } from "react";
import { getForbesList } from "../utils/axios";
import {KingIconOne, KingIconThree, KingIconTwo} from "../components/Icons/KingIcon.jsx";

const ListItem = ({item, idx, className}) => {
    const style = {
        1: {bg: 'bg-[rgba(114,89,0,0.19)]', icon: <KingIconOne />},
        2: {bg: 'bg-[rgba(186,186,186,0.19)]', icon: <KingIconTwo />},
        3: {bg: 'bg-[rgba(114,48,0,0.19)]', icon: <KingIconThree />}
    }[idx];
    return (
        <div className={`w-full font-gilroy grid grid-cols-4 items-center py-4 px-2 rounded-[5px] ${style?.bg ?? 'bg-[rgba(255,255,255,0.03)]'} ${className}`}>
            <div className={'flex items-center gap-x-2'}>
                {style?.icon ?? null}
                <span className={`text-white text-base font-bold leading-5 ${style?.icon ? '' : 'ml-10'}`}># {idx}</span>
            </div>
            <div className={'text-white text-base font-bold leading-5'}>{item.name}</div>
            <div className={'text-white text-base font-bold leading-5'}>#{item.sid}</div>
            <div className={'text-white text-base font-bold leading-5 ml-auto mr-6'}>{item.totalmoney.toString().split(/(?=(?:\d{3})+$)/).join(',')}$</div>
        </div>
    )
}

export const Forbse = () => {
    const [users, setUsers] = useState();
    useEffect(() => {
        const fetch = async () => {
            const data = await getForbesList();
            setUsers(data);
        }
        fetch();
    }, [])

    return (
        <section className={'w-full h-full xl:h-[1075px] pt-[144px] relative mb-6'}>
            <div className={'w-full h-full absolute top-0 left-0'}>
                <img className={'w-full'} src="/img/forbse-fon.png" alt=""/>
            </div>
            <div className={'hidden w-full xl:block absolute bottom-0 left-0 z-[30]'}>
                <img className={'w-full'} src="/img/forbse-person.png" alt=""/>
            </div>
            <div className={'relative px-6 lg:px-0 w-full h-full flex justify-center items-center z-[40]'}>
                <div className={'w-full h-full max-w-[769px]'}>
                    <div className={'flex flex-col sm:justify-center sm:items-center mb-5'}>
                        <h1 className={'font-russo text-left sm:text-center text-2xl sm:text-[40px] leading-[48px]  mb-2 sm:mb-4 text-[#FBFBFB] drop-shadow-[0px_4px_47.1px_0px_#0000009C]'}>Cписок
                            FORBES</h1>
                        <p className={'max-w-[354px] font-gilroy sm:max-w-[588px] text-[10px]  sm:text-lg leading-3 sm:leading-5 text-white text-left sm:text-center'}>Список топ 25 самых
                            богатых игроков проекта, хочешь попсать в этот список? Тогда зайди на сервер и стремись к
                            успехам.</p>
                    </div>
                    <div className={'w-full flex flex-col gap-y-3 h-full max-h-[787px] overflow-x-auto custom-scroll'}>
                        {users?.length ? users?.map((item, idx) => (
                            <ListItem key={item.sid} idx={idx + 1} item={item} />
                        )) : null}
                    </div>
                </div>
            </div>
            <div className={'w-full h-full hidden xl:block absolute top-40 right-0'}>
                <img className={'h-full w-full object-cover'} src="/img/forbse-money.png" alt=""/>
            </div>
        </section>
    )
}