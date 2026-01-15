export const initialState = {}

export const stateReducer = (
  state: {},
  action: { type: string; payload: {}},
) => {
  switch (action.type) {
    case 'UPDATE_ALL_STATE':
      return {
        ...state,
        ...action.payload,
      }
      default:
      return state
  }
}
