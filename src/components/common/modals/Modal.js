import "./Modal.css"

function Modal({ isOpen, setModalOpen, children, width, height }) {
  if (isOpen) {
    return (
      <div className="backgroundModal">
        <div className="modalContainer" style={{ width, height }}>
          <button className="closeModalButton" onClick={setModalOpen}>
            X
          </button>
          <div className="modalContent">{children}</div>
        </div>
      </div>
    )
  }

  return null
}

export default Modal
