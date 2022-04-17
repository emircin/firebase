import './App.css';
import FormComponent from './components/form/FormComponent';
import Contacts from "./components/contacts/Contacts"
import { useState } from "react";
import { EditUser, SendInfo } from './utils/functions';

const initialValues = { username: "", phoneNumber: "", gender: "NO INFO" }

function App() {

  const[info, setInfo] = useState(initialValues);

  const handleFormSubmit = (e) =>{
    e.preventDefault();
    if(info.id) {
      EditUser(info)
    }
    else {
      SendInfo(info)
    }
  }

  const editHandler=(id, username, phoneNumber, gender)=>{
    setInfo({id,username, phoneNumber, gender})
  }
  return (
    <div className="App">
      <FormComponent info={info} setInfo={setInfo} handleFormsubmit={handleFormSubmit}/>
      <Contacts editHandler={editHandler}/>

    </div>
  );
}

export default App;