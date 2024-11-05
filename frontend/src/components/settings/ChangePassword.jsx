import {FieldItem} from "./FieldItem.jsx";
import Input from "../ui/Input.jsx";
import BlueButton from "../ui/BlueButton.jsx";
import Modal from "../Modal.jsx";
import {useState} from "react";
import {changePassword} from "../../utils/axios.js";
import {Bounce, toast} from "react-toastify";

export const ChangePassword = () => {
    const [show, setShow] = useState(false);
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [errors, setErrors] = useState({password: '', newPassword: '', repeatPassword: ''});
    const handleSubmit = async (e) => {
        e.preventDefault();
        const requiredText = "Поле обязательно для заполнения";
        if (!password?.length) {
            setErrors((data) => ({ ...data, password: requiredText }));
            return;
        }
        if (!repeatPassword?.length) {
            setErrors((data) => ({ ...data, repeatPassword: requiredText }));
            return;
        }
        if (!newPassword?.length) {
            setErrors((data) => ({ ...data, newPassword: requiredText }));
            return;
        }
        if(newPassword !== repeatPassword) {
            setErrors((data) => ({ ...data, repeatPassword: 'Не совпадает' }));
            return;
        }
        if(!newPassword.length || !repeatPassword.length || !password.length) {
            return;
        }
        try {
            const res = await changePassword(password, newPassword);
            close()
            toast.success(res.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
        catch (e) {
            console.log(e)
        }
    }

    const clearErrors = (field) => {
        errors[field] = ''
    }

    const close = () => {
        setErrors({ password: "", newPassword: "", repeatPassword: "" });
        setPassword("");
        setNewPassword("");
        setRepeatPassword('')
        setShow(false);
    };
    return (
        <div>
            <FieldItem label={'Пароль'} value={'Пароль был изменен 21.02.2024, 13:24:53'} onClick={() => setShow(true)}/>
            <Modal show={show} onClose={close} title={'СМЕНА ПАРОЛЯ'} subTitle={'Рады что ты вернулся в наш штат, узнай подробную информацию об аккаунте в личном кабинете'}>
                <div className={'flex flex-col gap-y-4 w-full'}>
                    <Input
                        className={'w-full'}
                        required

                        placeholder={"Старый пароль"}
                        errors={errors.password}
                        deleteError={() => clearErrors('password')}
                        value={password}
                        onChange={(e) => setPassword(e)}
                    />
                    <Input
                        className={'w-full'}
                        required
                        type={'password'}
                        errors={errors.newPassword}
                        placeholder={"Новый пароль"}
                        value={newPassword}
                        deleteError={() => clearErrors('newPassword')}
                        onChange={(e) => setNewPassword(e)}
                    />
                    <Input
                        className={'w-full'}
                        required
                        type={'password'}
                        errors={errors.repeatPassword}
                        deleteError={() => clearErrors('repeatPassword')}
                        placeholder={"Повторить новый пароль"}
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e)}
                    />
                    <BlueButton onClick={handleSubmit} className={'py-[19px]'}>
                        Изменить
                    </BlueButton>
                </div>
            </Modal>
        </div>
    )
}