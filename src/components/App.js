import React from 'react'
import Header from './Header'
import SideBar from './SideBar'
import Main from './Main'
import Footer from './Footer'
import Box from './Box'
import './App.css'



const App = () => {
    return (
            <div className='body'>
                <Header>
                    <h1> my header</h1>
                </Header>
                <SideBar>
                <h1>Side Bar</h1>
                <ul>
                    <li>orange</li>
                    <li>orange</li>
                    <li>orange</li>
                    <li>orange</li>
                </ul>
                </SideBar>
                <Main>
                    <h1>Body</h1>
                    <img alt='...' src='https://static.scientificamerican.com/sciam/cache/file/5C51E427-1715-44E6-9B14D9487D7B7F2D_source.jpg' style={{width:'300px',height:'200px'}}/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis blandit magna, ut tristique lorem. Vestibulum at augue ac mauris vehicula tempus. Sed tristique, magna ac porta viverra, orci mi tristique magna, nec ultricies risus quam vitae purus. Aliquam in lobortis purus, quis rutrum ex. Phasellus eu leo accumsan, elementum ex sed, ultrices risus. Vivamus at ornare massa. Praesent lorem neque, malesuada id nibh ut, tempor auctor erat. In a dictum quam. Fusce a nisi eros. In vestibulum ligula consectetur lacinia euismod. Fusce imperdiet ex vitae varius lobortis. Aenean tempor, mi a bibendum sollicitudin, metus ipsum tempor turpis, tincidunt vulputate magna neque quis sem. Vivamus nec velit orci. Nam mauris quam, tincidunt ac viverra sit amet, lacinia in risus. Quisque ac dignissim quam.</p>
                    <div className='boxs'>
                        <Box color = 'red' text = 'square 1'/>
                        <Box color= 'blue' text = 'square 2'/>
                        <Box color = 'green' text = 'square 3'/>
                        <Box color = 'white' text = 'square 4'/>
                    </div>

                </Main>
                <Footer>
                    <h1>Footer</h1>
                </Footer>
            </div>
    )
}



export default App