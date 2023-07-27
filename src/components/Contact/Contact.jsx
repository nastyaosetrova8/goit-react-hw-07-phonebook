import PropTypes from 'prop-types';
import { ContactListStyled } from './ContactStyled';


const Contact = (props) => {
    const {contact, deleteContact} = props;

    return (
      <ContactListStyled>
        <p>{contact.name}:</p>
        <p>{contact.number}</p>
        <button onClick={() => deleteContact(contact.id)}>Delete</button>
      </ContactListStyled>
    );
  };

  Contact.propTypes = {
    contact: PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
    deleteContact: PropTypes.func.isRequired,
  }

  export default Contact;
