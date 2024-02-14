import LatestNewscards from './components/sub-components/LatestNewscard';
import Sportcards from './components/sub-components/Sportcard'
import './App.css';
import RootLayout from './components/global/RootLayout';
import  { Route, Routes } from 'react-router-dom';

function App() {
  return (

    <Routes>
      <Route path="/">
        <Route path="" element={<RootLayout />}>  
          <Route path="" element={<LatestNewscards />} />
          <Route path="sportcard" element={<Sportcards />} />
        </Route>
        
      </Route>
    </Routes>
  );
}

export default App;
