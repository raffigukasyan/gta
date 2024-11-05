import { Icon } from "@iconify/react/dist/iconify.js";

export default function HouseItem({ text, idx }) {
	return (
		<div className={`flex py-[20px] max-2xl:flex-col max-2xl:justify-start max-2xl:items-start justify-between max-lg:flex-row max-lg:items-center max-lg:justify-between ${text ? 'items-center' : '!flex-col !items-start'}`}>
			<div className="flex flex-col">
				<span className="text-[rgba(255,255,255,50%)]">
					Личный дом №{idx}
				</span>
				<span className="text-[16px] font-semibold">{text}</span>
				{text ? <div className="flex hidden max-lg:flex max-w-fit bg-white text-black p-[9px] py-[3px] items-center gap-1 rounded-[10px]">
					<Icon
						icon={"material-symbols:garage-home"}
						className="text-[rgba(29,29,29,60%)]"
					/>
					<span>2</span>
				</div> : null}
			</div>
			{text ? (
				<>
					<div className="flex max-lg:hidden bg-white text-black p-[9px] py-[3px] items-center gap-1 rounded-[10px]">
						<Icon
							icon={"material-symbols:garage-home"}
							className="text-[rgba(29,29,29,60%)]"
						/>
						<span>2</span>
					</div>
					<div className="flex">
						<div className="flex items-center">
							<div className="p-[12px] bg-[#3FBAFF] rounded-[8px]">
								<Icon icon="carbon:location-filled" />
							</div>
							<div className="flex flex-col pl-[12px]">
								<span className="text-[rgba(255,255,255,50%)]">
									Вайнвуд-хиллз
								</span>
								<span className="font-semibold">
									Ричманд стрит
								</span>
							</div>
						</div>
					</div>{" "}
				</>
			) : <span className="text-[#FF6B6B]">У вас пока нет во владении {idx}-его дома</span>}
		</div>
	);
}
