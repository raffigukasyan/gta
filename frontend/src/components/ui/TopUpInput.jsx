import { Icon } from "@iconify/react/dist/iconify.js"
import servers from "../../consts/servers"

export const TopUpInput = ({className, icon, onChange, ...props}) => {
    return (
        <div className={'flex items-center gap-x-4 py-[14px] rounded-md px-4 bg-[rgba(31,33,40,1)]'}>
            {
                icon ?? null
            }
            {props?.type !== 'select' ? 
                <input onChange={(e) => onChange(e.target.value)} className={`w-full text-sm bg-transparent !border-0 !outline-none text-[rgba(255,255,255,0.5)] ${className}`} {...props} />
                : <div className="relative w-full max-h-[20px]">
                    <select onChange={(e) => onChange(e.target.value)} {...props} className="custom-select-i max-h-[20px] !border-[1px] !border-solid !border-[rgba(31,33,40,1)] !outline-none bg-inherit text-[rgba(255,255,255,0.5)] text-sm w-full" name="server" id="">
                        <option className="!bg-[rgba(31,33,40,1)] text-white" value="1">{servers.first}</option>
                        <option className="!bg-[rgba(31,33,40,1)] text-white" value="2">{servers.second}</option>
                    </select>
                    <Icon icon="ri:arrow-down-s-line" className="w-5 h-5 text-[rgba(255,255,255,0.5)] absolute right-0 top-0" />
                </div>
                    
            }
        </div>
    )
}