import { RymApp } from './rymApp/components/public/RymApp';
import { Routes, Route } from 'react-router-dom';
import { RootApp } from './rootApp/RootApp';

function App() {
  return (
    <div>
      <Routes>
        <Route path={'/*'} Component={ RootApp }/>
        <Route path={'/rym/*'} Component={ RymApp } />
      </Routes>
    </div>
  );
}

export default App;
