export const showToast = () => {
  return {
    type: "SHOW_TOAST",
  }
}
export const hideToast = () => {
  return {
    type: "HIDE_TOAST",
  }
}

export const setToastMessage = message => {
  return {
    type: "SET_TOAST_MESSAGE",
    message,
  }
}

export const setToastType = type => {
  return {
    type: "SET_TOAST_TYPE",
    type,
  }
}

export const setToastData = (message, toastType) => {
  return {
    type: "SET_TOAST_DATA",
    message,
    toastType,
  }
}
