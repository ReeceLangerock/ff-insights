export const toastReducer = (
  state = {
    visible: false,
    message: "",
    type: "",
  },
  action
) => {
  switch (action.type) {
    case "SHOW_TOAST":
      return {
        ...state,
        visible: true,
      }
    case "HIDE_TOAST":
      return {
        ...state,
        visible: false,
        message: "",
        type: "",
      }
    case "SET_TOAST_DATA":
      return {
        ...state,
        visible: true,
        message: action.message,
        type: action.toastType,
      }

    default:
      return state
  }
}
