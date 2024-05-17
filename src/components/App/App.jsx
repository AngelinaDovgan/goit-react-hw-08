import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../Layout/Layout';
import './App.css';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import { refreshUser } from '../../redux/auth/operations';
import { Routes } from 'react-router-dom';
import RestrictedRoute from '../RestrictedRoute';
import PrivateRoute from '../PrivateRoute';
import { lazy } from 'react';
import { Route } from 'react-router-dom';

const HomePage = lazy(() => import("../../Pages/HomePage/HomePage"));
const RegistrationPage = lazy(() => import("../../Pages/RegistrationPage/RegistrationPage"));
const LoginPage = lazy(() => import("../../Pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../../Pages/ContactsPage/ContactsPage"));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

   console.log("isRefreshing:", isRefreshing);

  return isRefreshing ? (
    <p>Refreshing user please wait...</p>
  ) : (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={
            <RestrictedRoute component={<RegistrationPage />} redirectTo="/" />
          } />
          <Route path="/login"
            element={
              <RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />
            }
          />
          <Route path="/contacts" element={
            <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
          }
          />
        </Routes>
      </Suspense>
    </Layout>
  );
}


// export default function App() {
//   const dispatch = useDispatch();
//   const loading = useSelector(selectLoading);
//   const error = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);
  
//   return (
//      <Layout>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <SearchBox />
//       {loading && <Loader>Loading contacts...</Loader>}
//       {error && <Error>Error!</Error>}
//         <ContactList />
//     </Layout>
//   );
// }

