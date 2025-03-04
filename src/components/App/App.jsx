import ContactForm from "../ContactForm/ContactForm";
import SearchBlock from "../SearchBlock/SearchBlock";
import ContactList from "../ContactList/ContactList";
import { useState } from "react";

function App() {
  const [records, setRecords] = useState([]);

  function AddNumber(newRecord) {
    setRecords((curRecords) => {
      return [...curRecords, newRecord];
    });
  }

  return (
    <div style={{ width: "600px", padding: "20px" }}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={AddNumber} />
      <SearchBlock />
      <ContactList records={records} />
    </div>
  );
}

export default App;
