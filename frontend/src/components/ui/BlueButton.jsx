import { Button } from "./Button";

export default function BlueButton({ onClick, className, children, ...props }) {

    return (
        <Button onClick={onClick} className={`w-full font-gilroy text-white px-6 border border-solid border-[rgba(63,_186,_255,_1)] bg-[rgba(52,_182,_255,_1)] transition-all duration-300 hover:shadow-[0px_0px_33.1px] hover:shadow-[rgba(52,_182,_255,_58%)] active:bg-[rgba(52,182,255,1)] outline-0 active:shadow-[inset_0px_0px_6.7px_rgba(0,0,0,0.62)] ${className}`} {...props}>
            {children}
        </Button>
    )
}