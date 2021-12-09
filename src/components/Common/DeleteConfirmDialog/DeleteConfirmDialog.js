import { Modal, Button } from 'react-bootstrap';
import './DeleteConfirmDialog.css';

const DeleteConfirmDialog = ({ show, onClose, onDelete }) => {

    return (
        <Modal show={show} onHide={onClose}>
            <div className="delete-confirm-dialog">
                <Modal.Header closeButton>
                    <Modal.Title>Внимание</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Сигурни ли сте, че искате да изтриете този запис</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose} className="close-button">Затвори</Button>
                    <Button variant="primary" onClick={onDelete} className="delete-button">Изтрий</Button>
                </Modal.Footer>
            </div>
        </Modal>
    )
}

export default DeleteConfirmDialog