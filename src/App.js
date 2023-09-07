import { RymApp } from './rymApp/components/public/RymApp';
import { Routes, Route } from 'react-router-dom';
import { Main } from "./rootApp/Main"

function App() {
  return (
    <div>
      <Routes>
        <Route path={'/'} Component={ Main }/>
        <Route path={'/rym/*'} Component={ RymApp } />
      </Routes>
    </div>
  );
}

export default App;
