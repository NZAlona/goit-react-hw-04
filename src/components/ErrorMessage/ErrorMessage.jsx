import css from './ErrorMessage.module.css';

export default function ErrorMessage() {
  return (
    <>
      <span className={css.errorWrapper}>Please reload page!</span>
    </>
  );
}
