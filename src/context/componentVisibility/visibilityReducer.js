import { SET_CURRENT_COMPONENT } from "../../types"

export default (state, action) => {
  switch (action.type) {
    case SET_CURRENT_COMPONENT:
      return {
        currentComponent: action.payload.name,
      }
    default:
      return state
  }
}
