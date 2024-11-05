import {ErrorBoundary} from "react-error-boundary";
import {createRoutesFromElements, Route, RouterProvider, createBrowserRouter} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "../pages/Home.jsx";
import ReplenishmentBalance from "../pages/ReplenishmentBalance.jsx";
import Account from "../pages/user/Account.jsx";
import {Forbse} from "../pages/Forbse.jsx";
import {Appeal} from "../pages/user/Appeal.jsx";
import {CreateAppeal} from "../pages/user/CreateAppeal.jsx";
import {Settings} from "../pages/user/Settings.jsx";
import {EditAppeal} from "../pages/user/EditAppeal.jsx";
import Admin from "../pages/user/appeals/Admin.jsx";
import App from "../pages/admin/Index.jsx";
import ChangePasswordConfirm from "../components/user/ChangePasswordConfirm.jsx";
import ChangeEmailConfirm from "../components/user/ChangeEmailConfirm.jsx";

export default function Router() {


    const routers = createRoutesFromElements(
        <>
            <Route
                path={'/'}
                element={<Layout />}
            >
                <Route index element={<Home />} />
                <Route path={'replenishment'} element={<ReplenishmentBalance />} />
                <Route path={'/forbes'} element={<Forbse />} />
            </Route>
            <Route path={'account'} element={<Account />} />
            <Route path={'appeal'} element={<Appeal />} />
            <Route path={'appeal/create'} element={<CreateAppeal />} />
            <Route path={'appeal/edit/:id'} element={<EditAppeal />} />
            <Route path={'settings'} element={<Settings />}/>
            <Route path={'/admin/*'} element={<App />} />
            <Route path={'/reset-password/'}  element={<ChangePasswordConfirm />} />
            <Route path={'/confirm-email-change/'}  element={<ChangeEmailConfirm />} />
        </>
    )

    const router = createBrowserRouter(routers, {})
    return (
        <ErrorBoundary fallback={<div>Error</div>}>
            <RouterProvider router={router} />
        </ErrorBoundary>
    )
}