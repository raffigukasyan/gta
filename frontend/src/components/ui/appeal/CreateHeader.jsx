import BlueButton from "../BlueButton.jsx";
import {useNavigate} from "react-router-dom";

export const CreateHeader = () => {
    const navigate = useNavigate();
    return ( 
    <>
        <div className={'mb-[22px] max-lg:hidden flex justify-between py-[13px] px-5 bg-[rgba(255,255,255,0.05)]'}>
            <div className={'flex max-w-[210px] flex-col '}>
                    <span
                        className={'text-sm font-medium text-[rgba(255,_255,_255,_0.45)]'}>Список и создание</span>
                    <span className={'text-sm font-bold text-white'}>Обращение с вашим участием</span>
            </div>
            <div className={'flex items-center gap-x-5'}>
               <span className={'font-semibold text-nowrap text-sm text-white'}> 03.09.2024 20:54</span>
                <BlueButton onClick={() => navigate('/appeal')} className={'w-[117px] text-sm font-semibold text-white  py-3'}>
                    Назад
                </BlueButton>
            </div>
        </div>
        <div id="appeal" className="hidden max-lg:flex">
            <BlueButton onClick={() => navigate('/appeal')} className={'my-2 mb-4 text-sm font-semibold text-white  py-3'}>
                Назад
            </BlueButton>
        </div>
    </>
    )
}