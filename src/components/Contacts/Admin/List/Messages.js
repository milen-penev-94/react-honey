import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faTrash } from '@fortawesome/free-solid-svg-icons';
import * as contactsService from '../../../../services/contactsService';
import DeleteConfirmDialog from '../../../Common/DeleteConfirmDialog/DeleteConfirmDialog';
import './Messages.css';

const Messages = () => {

    const [messages, setMessages] = useState();
    const [messageId, setMessageId] = useState();
    const[showDeleteDialog, setShowDeleteDialog] = useState(false);
    const[onChange, setOnChange] = useState(false);

    useEffect(() => {
        contactsService.getAll()
        .then(result => {
            setMessages(result);
        })   
        .catch(err => {
            console.log(err);
        })
    }, [onChange]);

    const deleteMessage = (e) => {
        e.preventDefault();
        setOnChange(false);

        contactsService.remove(messageId)
        .then(result => {
            setOnChange(true);
        })  
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            setShowDeleteDialog(false);
        });
     }

     const closeEventHandler = (e) => {
        e.preventDefault();
        setShowDeleteDialog(false);
     }

    const deleteClickHandler = (e) => {
        e.preventDefault();
        setMessageId(e.currentTarget.getAttribute('data-message-id'))
        setShowDeleteDialog(true);
     }


    return (
        <div className="messages-component auto-container">

            <Link to="/profile" className="cancel profile-action-button">
                <span className="icon"><FontAwesomeIcon icon={faChevronCircleLeft} /></span>
                <span className="label">Към профила</span>
            </Link>

            <h2>Съобщения</h2>

            {messages
                ? (
                    <ul className="messages">
                        <DeleteConfirmDialog show={showDeleteDialog} onClose={closeEventHandler} onDelete={deleteMessage} />
                        { messages.map(message => 
                        <li className="message" key={message.docId}>
                          <p><strong>Дата:</strong> {message.date}</p>
                          <p><strong>От:</strong> {message.name}</p>
                          <p><strong>Емеил:</strong> {message.email}</p>
                          <p><strong>Телефон:</strong> {message.phone}</p>
                          <p><strong>Съобщение:</strong>  {message.message}</p>
                          <span onClick={deleteClickHandler} data-message-id={message.docId} className="delete"><FontAwesomeIcon icon={faTrash} /></span>
                        </li>
                        )}
                    </ul>
                ) 
                : <p className="no-data">Няма налични Съобщения в базата с данни!</p>
            }
        </div>  
    )
}

export default Messages