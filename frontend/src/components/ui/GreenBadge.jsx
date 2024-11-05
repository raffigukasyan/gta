import { Icon } from "@iconify/react/dist/iconify.js";

export default function GreenBadge({ children, icon }) {
    return (
        <button className="flex bg-[#C7FF8E] items-center text-[#3C3C3C] font-bold rounded-[6px] !px-[13px] !py-[8px] shadow-[0px_8px_19.4px_rgba(199,255,142,0.17)]">
        <Icon
            icon={icon}
            className="w-4 h-4"
        />
        <span className="pl-2">{children}</span>
    </button>
    )
}