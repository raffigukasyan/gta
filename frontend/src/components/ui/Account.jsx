export default function Account({ number, name, level, active, idkey, setActive }) {
	return (
		<div onClick={() => setActive(idkey)} className={`cursor-pointer mt-[10px] bg-[rgba(255,255,255,3%)] w-full bg-[right_0px] bg-contain bg-no-repeat ${active ? 'bg-[url(/img/profile-active.png)]' : 'bg-[url(/img/profile-inactive.png)]'} rounded-[4px] flex flex-col gap-[13px]`}>
			<div className="w-full px-[17px] py-[34px]">
				<div className="w-full flex">
					<div className="flex flex-col basis-[70%] text-[14px]">
						<span>Персонаж №{number}</span>
						<span className="font-bold">
							{name} #{idkey}
						</span>
					</div>
					<div className="pl-[10px] max-lg:ml-auto max-lg:mr-[60px]">
						<div className="relative">
							<img src="/img/lvl.png" alt="" />
							<span className="absolute top-2 text-[14px] left-2">
								Ур.
							</span>
							<span className="absolute font-bold top-5 left-7 text-[14px]">
								{level}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
