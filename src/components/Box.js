import React from 'react'


const Box = (props) => {
return (
    <div className='box' style= {{backgroundColor: props.color , height:'100px', width:'100px'}}>
        <p className='boxText'>{props.text}</p>
    </div>
)
}


export default Box