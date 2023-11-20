import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
const quizSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too short!').required('This folder is required!'),
  number: Yup.string().min(8).required('A phone number is required'),
});


export const  PhoneBookForm = () => {
  const dispatch = useDispatch()
  const contacts = useSelector(selectContacts)
  return (
    <Formik initialValues={{
      name:'',
      number:'',
    }}
    validationSchema={quizSchema}
    onSubmit={(values, actions) => {
      if(contacts.find((contact)=>contact.name.toLowerCase() === values.name.toLowerCase())){
        alert(`${values.name} is already in contacts`)
        return
      }
      const newValue = {name:values.name,
      phone:values.number}
      dispatch(addContact(newValue));
      actions.resetForm();
    }}
    >
<Form>
  <label>
          Name
        <Field
          name="name"
        />
        <ErrorMessage name='name' ></ErrorMessage>
  </label>       
        
  <label>
         Number
          <Field
            name="number"
        />
        <ErrorMessage name='number'></ErrorMessage>
  </label> 
  <button type="submit">Add contact</button>
</Form>
    </Formik>

  )
}