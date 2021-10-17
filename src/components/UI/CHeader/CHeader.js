import React from 'react'
import style from './style.module.css'
export default function CHeader(props) {
    return (
        <h1 className={style.heading}>
        <span className={style.number}>{props.index}</span>{props.txt} 
        {/* <span className={style.line}>---</span> */}
      </h1>
    )
}
