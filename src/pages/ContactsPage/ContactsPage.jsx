import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import PageTitle from "../../components/PageTitle/PageTitle";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
// import { selectLoading } from "../../redux/contacts/selectors";
import { selectLoading } from "../../redux/contacts/selectors";
import SearchBox from "../../components/SearchBox/SearchBox";

export default function ContactsPage() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <>
            <PageTitle>Your Contacts</PageTitle>
            <ContactForm />
            <SearchBox />
            <div>{isLoading && "Request in progress..."}</div>
            <ContactList />
        </>
);
}