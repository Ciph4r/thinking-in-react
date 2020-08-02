import React from 'react'
import './App.css'

const Box = (props) => {
return (
    <div className='box' style= {{backgroundColor: props.color , height:'100px', width:'100px'}}>
        <p className='boxText'>{props.text}</p>
    </div>
)
}


export default Box