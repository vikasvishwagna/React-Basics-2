// import { use } from 'react';
import './App.css';
import Student from './component/Student';



function App() {
  const users = [
    {
      fullName : "Brendon McCullam",
      country : "New Zeland",
      age : 29
    },
    {
      fullName : "Crish Gale",
      country : "WestIndis",
      age : 39
    },
    {
      fullName : "Brendon McCullam",
      country : "New Zeland",
      age : 29
    },
    {
      fullName : "Crish Gale",
      country : "WestIndis",
      age : 39
    },
    {
      fullName : "Brendon McCullam",
      country : "New Zeland",
      age : 29
    },
    {
      fullName : "Crish Gale",
      country : "WestIndis",
      age : 39
    }
   
  ]
  return (
    <div>
      {users.map((user, idx)=>(
        <Student key={idx} fullName = {user.fullName} country ={user.country} age={user.age}/>
      ))}
    </div>
  );
}

export default App;
