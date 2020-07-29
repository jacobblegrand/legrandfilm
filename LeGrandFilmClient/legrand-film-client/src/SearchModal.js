import React, {useState} from 'react';
import SearchGrid from './SearchGrid';
import FilmGrid from './FilmGrid';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './Style.scss';

function SearchModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Film
      </Button>

      <Modal show={show} onHide={handleClose} dialogClassName="search-modal">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <SearchGrid></SearchGrid>
        </Modal.Body>
        
      </Modal>
    </>
  );
}

export default SearchModal;