import UserLayout from "../../components/ui/UserLayout.jsx";
import {ItemHead} from "../../components/ui/ItemHead.jsx";
import {StoryFiled} from "../../components/settings/StoryFiled.jsx";
import {ChangeEmail} from "../../components/settings/ChangeEmail.jsx";
import {ChangePassword} from "../../components/settings/ChangePassword.jsx";
import {FieldItem} from "../../components/settings/FieldItem.jsx";

export const  Settings = () => {

    const item = {id: 1, name: 'Denjero Wrakfut', projectName:'DC Project #1', date: '22.02.2024 00:02:34', ip:'**.432.444'}
    return (
        <UserLayout>
            <section id="settings" className={'col-span-4 flex flex-col gap-y-4 h-fit'}>
                <div className={'items-wrapper'}>
                    <ItemHead  className={'mb-0'} head={'Найстроки аккаунта'} beforeHead={'Изменение настроек'}/>
                    <div className={'flex flex-col gap-y-[6px] max-lg:px-3 max-lg:py-3 px-4 py-6'}>
                        <ChangePassword/>
                            <ChangeEmail/>
                            {/*<Fclass="w-full mb-4 flex max-lg:gap-y-5 max-lg:flex-col justify-between items-center py-3 px-5 bg-[rgba(255,255,255,0.05)]"ieldItem value={<span className={'text-[rgba(255,44,69,1)]'}>Защита не подключена</span>} btnLabel={'Включить'} label={'2FA'} />*/}
                            {/*<FieldItem value={'Осталось кодов (0/6)'} label={'Резервный код'} />*/}
                            {/*<FieldItem value={'Включено 2 уведомлений'} label={'Уведомление'} />*/}
                    </div>
                </div>
                <div className={'items-wrapper'}>
                    <ItemHead className={'mb-0'} head={'История входа'} beforeHead={'Активность аккаунта'}/>
                    <div className={'px-4 py-[19px]'}>
                        <StoryFiled item={item}/>
                    </div>
                </div>
            </section>
        </UserLayout>
    )
}