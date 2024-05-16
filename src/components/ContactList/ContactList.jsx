import { selectFilteredContacts } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import css from './ContactList.module.css';
import { useSelector } from "react-redux";


export default function ContactList() {
const contacts = useSelector(selectFilteredContacts);

    // const list = contacts ? contacts.filter(
    //     (contact) =>
    //         typeof contact.name === "string" && contact.name.toLowerCase().includes(filter.toLowerCase())
    // ) : [];

    return (
        <ul className={css.mainlist}>
            {contacts.map((contact) => (
                <li key={contact.id} className={css.listitem}>
                    <Contact contact={contact} />
                </li> 
            ))}
        </ul>
    )
}