export default function PersonItem({ field, value, color }) {
    return (
        <div className="bg-[rgba(255,255,255,4%)] mb-[6px] rounded-[5px] flex justify-between px-[18px] py-[15.5px]">
            <span className="text-[rgba(255,255,255,45%)]">{field}</span>
            <span className={`${color ?? 'text-white'} font-bold`}>{value}</span>
        </div>
    )
}