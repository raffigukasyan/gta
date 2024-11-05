import {motion} from "framer-motion";
import {HEADER_NAVIGATION} from "../../consts/headerNavigation.js";
import {Button} from "./Button.jsx";
import {PersonIcon} from "../Icons/PersonIcon.jsx";
import {Link, useNavigate} from "react-router-dom";
import {Icon} from "@iconify/react";
import BlueButton from "./BlueButton.jsx";
import { HomeIcon } from "../Icons/HomeIcon.jsx";

export const MenuHeader = ({isOpen, isActive,  onClose, openModal}) => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));
    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        onClose();
        navigate('/')
    }

    const listVariants = {
        open: {
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05
            }
        },
        closed: {
            opacity: 0,
            transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3,
            }
        }
    }
    const itemVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 24 }
        },
        closed: { opacity: 0, y: 20, transition: { duration: 0.3 } }
    };

    return <motion.div initial={{top: "-100vh"}} animate={isOpen ? "open" : "closed"} variants={{
        open: {
            top: "0",
            transition: {delayChildren: 0.2}
        },
        closed: {
            top: "-100vh"
        }
    }} transition={{duration: 0.4}} className={'fixed left-0 w-full h-screen bg-[rgba(17,21,27,100)] z-[80]'}>
        <motion.ul variants={listVariants} className={'flex flex-col gap-y-[13px] w-full h-full px-7 absolute top-28'}>
            {HEADER_NAVIGATION.map((link) => {
                // return <motion.li key={link.id} variants={itemVariants} className={'w-full p-[14px] rounded-md  bg-[rgba(255,255,255,0.05)] group-hover:text-white hover:bg-[rgba(255,196,108,0.34)]'}>
                //     <Link to={link.route}>
                //         <span className={'group text-base leading-[19px] font-medium text-white'}>{link.name}</span>
                //     </Link>
                // </motion.li>
                return link?.route ? 
                 <Link onClick={() => onClose()} key={link.id} to={link.route}>
                    <motion.li key={link.id} variants={itemVariants} className={`w-full p-[14px] rounded-md group-hover:text-white hover:bg-[rgba(255,196,108,0.34)] ${isActive(link.route) ? 'bg-white' : 'bg-[rgba(255,255,255,0.05)] '}`}>
                    <span className={`group text-base leading-[19px] font-medium  ${isActive(link.route) ? 'text-[#212121]' : 'text-white'}`}>{link.name}</span>
                    </motion.li>
                </Link>
                : <a key={link.id} target="_blank" href={link.link}>
                    <motion.li key={link.id} variants={itemVariants} className={'w-full p-[14px] rounded-md  bg-[rgba(255,255,255,0.05)] group-hover:text-white hover:bg-[rgba(255,196,108,0.34)]'}>
                        <span className={'group text-base leading-[19px] font-medium text-white'}>{link.name}</span>
                    </motion.li>
                </a>
            })}
            <motion.li variants={itemVariants} className={'w-full h-[2px] mt-2 bg-[rgba(255,255,255,0.04)]'}></motion.li>
            <motion.li variants={itemVariants} className={'my-2'}>
                <Button onClick={() => localStorage.getItem('token') ? navigate('/account') : openModal()}  className={'w-full py-3 px-7 bg-[rgba(52,_182,_255,_1)] transition-shadow hover:shadow-[0px_0px_33.1px_0px_rgba(52,182,255,0.58)]'}>
                    <div className={'flex gap-x-3 items-center'}>
                        <PersonIcon  className={'text-white'} />
                        <span className={'text-nowrap text-white text-base font-semibold'}>Личный кабинет</span>
                    </div>
                </Button>
            </motion.li>
            <motion.li variants={itemVariants} className={'my-0'}>
                <Button
                    onClick={() => localStorage.getItem('token') ? navigate('/replenishment') : openModal()}
                    className={'w-full sm:py-[12px] px-7 py-3 text-white bg-[rgba(255,174,52,1)] transition-shadow hover:shadow-[0px_0px_33.1px_0px_rgba(255,174,52,0.58)]'}>
                    <div className={'flex gap-x-2 items-center'}>
                        <HomeIcon/>
                        <span className={'text-nowrap text-base font-semibold'}>Пополнить счёт</span>
                    </div>
                </Button>
            </motion.li>
            {
                localStorage.getItem('token') && <>
                    <motion.li variants={itemVariants}>
                        <div className="flex w-full flex-col gap-[10px] text-white text-[16px]">

                           
                        </div>
                    </motion.li>
                </>
            }
        </motion.ul>
    </motion.div>
}