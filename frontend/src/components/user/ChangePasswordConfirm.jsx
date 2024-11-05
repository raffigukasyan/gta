import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import BlueButton from '../ui/BlueButton';

export default function ChangePasswordConfirm() {
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    // Получаем токен и email из URL
    const search = useLocation().search;
    const token = new URLSearchParams(search).get('token');
    const email = new URLSearchParams(search).get('email');
    
    useEffect(() => {
      const confirmReset = async () => {
        setLoading(true);
        const url = import.meta.env.VITE_BACKEND_URL;

        try {
          const response = await axios.get(`${url}/api/account/confirm-password-reset`, {
            params: { token, email },
            headers: {
              
                xDatabase: localStorage.getItem('server')
            },
          });
          setMessage('Пароль успешно изменен!');
        } catch (error) {
          setMessage('Ошибка при подтверждении пароля.');
        } finally {
          setLoading(false);
        }
      };
  
      confirmReset();
    }, [token, email]);
  
    return (
      <div className='text-white text-[50px]'>
        {loading ? <p>Подтверждение...</p> : <p>{message}</p>}
        <Link to='/'>
            <BlueButton>На главную</BlueButton>
        </Link>
      </div>
    );
}