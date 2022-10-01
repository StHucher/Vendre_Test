import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";

/* definition of endpoints */

const baseUrl = "https://reqres.in/api/users";

function App() {

  const [appState, setAppState] = useState([]);

  useEffect(() => {
    axios.get(baseUrl).then((reponse) => {

      const employees = reponse.data.data;
      setAppState(employees);
      console.log(employees, "Employees");

    }).catch((error) => {console.log(error)});
  }, []);

  return (
    <div className="App">
      <main className="App-main">
        
        {appState.map(employee => 

          <div className="card">
            <img className="avatar" src={employee.avatar} alt="avatar"/>
            <p className="name">{employee.first_name} {employee.last_name}</p>
            <a className="mail" href="mailto:{employee.email}">Contact</a>
          </div>
        )}
          
          

      </main>
    </div>
  );
}

export default App;
