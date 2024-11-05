import { Icon } from "@iconify/react";

export default function InfoCard({ icon, iconColor, field, text }) {
	return (
		<div className="flex rounded-[3px] mb-[10px] bg-[rgba(255,255,255,4%)] items-center justify-between py-[10px] px-[13px]">
			<div className="flex items-center">
				<div className="flex items-center">
					<div className={`w-6 h-6 flex items-center justify-center ${iconColor} rounded-[2.65px]`}>
						<Icon className="text-black" icon={icon} />
					</div>
					<span className="pl-[14px] text-[rgba(255,255,255,45%)]">
						{field}
					</span>
				</div>
			</div>
			<div className="text-white font-bold">{text}</div>
		</div>
	);
}
