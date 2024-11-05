import {Checkbox} from "@headlessui/react";
export const TopUpCheckox = ({enabled, className,  onChange, required = false, disabled = false}) => {
    return <Checkbox
        checked={enabled}
        onChange={onChange}
        disabled={disabled}
        aria-required={required}
        className={`group size-4 rounded-[2px]  border border-solid border-[rgba(78,83,100,1)] border-0 bg-[#1A1D22] ${className}`}
    >
        <svg className="hidden size-4  group-data-[checked]:block" width="45" height="41" viewBox="0 0 45 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_215_469)">
                <path d="M13 18L18 23L31.5 9.5" stroke="#96FF65" strokeWidth="1.5"/>
            </g>
            <defs>
                <filter id="filter0_d_215_469" x="0.469727" y="0.969727" width="43.5605" height="39.0908"
                        filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="6"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.588235 0 0 0 0 1 0 0 0 0 0.396078 0 0 0 1 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_215_469"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_215_469" result="shape"/>
                </filter>
            </defs>
        </svg>
    </Checkbox>
}