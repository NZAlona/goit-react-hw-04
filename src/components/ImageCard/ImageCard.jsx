import css from './ImageCard.module.css';

export default function ImageCard({
  value: {
    description,
    urls: { small },
  },
}) {
  return (
    <>
      <div>
        <a href={small} target="_blank" rel="noreferrer noopener">
          <img src={small} alt={description} className={css.photo} />
        </a>
      </div>
    </>
  );
}
