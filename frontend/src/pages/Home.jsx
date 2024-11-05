import {PersonsIcon} from "../components/Icons/PersonsIcon.jsx";
import {Button} from "../components/ui/Button.jsx";
import {PlayerIcon} from "../components/Icons/PlayerIcon.jsx";
import {ArrowLinkIcon} from "../components/Icons/arrowLinkIcon.jsx";
import {OneNumber} from "../components/Icons/OneNumber.jsx";
import {RocstarIcon} from "../components/Icons/RocstarIcon.jsx";
import {EpicGameIcon} from "../components/Icons/EpicGameIcon.jsx";
import {SteamLogoIcon} from "../components/Icons/SteamLogoIcon.jsx";
import {CardIcon} from "../components/Icons/CardIcon.jsx";
import {TwoNumberIcon} from "../components/Icons/TwoNumberIcon.jsx";
import {DownloadIcon} from "../components/Icons/DownloadIcon.jsx";
import {ThreeNumberIcon} from "../components/Icons/ThreeNumberIcon.jsx";
import {LogoWhite} from "../components/Icons/LogoWhite.jsx";
import {LikeIcon} from "../components/Icons/LikeIcon.jsx";
import {EyesIcon} from "../components/Icons/EyesIcon.jsx";
import {VkLogo, VkMobIcon} from "../components/Icons/VkLogo.jsx";
import {DiscordLogoIcon, DiscordMobIcon} from "../components/Icons/DiscordLogoIcon.jsx";
import {YoutubeLogoIcon, YoutubeMobIcon} from "../components/Icons/YoutubeLogoIcon.jsx";
import {TelegramLogoIcon, TelegramLogoMobIcon} from "../components/Icons/TelegramLogoIcon.jsx";
import {LineIcons} from "../components/Icons/LineIcons.jsx";
import Modal from "../components/Modal.jsx";
import Input from "../components/ui/Input.jsx";
import AuthModal from "../components/modals/AuthModal.jsx";
import {ArrowAllIcon} from "../components/Icons/ArrowAllIcon.jsx";
import {forwardRef, useEffect, useRef, useState} from "react";
import { getNews, getServerOnline } from "../utils/axios.js";
import moment from 'moment'

const ServerPlayer = ({number, from, to}) => {
    const width = Math.max((from / to).toFixed(1), 0.05) * 100 + '%';
    const style = {"--server-1-width": width};

    return (
        <div className={'flex flex-col'}>
            <div className={'font-russo flex gap-x-3 items-center md:mb-2'}>
                <div className={'text-base  md:text-[33px] leading-[50px] text-white'}>№{number}</div>
                <div className={'text-white text-[17px]'}>{from} <span className={'text-sm opacity-40'}>/ {to}</span>
                </div>
            </div>
            <div
                style={style}
                className={"server-online h-[5px] bg-[rgba(255,_255,_255,_0.1)] relative before:absolute before:content-[''] before:bg-red-50 before:w-2/3 before:left-0 before:h-[5px] before:shadow-[_0px_0px_30px_0px_rgba(255,_255,_255,_1)]"}></div>
        </div>
    )
}

const SalesSection = () => {
    const [news, setNews] = useState();

    useEffect(() => {
        const fetchNews = async () => {
            const news = await getNews();
            setNews(news);
        }
        fetchNews()
    }, [])
    
    return (
        <div
            className={'flex h-full items-stretch gap-x-3 gap-y-4 flex-wrap justify-center 2xl:flex-nowrap 2xl:justify-between'}>
            {news?.length ? news?.map(item => (

            <div
                key={item.id}
                className={'h-full py-[30px] px-4 max-w-[542px] max-h-[740px] w-full bg-[rgba(255,255,255,0.03)] flex flex-col gap-y-5 justify-between'}>
                <div className={'flex justify-between gap-x-[20px] items-center'}>
                    <div
                        className={'flex items-center gap-x-3 sm:gap-x-6 text-white text-xs tracking-[3px] md:tracking-[6px] sm:text-lg font-semibold before:content-[""] before:block before:w-[47px] sm:before:w-[72px] before:h-[2px] before:bg-[rgba(255,255,255,0.09)]'}>
                        {moment(item.date*1000).format('DD.MM.YYYY')}
                    </div>
                    <div className={'flex  gap-x-4 sm:gap-x-8 items-center'}>
                        <div className={'flex items-center gap-x-3'}>
                            <LikeIcon className={'w-3 h-3 sm:w-auto sm:h-auto'}/>
                            <span className={'text-[9px] sm:text-sm text-[rgba(255,255,255,0.28)]'}>{item.likes.count}</span>
                        </div>
                        <div className={'flex items-center gap-x-3'}>
                            <EyesIcon className={'w-3 h-3 sm:w-auto sm:h-auto'}/>
                            <span className={'text-[9px] sm:text-sm text-[rgba(255,255,255,0.28)]'}>{item.views.count}</span>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full">
                    <img className={'w-full h-[203px] sm:h-[306px] object-cover rounded-md'} src={item?.attachments?.[0]?.photo?.orig_photo?.url} alt=""/>
                </div>
                <div className={'text-sm h-[50px] overflow-hidden overflow-ellipsis sm:text-[22px] font-russo uppercase text-white'}>{item.text.split('\n')[0]}
                    
                </div>
                <div className={'text-[10px] overflow-hidden overflow-ellipsis sm:text-[16px] leading-[13px] sm:leading-5 text-[rgba(255,255,255,0.36)]'}>
                    
                    <ul className="overflow-hidden font-gilroy h-[200px] overflow-ellipsis">
                        {item.text.split('\n').map((txt, idx) => (
                            <li key={idx}>{txt}</li>
                        ))}
                    </ul>
                </div>
                <a href={`https://vk.com/wall-212744239_${item.id}`}
                    target="_blank"
                   className={'flex justify-center font-gilroy font-bold items-center py-6 uppercase text-white bg-[rgba(255,255,255,0.03)]'}>Подробнее...</a>
            </div>
            )) : null}
            
        </div>
    )
}

const SocialPages = ({bgColor, icon, iconMob, iconName, text, href}) => {
    return (
        <a href={href} target="_blank" className="font-gilroy">
            <div
                className={`hidden sm:flex min-h-[167px] rounded ${bgColor}  justify-center items-center w-full`}>
                <div className={'w-full max-w-[631px] flex justify-between items-center'}>
                    <div className={'w-fit flex items-center gap-x-5'}>
                        {icon}
                        <span className={'text-[26px] font-bold text-white'}>{iconName}</span>
                    </div>
                    <div className={'max-w-[336px] text-white text-base uppercase font-semibold'}>
                        {text}
                    </div>
                </div>
            </div>
            <div className={'sm:hidden flex gap-x-4 items-center w-full'}>
                <div className={'w-fit flex items-center gap-x-5'}>
                    {iconMob}
                    <span className={'text-[20px] font-bold text-white'}>{iconName}</span>
                </div>
            </div>
        </a>
    )
}

const SectionTitle = forwardRef(({className, title, subTitle}, ref) => {
    return (
        <div ref={ref} className={className}>
            <div className={'flex font-gilroy justify-center items-center mb-4 sm:mb-[60px]'}>
                <h2 className={'text-[14px] sm:text-base md:text-[40px] leading-[48px] sm:leading-[48px] text-transparent bg-clip-text bg-[radial-gradient(66.3%_66.3%_at_50%_50%,_#FFFFFF_0%,_#363636_100%)]'}>
                <span className={'font-gilroy font-light uppercase'}>{title}</span> <span
                    className={'font-russo font-normal uppercase'}>{subTitle}</span></h2>
            </div>
        </div>
    )
})

export default function Home() {
    const [online, setOnline] = useState(0);
    const sectionRef = useRef();
    useEffect(() => {
        const fetch = async () => {
            const data = await getServerOnline();
            setOnline(data);
        }
        fetch()
    }, [])

    const handleDown = () => {
        sectionRef.current?.scrollIntoView({behavior: "smooth", block: "start", inline: "start"})
    }

    return (
        <>
            <AuthModal />
            <section className='w-full h-[700px] sm:h-screen relative'>
                <div className={'absolute w-full h-full top-0 left-0'}>
                    <img className={'w-full h-full object-cover'} src="/img/fon.png" alt=""/>
                </div>
                <div className='absolute top-32 sm:top-40 md:top-[250px] w-full h-full   z-[40]'>
                    <div className="container">
                        <div
                            className={'max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl 3xl:max-w-[833px] h-full'}>
                            <div className={'relative'}>
                                <img className={'hidden md:block absolute right-12 -top-20'} src='/img/electro.svg'
                                     alt=""/>
                                <h1 className={'font-russo text-2xl sm:leading-10 sm:text-3xl md:text-5xl md:leading-[55px] lg:leading-[65px] lg:text-[60px] xl:leading-[80px] xl:text-[70px] 3xl:text-[80px] 3xl:leading-[96px] text-white'}>НОВЫЕ ГРАНИЦЫ ВМЕСТЕ
                                    С
                                    DS <span
                                        className='font-allison text-4xl md:text-[107px] text-[rgba(63,_186,_255,_1)]'>Project</span>
                                </h1>
                                <img className={'hidden md:block absolute -left-[2.3rem] -bottom-20'} src='/img/electro-2.png' alt=""/>
                            </div>
                            <p className={'max-w-[253px] sm:max-w-[574px]  text-xs leading-5 sm:text-base xl:text-xl 3xl:text-2xl sm:leading-6 md:leading-9 text-white mt-3 md:mt-10 mb-4'}>Lorem ipsum dolor
                                sit amet,
                                consectetur
                                adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className={'flex flex-col md:flex-row gap-x-8 items-start mb-8 sm:mb-4'}>
                                <div className={'flex flex-col'}>
                                    <span className={"text-base text-white uppercase leading-9"}>Наши</span>
                                    <span className={'font-russo text-white uppercase text-xl'}>сервера</span>
                                </div>
                                {<ServerPlayer number={1} from={online} to={2000}/>}
                                {<ServerPlayer number={2} from={online} to={2000}/>}
                            </div>
                            <div className={'flex gap-x-4 items-center'}>
                                <div
                                    className={'flex justify-center items-center w-16 h-16 rounded-full bg-[rgba(84,_255,_173,_0.19)]'}>
                                    <div
                                        className='relative flex justify-center items-center w-10 h-10 rounded-full bg-[rgba(84,_255,_173,_0.39)]'>
                                        <PersonsIcon className={'absolute'}/>
                                    </div>
                                </div>
                                <div className={'flex items-center gap-x-12'}>
                                    <div
                                        className={'flex leading-4 flex-col text-sm text-white opacity-40 font-russo uppercase'}>
                                        <span>Всего</span>
                                        <span>игроков</span>
                                    </div>
                                    <span className={'text-white font-russo leading-7 text-sm'}>{online * 2}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'hidden lg:block lg:max-w-4xl xl:max-w-5xl 3xl:max-w-[1100px] absolute right-0 bottom-0 z-[30]'}>
                    <img className='' src="/img/ped.png" alt=""/>
                </div>
                <div className={'w-full md:max-w-lg lg:hidden absolute right-0 top-20 md:bottom-0 z-[30]'}>
                    <img className={'w-full h-full'} src="/img/ped-mob.png" alt=""/>
                </div>
                <div className={'hidden absolute lg:flex items-baseline justify-center gap-x-20 bottom-28 left-[48%] -translate-x-[49%] z-[40]'}>
                    <div>
                        <Button
                            className={'w-full  max-w-[162px] sm:max-w-[251px] py-4 px-4 xl:px-6 border border-solid border-[rgba(63,_186,_255,_1)] bg-[rgba(52,_182,_255,_1)] sm:gap-x-6 gap-x-5 transition-shadow hover:shadow-[0px_0px_33.1px_0px_rgba(52,182,255,0.58)]'} onClick={handleDown}>
                            <span className={'flex  flex-grow-1 flex-shrink-0 text-white font-bold text-[18px]'}>НАЧАТЬ ИГРАТЬ</span>
                            <PlayerIcon className={'flex flex-grow-1 flex-shrink-0 w-8 h-8 text-white'}/>
                        </Button>
                    </div>
                    <div className={'hidden xl:block'}>
                        <div className={'w-[8px] h-[8px] bg-white absolute -top-1 right-0 shadow-[0px_0px_22.6px_0px_#FFFFFF]'}></div>
                        <LineIcons/>
                        <div className={'relative'}>
                            <div
                                className={'absolute -left-16 w-[127px] bottom-0 h-[2px] bg-[rgba(255,_255,_255,_0.06)]'}></div>
                            <div
                                className={'w-[8px] h-[8px] bg-white absolute -bottom-1 -left-1 shadow-[0px_0px_22.6px_0px_#FFFFFF]'}></div>
                        </div>
                    </div>
                    <div className={'xl:absolute xl:bottom-2 xl:-right-10'}>
                        <div className={'text-white flex gap-x-5 items-center cursor-pointer group'}>
                            <div
                                className={'w-12 h-12 flex justify-center items-center  transition-shadow group-hover:drop-shadow-[0px_0px_33.1px_rgba(255,255,255,0.58)] rounded-full bg-transparent border-2 border-solid  border-[rgba(255,_255,_255,_0.24)]'}>
                                <div
                                    className={'w-8 h-8 flex justify-center items-center  bg-white rounded-full bg-[rgba(217,_217,_217,_1)]'}>
                                    <PlayerIcon className={'w-6 h-6 text-black'}/>
                                </div>
                            </div>
                            <span onClick={handleDown} className={'flex flex-grow-1 flex-shrink-0 group-hover:transition-shadow group-hover:drop-shadow-[0px_0px_33.1px_rgba(255,255,255,0.58)] text-lg font-bold text-white'}>СМОТРЕТЬ ВИДЕО</span>
                        </div>
                    </div>
                </div>
                <div className={'lg:hidden block w-full z-[40] absolute bottom-10 left-0'}>
                    <div className={'container flex justify-between items-center'}>
                        <Button
                            className={'w-full max-w-[163px] sm:max-w-[250px]  py-3 md:py-4 lg:py-7 border border-solid border-[rgba(63,_186,_255,_1)] bg-[rgba(52,_182,_255,_1)] transition-shadow gap-x-6 hover:shadow-[0px_0px_33.1px_0px_rgba(52,182,255,0.58)]'}
                            onClick={handleDown}
                            >
                            <span className={'text-white font-bold text-xs sm:text-[18px]'}>НАЧАТЬ ИГРАТЬ</span>
                            <PlayerIcon className={'w-6 h-6 sm:w-8 sm:h-8 text-white'}/>
                        </Button>
                        <div className={'text-white flex gap-x-[10px] sm:gap-x-5 items-center group'}>
                            <div
                                className={'w-6 h-6 sm:w-12 sm:h-12 flex justify-center items-center  group-hover:transition-shadow group-hover:drop-shadow-[0px_0px_33.1px_rgba(255,255,255,0.58)] rounded-full bg-transparent border-2 border-solid  border-[rgba(255,_255,_255,_0.24)]'}>
                                <div
                                    className={'w-4 h-4 sm:w-8 sm:h-8 flex justify-center items-center   bg-white rounded-full bg-[rgba(217,_217,_217,_1)]'}>
                                    <PlayerIcon className={'w-3 h-3 sm:w-6 sm:h-6 text-black'}/>
                                </div>
                            </div>
                            <span onClick={handleDown} className={'text-xs sm:text-2xl bg-transparent group-hover:transition-shadow group-hover:drop-shadow-[0px_0px_33.1px_rgba(255,255,255,0.58)] font-bold text-white'}>СМОТРЕТЬ ВИДЕО</span>
                        </div>
                    </div>
                </div>
                <div onClick={handleDown} className={'cursor-pointer hidden lg:flex absolute bottom-3 left-2/4 flex-col items-center z-[99] -translate-x-2/4'}>
                    <p className={'text-sm uppercase text-[rgba(255,255,255,0.17)]'}>узнать еще</p>
                        <ArrowAllIcon />
                </div>
            </section>
            <section className={'w-full h-full relative py-22 sm:py-[84px]'}>
                <div className={'absolute w-full h-full top-0 z-[20]'}>
                    <img className={'w-full h-full object-cover'} src="/img/howToPlayFon.png" alt=""/>
                </div>
                <SectionTitle className={'relative z-[30] sm:hidden'} title={'ХОЧЕШЬ УЗНАТЬ КАК ИГРАТЬ'} subTitle={'ПРОСТО ПОСМОТРИ РОЛИК'}/>
                <div className='relative z-[30] container'>
                    <SectionTitle ref={sectionRef} className={'hidden sm:block'} title={'ХОЧЕШЬ УЗНАТЬ КАК ИГРАТЬ'} subTitle={'ПРОСТО ПОСМОТРИ РОЛИК'}/>
                    <div className={'flex justify-between items-stretch gap-y-[14px] flex-col-reverse sm:flex-col 2xl:flex-row gap-x-5 2xl:gap-x-[58px]'}>
                        <div className={'w-full grid grid-cols-2 gap-4 2xl:gap-8'}>
                            <div
                                className={'w-full flex flex-col justify-between px-2 md:px-[20px] min-h-64  py-6 relative rounded-[8px] bg-radial-green'}>
                                <OneNumber className={'absolute z-[2] top-0 left-0 w-[185px] h-[122px] md:h-auto md:w-auto'}/>
                                <p className={'text-white font-gilroy text-[13px] sm:text-[26px] pt-4 leading-5 md:leading-[39px] font-bold mb-5 md:mb-9'}>КУПИТЬ GTA
                                    5</p>
                                <div className={'flex justify-between items-center mb-5'}>
                                    <div>
                                        <img className={'hidden sm:block'} src="/img/gta5-logo.png" alt=""/>
                                        <img className={'block sm:hidden'} src="/img/gta5-logo-mob.png" alt=""/>
                                    </div>
                                    <div className={'flex gap-x-[5px] sm:gap-x-3 items-center'}>
                                        <div
                                            className={'w-[26px] h-[26px] sm:w-[52px] sm:h-[52px] flex justify-center items-center rounded-md bg-radial-white-50'}>
                                            <RocstarIcon className={'w-[12px] h-[12px] sm:w-auto sm:h-auto'}/>
                                        </div>
                                        <div
                                            className={'w-[26px] h-[26px] sm:w-[52px] sm:h-[52px] flex justify-center items-center rounded-md bg-[rgba(0,0,0,0.74)]'}>
                                            <EpicGameIcon className={'w-[12px] h-[12px] sm:w-auto sm:h-auto'}/>
                                        </div>
                                        <div
                                            className={'w-[26px] h-[26px] sm:w-[52px] sm:h-[52px] flex justify-center items-center rounded-md bg-radial-white-50'}>
                                            <SteamLogoIcon className={'w-[12px] h-[12px] sm:w-auto sm:h-auto'}/>
                                        </div>
                                    </div>
                                </div>
                                <p className={'text-[7px] font-gilroy leading-[11px] md:leading-[22px] sm:text-sm text-center uppercase text-white mb-[14px]'}>
                                    Для начала игры на нашем проекте требуется иметь лицензионную копию GTA V. Если у
                                    вас уже есть приобретенная игра, вы можете пропустить этот шаг.
                                </p>
                                <a href="https://zheki444.ru/buygame">
                                    <Button className={'max-w-full py-[5px] sm:py-4 items-center gap-x-3 w-full bg-white'}>
                                        <span
                                            className={'uppercase sm:leading-[30px] text-[7px] sm:text-base font-bold text-[rgba(40,40,40,1)]'}>Купить</span>
                                        <CardIcon clasName={'w-2 h-2 sm:w-4 sm:h-4'}/>
                                    </Button>
                                </a>
                            </div>
                            <div
                                className={'w-full flex flex-col justify-between min-h-64 px-2 md:px-[20px] py-6 relative rounded-[8px] bg-radial-yellow'}>
                                <TwoNumberIcon className={'w-[185px] h-[122px] md:h-auto md:w-auto absolute z-[2] top-0 left-0'}/>
                                <p className={'text-white text-[13px]  sm:text-[26px] pt-4 leading-5 sm:leading-[39px] font-gilroy font-bold mb-3'}>УСТАНОВИТЬ
                                    RAGE:MP</p>
                                <div>
                                    <img className={'mb-2 hidden sm:block'} src="/img/RangLogo.png" alt=""/>
                                    <img className={'mb-2 block sm:hidden'} src="/img/rangeLogo-mob.png" alt=""/>
                                </div>
                                <div className={'w-full flex gap-x-2 items-center bg-radial-white-50 p-2 md:p-3 mb-4'}>
                                    <img className={'w-[15px] sm:w-auto'} src="/img/range-min-logo.png" alt=""/>
                                    <div className={'w-full flex gap-y-2 flex-col '}>
                                        <div className={'flex justify-between items-center'}>
                                            <span
                                                className={'text-[6px] sm:text-xs font-bold text-white'}>RAGEMultiplayer_Setup.exe</span>
                                            <span className={'text-[6px] sm:text-xs text-white'}>28.9 Мб/C</span>
                                        </div>
                                        <div className={'process before:w-2/3'}></div>
                                    </div>
                                </div>
                                <p className={'font-gilroy text-[7px] sm:text-sm text-center uppercase text-white mb-[14px]'}>
                                    Для начала игры на нашем проекте требуется иметь лицензионную копию GTA V. Если
                                    у вас уже есть приобретенная игра, вы можете пропустить этот шаг.
                                </p>
                                <a href="https://cdn.rage.mp/public/files/RAGEMultiplayer_Setup.exe" target="_blank">
                                    <Button className={'max-w-full py-[5px] sm:py-4 items-center gap-x-3 w-full bg-white'}>
                                        <span
                                            className={'uppercase sm:leading-[30px] text-[7px] sm:text-base font-bold text-[rgba(40,40,40,1)]'}>Скачать</span>
                                        <DownloadIcon className={'w-2 h-2 sm:w-4 sm:h-4'}/>
                                    </Button>
                                </a>
                            </div>
                            <div className={'w-full min-h-64 col-span-2  rounded-[8px] bg-radial-blue relative  py-6'}>
                                <ThreeNumberIcon className={'absolute z-[2] top-0 left-0 w-[185px] h-[122px] md:h-auto md:w-auto'}/>
                                <div className={'flex justify-between relative'}>
                                    <div className={'flex flex-col px-2 sm:pl-[21px] '}>
                                        <p className={'text-white text-[13px] sm:text-[26px] pt-4 leading-5 sm:leading-[39px] font-bold mb-8 uppercase font-gilroy'}>Зайти на сервер</p>
                                        <LogoWhite className={'w-[120px] h-[74px] sm:w-fit sm:h-fit'}/>
                                        <p className={'max-w-[254px] max-md:text-left max-md:mt-3 max-lg:mt-0 mt-[15px] sm:max-w-[330px] font-gilroy mt-4 text-[10px] text-left sm:text-sm max-lg:text-center uppercase text-white mb-[14px]'}>
                                            Завершающий шаг: просто скопируйте IP и вставьте его в лаунчере, и вы
                                            окажетесь уже на нашем проекте. Удачной игры!
                                        </p>
                                    </div>
                                    <div className={'w-full flex flex-col items-end absolute top-5 md:top-0 right-0 pt-4'}>
                                        <div>
                                            <img className={'hidden md:block'} src="/img/screenHeader.png" alt=""/>
                                            <img className={'block md:hidden'} src="/img/screenHeader-min.png" alt=""/>
                                        </div>
                                        <div
                                            className={'w-full max-w-[175px] md:max-w-[413px] h-[186px] bg-[linear-gradient(180deg,_rgba(23,23,23,0.38)_0%,_rgba(23,23,23,0)_100%)]'}></div>
                                        <div className={'absolute top-28'}>
                                            <img className={'hidden md:block'} src="/img/screenHeader-2.png" alt=""/>
                                            <img className={'block md:hidden'} src="/img/screenHeader-2-min.png" alt=""/>
                                        </div>
                                        <Button className={'hidden absolute -bottom-[30px] max-lg:-bottom-[15px] md:flex py-[5px] sm:py-4 max-w-[313px] mr-5 items-center gap-x-3 w-full bg-white'}>
                                            <span
                                                className={'uppercase leading-[30px] text-base font-bold text-[rgba(40,40,40,1)]'}>Начать играть</span>
                                            <PlayerIcon className={'w-8 h-8'}/>
                                        </Button>
                                    </div>
                                </div>
                                <div onClick={handleDown} className={'w-full md:hidden block px-4'}>
                                    <Button onClick={handleDown} className={'max-w-full mr-5 items-center py-[5px] gap-x-3 w-full bg-white'}>
                                            <span
                                                className={'uppercase leading-[30px] text-xs sm:text-base font-bold text-[rgba(40,40,40,1)]'}>Начать играть</span>
                                        <PlayerIcon className={'w-8 h-8'}/>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className={'w-full flex flex-col justify-between pt-5 '}>
                            <div className={'hidden sm:block w-full'}>
                                <h2 className={'text-[40px] mb-7 leading-[48px] text-transparent bg-clip-text bg-[radial-gradient(66.3%_66.3%_at_50%_50%,_#FFFFFF_0%,_#363636_100%)]'}>
                                    <span className={'font-gilroy font-light'}>СДЕЛАЙ 3 ШАГА И</span> <span
                                    className={'font-russo font-normal'}>НАЧНИ ИГРАТЬ</span></h2>
                                <p className={'max-w-xl font-gilroy font-medium text-lg text-white uppercase mb-16'}>ГТА 5 РП —
                                    новый уровень онлайн-игр. Играй бандитом или полицейским, чиновником или
                                    медиком, мафией или сотрудником ФБР.
                                    Прочувствуй атмосферу удивительного мира ролевой игры с реалистичным миром GTA 5 на
                                    сервере CRYSTAL Role Play</p>
                            </div>
                            <div><img src="/img/video-bg.png" alt=""/></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={'w-full h-full relative py-6 sm:py-[84px] pb-[130px] sm:pb-0'}>
                <div className={'w-full h-full absolute top-0 z-[30]'}>
                    <img className={'w-full h-full object-cover'} src="/img/section-how-we-fon.png" alt=""/>
                </div>
                <div className={'hidden 3xl:block absolute h-full top-5 right-0 z-[45]'}>
                    <img className={'h-full hidden 3xl:block'} src="/img/section-how-we.png" alt=""/>
                </div>
                <SectionTitle className={'relative z-[30] sm:hidden mb-10'} title={'НЕ ЗНАЕШЬ КТО МЫ?'} subTitle={'ТОГДА НЕМНОГО О НАС'}/>
                <div className={'relative z-[35] container'}>
                    <SectionTitle className={'hidden sm:block'} title={'НЕ ЗНАЕШЬ КТО МЫ?'}
                                  subTitle={'ТОГДА НЕМНОГО О НАС'}/>
                    <div className={'block md:hidden absolute right-0 top-2/4 z-[40]'}>
                        <img src="/img/travel-mob.png" alt=""/>
                    </div>
                    <div className={'block sm:hidden absolute -left-14 z-[40] -top-28'}>
                        <img src="/img/3d-commnet.png" alt=""/>
                    </div>
                    <div
                        className={'pt-10 sm:pt-0 relative w-full 3xl:max-w-[1363px] grid grid-cols-1 md:grid-cols-[1fr_1fr] md:grid-rows-3 gap-[24px]'}>
                        <div className={'hidden sm:block absolute -left-10 z-[40] -top-28'}>
                            <img src="/img/3d-commnet.png" alt=""/>
                        </div>
                        <div className={'hidden md:block absolute left-[37%] top-[22%] z-[40]'}>
                            <img src="/img/travel-dynamic.png" alt=""/>
                        </div>
                        <div className={'h-full bg-radial-gray relative py-5 px-3 sm:py-[39px] sm:pl-7 sm:pr-3'}>
                            <div className={'w-full h-full absolute z-[1] top-0 left-0'}>
                                <img className={'h-full object-cover w-full'} src="/img/how-me-block.png" alt=""/>
                            </div>
                            <div className={'relative z-[10]'}>
                                <p className={'uppercase text-[7px] sm:text-sm font-semibold font-gilroy text-[rgba(63,186,255,1)] mb-[14px]'}>различные
                                    фракции</p>
                                <div className={'text-white text-xs sm:text-2xl uppercase font-russo mb-4'}>ОТЫГРАЙ СВОЮ РОЛЬ КАК
                                    ТЕБЕ
                                    ВЗДУМАЕТСЯ ⭐
                                </div>
                                <p className={'max-w-[632px] font-gilroy text-[rgba(255,255,255,0.36)] text-[8px] sm:text-base'}>Решайте, какие
                                    действия предпринимать, кем быть и как взаимодействовать с другими
                                    игроками.
                                    Ваша история в мире DS PROJECT зависит только от вас. Погрузитесь в удивительный мир
                                    2 возможностей и
                                    приключений и станьте настоящим героем или злодеем этого мира - выбор за вами!</p>
                            </div>
                        </div>
                        <div
                            className={'flex flex-col justify-around xl:justify-between md:row-span-2 bg-radial-gray relative  pr-3'}>
                            <div className={'w-full h-full absolute top-0 left-0'}>
                                <img className={'h-full object-cover w-full'} src="/img/how-me-block2.png" alt=""/>
                            </div>
                            <div className={'hidden md:block  h-[209px]'}>
                                <img src="/img/how-me-cars.png" alt=""/>
                            </div>
                            <div className={'relative z-[45] py-4 sm:py-0 pl-[14px] sm:pl-7 sm:pb-7 font-gilroy'}>
                                <p className={'uppercase text-[7px] sm:text-sm font-semibold text-[rgba(63,186,255,1)] mb-[14px]'}>много
                                    машин</p>
                                <div className={'text-xs sm:text-2xl text-white uppercase font-russo mb-3'}>любишь гонки и машины?
                                    🚘
                                </div>
                                <p className={'max-w-[632px] text-[rgba(255,255,255,0.36)] text-[9px] sm:text-base'}>На нашем проекте
                                    вы сможете найти свою машину мечты,
                                    а также приобрести эксклюзивные обвесы для нее. Прокачайте свой автомобиль, чтобы он
                                    выглядел неповторимо, и все завидовали вашему стилю.</p>
                            </div>
                        </div>
                        <div className={'h-full font-gilroy bg-radial-gray relative py-4 pl-[14px] sm:py-[28px] sm:pl-7 sm:pr-3'}>
                            <div className={'w-full h-full absolute top-0 left-0'}>
                                <img className={'h-full w-full'} src="/img/how-me-block.png" alt=""/>
                            </div>
                            <p className={'uppercase text-[7px] sm:text-sm font-semibold text-[rgba(63,186,255,1)] mb-[14px]'}>большой
                                выбор НЕДВИЖИМОСТИ</p>
                            <div className={'text-white text-xs sm:text-2xl uppercase font-russo mb-3'}>КУПИ ДОМ СВОЕЙ МЕЧТЫ 🏠
                            </div>
                            <p className={'max-w-[632px] text-[rgba(255,255,255,0.36)] text-[9px] sm:text-base'}>
                                В Лос-Сантосе есть много недвижимости. От скромных квартир до роскошных особняков, вы
                                найдете место для каждого бюджета и стиля жизни.
                                Купите недвижимость,
                                чтобы получить доступ к гаражам, взлетно-посадочным полосам, а также воспользоваться
                                преимуществом уникальных бонусов и услуг, которые она предлагает.
                            </p>
                        </div>
                        <div className={'md:col-span-2 font-gilroy h-fit bg-radial-gray relative pl-[14px] py-4 sm:py-[28px] sm:pl-7 sm:pr-3'}>
                            <div className={'absolute w-full h-full top-0 left-0'}>
                                <img className={'h-full object-cover w-full'} src="/img/how-me-block3.png" alt=""/>
                            </div>
                            <p className={'uppercase text-[7px] sm:text-sm font-semibold text-[rgba(63,186,255,1)] mb-[14px]'}>большой
                                выбор акссесуров</p>
                            <div className={'text-white text-xs sm:text-2xl uppercase font-russo mb-4'}>ты лютый модник? 🔥
                            </div>
                            <p className={'max-w-[870px] text-[rgba(255,255,255,0.36)] text-[9px] sm:text-base'}>На нашем проекте, вы
                                найдете огромный выбор аксессуаров для вашего персонажа -
                                от шикарных солнцезащитных очков до стильных кепок и браслетов. Мы предлагаем самые
                                модные и качественные аксессуары, чтобы вы могли выглядеть стильно и уверенно в любой
                                ситуации.
                                Подчеркните свой индивидуальный стиль с нашими разнообразными аксессуарами и создайте
                                неповторимый образ своего персонажа.</p>
                            <div className={'hidden xl:block max-w-full absolute right-0 bottom-0'}>
                                <img src="/img/how-me-block-3-decoration.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'sm:hidden absolute bottom-0 left-0 z-[40]'}>
                    <img src="/img/car.png" alt=""/>
                </div>
            </section>
            <section className={'w-full h-full  relative py-6  sm:pb-0 sm:pt-[84px]'}>
                <div className={'w-full h-full absolute top-0 z-[30]'}>
                <img className={'h-full w-full object-cover bg-fixed'} src="/img/section-news-fon.png" alt=""/>
                </div>
                <SectionTitle className={'relative z-[30] sm:hidden'} title={'САМЫЕ СВЕЖИЕ'} subTitle={'НОВОСТИ ПРОЕКТА'}/>
                <div className={'relative z-[35] container pb-[70px]'}>
                    <SectionTitle className={'hidden sm:block'} title={'САМЫЕ СВЕЖИЕ'} subTitle={'НОВОСТИ ПРОЕКТА'}/>
                    {<SalesSection />}
                </div>
            </section>
            <section className={'w-full py-7 sm:pt-[131px] mb-12 sm:mb-[100px]'}>
                <SectionTitle className={'sm:hidden'} title={'ЛЮБИШЬ БОНУСЫ?'} subTitle={'ПРИСОЕДИНЯЙСЯ К НАМ В СОЦ.СЕТЯХ'} />
                <div className={'container'}>
                    <SectionTitle className={'hidden sm:block'} title={'ЛЮБИШЬ БОНУСЫ?'} subTitle={'ПРИСОЕДИНЯЙСЯ К НАМ В СОЦ.СЕТЯХ'} />
                    <div className={'grid grid-cols-2 grid-rows-2 sm:grid-cols-1 lg:grid-cols-2 gap-5 lg:grid-rows-2'}>
                        <SocialPages bgColor={'bg-radial-blue-700'} text={'узнай новости проекта перым просто вступив в наше сообщество'} iconMob={<VkMobIcon />} icon={<VkLogo />} iconName={'VKонтакте'} href="https://vk.com/dsrpproject"/>
                        <SocialPages bgColor={'bg-radial-red-500'} text={'узнай новости проекта перым просто вступив в наше сообщество'} iconMob={<YoutubeMobIcon />} icon={<YoutubeLogoIcon />} iconName={'Youtube'} href="https://www.youtube.com/@games-syndicate"/>
                        <SocialPages bgColor={'bg-radial-gray-50'} text={'узнай новости проекта перым просто вступив в наше сообщество'} iconMob={<DiscordMobIcon />} icon={<DiscordLogoIcon />} iconName={'Discord'} href="https://dsc.gg/dubrovskiy-syndicate"/>
                        <SocialPages bgColor={'bg-radial-blue-50'} text={'узнай новости проекта перым просто вступив в наше сообщество'} iconMob={<TelegramLogoMobIcon />} icon={<TelegramLogoIcon />} iconName={'Telegram'} href=""/>
                    </div>
                </div>
            </section>
        </>
    )
}