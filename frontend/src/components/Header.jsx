import {Logo} from './Icons/Logo.jsx';
import {HEADER_NAVIGATION} from "../consts/headerNavigation.js";
import img from "../assets/select.svg"
import {Button} from "./ui/Button.jsx";
import {PersonIcon} from "./Icons/PersonIcon.jsx";
import {HomeIcon} from "./Icons/HomeIcon.jsx";
import {useEffect, useState} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import {MenuHeader} from "./ui/MenuHeader.jsx";
import AuthModal from './modals/AuthModal';
import {MenuToggle} from "./ui/MenuToggle.jsx";
import BlueButton from './ui/BlueButton.jsx';
export const Header = ({noAbsolute}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [show, setShow] = useState(false);
    
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const body = document.querySelector('body');
        isOpen ? body.classList.add('overflow-hidden') : body.classList.remove('overflow-hidden');
    }, [isOpen]);

    const isActiveRoute = (routeName) => {
        return location.pathname === routeName
    }

    return (
        <header className={`font-gilroy w-full h-20 md:h-[100px] top-0 z-[50] ${noAbsolute ? '' : 'absolute'}`}>
            <div className="relative z-[90] flex pt-10 2xl:pt-0 justify-between h-full items-center 2xl:items-end container text-amber-50">
                <Link to="/">
                    <Logo className={'2xl:pb-1'} />
                </Link>
                <div className="hidden 2xl:flex items-baseline h-full gap-x-9">
                    <nav className={"flex gap-x-[18px] h-full items-end font-gilroy"}>
                        {HEADER_NAVIGATION.map(nav => (
                            nav.route ? 
                            <Link className={'block h-full'} to={nav.route} key={nav.id}>
                                <div  className={"flex items-end min-w-[160px] py-3 h-full relative"}>
                                    <div
                                        className={`peer w-full cursor-pointer relative z-[30] h-fit px-3 py-1 text-center font-semibold whitespace-nowrap text-base text-[rgba(255,_255,_255,_0.32)] hover:text-[rgba(255,_255,_255,_1)] ${isActiveRoute(nav.route) ? 'text-white' : ''}`}>
                                        {nav.name}
                                    </div>
                                    <div
                                        className={`absolute transition-opacity opacity-0 peer-hover:opacity-100 rounded-md z-[20] top-0 h-full w-full peer-hover:bg-[linear-gradient(360deg,_#3FBAFF_0%,_rgba(63,_186,_255,_0)_100%)] peer-hover:shadow-[0px_1.27px_2.21px_0px_rgba(63,_186,_255,_0.0337),_0px_3.06px_5.32px_0px_rgba(63,_186,_255,_0.0485),_0px_5.76px_10.02px_0px_rgba(63,_186,_255,_0.06),_0px_10.27px_17.87px_0px_rgba(63,_186,_255,_0.0715),_0px_19.22px_33.42px_0px_rgba(63,_186,_255,_0.0863),_0px_46px_80px_0px_rgba(63,_186,_255,_0.12)] ${isActiveRoute(nav.route) ? 'shadow-[0px_1.27px_2.21px_0px_rgba(63,_186,_255,_0.0337),_0px_3.06px_5.32px_0px_rgba(63,_186,_255,_0.0485),_0px_5.76px_10.02px_0px_rgba(63,_186,_255,_0.06),_0px_10.27px_17.87px_0px_rgba(63,_186,_255,_0.0715),_0px_19.22px_33.42px_0px_rgba(63,_186,_255,_0.0863),_0px_46px_80px_0px_rgba(63,_186,_255,_0.12)] bg-[linear-gradient(360deg,_#3FBAFF_0%,_rgba(63,_186,_255,_0)_100%)] opacity-100' : ''}`}>
                                        <img className={'w-full h-full'} src={img} alt=""/>
                                    </div>
                                </div>
                            </Link> : 
                            <a className={'block h-full'} href={nav.link} key={nav.id} target='_blank'>
                                <div  className={"flex items-end min-w-[160px] py-3 h-full relative"}>
                                    <div
                                        className={'peer w-full cursor-pointer relative z-[30] h-fit px-3 py-1 text-center font-semibold whitespace-nowrap text-base text-[rgba(255,_255,_255,_0.32)] hover:text-[rgba(255,_255,_255,_1)]'}>
                                        {nav.name}
                                    </div>
                                    <div
                                        className={"absolute transition-opacity opacity-0 peer-hover:opacity-100  rounded-md z-[20] top-0 h-full w-full peer-hover:bg-[linear-gradient(360deg,_#3FBAFF_0%,_rgba(63,_186,_255,_0)_100%)] peer-hover:shadow-[0px_1.27px_2.21px_0px_rgba(63,_186,_255,_0.0337),_0px_3.06px_5.32px_0px_rgba(63,_186,_255,_0.0485),_0px_5.76px_10.02px_0px_rgba(63,_186,_255,_0.06),_0px_10.27px_17.87px_0px_rgba(63,_186,_255,_0.0715),_0px_19.22px_33.42px_0px_rgba(63,_186,_255,_0.0863),_0px_46px_80px_0px_rgba(63,_186,_255,_0.12)]"}>
                                        <img className={'w-full h-full'} src={img} alt=""/>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </nav>
                    <div className="flex justify-between gap-x-10 items-center">
                        <BlueButton onClick={() => localStorage.getItem('token') ? navigate('/account') : setShow(true)}
                                className={'w-full py-3 px-7 bg-[rgba(52,_182,_255,_1)] transition-shadow hover:shadow-[0px_0px_33.1px_0px_rgba(52,182,255,0.58)]'}>
                            <div className={'flex gap-x-3 items-center'}>
                                <PersonIcon className={'text-white'}/>
                                <span className={'text-nowrap text-[12px] font-semibold'}>Личный кабинет</span>
                            </div>
                        </BlueButton>
                        <Button
                            onClick={() => localStorage.getItem('token') ? navigate('/replenishment') : setShow(true)}
                            className={'w-full max-w-[139px] sm:py-[12px] px-8 bg-[rgba(255,174,52,1)] transition-shadow hover:shadow-[0px_0px_33.1px_0px_rgba(255,174,52,0.58)]'}>
                            <div className={'flex gap-x-2 items-center'}>
                                <HomeIcon/>
                                <span className={'text-nowrap text-[12px] font-semibold'}>Донат</span>
                            </div>
                        </Button>
                    </div>
                </div>
                <div className='block 2xl:hidden'>
                    <MenuToggle className={'block 2xl:hidden'} strokeWidth={4} color={'#fff'} isOpen={isOpen} setOpen={setIsOpen}/>
                </div>
            </div>
           <MenuHeader isActive={isActiveRoute} openModal={() => setShow(true)} onClose={() => setIsOpen(false)} isOpen={isOpen}/>
           <AuthModal show={show} onClose={() => setShow(false)} />
        </header>
    )
}