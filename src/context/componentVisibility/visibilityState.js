import React, { useReducer } from "react"
import VisibilityReducer from "./visibilityReducer"
import VisibilityContext from "./visibilityContext"

import { SET_CURRENT_COMPONENT } from "../../types"

const VisibilityState = props => {
  const initialState = {
    currentComponent: "header",
  }

  const [state, dispatch] = useReducer(VisibilityReducer, initialState)

  //functions
  const setCurrentComponent = name => {
    dispatch({
      type: SET_CURRENT_COMPONENT,
      payload: {
        name,
      },
    })
  }

  return (
    <VisibilityContext.Provider
      value={{
        currentComponent: state.currentComponent,
        setCurrentComponent,
      }}
    >
      {props.children}
    </VisibilityContext.Provider>
  )
}

export default VisibilityState
