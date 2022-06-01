import React, { useState } from "react";
import GalleryModal from "./components/GalleryModal";
import Modal from "./components/Modal";
import useModal from "./hooks/useModal";

function App() {
  const [isOpenLoginModal, openLoginModal, closeLoginModal] = useModal();
  const [isOpenChatModal, openChatModal, closeChatModal] = useModal();
  const [isOpenGalleryModal, openGalleryModal, closeGalleryModal] = useModal();

  return (
    <div>
      <button onClick={openLoginModal}>Open Login Modal</button>
      <button onClick={openChatModal}>Open Chat Modal</button>
      <button onClick={openGalleryModal}>Open Gallery Modal</button>
      <Modal
        isOpen={isOpenLoginModal}
        closeModal={closeLoginModal}
        title="Login"
      >
        <form>
          <input type="email" placeholder="Correo"></input>
          <input type="text" placeholder="Contraseña"></input>
        </form>
      </Modal>
      <Modal isOpen={isOpenChatModal} closeModal={closeChatModal} title="Chat">
        <p>
          Hola!! <b>- Luis</b>
        </p>
        <p>
          Que hace? <b>- Maria</b>
        </p>
      </Modal>

      <GalleryModal
        isOpen={isOpenGalleryModal}
        title="Gallery"
        closeModal={closeGalleryModal}
      />
    </div>
  );
}

export default App;
