import React, {useState, useReducer} from 'react'
import './Signup.css';

const formReducer = (state, event) => {
    if(event.reset) {
        return {
          firstname: '',
          lastname: '',
          username: '',
          email: '',
          password: '',
          date: '',

          errors: []
        }
      }
       return {
         ...state,
         [event.name]: event.value
       }
     }
     
    

function Signup() {

    const [state, setState] = useState();
    const [submitting, setSubmitting] = useState(false);
    const [formData, setFormData] = useReducer(formReducer, {});



    const handleSubmit = (e) => {
        e.preventDefault();

        function validate(username, firstname, lastname, email, password) {
        
            const errors = [];
          
              if (firstname
                .length
                 === 0) {
               errors.push("First name can't be empty");
             }
             if (lastname.length === 0) {
               errors.push("Last name can't be empty");
             }
              if (username.length === 0) {
                errors.push("User name can't be empty");
             }
          
             if (email.length < 5) {
               errors.push("Email should be at least 5 charcters long");
             }
             if (email.split("").filter(x => x === "@").length !== 1) {
               errors.push("Email should contain a @");
             }
             if (email.indexOf(".") === -1) {
               errors.push("Email should contain at least one dot");
             }
          
             if (password.length < 8) {
               errors.push("Password should be at least 6 characters long");
             }
             if(!isOk.test) {
                 alert("password should contain atleast one number and one special character");
    
            }
          
             return errors;
          }

        const {username, firstname, lastname, email, password} = state

        const errors = validate( email, password);
    if (errors.length > 0) {
      this.setState({ errors });
      return;
    }

        const { value } = state;
        const re = new RegExp("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$");
        const isOk = re.test(value);
 
       // console.log(isOk);
 
        if(!isOk) {
            return alert('weak! password');
        }else
 
        alert('A password was submitted that was ' + value.length + ' characters long.');
    

        alert('Signup successful');
        setSubmitting(true)

        setTimeout(() => {
            
       setSubmitting(false) }, 4000);
       
       
    
    };

    const handleChange = event => {
        setFormData({
          name: event.target.name,
          value: event.target.value,
        });

        setState({
            value: event.target.value
        });
        
      }

    
      //onst { errors } = this.state;

    return (
        
        <div className='form' >
             <h2>Sign Up</h2>

             
        
             {submitting &&
       <div>
           You are Signing Up now:
         <ul>
           {Object.entries(formData).map(([name, value]) => (
             <li key={name}><strong>{name}</strong>:{value.toString()}</li>
           ))}
         </ul>
           </div>
           
     }
           <form 
           disabled={submitting}
           onSubmit={handleSubmit}
           >
        
           <label>Firstname:</label><br/>
               <input
               onChange={handleChange}
               value={formData.firstname || ''}
               name='firstname'
                type='text' required placeholder='first name' /><br/>

               <label>Lastname:</label><br/>
               <input
               onChange={handleChange}
               value={formData.lastname || ''} 
               name='lastname'
               type='text' required placeholder='last name' /><br/>
               
               <label>Username:</label><br/>
               <input
               onChange={handleChange}
               value={formData.username || ''}
               name='username'
                type='text' required placeholder='username' /><br/>
               <label>Email:</label><br/>
               <input
               name='email'
               onChange={handleChange}
               value={formData.email || ''}
                type='email' placeholder='email' required /><br/>

               <label>DOB:</label><br/>
               <input
               onChange={handleChange}
               value={formData.date || ''}
               name='date'
                type='date' required  /><br/>

               <label>Password:</label><br/>
               <input
               onChange={handleChange}
               value={formData.password || ''}
               name='password'
                type='password' required placeholder='password' /><br/>
                <h6 className='text'>Password must contain special and be 8 characters long</h6>
                <br/>

               <button type='submit' className='signup-button' 
               //onSubmit={handleSubmit}
                >Submit</button>

                

           </form>
        </div>
        
    )
    }

export default Signup
