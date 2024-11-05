import {forwardRef} from "react";

export const BankCardItem = forwardRef(({className, children, props}, ref) => {
    return (
        <div ref={ref}  className={`flex items-center justify-center sm:w-[72px] w-[109px] h-[72px] rounded-md bg-[rgba(31,_33,_40,_1)] ${className}`} {...props} >
            {children}
        </div>
    )
})