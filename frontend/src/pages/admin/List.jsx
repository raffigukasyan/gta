import { List as L, Datagrid, TextField } from "react-admin";
import { useRecordContext } from "react-admin";

const appeals = [
    {id: 1, value: 'Жалоба на игрока', slug: 'playerСomplaint'},
    {id: 2, value: 'Обжалование наказания', slug: 'appealing'},
    {id: 3, value: 'Жалоба на администрацию', slug: 'admin'},
    {id: 4, value: 'Текнический вопрос/проблема', slug: 'technician'},
    {id: 5, value: 'Проблема с донатом',  slug: 'problemDonat'}
];
export const AppealType = () => {
    const record = useRecordContext();
    if(!record) return null;
    return <span>{appeals.find(item => item.slug === record?.type)?.value}</span>
}

const itemStatuses = {
    'wait': 'На рассмотрении',
    'rejected':'Отклонено',
    'approved': 'Одобрена'
}

export const StatusType = () => {
    const record = useRecordContext();
    if(!record) return null;
    return <span>{itemStatuses[record?.status]}</span>
}

export const DateTimeField = () => {
    const record = useRecordContext();
    if(!record) return null;
    return <span>{new Date(record?.created_at).toLocaleString()}</span>
}

export const DateTimeClosedField = () => {
    const record = useRecordContext();
    if(!record?.closedDate) return null;
    return <span>{new Date(record?.closedDate).toLocaleString()}</span>
}
export default function List() {
    return (
        <L>
            <Datagrid>
                <TextField source="id" label="#" />
                <TextField source="idkey" label="ID" />
                <AppealType source="type" label="Раздел" />
                <TextField source="characterName" label="Имя" />
                <TextField source="server" label="Сервер" />
                <TextField source="text" label="Текст" />
                <StatusType source="status" label="Тип" />
                <DateTimeField source="created_at" label="Дата обращения" />
                <DateTimeClosedField source="closedDate" label="Дата закрытия" />

            </Datagrid>
        </L>
    )
}