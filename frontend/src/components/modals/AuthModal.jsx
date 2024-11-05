import { useEffect, useState } from "react";
import Modal from "../Modal";
import Input from "../ui/Input";
import Checkbox from "../ui/Checkbox";
import BlueButton from "../ui/BlueButton";
import { authentificate, getUser } from "../../utils/axios";
import { useNavigate } from "react-router-dom";

export default function AuthModal({ show, onClose }) {
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [server, setServer] = useState(1);
	const [errors, setErrors] = useState({
		login: "",
		password: "",
	});
	const navigate = useNavigate();

	const close = () => {
		setErrors({ login: "", password: "" });
		setLogin("");
		setPassword("");
		onClose();
	};

	const clearErrors = (field) => {
		errors[field] = ''
	}

	const auth = async () => {
		const requiredText = "Поле обязательно для заполнения";
		if (!login?.length) {
			setErrors((data) => ({ ...data, login: requiredText }));
		}

		if (!password?.length) {
			setErrors((data) => ({ ...data, password: requiredText }));
		}
		console.log(errors);
		if (!login?.length || !password?.length) {
			return;
		}
		setIsLoading(true);

		try {
			const res = await authentificate(login, password, server);
			console.log(res)
			if(res?.message === 'password.invalid') {
				errors.password = 'Введен не верно пароль'
			}
			if (res?.token) {
				localStorage.setItem("token", res.token);
				localStorage.setItem('server', server);
				const user = await getUser(res.token, server);
				localStorage.setItem('user', JSON.stringify(user));
				navigate('/account');
			}
		} catch (err) {
			console.error(err);
		}
		setIsLoading(false);
	};

	return (
		<Modal
			title={"вход в личный кабинет"}
			show={show}
			onClose={close}
			subTitle={
				"Рады что ты вернулся в наш штат, узнай подробную информацию об аккаунте в личном кабинете"
			}>
			<form autoComplete="on" className="flex w-full flex-col gap-[22px]">
				<Input
					errors={errors.login}
					required
					value={login}
					placeholder={"Введите логин..."}
					onChange={(e) => setLogin(e)}
					deleteError={() => clearErrors('login')}
				/>
				<Input
					type={'password'}
					errors={errors.password}
					required
					value={password}
					placeholder={"Введите пароль..."}
					onChange={(e) => setPassword(e)}
					deleteError={() => clearErrors('password')}
				/>
				<Input
					type={'select'}
					required
					value={server}
					onChange={(e) => setServer(+e)}
				/>
				<Checkbox label={"Запомнить мои данные для входа в аккаунт"} />
				<BlueButton
					onClick={auth}
					disabled={isLoading}
					className={"text-sm py-5"}>
					Войти в аккаунт
				</BlueButton>
			</form>
		</Modal>
	);
}
