import { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { useSelector } from 'react-redux'
import { useAppDispatch, useAppSelector } from '../store.ts'
import { setAppErrorAC } from '../app-reducer.ts'

export const GlobalError = () => {
  const errorMessage = useAppSelector(state => state.app.error)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage)
      dispatch(setAppErrorAC(null))
    }
  }, [errorMessage])

  return <ToastContainer theme="dark" autoClose={3000} />
}
