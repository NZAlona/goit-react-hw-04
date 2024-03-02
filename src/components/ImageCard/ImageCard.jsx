import css from './ImageCard.module.css';

export default function ImageCard({
  value: {
    description,
    urls: { small, regular },
  },
  onClick,
}) {
  const modalPicture = {
    url: regular,
    alt: description,
  };
  return (
    <>
      <div>
        <img
          src={small}
          alt={description}
          className={css.photo}
          onClick={() => onClick(modalPicture)}
        />
      </div>
    </>
  );
}
