import s from './AddNewPostForm.module.css'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addDeckTS } from '../decks-thunks.ts'

type FormValues = {
  name: string
}

export const AddNewDeckForm = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: '',
    },
  })
  const dispatch = useDispatch()

  const onSubmit = (data: FormValues) => {
    // @ts-ignore
    dispatch(addDeckTS(data)).then(() => {
      reset()
    })
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <label className={s.label}>
        Deck name
        <input
          {...register('name', {
            required: 'Name is required',
            minLength: {
              value: 3,
              message: 'Name must be longer than or equal to 3 characters',
            },
          })}
          autoComplete="off"
        />
        <p className={s.errorMessage}>{errors.name && errors.name.message}</p>
      </label>
      <button type="submit">Add new deck</button>
    </form>
  )
}
