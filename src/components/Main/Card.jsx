import React from 'react'
import './Card.scss'

const Card = ({title = 'нет в продаже' , img='https://cdn.dribbble.com/users/1373613/screenshots/5627768/media/7238dd49793c5f7f2faaa59a9be4107b.gif'}) => {
  return (
    <>
    <div className="card">
    <img src={img} alt="" />
    <h1>{title}</h1>
    <p>66 отзывов</p>
    <button>купить</button>
    </div>
    </>
  )
}

export default Card