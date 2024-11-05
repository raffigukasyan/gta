import { ListboxButton, Listbox, ListboxOptions, ListboxOption } from '@headlessui/react'

import {ChevronDownIcon} from "../Icons/ChevronDownIcon.jsx";

export const SelectFilter = ({options, title, optionsClass, select, onChange, anchor}) => {

    return (
        <Listbox  value={select} onChange={onChange}>
                   <ListboxButton  className={`relative flex items-center justify-between w-full py-3 px-[13px] rounded-lg bg-white/5 text-left text-xs font-semibold text-white
                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25`}>
                       {select?.value ?? title}
                       <ChevronDownIcon />
                   </ListboxButton>
                   <ListboxOptions portal={ anchor?.length ? true : false } anchor={anchor ?? false} className={`w-[var(--button-width)] flex flex-col gap-y-4 rounded-[9px] z-[30]  py-4 px-[17px] ${optionsClass}`}>
                       {options?.map((option) => (
                           <ListboxOption key={option?.id} value={option} className="py-[13px] rounded-[5px] px-[14px] bg-[rgba(255,255,255,0.08)] data-[focus]:bg-black/40 cursor-pointer">
                               <span className={'text-white text-xs font-semibold'}>{option?.value}</span>
                           </ListboxOption>
                       ))}
                   </ListboxOptions>
               </Listbox>
    )
}