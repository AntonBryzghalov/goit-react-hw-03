import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import css from "./Contact.module.css";

function Contact({ data, onDelete }) {
  return (
    <div className={css.contact}>
      <div className={css.info}>
        <FaUser /> {data.name}
      </div>
      <div className={css.info}>
        <FaPhone /> {data.number}
      </div>
      <button onClick={() => onDelete(data.number)}>Delete</button>
    </div>
  );
}

export default Contact;
