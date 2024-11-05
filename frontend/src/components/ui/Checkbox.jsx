export default function Checkbox({ value, onChange, label, required }) {
	return (
		<div className="flex items-start justify-start">
			<input
				type="checkbox"
				id="checkbox"
				className="hidden peer"
				//onChange={(e) => onChange(e.target.checked)}
			/>
			<label
				className="flex items-center justify-center w-9 shrink-0 h-9 bg-[rgba(255,255,255,5%)] border-[1px] border-[rgba(255,255,255,25%)] peer-checked:[&>*]:flex"
				htmlFor="checkbox">
                    <img src="/img/check.png" className="w-[35px] pt-1 hidden" alt="" />
                </label>
			<span className="ml-[20px] max-w-[160px] text-white text-sm">{label}</span>
		</div>
	);
}
