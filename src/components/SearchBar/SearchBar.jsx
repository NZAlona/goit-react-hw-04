import { Formik, Form, Field } from 'formik';
import css from './SearchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';

export default function SearchBar() {
  const handleSubmit = (values, actions) => {
    console.log(values);
    toast.error('An empty input. Please fill it up');
    actions.resetForm();
  };
  return (
    <>
      <header className={css.formHeader}>
        <Formik initialValues={{ searchBox: '' }} onSubmit={handleSubmit}>
          <Form>
            <Field
              type="text"
              name="searchBox"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              className={css.inputField}
            ></Field>
            <button type="submit" className={css.btn}>
              Search
            </button>
            <Toaster />
          </Form>
        </Formik>
      </header>
    </>
  );
}
