import React from 'react'
import './Plan.css'

function Plan({container, title, price, storage, user, sendUp}) {
  return (
    <div className={container}>
        <p className='title'>{title}</p>
        <h1>${price}</h1>
        <div className='divided'>
            <p>{storage}</p>
            <span className='divider'></span>
            <p>{user}</p>
            <span className='divider'></span>
            <p>{sendUp}</p>
        </div>
        <button className='btn' type='button'>LEARN MORE</button>
    </div>
  )
}

export default Plan