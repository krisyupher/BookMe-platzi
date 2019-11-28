const INICIAL_STATE = {
  usuario: [1, 2, 3]
};
export default (state = INICIAL_STATE, action) => {
  switch (action.type) {
    case 'traer_usuarios':
      return { ...state, usuarios: action.payload }
    default: return state
  }
}
