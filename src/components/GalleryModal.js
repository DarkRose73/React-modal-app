import React from "react";
import Modal from "./Modal";

const GalleryModal = ({ isOpen, title, closeModal }) => {
  return <Modal isOpen={isOpen} title={title} closeModal={closeModal}></Modal>;
};

export default GalleryModal;
