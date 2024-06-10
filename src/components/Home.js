
import React, { useState, useEffect, useRef, useContext, useReducer } from 'react';
import { Typography, Box, Paper, Button, TextField } from '@mui/material';

const Home = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Home Page
      </Typography>
      <HookSection title="1. useState Hook" content={<UseStateDemo />} />
      <HookSection title="2. useEffect Hook" content={<UseEffectDemo />} />
      <HookSection title="3. useRef Hook" content={<UseRefDemo />} />
      <HookSection title="4. useContext Hook" content={<UseContextDemo />} />
      <HookSection title="5. useReducer Hook" content={<UseReducerDemo />} />
    </Box>
  );
};

const HookSection = ({ title, content }) => (
  <Paper sx={{ padding: 2, marginBottom: 2 }}>
    <Typography variant="h6" gutterBottom>
      {title}
    </Typography>
    {content}
  </Paper>
);

const UseStateDemo = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Typography variant="body1">Count: {count}</Typography>
      <Button variant="contained" sx={{ backgroundColor: '#097CA7' }} onClick={() => setCount(count + 1)}>Increment</Button>
    </div>
  );
};

const UseEffectDemo = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/1')
      .then(response => response.json())
      .then(json => setData(json));
  }, []);

  return <Typography variant="body1">{data ? JSON.stringify(data) : 'Loading...'}</Typography>;
};

const UseRefDemo = () => {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <TextField inputRef={inputRef} label="Input Field" variant="outlined" />
      <Button variant="contained" sx={{ backgroundColor: '#097CA7' }} onClick={focusInput}>Focus Input</Button>
    </div>
  );
};

const MyContext = React.createContext();

const UseContextDemo = () => {
  return (
    <MyContext.Provider value="Hello from context!">
      <ChildComponent />
    </MyContext.Provider>
  );
};

const ChildComponent = () => {
  const value = useContext(MyContext);
  return <Typography variant="body1">{value}</Typography>;
};

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

const UseReducerDemo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <Typography variant="body1">Count: {state.count}</Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
      <Button variant="contained" sx={{ backgroundColor: '#097CA7' }} onClick={() => dispatch({ type: 'increment' })}>Increment</Button>
      <Button variant="contained" sx={{ backgroundColor: '#097CA7' }} onClick={() => dispatch({ type: 'decrement' })}>Decrement</Button>
      </Box>
    </div>
  );
};

export default Home;
