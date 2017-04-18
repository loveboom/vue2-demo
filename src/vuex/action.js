export const addNote = ({ dispatch }) => {
    dispatch('ADD_NOOTE')
}

export const editNote = ({ dispatch }) => {
    dispatch('EDIT_NOTE',e.target.value)
}

export const deleteNote = ({ dispatch }) => {
    dispatch('DELETE_note')
}

export const updateActiveNote = ({ dispatch }, note) => {
    dispatch('SET_ACTIVE_NOTE',note)
}

export const toggleFavorite = ({ dispatch }) => {
    dispatch('TOGGLE_FAVORITE')
}