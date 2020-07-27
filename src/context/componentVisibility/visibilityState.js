import React, { useReducer } from "react"
import VisibilityReducer from "./visibilityReducer"
import VisibilityContext from "./visibilityContext"

import { SET_CURRENT_COMPONENT, SET_START_ANIMATION } from "../../types"
import { bool } from "prop-types"

const VisibilityState = props => {
  const initialState = {
    currentComponent: "header",
    startAnimation: false,
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

  const setStartAnimation = boolean => {
    dispatch({
      type: SET_START_ANIMATION,
      payload: {
        startAnimation: boolean,
      },
    })
  }

  return (
    <VisibilityContext.Provider
      value={{
        currentComponent: state.currentComponent,
        startAnimation: state.startAnimation,
        setCurrentComponent,
        setStartAnimation,
      }}
    >
      {props.children}
    </VisibilityContext.Provider>
  )
}

export default VisibilityState
