import React, {useState} from 'react';

import Parse from "parse/dist/parse.min.js";

const ConnectModal = () => {

    Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
    // Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
    Parse.initialize(
        process.env.REACT_APP_BACK4APP_APP_ID, // This is your Application ID
        process.env.REACT_APP_BACK4APP_JS_KEY, // This is your Javascript key
        process.env.REACT_APP_BACK4APP_MASTER_KEY,   // This is your Master key (never use it in the frontend)
    );

    const initialFormState = {
        firstName: "",
        email: "",
        password: "",
    };

    const [formData, setFormData] = useState(initialFormState);

    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }
    const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const validpswd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    const currentUser = Parse.User.current();
    console.log("currentUser :", currentUser);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = new Parse.User();
        user.set("username", formData.firstName);
        user.set("email", formData.email);
        user.set("password", formData.password);
        if(!formData.email.match(validEmail)){
            console.log("email not ok");
            return
        }
        if(!formData.password.match(validpswd)){
            console.log("password not ok");
            return
        }
        
        try {
            await user.signUp();
            console.log('Inscription réussie !');
            setFormData(initialFormState);
          } catch (error) {
            console.log('Erreur lors de l\'inscription :', error);
          }
    }

    return (
        <>
            <h2>Inscription</h2>
            <form className='modal__form' onSubmit={handleSubmit}>
                <div className='input'>
                    <label>Nom</label>
                    <div className='input_item'>
                        <input 
                            placeholder='Votre nom ici' 
                            name="firstName"
                            onChange={handleOnChange} 
                            value={formData.firstName}                     
                        />                       
                    </div>       
                </div>
                <div className='input'>
                    <label>Email</label>
                    <div className='input_item'>
                        <input 
                            placeholder='Votre Email' 
                            name="email"
                            type='mail'
                            onChange={handleOnChange} 
                            value={formData.email}                     
                        />                       
                    </div>       
                </div>
                <div className='input'>
                    <label>Mot de passe</label>
                    <div className='input_item'>
                        <input 
                            placeholder='Votre mot de passe' 
                            name="password"
                            onChange={handleOnChange} 
                            value={formData.password}                     
                        />                       
                    </div>       
                </div>
                <button type='submit'>submit</button>
            </form>
        </>
    )
}

export default ConnectModal
