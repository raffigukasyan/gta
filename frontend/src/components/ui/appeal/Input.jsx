export const Input = ({className, value, onChange, ...props}) => {
    return (
        <input type="text" {...props} value={value} onChange={onChange} className={`py-[11px] px-[14px] font-semibold text-xs text-[rgba(255,255,255,0.37)] rounded-[5px] bg-[rgba(255,255,255,0.08)] outline-none focus:outline-none ${className}`} />
    )
}