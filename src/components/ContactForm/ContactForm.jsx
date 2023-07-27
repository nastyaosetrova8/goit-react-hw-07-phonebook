import PropTypes from 'prop-types';
import { ContactFormStyled } from './ContactFormStyled';
import { useState } from 'react';


export default function ContactForm ({onFormSubmit}) {

const [name, setName] = useState('');
const [number, setNumber] = useState('');

const handleChange = e => {
const {name, value} = e.target;

switch (name) {
  case 'name': 
  setName(value);
  break;

  case 'number':
    setNumber(value);
    break;

    default:
      return;
}
};

const handleSubmit = e => {
    e.preventDefault();

    const contactData = {
    name,
    number};

onFormSubmit(contactData);
setName ('');
setNumber('');
};


    return (
<ContactFormStyled onSubmit={handleSubmit}>
    <label>
        Name
    <input value={name}
    onChange={handleChange}
    type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required />
    </label>
        
    <label >
        Number
    <input value={number} 
    onChange={handleChange}
    type="tel"
  name="number"
  pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required />
    </label>
        
        <button type="submit">Add contact</button>
      </ContactFormStyled>
    )
}


ContactForm.propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
}
