import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Main } from './Main';
import { UserForm } from './UserForm';
import { Login } from './Login';
import { Navbar } from './Navbar';

export const RootApp = () => {
  return (
    <div>
        <Navbar />
            <Routes>
                <Route path={"/"} Component={ Main }/>
                <Route path={'/user-form'} Component={ UserForm } />
                <Route path={'/login'} Component={ Login } />
            </Routes>
    </div>
  )
}
