import ContactForm from "../ContactForm/ContactForm";
import SearchBlock from "../SearchBlock/SearchBlock";
import ContactList from "../ContactList/ContactList";
import { useState } from "react";
import initialContacts from "../../contacts.json";

//const recordsStorageKey = "records";

function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState("");

  // useEffect(() => {
  //   const storedRecords = readFromLocalStorage(recordsStorageKey);
  //   if (storedRecords != null) {
  //     setRecords(storedRecords);
  //   }
  // }, []);

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

  console.log(contacts);
  const filteredContacts = contacts.filter(
    (record) => record.name.includes(filter) || record.number.includes(filter)
  );
  console.log(filteredContacts);

  return (
    <div style={{ width: "600px", padding: "20px" }}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={AddContact} />
      <SearchBlock value={filter} onFilter={setFilter} />
      <ContactList contacts={filteredContacts} onDelete={RemoveContact} />
    </div>
  );
}

export default App;
