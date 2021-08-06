import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authAdmin } from './authReducer'
import styles from './styles.module.css'
import { useHistory } from 'react-router-dom'

function Authorization (props) {
  const dispatch = useDispatch();
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");

  const history = useHistory();
  const  error = useSelector(state => state.auth.error)



  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(authAdmin(login,pass, history))
  }

  return (
    <div>
      <div className={styles.blockAuth}>
        <div className={styles.authTitle}>
          Авторизация
        </div>
        <div className={styles.authForm}>
          <div>
            <input
              type="text"
              placeholder="Введите логин"
              value={login}
              onChange={e => setLogin(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Введите пароль"
              value={pass}
              onChange={e => setPass(e.target.value)}
            />
          </div>
        </div>
        {error && <div>Неправильный логин или пароль</div>}
        <button onClick={handleLogin}>
          <span className={styles.btn}>
            Войти
          </span>
        </button>
      </div>
    </div>
  )
}
// git remote add upstream https://github.com/magaboy/courses.git
export default Authorization