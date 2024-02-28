import { useState } from "react";
import "./App.css";
import BasicInfo from "./components/BasicInfo";
import RadioGroup from "./components/RadioGroup";
import Consent from "./components/Consent";
import ComplainBox from "./components/ComplainBox";

export default function App() {

  //TODO: Add your state fields here
  // const [name, setName] = useState('')
  // const [address, setAddress] = useState('')
  // const [phone, setPhone] = useState('')
  // const [email, setEmail] = useState('')
  // const [complaintText, setComplaintText] = useState('')
  // const [contactType, setContactType] = useState('')
  // const [consent, setConsent] = useState(false)

  const initialFormState = {
    name: "",
    address: "",
    phone: "",
    email: "",
    complaintText: "",
    contactType: "",
    consent: false
  }

  const [formData, setFormData] = useState(initialFormState)



  const submitfunc = event =>{
    event.preventDefault()

    fetch(URL, {
      method: "POST",
      //rest of fetch???
      body: JSON.stringify(formData)
    })

    console.log(formData)

    setFormData(initialFormState)

    console.log(formData)


  }

  return (
    <>
      <form className="form" onSubmit={(event) => submitfunc(event)}>
        <h2>Complaining form!</h2>
        <BasicInfo formData={formData} setFormData={setFormData}/>
        
        <div className="form__section-right">
          <ComplainBox formData={formData} setFormData={setFormData}/>

          <RadioGroup formData={formData} setFormData={setFormData}/>

          <Consent formData={formData} setFormData={setFormData} />
        </div>
        <input type="submit" value="Submit!"/>
      </form>
    </>
  );
}
