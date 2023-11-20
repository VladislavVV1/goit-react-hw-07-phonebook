import { Section } from "./Section/section";
import { PhoneBookForm } from "./PhonebookForm/PhonebookForm";
import { ContactsList } from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";

export const App = () =>{
  const contacts = useSelector(selectContacts)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])
  
  return (
    <>
    <Section title={'Phonebook'}> 
      <PhoneBookForm></PhoneBookForm>
    </Section>
  <br/>
    <Filter></Filter>
  
  {contacts[0]&& 
    <Section title={'Contacts'}> 
      <ContactsList></ContactsList>
    </Section>}
    </>
  )
}
