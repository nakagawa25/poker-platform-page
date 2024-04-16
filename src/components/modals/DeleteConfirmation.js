import "./DeleteConfirmation.css"
import Modal from "../common/modals/Modal.js"

function DeleteConfirmation({ isOpen, setModalOpen, onDelete }) {
  return (
    <Modal
      isOpen={isOpen}
      setModalOpen={setModalOpen}
      height={"35vh"}
      width={"35vw"}
    >
      <div className="deleteContainer">
        <h1>Tem certeza que deseja excluir esse item?</h1>
        <div className="confirmationButtons">
          <button
            className="yes"
            onClick={async () => {
              await onDelete()
              setModalOpen()
            }}
          >
            Sim
          </button>
          <button
            className="no"
            onClick={() => {
              setModalOpen()
            }}
          >
            Não
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default DeleteConfirmation
