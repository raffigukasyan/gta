import { Icon } from "@iconify/react/dist/iconify.js";

export default function BusinessItem({ text, idx }) {
	return (
		<div className={`flex py-[20px] max-lg:justify-between max-2xl:flex-col max-2xl:justify-start max-2xl:items-start max-lg:flex-row max-lg:items-center justify-between ${text ? 'items-center' : '!flex-col !items-start'}`}>
			<div className="flex flex-col">
				<span className="text-[rgba(255,255,255,50%)]">
					Личный бизнес №{idx}
				</span>
				<span className="text-[16px] font-semibold">{text}</span>
			</div>
			{text ? (
				<>
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
			) : <span className="text-[#FF6B6B]">У вас пока нет во владении {idx}-его бизнеса</span>}
		</div>
	);
}
