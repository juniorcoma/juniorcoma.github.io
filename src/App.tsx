import { Route, Routes } from 'react-router-dom';

import { GlobalStyle } from './styles/GlobalStyle';
import HomePage from './pages/Home.page';
import ContentMenuPage from './pages/ContentMenu.page';
import AboutPage from './pages/About.page';
import ContactPage from './pages/Contact.page';
import ProjectPage from './pages/Project.page';
import ProjectDetailPage from './pages/ProjectDetail.page';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/content" element={<ContentMenuPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/project" element={<ProjectPage />}></Route>
        <Route path="/project/:projectName" element={<ProjectDetailPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
