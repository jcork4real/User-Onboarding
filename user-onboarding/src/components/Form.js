import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as yup from 'yup';



function Form(){

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
    </label>
 </form>
}

export default Form;