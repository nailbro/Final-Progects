import React, { FC, useState } from 'react';
import './Auth.module.scss';
import { AuthService } from '../services/auth.service';
import { toast } from 'react-toastify';
import { setTokenToLocalStorage } from '../helper/localstorage.helper';
import { useAppDispatch } from '../store/hooks';
import { login } from '../store/user/userSlice';
import { useNavigate } from 'react-router-dom';

const Auth: FC = () => {
  //  Состояния для email и пароля
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  //  Состояние для определения, находится ли пользователь на странице логина или регистрации
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  //  Обработчик отправки формы для логина
  const signinHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //  Предотвращаем перезагрузку страницы при отправке формы
    try {
      //  Вызываем сервис AuthService для логина пользователя
      const data = await AuthService.login({ email, password });

      if (data) {
        //  Если логин успешен, сохраняем токен в локальное хранилище,
        setTokenToLocalStorage('token', data.token);
        //  отправляем данные пользователя в Redux store,
        dispatch(login(data));
        //  показываем уведомление об успешном логине
        toast.success('Вы вошли в систему.'); //  Исправлена опечатка
        //  и перенаправляем пользователя на главную страницу
        navigate('/');
      } else {
        //  Обрабатываем случай, когда логин не удался (например, неверные учетные данные)
        toast.error('Ошибка входа. Пожалуйста, проверьте свои данные.');
      }
    } catch (err: any) {
      //  Обрабатываем ошибки, возникшие в процессе логина (например, ошибка сети, ошибка сервера)
      const errorMessage = err?.response?.data?.message || err?.message || 'Произошла непредвиденная ошибка.';
      toast.error(errorMessage.toString());
    }
  };

  //  Обработчик отправки формы для регистрации
  const singUpHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //  Предотвращаем перезагрузку страницы при отправке формы
    try {
      //  Вызываем сервис AuthService для регистрации пользователя
      const data = await AuthService.registration({ email, password });
      if (data) {
        //  Если регистрация успешна, показываем уведомление
        toast.success('Аккаунт создан.');
        //  и переключаем состояние на страницу логина
        setIsLogin(true); // Изменено на true, чтобы переключить на логин
      }
    } catch (err: any) {
      //  Обрабатываем ошибки, возникшие в процессе регистрации
      const errorMessage = err?.response?.data?.message ?? err?.message ?? 'Произошла непредвиденная ошибка.';
      toast.error(errorMessage.toString());
    }
  };

  return (
    <div className='LoginC'>
      <h1>
        {isLogin ? 'Войти' : 'Зарегистрироваться'}
      </h1>

      <form onSubmit={isLogin ? signinHandler : singUpHandler} className='former'>
        <input
          type="text"
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder='Пароль'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Submit</button>
      </form>
      {isLogin ? (
        <button onClick={() => setIsLogin(false)} className='btn_have'> {/* Изменено на false */}
          Нет аккаунта? Зарегистрируйтесь
        </button>
      ) : (
        <button onClick={() => setIsLogin(true)} className='btn_have'> {/* Изменено на true */}
          Уже есть аккаунт? Войдите
        </button>
      )}
    </div>
  );
};

export default Auth;
