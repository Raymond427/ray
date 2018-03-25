export const menuReducer = (state = { menuOpen: null }, action) => {
  return action.menuOpen ? { ...state, menuOpen: true } : { ...state, menuOpen: false }
}
