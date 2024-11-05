export default function CardItem({ children, className }) {
    return (
        <div className={`flex items-center pl-[16px] text-white ${className}`}>
            {children}
        </div>
    )
}