import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Films from '../pages/Films'

const AppRouter = () => {
  return (
    <Switch>
        <Route path='/films'>
            <Films/>
        </Route>
    </Switch>
  )
}

export default AppRouter