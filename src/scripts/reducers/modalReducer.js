export const modalReducer = (state = { modalOpen: null }, action) => {
  return action.showModal ? { ...state, modalOpen: true } : { ...state, modalOpen: false }
}
