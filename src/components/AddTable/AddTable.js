import { Button, Col, Form, Row } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTableRequest, getAllTableIds } from '../../redux/tablesRedux';
import { useNavigate } from 'react-router-dom';

const AddTable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tableIds = useSelector(getAllTableIds);
  const [tableId, setTableId] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addTableRequest(tableId));
    navigate('/');
  };

  const isTableIdRequired = !tableId;
  const isTableIdUsed = tableIds.includes(tableId);
  const canAddTable = !isTableIdRequired && !isTableIdUsed;

  return (
    <div>
      <h1 className='my-4'>Add new table</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className='my-3'>
          <Form.Label column sm={2}>
            <strong>Table number:</strong>
          </Form.Label>
          <Col sm={2} lg={1}>
            <Form.Control
              type='number'
              value={tableId}
              onChange={(e) => {
                setTableId(e.target.value);
              }}
            />
          </Col>
        </Form.Group>
        {isTableIdRequired && <p>Table ID is required</p>}
        {isTableIdUsed && <p>Table ID is already used</p>}
        {canAddTable && <p>You can add a table!</p>}
        <Button variant='primary' type='submit' disabled={!canAddTable}>
          Add table
        </Button>
      </Form>
    </div>
  );
};

export default AddTable;