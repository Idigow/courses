import React from 'react'
import style from './courses.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { DELETED_FAVORITE } from '../../redux/type'

function FavoriteCourse ({ item }) {
  const favorite = useSelector(state => state.favorites.items)
  const dispatch =useDispatch()

  const removeFavorite =(id)=>{
    dispatch({
      type: DELETED_FAVORITE,
      payload: id
    })
  }

  return (
    <div>
      {favorite? (
        <div key={item.id} className={style.cours}>
          <div className={style.cours_button}>
            <button onClick={()=>removeFavorite(item.id)}>Удалить</button>
            <button>Сравнить</button>
          </div>
          <div className={style.cours_title}>{item.title}</div>
          <div>Адресс: {item.address}</div>
          <div>Телефон: {item.phone}</div>
          <div>Стоимость: {item.price}p</div>
          <div className={style.cours_callback}>
            <div className={style.cours_email}>
              Email: {item.callback[0].email}
            </div>
            <div>{item.callback[0].preview}...</div>
            <div className={style.cours_open}>
              <Link to={""}>Развернуть...</Link>
            </div>
          </div>
        </div>
      ):''}
    </div>
  )
}

export default FavoriteCourse