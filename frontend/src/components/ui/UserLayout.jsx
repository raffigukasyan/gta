import LeftMenu from "./LeftMenu";
import {Header} from "../../components/Header.jsx";
import {Footer} from "../../components/Footer.jsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function UserLayout({ children }) {
    return (
        <>
            <Header noAbsolute />
            <img className="-z-[1] absolute top-0 max-w-full w-full h-full" src="/img/account-bg.png" alt="" />
            <section className="container font-gilroy text-white mt-[56px] mb-[107px] w-full h-full grid grid-cols-[minmax(200px,303px)_25px_minmax(200px,1fr)_25px_1fr_1fr] max-lg:grid-cols-1">
                <section className="col-span-2 max-lg:col-span-6">
                    <LeftMenu />
                </section>
                {children}
            </section>
            <Footer />
            <ToastContainer />
        </>
    )
}