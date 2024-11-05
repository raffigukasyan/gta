import { Layout, Menu } from "react-admin"
import { DisclosureItem } from '../../components/ui/DisclosureItem';

export default function AdminLayout({children}) {
    const accessLevel = JSON.parse(localStorage.getItem('adminUser'))?.access_level;
    
    const AdminMenu = () => (
        <Menu className="!w-[300px]">
            <DisclosureItem head={<>
                <span>Обращения</span>
                </>}>    
                {+accessLevel >= 3 ? <Menu.Item to={{
                    pathname: '/admin/appeals',
                    search: `filter=${JSON.stringify({ type: 'playerСomplaint' })}`
                }} primaryText="Жалоба на игрока" /> : null}
                {+accessLevel >= 5 ? <Menu.Item to={{
                    pathname: '/admin/appeals',
                     search: `filter=${JSON.stringify({ type: 'appealing' })}`
                }} primaryText="Обжалование наказания" /> : null}
                {+accessLevel >= 7 ? <Menu.Item to={{
                    pathname: '/admin/appeals',
                     search: `filter=${JSON.stringify({ type: 'admin' })}`
                }} primaryText="Жалоба на администрацию" /> : null}
                {+accessLevel >= 9 ? <Menu.Item to={{
                    pathname: '/admin/appeals',
                     search: `filter=${JSON.stringify({ type: 'technician' })}`
                }} primaryText="Технический вопрос/проблема" /> : null}
                {+accessLevel >= 12 ? <Menu.Item to={{
                    pathname: '/admin/appeals',
                     search: `filter=${JSON.stringify({ type: 'problemDonat' })}`
                }} primaryText="Проблема с донатом" /> : null}

            </DisclosureItem>
            <Menu.Item to={{
                pathname: '/admin/appeals',
                search: "all"
            }} primaryText="Все обращения" />
        </Menu>
    )
    return (
    <Layout menu={AdminMenu}>
        {children}
    </Layout>
    )
}