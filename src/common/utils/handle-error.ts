import { ThunkDispatch } from 'redux-thunk'
import { AnyAction, Dispatch } from 'redux'
import { AppRootState } from '../../app/store.ts'
import { isAxiosError } from 'axios'
import { setAppErrorAC } from '../../app/app-reducer.ts'

export const handleError = (dispatch: Dispatch, e: unknown) => {
  let errorMessage
  if (isAxiosError<ServerErrorType>(e)) {
    errorMessage = e.response ? e.response.data.errorMessages[0].message : e.message

  } else {
    errorMessage = (e as Error).message
  }
  dispatch(setAppErrorAC(errorMessage))
}


type ServerErrorType = {
  errorMessages: Array<{ field: string, message: string }>,

}
