import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
  //   content: {
  //     top: '50%',
  //     left: '50%',
  //     right: 'auto',
  //     bottom: 'auto',
  //     marginRight: '-50%',
  //     transform: 'translate(-50%, -50%)',
  //   },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },

  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
};

export default function ImageModal({ content, isOpen, onModalClose }) {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onModalClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {isOpen && (
          <div>
            <img src={content.url} alt={content.alt ?? ''} height="608" />
          </div>
        )}
      </Modal>
    </>
  );
}
