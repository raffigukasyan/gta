export const ItemHead = ({className, head, beforeHead}) => {
    return (
        <div
            className={`w-full mb-4 flex max-lg:gap-y-5 max-lg:flex-col justify-between items-center py-3 px-5 bg-[rgba(255,255,255,0.05)] ${className}`}>
            <div className={'flex max-w-[210px] flex-col'}>
                        <span
                            className={'text-sm font-medium text-[rgba(255,_255,_255,_0.45)]'}>{beforeHead}</span>
                <span className={'text-sm font-bold text-white'}>{head}</span>
            </div>
        </div>
    )
}