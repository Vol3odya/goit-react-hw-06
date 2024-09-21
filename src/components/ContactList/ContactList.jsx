import Contact from "../Contact/Contact"
import { useSelector } from "react-redux";
import {liContacts} from "../../redux/contactsSlice"
import {nameFilters} from "../../redux/filtersSlice"
import css from "./ContactList.module.css"

export default function ContactList() {
  
  const selectContacts = useSelector(liContacts);
  const selectNameFilter = useSelector(nameFilters);

  const find = () => {
    if (selectNameFilter == '') {
      return selectContacts;
    }
    else {
      return selectContacts.filter(item => item.name.toLowerCase().includes(selectNameFilter.toLowerCase()));
    }
    
  }


  return (
    <ul className={css.main}>
      {find().map(value => {
        return (
          <li key={value.id} className={css.list}>
            <Contact
              card={value}
            />
          </li>
        );
      })}
    </ul>
  )
}
