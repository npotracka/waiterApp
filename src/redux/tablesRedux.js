//selectors
export const getAllTables = (state) => state.tables;

// actions
const createActionName = (actionName) => `app/tables/${actionName}`;
export const SHOW_TABLES = createActionName('SHOW_TABLES');

// action creators
export const showTables = (payload) => ({ type: SHOW_TABLES, payload });

export const fetchTables = () => {
  return (dispatch) => {
    fetch('http://localhost:3131/tables')
      .then((res) => res.json())
      .then((tables) => dispatch(showTables(tables)));
  };
};

export const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case SHOW_TABLES:
      return action.payload;
    default:
      return statePart;
  }
};
export default tablesReducer;