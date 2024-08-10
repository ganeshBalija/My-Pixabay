import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Error from './Pages/Error'
import Login from './Pages/Login' 
import Join from './Pages/Join'
import ImageInfo from './Pages/imageInfo'
import Upload from './Pages/upload'
function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='*' element={<Error></Error>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/join' element={<Join></Join>}></Route>
                <Route path='/imageinfo' element={<ImageInfo></ImageInfo>}></Route>
                <Route path='/upload' element={<Upload></Upload>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default App;
