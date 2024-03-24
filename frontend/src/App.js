
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/header';
import StoryDetails from './pages/StoryDetails';
function App() {
  return (
    <div>

      <Header/>
      <Routes>
        <Route index element={<Home/>} />
        <Route element={<StoryDetails/>} path='/StoryDetails/:id'/>
      </Routes>

    </div>
  );
}

export default App;
