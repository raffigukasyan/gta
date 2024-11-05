import {Disclosure, DisclosurePanel, DisclosureButton} from "@headlessui/react";
import {ChevronDownIcon} from "../Icons/ChevronDownIcon.jsx";

export const DisclosureItem = ({head,  children}) => {
    return (
        <Disclosure as="div" className="" defaultOpen={true}>
            <DisclosureButton className="group bg-[rgba(255,255,255,0.08)] py-[11px] px-[14px] rounded-tl-[5px] rounded-tr-[5px] flex w-full items-center justify-between">
            <span className="text-sm/4 font-medium text-white group-data-[hover]:text-white/80">
              {head}
            </span>
                <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="bg-[rgba(255,255,255,0.04)] py-4 px-6 text-sm font-medium text-white">
                {children}
            </DisclosurePanel>
        </Disclosure>
    )
}