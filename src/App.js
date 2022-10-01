import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";

/* definition of endpoints */

const baseUrl = "https://reqres.in/api/users";
const secondUrl = "https://reqres.in/api/users?page=2";

function App() {

  /* handler button 1 */
  function handlerFirstPage() {

    axios.get(baseUrl).then((reponse) => {
      const employees = reponse.data.data;
      setAppState(employees);
    })    
  }

  /* handler button 2 */
  function handlerSecondPage() {

    axios.get(secondUrl).then((reponse) => {
      const employees = reponse.data.data;
      setAppState(employees);
    })
  }

  const [appState, setAppState] = useState([]);

  useEffect(() => {

    axios.get(baseUrl).then((reponse) => {
      const employees = reponse.data.data;
      setAppState(employees);
    }).catch((error) => {console.log(error)}); /* If there is an error I display it in the console */
  }, []);

  return (
    <div className="App">
      <main className="App-main">

        {/* I iterate with map over the array of objects */}
        {appState.map(employee => 

          /* For each object I retrieve the properties avatar, first_name, last_name, email */
          <div className="card">
            <img className="avatar" src={employee.avatar} alt="avatar"/>
            <p className="name">{employee.first_name} {employee.last_name}</p>
            <a className="mail" href="mailto:{employee.email}">Contact</a>
          </div>
        )}        
      </main>

      <button className="btn" onClick={handlerFirstPage}>1</button>
      <button className="btn" onClick={handlerSecondPage}>2</button>
      
    </div>
  );
}

export default App;
