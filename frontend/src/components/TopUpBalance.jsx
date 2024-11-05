
import {RadioGroup, Field, Radio} from "@headlessui/react";
import {useEffect, useState} from "react";
import {BankCardItem} from "./ui/BankCardItem.jsx";
import {Icon} from "./ui/Icon.jsx";
import {TopUpInput} from "./ui/TopUpInput.jsx";
import {MailIcon} from "./Icons/MailIcon.jsx";
import {PersonIcon} from "./Icons/PersonIcon.jsx";
import {RubliIcon} from "./Icons/RubliIcon.jsx";
import {TopUpCheckox} from "./ui/TopUpCheckox.jsx";
import {CheckboxItem} from "./ui/CheckboxItem.jsx";
import BlueButton from "./ui/BlueButton.jsx";
import { CardIcon } from "./Icons/CardIcon.jsx";
import { GridIcon } from "./Icons/GridIcon.jsx";
import servers from "../consts/servers.js";
import { freeKassa, unitPay } from "../utils/axios.js";

export const TopUpBalance = () => {
    const banks = [
        {
            id: 5,
            type: 'ioMoney',
            system: 'u',
            slug: 'yandexpay'
        },
        {
            id: 1,
            type: 'tinkoff',
            system: 'u',
            slug: 'tinkoffpay'
        },
        {
            id: 2,
            type:['visa', 'mastercard', 'mir'],
            system: 'u',
            slug: 'card'
        },
        {
            id: 6,
            type:['visa', 'mastercard'],
            system: 'u',
            slug: 'cardForeign'
        },
        {
            id: 7,
            type: 'fkwallet_rub',
            system: 'f',
            slug: 1
        },
        {
            id: 8,
            type: 'fkwallet_usd',
            system: 'f',
            slug: 2
        },
        {
            id: 9,
            type: 'ioMoney',
            system: 'f',
            slug: 6
        },
        {
            id: 10,
            type:['visa'],
            system: 'f',
            slug: 4
        },
        {
            id: 11,
            type:['visa', 'mastercard'],
            system: 'f',
            slug: 41
        },
        {
            id: 12,
            type:['mastercard'],
            system: 'f',
            slug: 8
        },
        {
            id: 13,
            type:['mir'],
            system: 'f',
            slug: 12
        },
        {
            id: 14,
            type:'onlinebank',
            system: 'f',
            slug: 13
        },
        {
            id: 15,
            type:  'spb',
            system: 'f',
            slug: 42
        },
        {
            id: 16,
            type:  'steam',
            system: 'f',
            slug: 27
        },
        {
            id: 17,
            type:  'perfect_money_usd',
            system: 'f',
            slug: 3
        },
        {
            id: 18,
            type:  'bitcoin',
            system: 'f',
            slug: 24
        },
        {
            id: 19,
            type:  'litecoin',
            system: 'f',
            slug: 25
        },
        {
            id: 20,
            type:  'ethereum',
            system: 'f',
            slug: 26
        },
        {
            id: 21,
            type:  'erc20',
            system: 'f',
            slug: 14
        },
        {
            id: 22,
            type:  'trc20',
            system: 'f',
            slug: 15
        },
        {
            id: 23,
            type:  'bnb',
            system: 'f',
            slug: 17
        },
        {
            id: 24,
            type:  'tron',
            system: 'f',
            slug: 39
        },


        // {
        //     id: 6,
        //     type: 'dolyami'
        // }
    ];
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(false);

    const procentCheckbox = [
        {id: 1, procent: 5, checked: checked1, setChecked: setChecked1, content: 'При пополнении <b>от 1000 руб</b>. Итого <b>1050 DC</b>'},
        {id: 2, procent: 10, checked: checked2, setChecked: setChecked2,content: 'При пополнении от <b>5000 руб</b>. Итого <b>5500 DC</b>'},
        {id: 3, procent: 15, checked: checked3, setChecked: setChecked3, content: 'При пополнении от <b>15000 руб.</b> Итого <b>17250 DC</b>'},
        {id: 4, procent: 20, checked: checked4, setChecked: setChecked4, content: 'При пополнении от <b>25000 руб.</b> Итого <b>30000 DC</b>'}
    ]
    const [selectedBank, setSelectedBank] = useState();
    const [termsOfOffer, setTermsOfOffer] = useState(true)
    const [agreement, setAgreement] = useState(true);

    const [error1, setError1] = useState(false);
    const [error2, setError2] = useState(false);

    const user = JSON.parse(localStorage.getItem('user'));

    const [email, setEmail] = useState(user.email);
    const [login, setLogin] = useState(user.login);
    const [sum, setSum] = useState();
    const localServer = localStorage.getItem('server');
    const [server, setServer] = useState(localServer);

    useEffect(() => {
        if(server != localServer) {
            setEmail("");
            setLogin("");
        } else {
            setEmail(user.email);
            setLogin(user.login)
        }
    }, [server])

    useEffect(() => {
        if(sum >= 1000 && sum <= 4999) {
            setChecked1(true)
            setChecked2(false)
            setChecked3(false)
            setChecked4(false)
        } else if(sum >= 5000 && sum <= 14999) {
            setChecked1(false)
            setChecked3(false)
            setChecked4(false)
            setChecked2(true)
        } else if (sum >= 15000 && sum <= 24999) {
            setChecked1(false)
            setChecked3(true)
            setChecked4(false)
            setChecked2(false)
        } else if (sum >= 25000) {
            setChecked1(false)
            setChecked3(false)
            setChecked4(true)
            setChecked2(false)
        } else {
            setChecked1(false)
            setChecked3(false)
            setChecked4(false)
            setChecked2(false)
        }
    }, [sum])

    const postForm = async (e) => {
        e.preventDefault();
        if(!termsOfOffer) {
            setError1(true);
            return
        } else {
            setError1(false)
        }
        if(!agreement) {
            setError2(true);
            return
        } else {
            setError2(false)
        }
        

        const url = await donate();
        
        window.location.href = url;
    }

    const donate = async () => {
        let jsonData = [{
            name: 'Платеж',
            count: +sum,
            price: 1,
            type: "commodity"
        }];
        const i = selectedBank.slug
        const cashItems = btoa(unescape(encodeURIComponent(JSON.stringify(jsonData))));
        if(selectedBank.system === 'f') {
            return await freeKassa({account: login, sum: +sum, email, cashItems, i})
        } else {
            return await unitPay({account: login, sum: +sum, email, cashItems, i})
        }
    }

    return (
        <form onSubmit={postForm}>
            <p className={'font-bold text-sm mb-2 text-white font-gilroy'}>Выберите способ оплаты</p>
            <p className={'max-w-[354px] text-sm leading-[16px] font-gilroy text-white mb-3'}>Мы принимаем все способы оплаты,
                поэтому будьте внимательными при выборе способа оплаты</p>
            <div className={'flex flex-col gap-y-[9px] font-gilroy'}>
                <RadioGroup className={'grid grid-cols-6 grid-row-3 max-sm:grid-cols-3 max-sm:grid max-md:flex flex-wrap gap-[22px] mb-[15px] sm:gap-0 !gap-y-2 sm:gap-x-4'} value={selectedBank} onChange={setSelectedBank}>
                    {banks.map((bank) => (
                        <Field key={bank.id} className="flex items-center gap-2 basis-[14.217%]">
                            <Radio
                                value={bank}
                                on
                            >
                                {({checked}) => (
                                    <BankCardItem className={`cursor-pointer ${checked ? 'bg-green-500' : ''}`}>
                                        {
                                            Array.isArray(bank.type) ? <div className={'flex flex-col'}>
                                                    {bank.type.map((el) => <Icon key={el} type={el}/>)}
                                                </div>
                                                : <Icon type={bank.type}/>
                                        }
                                    </BankCardItem>
                                )}
                            </Radio>
                        </Field>
                    ))}
                </RadioGroup>
                <TopUpInput className={'max-h-[48px]'} value={server} onChange={(e) => setServer(e)} placeholder={'Выберите ваш сервер'} type={'select'} icon={<GridIcon/>}/>
                <TopUpInput placeholder={'Введите вашу почту'} type={'email'} icon={<MailIcon/>} value={email} onChange={(e) => setEmail(e)}/>
                <TopUpInput placeholder={'Введите ваш логин'} type={'text'}
                            icon={<PersonIcon className={'w-[14px] h-[14px] text-[#3FBAFF]'}/>} value={login} onChange={(e) => setLogin(e.target.value)}/>
                <TopUpInput placeholder={'Введите сумму'} required type={'number'} icon={<RubliIcon/>} value={sum} onChange={(e) => setSum(e)} />
                <div className={'flex gap-x-4 items-center mt-4'}>
                    <TopUpCheckox required enabled={termsOfOffer} onChange={setTermsOfOffer}/>
                    <label id="required" className={`text-xs text-white opacity-80 ${error1 ? 'text-red-600' : ''}`}>
                        Я ознакомился с <a target="_blank" id="required" className={`text-white underline font-semibold ${error1 ? 'text-red-600' : ''}`} href="/user-agreement.pdf">условиями оферты</a>
                    </label>
                </div>
                <div className={'flex gap-x-4 items-start'}>
                    <TopUpCheckox className={'flex-grow flex-shrink-0 '} required enabled={agreement} onChange={setAgreement}/>
                    <label id="required2" className={`text-xs text-white opacity-80 ${error2 ? 'text-red-600' : ''}`}>
                        Я согласен активировать контент в своей учетной записи DC PROJECT, понимая, что после этого не
                        смогу
                        расторгнуть договор или получить возмещение
                    </label>
                </div>
                <BlueButton className={'py-[23px] mt-[19px] text-lg bg-[rgba(52,182,255,1)] uppercase font-bold'}>
                    Пополнить баланс
                </BlueButton>
                <p className={'mt-[19px] font-bold text-sm mb-1 text-white'}>Выгодное пополнение</p>
                <p className={'max-w-[354px] text-sm leading-[16px] text-white mb-3'}>Выбери сумму, которая подохдит для тебя и получи бонус в размере от 5% до 20% к пополнению.</p>
                <div className={'grid grid-cols-2 grid-rows-2 gap-3 mb-14'}>
                    {procentCheckbox.map((el, i) => (
                        <CheckboxItem disabled={true} onChange={el.setChecked} checked={el.checked} key={el.id}>
                            <div className={' flex flex-col gap-y-1'}>
                                <span className={'text-white font-semibold text-[20px] leading-[23px] max-lg:text-sm'}>+{el.procent} %</span>
                                <span className={'text-white text-sm leading-4 max-lg:text-[9px]'} dangerouslySetInnerHTML={{__html: el.content}}></span>
                            </div>
                        </CheckboxItem>
                    ))}
                </div>
            </div>
        </form>
    )
}