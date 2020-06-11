import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as yup from 'yup';



function Form(){

    // managing state for our form inputs
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    terms: ""
  });

  //Step 2 form validation and error messaging
  // state for our errors
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    terms: ""
  });



// Form Start
<form>
    <label htmlFor="name">
    Name
    <input
      type="text"
      name="name"
    />
  </label>
    <label htmlFor= "email">
        Email
        <input
            type="text"
            name="email"
        />
    </label>

    <label htmlFor="password">
        Password
        <input
            type="text"
            name="password"
        />

    </label>

   <label htmlFor="terms" className="terms">
         Terms & Conditions
    <input
      type="checkbox"
      name="terms"
      checked={true} 
    />
    
  </label>
    <button>Submit</button>
 </form>
}

export default Form;