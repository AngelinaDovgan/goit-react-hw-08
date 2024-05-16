import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import css from './Contact.module.css';
import { useDispatch } from "react-redux";
import { deleteContact } from '../../redux/contactsOps.js';

export default function Contact({ contact: { name, number, id }}) {
    const dispatch = useDispatch();

    
    const handleDelete = () => dispatch(deleteContact(id));
 
    return (
        <>
           
            <p className={css.ctext}> <FaUser /> {name}</p>
            <p className={css.ctext}> <BsFillTelephoneFill /> {number}</p>
            <button onClick={handleDelete}>
            Delete</button>
        </>
    )
}