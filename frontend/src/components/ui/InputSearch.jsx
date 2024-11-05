import {SearchIcon} from "../Icons/SearchIcon.jsx";

export const InputSearch = ({className, placeholder, value, onChange}) => {
    return (
        <div  className={`py-3 flex justify-between items-center px-[14px]  rounded-[5px] bg-[rgba(255,255,255,0.08)] ${className}`}>
            <input type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                   className={'text-white text-xs bg-transparent border-none outline-none focus:outline-none'}
                   placeholder={placeholder}/>
            <SearchIcon />
        </div>
    )
}