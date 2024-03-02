import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export default function ImageGallery({ items, onClickCard }) {
  return (
    <>
      <ul className={css.list}>
        {items.map(item => (
          <li key={item.id}>
            <ImageCard value={item} onClick={onClickCard} />
          </li>
        ))}
      </ul>
    </>
  );
}
