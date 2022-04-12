import { Navigate, Route, Routes } from 'react-router-dom';
import Detail from './views/Detail';
import Home from './views/Home';

const AppRoutes = function AppRoutes() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="stages/:slug" element={<Detail />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
