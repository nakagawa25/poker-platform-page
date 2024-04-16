import axios from "./axiosInstance"

// Authentication
export const getToken = (user) => axios.post("login", user)

export const getHomeImages = () => axios.get("image/home")

export const getCategories = () => axios.get("category/all")

export const getStage = (id) => axios.get(`stage?id=${id}`)

export const getHomeRanking = (categoryId) =>
  axios.get(`rank/generalranking?categoryId=${categoryId}`)

export const getStages = () => axios.get("stage/all")

export const getPlayers = () => axios.get("player/all")

// Admin Methods

// Category CRUD
export const createCategory = (category) => axios.post("category", category)

export const updateCategory = (category) => axios.put("category", category)

export const deleteCategory = (id) => axios.delete(`category?id=${id}`)

// Player
export const createPlayer = (player) => axios.post("player", player)

export const updatePlayer = (player) => axios.put("player", player)

export const deletePlayer = (id) => axios.delete(`player?id=${id}`)

// Image
export const createImage = (image) => axios.post("image", image)

export const updateImage = (image) => axios.put("image", image)

export const deleteImage = (id) => axios.delete(`image?id=${id}`)

// Stage
export const createStage = (stage) => axios.post("stage/create", stage)

export const updateStage = (stage) => axios.put("stage/update", stage)

export const deleteStage = (id) => axios.delete(`stage?id=${id}`)
