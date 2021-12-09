import { Modal, Button } from 'react-bootstrap';
import './DeleteConfirmDialog.css';

const DeleteAlertDialog = ({ show, onClose }) => {

    return (
        <Modal show={show} onHide={onClose}>
            <div className="delete-confirm-dialog">
                <Modal.Header closeButton>
                    <Modal.Title>Внимание</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Не може да изтриете този запис</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose} className="close-button">Затвори</Button>
                </Modal.Footer>
            </div>
        </Modal>
    )
}

export default DeleteAlertDialog