export const Textarea = ({className, ...props}) => {
    return (
        <textarea  className={`${className} rounded-[5px] p-[14px] text-sm/4 font-semibold text-[rgba(255,255,255,0.37)] bg-[rgba(255,255,255,0.08)] focus:outline-none outline-none`} {...props} />
    )
}