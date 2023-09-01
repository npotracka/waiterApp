import { Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getAllTables } from '../../redux/tablesRedux';

export const Loading = () => {
  const tables = useSelector(getAllTables);

  if (!tables) {
    return (
      <div className='text-center py-4'>
        <Spinner animation='border text-primary fs-4' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
        <p>Loading...</p>
      </div>
    );
  }
};

export default Loading;