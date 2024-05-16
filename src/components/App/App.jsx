import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../Layout/Layout';
import ContactList from '../ContactList/ContactList';
import Loader from '../Loader/Loader';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';
import Error from '../Error/Error';
import { fetchContacts } from '../../redux/contactsOps';
import { selectLoading, selectError,  } from '../../redux/contactsSlice';
import './App.css';


export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  return (
     <Layout>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <Loader>Loading contacts...</Loader>}
      {error && <Error>Error!</Error>}
        <ContactList />
    </Layout>
  );
}

