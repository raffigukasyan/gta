export default function ErrorMessage({text}) {
    return text ?
    <span className="text-[rgba(255,44,69,1)] text-[10px] max-lg:text-[10px]">
        {text}
    </span> : null
}