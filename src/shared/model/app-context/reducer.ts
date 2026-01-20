import { AllDataFilm } from '@/shared/api/type'

export type State = {
  isLoading: boolean
  result: AllDataFilm | null
   success?: boolean
}

export const initialState: State = {isLoading: false, result: null }

export const stateReducer = (
  state: State,
  action: { type: string; payload: {} },
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

