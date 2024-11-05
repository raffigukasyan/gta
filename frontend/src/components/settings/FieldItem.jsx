export const FieldItem = ({ label, value, onClick, btnLabel }) => {
    return (
        <div className={'w-full flex justify-between items-center py-[18px] px-[18px] rounded-[5px] bg-[rgba(255,255,255,0.04)]'}>
            <div className={'flex max-lg:flex-col max-lg:items-start items-center gap-x-5'}>
                <div className={'text-white/45 max-lg:text-xs text-sm/4'}>{label}</div>
                <div className={'text-white max-lg:text-xs text-sm/4 font-semibold'}>{value}</div>
            </div>
            <div onClick={onClick} className={'text-sm/4 cursor-pointer font-semibold max-lg:text-xs underline text-[rgba(63,186,255,1)]'}>{btnLabel ?? 'Изменить'}</div>
        </div>
    )
}