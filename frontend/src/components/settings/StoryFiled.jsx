export const StoryFiled = ({item}) => {
    const {date = '', name=  '', projectName='', ip=  ''} = item
    return <div
        className={'w-full flex justify-between items-center py-[18px] px-[18px] rounded-[5px] bg-[rgba(255,255,255,0.04)]'}>
        <div className={'flex max-lg:flex-col max-lg:items-start max-lg:gap-y-[19px] items-center gap-x-5'}>
            <div className={'text-white/45 text-sm/4'}>{date}</div>
            <div className={'text-sm/4 font-semibold text-[rgba(63,186,255,1)]'}> {name} <span className={'text-[rgba(255,255,255,0.22)]'}> ({projectName})</span></div>
        </div>
        <div className={'text-sm/4 font-semibold  text-white]'}>IP - {ip}</div>
    </div>
}