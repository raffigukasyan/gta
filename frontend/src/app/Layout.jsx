import {Header} from "../components/Header.jsx";
import {Outlet} from "react-router-dom";
import {Footer} from "../components/Footer.jsx";

export default function Layout() {
    return <>
        <Header />
        <main className='w-full h-full'>
            <Outlet />
        </main>
        <Footer />
    </>
}