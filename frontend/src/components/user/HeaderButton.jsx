import GreenBadge from '../ui/GreenBadge';

export default function HeaderButton({ primary, secondary, buttonText, icon }) {
	return (
		<div className="px-[20px] max-2xl:flex-col max-2xl:justify-start max-2xl:items-start max-lg:flex-row max-lg:justify-between text-[14px] rounded-[5px] rounded-b-none py-[13.5px] w-full bg-[rgba(255,255,255,5%)] flex items-center justify-between">
			<div className="flex flex-col">
				<span className="text-[rgba(255,255,255,45%)]">{primary}</span>
				<span className="font-bold">{secondary}</span>
			</div>
			<GreenBadge icon={icon}>{buttonText}</GreenBadge>
		</div>
	);
}
