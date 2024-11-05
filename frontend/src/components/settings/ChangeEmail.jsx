import {FieldItem} from "./FieldItem.jsx";
import Modal from "../Modal.jsx";
import Input from "../ui/Input.jsx";
import BlueButton from "../ui/BlueButton.jsx";
import {useState} from "react";
import {changeEmail, getUser} from "../../utils/axios.js";
import {ToastContainer,  toast, Bounce} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export const ChangeEmail = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    const [show, setShow] = useState(false);
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState({email: ''})

    const clearErrors = (field) => {
        errors[field] = ''
    }
    const close = () => {
        setErrors({ email: ""});
        setEmail('');
        setShow(false);
    };

    const handleSubmit = async (e) => {
        const requiredText = "Поле обязательно для заполнения";
        if (!email?.length) {
            setErrors((data) => ({ ...data, email: requiredText }));
            return;
        }
        try {
            const res = await changeEmail(email);
            console.log(res,'res');
            close()

            toast.success(res.message, {
                position: "top-center",
                autoClose: 2000,
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
            console.error(e);
        }}
    return (
        <div>
            <FieldItem label={'Email'} onClick={() => setShow(true)} value={<span>{user.email.replace(/^(.)(.*)(.@.*)$/,
     (_, a, b, c) => a + b.replace(/./g, '*') + c
)} <span
                className={'text-[rgba(143,221,116,1)]'}> (Почта привязана)</span></span>}/>
            <Modal show={show} onClose={close} title={'СМЕНА ПОЧТЫ'} subTitle={'Рады что ты вернулся в наш штат, узнай подробную информацию об аккаунте в личном кабинете'}>
                <div className={'flex flex-col gap-y-4 w-full'}>
                    <Input
                        className={'w-full'}
                        required
                        type={'email'}
                        errors={errors.email}
                        placeholder={"Введите email..."}
                        value={email}
                        onChange={(e) => setEmail(e)}
                        deleteError={() => clearErrors('email')}
                    />
                    <BlueButton onClick={handleSubmit} className={'py-[19px]'}>
                        Изменить
                    </BlueButton>
                </div>
            </Modal>
            
        </div>
    )
}