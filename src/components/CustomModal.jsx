import Modal from 'react-bootstrap/Modal';

const CustomModal = ({ modalHeading, modalBody, showModal, setShowModal }) => {
    return (
        <Modal
          size="lg"
          show={showModal}
          onHide={() => setShowModal(false)}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>{modalHeading}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{modalBody}</Modal.Body>
        </Modal>
    )
}

export default CustomModal;