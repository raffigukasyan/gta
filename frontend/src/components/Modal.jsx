import { Icon } from "./ui/Icon";

export default function Modal({ children, title, subTitle, show, onClose }) {
	return (
		<div className={`overflow-y-auto flex overflow-x-hidden fixed top-0 right-0 left-0 z-[10000] bg-[rgba(0,0,0,0.6)] justify-center items-center w-full md:inset-0 h-full max-h-full ${show ? '' : 'hidden'}`}>
			<div className="relative w-full max-w-[461px] max-h-full">
				<div className="relative px-14 py-[55.5px] bg-radial-modal rounded-[7px]">
					<div className="flex items-center justify-left flex-col">
						<h3 className="uppercase text-2xl font-semibold font-russo text-white">
							{title}
						</h3>
                        <h3 className="text-[#676A6F] font-gilroy text-center pt-[7px] text-sm">
                            {subTitle}
                        </h3>
					</div>

					<div className="flex w-full mt-[22px]">
						{children}
					</div>
                    <div className="mt-[22px] flex justify-center font-gilroy">
                        <div onClick={onClose} className="cursor-pointer p-1 border-[1px] border-[rgba(255,255,255,25%)] transition-all duration-300 hover:border-[#FF2C45] [&>*]:hover:stroke-[#FF2C45]">
							<Icon type="close" className="stroke-white transition-all duration-300" />
						</div>
                    </div>
				</div>
			</div>
		</div>
	);
}
