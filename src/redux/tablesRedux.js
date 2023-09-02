import { API_URL } from '../config';
import { statuses } from '../const';
//selectors
export const getAllTables = (state) => state.tables;
export const getTableById = ({ tables }, tableId) =>
  tables.find((table) => table.id === tableId);
export const getAllTableIds = (state) => state.tables.map((table) => table.id);
// actions
const createActionName = (actionName) => `app/tables/${actionName}`;
export const SHOW_TABLES = createActionName('SHOW_TABLES');
export const UPDATE_TABLE = createActionName('UPDATE_TABLE');
export const ADD_TABLE = createActionName('ADD_TABLE');
export const REMOVE_TABLE = createActionName('REMOVE_TABLE');
export const REQUEST_START = createActionName('REQUEST_START');
export const REQUEST_SUCCESS = createActionName('REQUEST_SUCCESS');
export const REQUEST_FAILURE = createActionName('REQUEST_FAILURE');
// action creators
export const showTables = (payload) => ({ type: SHOW_TABLES, payload });
export const updateTable = (payload) => ({ type: UPDATE_TABLE, payload });
export const addTable = (payload) => ({ type: ADD_TABLE, payload });
export const removeTable = (payload) => ({ type: REMOVE_TABLE, payload });

export const requestStart = () => ({
  type: REQUEST_START,
});
export const requestSuccess = (data) => ({
  type: REQUEST_SUCCESS,
  payload: data,
});
export const requestFailure = (error) => ({
  type: REQUEST_FAILURE,
  payload: error,
});
export const addTableRequest = (id) => {
  return (dispatch) => {
    const newTable = {
      id,
      peopleAmount: 0,
      bill: 0,
      maxPeople: 0,
      status: statuses.free,
    };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTable),
    };
    fetch(`${API_URL}/tables`, options)
      .then((res) => res.json())
      .then((data) => dispatch(addTable(data)));
  };
};

export const removeTableRequest = (id) => {
  return (dispatch) => {
    fetch(`${API_URL}/tables/${id}`, { method: 'DELETE' })
      .then((res) => res.json())
      .then((data) => console.log(data + 'removed'));
  };
};

export const fetchTables = () => {
  return (dispatch) => {
    fetch(`${API_URL}/tables`)
      .then((res) => res.json())
      .then((tables) => dispatch(showTables(tables)));
  };
};
export const sendData = (data) => {
  return (dispatch) => {
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    fetch(`${API_URL}/tables/${data.id}`, options)
      .then((res) => res.json())
      .then((data) => dispatch(updateTable(data)));
  };
};
const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case SHOW_TABLES:
      return [...action.payload];
    case UPDATE_TABLE:
      return statePart.map((table) =>
        table.id === action.payload.id ? { ...table, ...action.payload } : table
      );
    case ADD_TABLE:
      console.log('action.payload', action.payload);
      return [
        ...statePart,
        {
          ...action.payload,
        },
      ];
    case REMOVE_TABLE:
      return statePart.filter((table) => table.id !== action.payload);
    default:
      return statePart;
  }
};
export default tablesReducer;