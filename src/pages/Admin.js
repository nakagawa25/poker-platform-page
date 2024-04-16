import DataManager from "../components/common/modals/DataManager"
import dictionary from "../helpers/dictionaries/AdminDictionary"
import { useEffect, useState } from "react"
import "./Admin.css"
import Modal from "../components/common/modals/Modal"
import DeleteConfirmation from "../components/modals/DeleteConfirmation"
import useAuthorizationContext from "../hooks/useAuthorizationContext"
import { useNavigate } from "react-router-dom"

function Admin() {
  const [selectedDictionary, setSelectedDictionary] = useState("category")
  const [dataItems, setDataItems] = useState([])
  const [openInsertModal, setOpenInsertModal] = useState(false)
  const [openUpdateModal, setOpenUpdateModal] = useState(false)
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  const [updatedItem, setUpdatedItem] = useState([])
  const [deletedItem, setDeletedItem] = useState([])

  const { isAuthenticated } = useAuthorizationContext()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login")
    }
    const fetchData = async () => {
      if (
        openInsertModal == false &&
        openUpdateModal == false &&
        openDeleteModal == false
      ) {
        try {
          const response = await dictionary[selectedDictionary].onGet()
          setDataItems(response.data)
        } catch (error) {
          console.error("Erro ao buscar os dados:", error)
        }
      }
    }
    fetchData()
  }, [openInsertModal, openUpdateModal, openDeleteModal, selectedDictionary])

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="Page">
      <div className="SideMenu">
        <div className="option">
          <button onClick={() => setSelectedDictionary("category")}>
            Anos
          </button>
        </div>
        <div className="option">
          <button onClick={() => setSelectedDictionary("player")}>
            Jogadores
          </button>
        </div>
        <div className="option">
          <button onClick={() => setSelectedDictionary("image")}>
            Banners
          </button>
        </div>
        <div className="option">
          <button onClick={() => setSelectedDictionary("stage")}>Etapas</button>
        </div>
      </div>
      <div className="managerMenu">
        <DataManager
          items={dataItems}
          dictionary={dictionary[selectedDictionary].dictionary}
          dictionaryHeader={dictionary[selectedDictionary].header}
          onInsertClick={() => setOpenInsertModal(true)}
          onUpdateClick={(item) => {
            setUpdatedItem(item)
            setOpenUpdateModal(true)
          }}
          onDeleteClick={(item) => {
            setDeletedItem(item)
            setOpenDeleteModal(true)
          }}
        ></DataManager>
      </div>
      <Modal
        height={"85vh"}
        width={"85vw"}
        isOpen={openInsertModal}
        setModalOpen={() => setOpenInsertModal(!openInsertModal)}
      >
        {dictionary[selectedDictionary].onInsert(setOpenInsertModal)}
      </Modal>
      <Modal
        height={"85vh"}
        width={"85vw"}
        isOpen={openUpdateModal}
        setModalOpen={() => setOpenUpdateModal(!openUpdateModal)}
      >
        {dictionary[selectedDictionary].onUpdate(
          setOpenUpdateModal,
          updatedItem
        )}
      </Modal>
      <DeleteConfirmation
        isOpen={openDeleteModal}
        setModalOpen={() => setOpenDeleteModal(!openDeleteModal)}
        onDelete={() => dictionary[selectedDictionary].onDelete(deletedItem)}
      ></DeleteConfirmation>
    </div>
  )
}

export default Admin
