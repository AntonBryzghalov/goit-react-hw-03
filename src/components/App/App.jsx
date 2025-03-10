import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { useState } from "react";
import css from "./App.module.css";
import initialContacts from "../../contacts.json";
import { useLocalStorageState } from "../../js/utils";

const contactsStorageKey = "contacts";

function App() {
  const [contacts, setContacts] = useLocalStorageState(
    contactsStorageKey,
    initialContacts
  );
  const [filter, setFilter] = useState("");

  function AddContact(newContact) {
    setContacts((curContacts) => {
      return [...curContacts, newContact];
    });
  }

  function RemoveContact(id) {
    setContacts((curContacts) =>
      curContacts.filter((contact) => contact.id !== id)
    );
  }

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.trim())
  );

  return (
    <div className={css.phonebook}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={AddContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={filteredContacts} onDelete={RemoveContact} />
    </div>
  );
}

export default App;
