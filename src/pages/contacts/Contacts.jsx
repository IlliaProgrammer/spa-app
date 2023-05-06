import { useState } from 'react';
import Contact from '../../components/contact-comp/Contact'
import { v4 as uuidv4 } from 'uuid';
import {BsSearch} from 'react-icons/bs'
import './contacts.css'
import { Link } from 'react-router-dom';

export const contacts = [{
  id: uuidv4(),
  firstName: "Барней",
  lastName: "Стинсовський",
  phone: "+380956319521",
  gender: "male", 
  description: "Gray, short hair awkwardly hangs over a full, worried face."
  }, {
  id: uuidv4(),
  firstName: "Робін",
  lastName: "Щербатська",
  phone: "+380931460123",
  gender: "female",
  description: "Silver, shaggy hair awkwardly hangs over a chiseled, sad face"
  }, {
  id: uuidv4(),
  firstName: "Анонімний",
  lastName: "Анонімус",
  phone: "+380666666666"
  }, {
  id: uuidv4(),
  firstName: "Лілія",
  lastName: "Олдровна",
  phone: "+380504691254",
  gender: "female",
  description: "Brown, perfectly groomed hair braided to reveal a round, frowning face."
  }, {
  id: uuidv4(),
  firstName: "Маршен",
  lastName: "Еріксонян",
  phone: "+380739432123",
  gender: "male",
  description: "Black, long hair slightly reveals a furrowed, cheerful face."
  }, {
  id: uuidv4(),
  firstName: "Теодор",
  lastName: "Мотсбес",
  phone: "+380956319521",
  gender: "male",
  description: "Brown, curly hair gently hangs over a handsome, friendly face.."
}];

function Contacts() {
  
  
  const [search, setSearch] = useState("")
  const [contactValue, setContact] = useState(contacts)
  const [checkedValues, setCheckedValues] = useState( {male: true, female: true, unspecified: true,});

  function handleSearchChange(event) {
    setSearch(event.target.value);
    if (event.target.value === "") {
      setContact(contacts);
    } else {
      setContact(
        contacts.filter((el) => {
          if (
            el.firstName.includes(event.target.value) ||
            el.lastName.includes(event.target.value) ||
            el.phone.includes(event.target.value)
          ) {
            return el;
          }
        })
      );
    }
  }

  function handleCheckboxChange(event) {
    setCheckedValues({ ...checkedValues, [event.target.name]: event.target.checked });
  }
  
  return (
      <div className="numbers">
        <div className='top'>
        <div className='search'>
          <BsSearch className='loopa'/>
          <input className="search-input" type="text" placeholder='search' value={search} onChange={(event)=>{handleSearchChange(event)}}/>
        </div>
        <div className="checkboxes">
        <label>
          <input
            type="checkbox"
            name="male"
            checked={checkedValues.male}
            onChange={(event) => {
              handleCheckboxChange(event);
            }}
          />
          Male
        </label>
        <label>
          <input
            type="checkbox"
            name="female"
            checked={checkedValues.female}
            onChange={(event) => {
              handleCheckboxChange(event);
            }}
          />
          Female
        </label>
        <label>
          <input
            type="checkbox"
            name="unspecified"
            checked={checkedValues.unspecified}
            onChange={(event) => {
              handleCheckboxChange(event);
            }}
          />
          Unspecified
        </label>
      </div>
        </div>
        
       
        {contactValue.filter((contact) => {
          if (checkedValues.male && contact.gender === "male") {
            return true;
          }
          else if (checkedValues.female && contact.gender === "female"){
            return true;
          }
          else if (checkedValues.unspecified && !contact.gender){
            return true;
          }}).map((contact) => (
            <Link to={`/user/${contact.firstName}`}>
                <Contact key={contact.id} contact={contact} />
            </Link>
           ))} 
      </div>
  );
}

export default Contacts;
