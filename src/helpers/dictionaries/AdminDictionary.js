import CategoryModal from "../../components/modals/CategoryModal"
import {
  deleteCategory,
  deletePlayer,
  deleteStage,
  deleteImage,
  getHomeImages,
  getCategories,
  getStages,
  getPlayers,
} from "../../api/api.js"
import PlayerModal from "../../components/modals/PlayerModal.js"
import ImageModal from "../../components/modals/ImageModal.js"
import StageModal from "../../components/modals/StageModal.js"

const dictionary = {
  category: {
    dictionary: ["name", "index"],
    header: ["Ano", "Posição"],
    onGet: () => getCategories(),
    onInsert: (setIsOpen) => (
      <CategoryModal setIsOpen={setIsOpen}></CategoryModal>
    ),
    onUpdate: (setIsOpen, item) => (
      <CategoryModal setIsOpen={setIsOpen} item={item}></CategoryModal>
    ),
    onDelete: async (item) => {
      await deleteCategory(item.id)
    },
  },
  player: {
    dictionary: ["name", "isActive"],
    header: ["Jogador", "Situação"],
    onGet: () => getPlayers(),
    onInsert: (setIsOpen) => <PlayerModal setIsOpen={setIsOpen}></PlayerModal>,
    onUpdate: (setIsOpen, item) => (
      <PlayerModal setIsOpen={setIsOpen} item={item}></PlayerModal>
    ),
    onDelete: async (item) => {
      await deletePlayer(item.id)
    },
  },
  image: {
    dictionary: ["url"],
    header: ["Link da Imagem"],
    onGet: () => getHomeImages(),
    onInsert: (setIsOpen) => <ImageModal setIsOpen={setIsOpen}></ImageModal>,
    onUpdate: (setIsOpen, item) => (
      <ImageModal setIsOpen={setIsOpen} item={item}></ImageModal>
    ),
    onDelete: async (item) => {
      await deleteImage(item.id)
    },
  },
  stage: {
    dictionary: ["name", "categoryName"],
    header: ["Nome da Etapa", "Ano da Etapa"],
    onGet: () => getStages(),
    onInsert: (setIsOpen) => <StageModal setIsOpen={setIsOpen}></StageModal>,
    onUpdate: (setIsOpen, item) => (
      <StageModal setIsOpen={setIsOpen} item={item}></StageModal>
    ),
    onDelete: async (item) => {
      await deleteStage(item.id)
    },
  },
}

export default dictionary
