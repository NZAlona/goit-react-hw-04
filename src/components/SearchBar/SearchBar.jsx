import { Formik, Form, Field } from 'formik';
import css from './SearchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';
import { FaMagnifyingGlass } from 'react-icons/fa6';

export default function SearchBar({ onSubmit }) {
  const handleSubmit = (values, actions) => {
    if (values.searchBox === '') {
      toast.error('You attempted to submit an empty request');
      return;
    }
    onSubmit(values.searchBox);

    actions.resetForm();
  };
  return (
    <>
      <header className={css.formHeader}>
        <Formik initialValues={{ searchBox: '' }} onSubmit={handleSubmit}>
          <Form className={css.searchForm}>
            <Field
              type="text"
              name="searchBox"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              className={css.inputField}
            ></Field>
            <button type="submit" className={css.icon}>
              <FaMagnifyingGlass />
            </button>
            <Toaster />
          </Form>
        </Formik>
      </header>
    </>
  );
}
