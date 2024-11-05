import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import BlueButton from '../ui/BlueButton';

export default function ChangeEmailConfirm() {
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    // Получаем токен и email из URL
    const search = useLocation().search;
    const token = new URLSearchParams(search).get('token');
    const newEmail = new URLSearchParams(search).get('new_email');
    
    useEffect(() => {
      const confirmReset = async () => {
        setLoading(true);
        const url = import.meta.env.VITE_BACKEND_URL;

        try {
          const response = await axios.get(`${url}/api/account/confirm-email-change`, {
            params: { token, new_email: newEmail },
            headers: {
                xDatabase: localStorage.getItem('server')
            },
          });
          setMessage('Почта успешно изменена!');
        } catch (error) {
          setMessage('Ошибка при подтверждении почты.');
        } finally {
          setLoading(false);
        }
      };
  
      confirmReset();
    }, [token, newEmail]);
  
    return (
      <div className='text-white text-[50px]'>
        {loading ? <p>Подтверждение...</p> : <p>{message}</p>}
        <Link to='/'>
            <BlueButton>На главную</BlueButton>
        </Link>
      </div>
    );
}