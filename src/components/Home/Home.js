import { Button, ListGroup, Stack } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getAllTables } from '../../redux/tablesRedux';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';

export const Home = () => {
  const tables = useSelector(getAllTables);
  const isLoading = !tables;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h1 className='my-4'>All TABLES</h1>
      <ListGroup variant='flush'>
        {tables.map((table) => (
          <ListGroup.Item key={table.id} status={table.status} className='px-0'>
            <Stack direction='horizontal' gap={4}>
              <h2 className='my-2'>Table {table.id}</h2>
              <p className='my-2'>
                <strong>Status: </strong>
                {table.status}
              </p>
              <Link className='ms-auto' to={`/table/${table.id}`}>
                <Button variant='primary'>Show more</Button>
              </Link>
            </Stack>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Home;