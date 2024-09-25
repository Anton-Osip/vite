export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
  status: 'idle' as RequestStatusType,
  error: null as string | null,
}

type AppStateType = typeof initialState

export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
  switch (action.type) {
    case 'SET_APP_STATUS':
      return { ...state, status: action.status }
    case 'SET_APP_ERROR':
      return { ...state, error: action.error }
    default:
      return state
  }
}

type ActionsType = setStatusACType | setErrorACType


type setStatusACType = ReturnType<typeof setAppStatusAC>
type setErrorACType = ReturnType<typeof setAppErrorAC>


export const setAppStatusAC = (status: RequestStatusType) => ({ type: 'SET_APP_STATUS', status } as const)

export const setAppErrorAC = (error: string|null) => ({ type: 'SET_APP_ERROR', error } as const)
