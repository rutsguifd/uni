import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Films from '../pages/Films'

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/films'>
            <Films/>
        </Route>
    </Routes>
  )
}

export default AppRouter