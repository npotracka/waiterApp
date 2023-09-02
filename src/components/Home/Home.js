import React from 'react';
import { Button, ListGroup, Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTables, removeTableRequest } from '../../redux/tablesRedux';
import { Link, useNavigate } from 'react-router-dom';
import Loading  from '../../components/Loading/Loading';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tables = useSelector(getAllTables);

  const handleClick = (id) => {
    dispatch(removeTableRequest(id));
    navigate('/');
  };

  if (!tables) {
    return <Loading />;
  }
  return (
    <div>
      <h1 className='my-4'>All tables</h1>
      <ListGroup variant='flush'>
        {tables.map((table) => (
          <ListGroup.Item key={table.id} status={table.status} className='px-0'>
            <Stack direction='horizontal' gap={4}>
              <h2 className='my-2'>Table {table.id}</h2>
              <p className='mb-0'>
                <strong>Status: </strong>
                {table.status}
              </p>
              <Link className='ms-auto' to={`/table/${table.id}`}>
                <Button variant='primary'>Show more</Button>
              </Link>
              <Button variant='primary' onClick={() => handleClick(table.id)}>
                <i className='fa fa-solid fa-trash'></i>
              </Button>
            </Stack>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Home;