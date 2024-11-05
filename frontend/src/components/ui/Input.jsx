import { useEffect, useRef } from "react";
import { Icon } from "./Icon";
import { Icon as Icon2 } from "@iconify/react/dist/iconify.js";
import servers from '../../consts/servers';

export default function Input({ value, onChange, type, placeholder, className, required, errors, deleteError }) {
    const inputRef = useRef(null);
    
    useEffect(() => {
        const clickDeleteErrorValue = (e) => {
            e.target.value = '';
            deleteError();
            onChange('');
        }
        
        if(errors?.length) {
            inputRef.current.value = errors;
            inputRef.current.addEventListener('click', (e) => clickDeleteErrorValue(e), {once: true})
        }

        return () => {
            inputRef?.current?.removeEventListener('click', (e) => clickDeleteErrorValue(e))
        }
    }, [errors, value])
    return (
        <div className="relative flex items-center">
            {type === 'select' ? 
            <div className="w-full relative">
                <select onChange={(e) => onChange(e.target.value)} className={`w-full py-6 px-3 placeholder-white text-sm bg-[#1B1F29] rounded-[3px] transition-all hover:bg-[#232835] duration-300 focus:bg-[#363D51] border-[1px] border-[rgba(255,255,255,25%)] outline-none focus:outline-none custom-select-i !h-full ${errors ? 'text-[#FF2C45]' : 'text-white'} ${className}`}>
                    <option defaultChecked value={1}>{servers.first}</option>
                    <option value={2}>{servers.second}</option>
                </select>
                <Icon2 icon="ri:arrow-down-s-line" className="w-5 h-5 text-[rgba(255,255,255,0.5)] absolute right-0 mt-6 top-0" />
            </div>
            :
            <input
                type={type ?? 'text'}
                value={value}
                ref={inputRef}
                autoComplete="on"
                name={'name'}
                className={`w-full py-6 px-3 placeholder-white text-sm bg-[#1B1F29] rounded-[3px] transition-all hover:bg-[#232835] duration-300 focus:bg-[#363D51] border-[1px] border-[rgba(255,255,255,25%)] outline-none focus:outline-none ${errors ? 'text-[#FF2C45]' : 'text-white'} ${className}`}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                required={required}
             />}
             {errors && <Icon type='errorInput' className={`absolute w-12 h-12 -left-[23px] ${errors ? 'flex' : 'hidden'}`} />}
        </div>
    )
}