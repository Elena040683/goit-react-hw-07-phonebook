import axios from 'axios';
import actions from './actions';

axios.defaults.baseURL = 'https://619fdee3a6470200176131ff.mockapi.io/contacts';

const fetchContacts = () => dispatch => {
  dispatch(actions.fetchContactsRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(actions.fetchContactsSuccess(data)))
    .catch(error => dispatch(actions.fetchContactsError(error)));
};

const addContact = (name, number) => dispatch => {
  const contacts = { name, number, completed: false };

  dispatch(actions.addContactRequest());

  axios
    .post('/contacts', contacts)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch(error => dispatch(actions.addContactError(error)));
};

const deleteContact = id => dispatch => {
  dispatch(actions.deleteContactsRequest());
  axios
    .delete('/contacts/${id}')
    .then(() => dispatch(actions.deleteContactsSuccess(id)))
    .catch(error => dispatch(actions.deleteContactsError(error)));
};

export default { fetchContacts, deleteContact };
