import React from 'react';
import './user.css'
import { useParams } from 'react-router-dom';
import { contacts as con} from '../contacts/Contacts';

const User = () => {
    const {id} = useParams()

    let user = con.filter((item) => {return item.firstName === id})[0]
    

    return (
        <div className="card-container">
        <span className="pro">CONTACT</span>
        <img className="round" src="https://i.pinimg.com/736x/83/bc/8b/83bc8b88cf6bc4b4e04d153a418cde62.jpg" alt="user" />
        <h3>{user.firstName} {user.lastName}</h3>
        <h6>{user.phone} {user.gender}</h6>
        <p>{user.description}<br/> </p>
        <div className="buttons">
            <button className="primary">
                Message
            </button>
            <button className="primary ghost">
                Following
            </button>
        </div>
    </div>
    
    );
};

export default User;