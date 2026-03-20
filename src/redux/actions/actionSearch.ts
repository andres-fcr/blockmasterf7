export const searchTerm = (value = '') => {
  return {
    payload: value,
  }
}

export const listSearch = (value) => {
  return {
    payload: { value },
  }
}
