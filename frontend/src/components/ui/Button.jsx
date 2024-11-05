export const Button = ({className, ...props}) => {
    return (
        <button className={`flex justify-center items-center rounded-md ${className}`} {...props}>
                {props.children}
        </button>
    )
}