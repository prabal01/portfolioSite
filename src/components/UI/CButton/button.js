import React from 'react'
import style from './style.module.css'
export default function CButton(props) {
    return (
        <button className={style.CButton} style={{marginTop:props.mt?props.mt:'',padding:props.pd?props.pd:'',height:props.h?props.h:'',width:props.w?props.w:''}}>
            {props.children}
        </button>
    )
}
