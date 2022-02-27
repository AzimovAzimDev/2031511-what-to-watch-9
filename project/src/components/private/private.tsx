import {Navigate} from 'react-router-dom';

/**
 * HOC Компонента для приватных старниц
 * навигирует не авторизованных пользователей на страницу логина
 */
export default function PrivateRoute({ children }: {children: JSX.Element}) {
  const auth = false;
  return auth ? children : <Navigate to="/login" />;
}
