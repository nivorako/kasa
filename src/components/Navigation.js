import React, {useState, useRef, useEffect} from "react";
import { NavLink } from "react-router-dom";

import ConnectModal from "./ConnectModal";
import LogIn from "./LogIn";

import Parse from "parse/dist/parse.min.js";

Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  'xRGoV24sXoJg8OqSAPovZUvzDDJi3jAKkTiEFv9O', // This is your Application ID
  'gXkhKIhS0v0ujIyFdEOygFgj34ntWR8MPieKr6l1', // This is your Javascript key
  'uAONEwgLmWXaZTlRKWjrcRs3ck85ElwUaDSbvfUB' // This is your Master key (never use it in the frontend)
);
const currentUser = Parse.User.current()
    console.log("currentUser :", currentUser)

function Navigation() {
    const [showModal, setShowModal] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const modalRef =useRef();
    const toggleModal = () => {
        setShowModal(!showModal);
        if(showModal){
            setShowLogin(false);
        }
    };
    const toggleLogin = () => {
        setShowLogin(true);
    };

    const handleClickOutside = (e) => {
         if(modalRef.current && !modalRef.current.contains(e.target)){
            setShowModal(false)
         }
    }
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);
    console.log("show login: ",showLogin);
    const logout = async () => {
        console.log("log out trigger")
        if(currentUser){
            await Parse.User.logOut();
            console.log('User logged out');
        }
    }
    return (
        <>
            <nav className="navigation">
                <ul>
                    <li>
                        <NavLink to="/" className="navigation__nav">
                            <span> Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/About" className="navigation__nav" >
                            <span>A Propos</span>
                        </NavLink>
                    </li>
                </ul>
                <div className="navigation__connect" onClick={toggleModal}>
                    Connexion
                </div>
                <div className="navigation__connect" onClick={logout}>
                    LogOut
                </div>
            </nav>           
            {
                showModal ? 
                <div className="navigation__modal" ref={modalRef}>
                   {
                    !showLogin ?
                    (
                        <>
                        <LogIn />
                        <button onClick={toggleLogin}>Inscription</button>
                        </>
                    ) : <ConnectModal/>
                   }
                </div> 
                : null
            }           
            
        </>
    );
}

export default Navigation;
