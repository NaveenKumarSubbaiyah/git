import React from 'react';

// import AddUser from './components/Users/AddUser';
// import UsersList from './components/Users/UsersList';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './Redux/action';

function App() {
  // const [usersList, setUsersList] = useState([]);

  // const addUserHandler = (uName, uAge) => {
  //   setUsersList((prevUsersList) => {
  //     return [
  //       ...prevUsersList,
  //       { name: uName, age: uAge, id: Math.random().toString() },
  //     ];
  //   });
  // };

  const counter = useSelector(state => state.counter);

  const dispatch = useDispatch();

  return (
    <div>
      {/* <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} /> */}
      <h2 style={{color: 'white'}}>counter :{counter}</h2>
      <button onClick={()=> dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
