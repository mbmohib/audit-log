import { useReducer } from 'react';

import { Container, Paper, TextField } from '../components';

const initialState = { name: '', description: '', latitude: '' };

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'input':
      return {
        ...state,
        name: action.payload,
      };
    case 'decrement':
      return state;
    default:
      throw new Error();
  }
}

export default function SiteCreate() {
  const [values, dispatch] = useReducer(reducer, initialState);

  return (
    <Container>
      <Paper>
        <TextField
          label="Name"
          name="name"
          value={values.name}
          onChange={e => dispatch({ type: 'input', payload: e.target.value })}
        />
      </Paper>
    </Container>
  );
}
