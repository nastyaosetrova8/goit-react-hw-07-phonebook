import PropTypes from 'prop-types';
import Contact from "components/Contact/Contact";
import { ContactListStyled } from './ContactListStyled';


const ContactList = (props) => {
    const { contacts, deleteContact } = props;

    return (
      <ContactListStyled>
        {contacts.map(contact => {
          return (
            <Contact
              key={contact.id}
            deleteContact={deleteContact}
            contact={contact}
            />
          );
        })}
      </ContactListStyled>
    );
  };


  ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired,
  }

  export default ContactList;