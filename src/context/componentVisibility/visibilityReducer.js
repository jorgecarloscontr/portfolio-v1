import { SET_CURRENT_COMPONENT, SET_START_ANIMATION } from "../../types"

export default (state, action) => {
  switch (action.type) {
    case SET_CURRENT_COMPONENT:
      return {
        ...state,
        currentComponent: action.payload.name,
      }
    case SET_START_ANIMATION:
      return {
        ...state,
        startAnimation: action.payload.startAnimation,
      }
    default:
      return state
  }
}
