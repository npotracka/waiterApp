import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Table from './components/Table/Table';
import NotFound from './components/NotFound/NotFound';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTables } from './redux/tablesRedux';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTables()), [dispatch]);

  return (
    <Container>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/table/:id' element={<Table />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};

export default App;