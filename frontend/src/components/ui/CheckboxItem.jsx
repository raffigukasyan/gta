import {TopUpCheckox} from "./TopUpCheckox.jsx";

export const CheckboxItem = ({checked, children, onChange, disabled}) => {
    return (
        <div className={'py-[11px] px-[17px] bg-[rgba(15,17,22,1)] flex items-center gap-x-5 max-lg:gap-x-3 max-lg:px-[10px]'}>
            <TopUpCheckox className={'flex-grow flex-shrink-0'} disabled={disabled} enabled={checked} onChange={onChange}/>
            <span className={'text-[10px] sm:text-sm'}>
                {children}
            </span>
        </div>
    )
}