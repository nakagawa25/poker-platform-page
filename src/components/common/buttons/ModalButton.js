import "./ModalButton.css"

function ModalButton({ onClick, width, children }) {
  return (
    <>
      <button className="modalButton" style={{ width }} onClick={onClick}>
        {children}
      </button>
    </>
  )
}

export default ModalButton
