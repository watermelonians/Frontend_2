import React from 'react';
import { Button, Modal as BootstrapModal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Modal = ({ isOpen, toggle }) => {
    console.log('Modal isOpen:', isOpen);
  return (
    
    <BootstrapModal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Modal Title</ModalHeader>
      <ModalBody>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam pulvinar risus non risus hendrerit venenatis.
          Pellentesque sit amet hendrerit risus, sed porttitor quam.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam pulvinar risus non risus hendrerit venenatis.
          Pellentesque sit amet hendrerit risus, sed porttitor quam.
        </p>
        <p>
          Magna exercitation reprehenderit magna aute tempor cupidatat
          consequat elit dolor adipisicing. Mollit dolor eiusmod sunt
          ex incididunt cillum quis. Velit duis sit officia eiusmod
          Lorem aliqua enim laboris do dolor eiusmod. Et mollit
          incididunt nisi consectetur esse laborum eiusmod pariatur
          proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
        </p>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>Close</Button>
        <Button color="primary">Action</Button>
      </ModalFooter>
    </BootstrapModal>
  );
};

export default Modal;
