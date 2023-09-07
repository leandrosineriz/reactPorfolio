import '../../../App.css';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from './Main';
import { Detail } from './Detail';
import { UserForm } from './UserForm';
import { Login } from './Login';
import { AllCharactersCards } from './AllCharactersCards';
import { AllCharactersOnScroll } from './AllCharactersOnScroll';

export const RymApp = () => {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route exact path={''} Component={Main} />
          <Route exact path={':page'} Component={Main} />
          <Route path={'details/:id'} Component={Detail} />
          <Route path={':page/details/:id'} Component={Detail} />
          <Route path={'user-form'} Component={UserForm} />
          <Route path={'login'} Component={ Login } />
          <Route path={'allcharacters'} Component={ AllCharactersCards } />
          <Route path={'allcharactersonscroll'} Component={ AllCharactersOnScroll } />
        </Routes>
      <Footer />
    </div>
  )
}
