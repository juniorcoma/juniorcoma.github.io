import { Route, Routes } from 'react-router-dom';

import { GlobalStyle } from './styles/GlobalStyle';
import HomePage from './pages/Home.page';
import ContentMenuPage from './pages/ContentMenu.page';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/content" element={<ContentMenuPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
