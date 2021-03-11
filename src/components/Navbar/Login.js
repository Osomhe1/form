import React, {useState, useReducer} from 'react'
import './Login.css';

const formReducer = (state, event) => {
    if(event.reset) {
        return {
          username: '',
          password: '',
        }
      }
       return {
         ...state,
         [event.name]: event.value
       }
     }

function Login() {
  
    const [submitting, setSubmitting] = useState(false);
    const [formData, setFormData] = useReducer(formReducer, {});

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Successful');
        setSubmitting(true);

        setTimeout(() =>{
            setSubmitting(false)
            setFormData({
                reset:true
            })
        },4000)

    };

    const handleChange = event => {
        setFormData({
          name: event.target.name,
          value: event.target.value,
        });
      }


    return (
        <div className='form'>
            <h2>Login</h2>
            {submitting &&
       <div>
           You are submitting the following:
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
               <label>Username:</label> <br/>
               <input 
               value={formData.username || ''}
               onChange={handleChange}
               //onSubmit={handleSubmit}
                type='text' name='username' required placeholder='username' /><br/>

               <label>Password:</label><br/>
               <input  
               value={formData.password || ''}
               onChange={handleChange}
               //onSubmit={handleSubmit}
                type='password' name='password' required placeholder='password' 
                /><br/><br/>
                

               <button type='submit' className='submit' 
                 onSubmit={handleSubmit}
               >Submit</button><br/><br/>

           </form>
        </div>
    )
}

export default Login
