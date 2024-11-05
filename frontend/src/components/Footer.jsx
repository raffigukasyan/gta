import {LogoFooterIcon} from "./Icons/LogoFooterIcon.jsx";
import {MirBankIcon} from "./Icons/MirBankIcon.jsx";
import {VisaBankIcon} from "./Icons/VisaBankIcon.jsx";
import {MasterCardBankIcon} from "./Icons/MasterCardBankIcon.jsx";
import {SpbBankIcon} from "./Icons/SpbBankIcon.jsx";
import {DolyaBankIcon} from "./Icons/DolyaBankIcon.jsx";
import { Link } from "react-router-dom";

export const  Footer = () => {
    return <footer className={'pb-5 sm:pb-[116px]'}>
        <div className={'container'}>
            <div className={'flex justify-between items-start mb-[62px]'}>
                <div className={'pt-6'}>
                    <LogoFooterIcon/>
                </div>
                <div className={'hidden lg:flex gap-y-12 gap-x-12'}>
                    <div>
                        <p className={'footer-link__title'}>Игрокам</p>
                        <ul className={'flex flex-col gap-y-3'}>
                            <Link to='/'>
                                <li className={'footer-link'}>Начать играть</li>
                            </Link>
                            <Link to='/replenishment'>
                                <li className={'footer-link'}>Пополнение счёта</li>
                            </Link>
                            <a href="https://forum.dubrovskiy.games" target="_blank">
                                <li className={'footer-link'}>Форум</li>
                            </a>
                        </ul>
                    </div>
                    <div>
                        <p className={'footer-link__title'}>Важная информация</p>
                        <ul className={'flex flex-col gap-y-3'}>
                            <a href="/privacy-policy.pdf" target="_blank">
                                <li className={'footer-link'}>Условия использования</li>
                            </a>
                            <a href="/user-agreement.pdf" target="_blank">
                                <li className={'footer-link'}>Пользовательское соглашение</li>
                            </a>
                            <a href="/privacy-policy2.pdf" target="_blank">
                                <li className={'footer-link'}>Правила оплаты</li>
                            </a>
                        </ul>
                    </div>
                    <div className={''}>
                        <p className={'footer-link__title'}>Контакты</p>
                        <ul className={'flex flex-col gap-y-3'}>
                            <a href="https://dsc.gg/dubrovskiy-syndicate" target="_blank">
                                <li className={'footer-link'}>Канал поддержки в Discord</li>
                            </a>
                            <a href="mailto:help@ds-project.ru">
                                <li className={'footer-link'}>help@ds-project.ru</li>
                            </a>
                        </ul>
                    </div>
                </div>
                <div className={'flex flex-col  gap-y-3'}>
                    <div className={'flex gap-x-3'}>
                        <MirBankIcon className={'w-[45px] sm:w-auto sm:h-auto'}/>
                        <VisaBankIcon className={'w-[45px] sm:w-auto sm:h-auto'}/>
                        <MasterCardBankIcon className={'w-[45px] sm:w-auto sm:h-auto'}/>
                        <SpbBankIcon className={'w-[45px] sm:w-auto sm:h-auto'}/>
                    </div>
                    {/*<div className={'flex flex-col items-end gap-y-3'}>*/}
                    {/*    <DolyaBankIcon className={'w-[45px] sm:w-auto sm:h-auto'}/>*/}
                    {/*    <span*/}
                    {/*        className={'footer-link before:content-[""] before:block before:w-3 before:h-3 before:bg-green-500 before:rounded-full flex justify-center items-center gap-x-3'}>Все системы в порядке</span>*/}
                    {/*</div>*/}
                </div>
            </div>
            <div className={'flex lg:hidden justify-between gap-y-[46px] flex-wrap mb-16  sm:mb-0 gap-x-12'}>
                <div>
                    <p className={'footer-link__title'}>Игрокам</p>
                    <ul className={'flex flex-col gap-y-3'}>
                        <Link to='/'>
                            <li className={'footer-link'}>Начать играть</li>
                        </Link>
                        <Link to='/replenishment'>
                            <li className={'footer-link'}>Пополнение счёта</li>
                        </Link>
                        <a href="https://forum.dubrovskiy.games" target="_blank">
                            <li className={'footer-link'}>Форум</li>
                        </a>
                    </ul>
                </div>
                <div>
                    <p className={'footer-link__title'}>Важная информация</p>
                    <ul className={'flex flex-col gap-y-3'}>
                    <a href="/privacy-policy.pdf" target="_blank">
                        <li className={'footer-link'}>Условия использования</li>
                        </a>
                        <a href="/user-agreement.pdf" target="_blank">
                            <li className={'footer-link'}>Пользовательское соглашение</li>
                        </a>
                        <a href="/privacy-policy2.pdf" target="_blank">
                            <li className={'footer-link'}>Правила оплаты</li>
                        </a>
                    </ul>
                </div>
                <div className={''}>
                    <p className={'footer-link__title'}>Контакты</p>
                    <ul className={'flex flex-col gap-y-3'}>
                        <a href="https://dsc.gg/dubrovskiy-syndicate" target="_blank">
                            <li className={'footer-link'}>Канал поддержки в Discord</li>
                        </a>
                        <a href="mailto:help@ds-project.ru">
                            <li className={'footer-link'}>help@ds-project.ru</li>
                        </a>
                    </ul>
                </div>
            </div>
            <div
                className={'mt-5 flex justify-center items-center text-[11px] font-semibold text-[rgba(255,255,255,0.25)]'}>DS
                PROJECT is not affiliated with or endorsed by Take-Two, Rockstar North Interactive, or any other rights
                holder. All the used trademarks belong to their respective owners.
            </div>
        </div>
    </footer>
}