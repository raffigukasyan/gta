import {SecurityIcon} from "../components/Icons/SecurityIcon.jsx";
import {TopUpBalance} from "../components/TopUpBalance.jsx";


export default function ReplenishmentBalance() {
    return (
        <section className={'pt-[208px] relative mb-[54px] max-lg:mb-[35px] w-full h-full'}>
            <div className={'w-full h-full absolute top-0 left-0'}>
                <img className={'h-full lg:h-full object-cover'} src="/img/balance-fon.png" alt=""/>
            </div>
            <div className={'hidden xl:block absolute bottom-0 w-full '}>
                <img className={''} src="/img/balance-person.png" alt=""/>
            </div>
            <div className={'relative z-[40] w-full flex gap-y-6 gap-x-4 container lg:flex-row flex-col lg:justify-between'}>
                <div className={'w-full'}>
                    <div className={'flex items-center flex-col sm:flex-row gap-x-5'}>
                        <h3 className={'text-[24px] sm:text-[40px] font-russo leading-7 sm:leading-[48.2px] text-white'}>Пополнение баланса
                            аккаунта</h3>
                        <div className={'hidden sm:inline-flex'}>
                            <div className={'flex items-center rounded-md  gap-x-2 p-2 bg-[rgba(38,87,38,0.4)]'}>
                                <SecurityIcon className={'hidden sm:block'}/>
                                <span
                                    className={'text-sm leading-[14px] uppercase text-transparent font-bold bg-clip-text bg-[linear-gradient(180deg,_#72AB6C_0%,_#99C894_100%)]'}>Безопасно</span>
                            </div>
                        </div>
                    </div>
                    <p className={'max-w-[354px] sm:max-w-[588px] mb-2 sm:mb-0 text-white text-sm sm:text-lg leading-5 sm:leading-7'}>
                        В данном разделе Вы можете приобрести Амазинги за реальные деньги. Мы принимаем практически
                        все способы оплат
                    </p>
                    <div className={'inline-flex sm:hidden'}>
                        <div className={'flex items-center rounded-md  gap-x-2 p-2 bg-[rgba(38,87,38,0.4)]'}>
                            <SecurityIcon className={'sm:hidden block'}/>
                            <span
                                className={'text-sm leading-[14px] uppercase text-transparent font-bold bg-clip-text bg-[linear-gradient(180deg,_#72AB6C_0%,_#99C894_100%)]'}>Безопасно</span>
                        </div>
                    </div>
                </div>
                <div className={'max-w-[544px] w-full'}>
                    <TopUpBalance/>
                </div>
            </div>
        </section>
    )
}