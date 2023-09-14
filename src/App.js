import { RymApp } from './rymApp/components/public/RymApp';
import { Routes, Route } from 'react-router-dom';
import { Main } from "./rootApp/Main"
import { UserForm } from './rootApp/UserForm';
import { Login } from './rootApp/Login';

function App() {
  return (
    <div>
      <Routes>
        <Route path={'/'} Component={ Main }/>
        <Route path={'/rym/*'} Component={ RymApp } />
        <Route path={'/user-form'} Component={UserForm} />
        <Route path={'/login'} Component={ Login } />
      </Routes>
    </div>
  );
}

export default App;
