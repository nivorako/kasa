import React from 'react';

const LogIn = () => {

    
    return (
        < >
            <h2>Se connecter</h2>
            <form className='modal__form'>
                <div className='input'>
                    <label>Nom</label>
                    <div className='input_item'>
                        <input 
                            placeholder='Votre nom ici' 
                            name="firstName"
                            // onChange={handleOnChange} 
                            // value={formData.firstName}                     
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
                            // onChange={handleOnChange} 
                            // value={formData.email}                     
                        />                       
                    </div>       
                </div>
                <div className='input'>
                    <label>Mot de passe</label>
                    <div className='input_item'>
                        <input 
                            placeholder='Votre mot de passe' 
                            name="password"
                            // onChange={handleOnChange} 
                            // value={formData.password}                     
                        />                       
                    </div>       
                </div>
                <button type='submit'>submit</button>
            </form>
        </>
    )
}

export default LogIn
