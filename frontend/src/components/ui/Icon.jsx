import {TinkoffIcon} from "../Icons/TinkoffIcon.jsx";
import {SberbankIcon} from "../Icons/SberbankIcon.jsx";
import { XIcon } from "../Icons/xIcon.jsx";
import { ErrorInput } from "../Icons/ErrorInput.jsx";
import {SpbIcon} from "../Icons/SpbIcon.jsx";
import {VisaIcon} from "../Icons/VisaIcon.jsx";
import {MasterCardIcon} from "../Icons/MasterCardIcon.jsx";
import {MirIcon} from "../Icons/MirIcon.jsx";
import {IoMoneyIcon} from "../Icons/IoMoneyIcon.jsx";
import {DolyamiIcon} from "../Icons/DolyamiIcon.jsx";

export const Icon = ({type, className}) => {
    return {
        'tinkoff': <TinkoffIcon className={className}/>,
        'sberbank': <SberbankIcon className={className}/>,
        'spb': <SpbIcon className={className} />,
        'visa': <VisaIcon className={className}/>,
        'mastercard': <MasterCardIcon className={className}/>,
        'mir': <MirIcon className={className}/>,
        'ioMoney': <IoMoneyIcon className={className} />,
        'dolyami': <DolyamiIcon className={className} />,
        'close': <XIcon className={className}/>,
        'errorInput': <ErrorInput className={className}/>,
    }[type]
}