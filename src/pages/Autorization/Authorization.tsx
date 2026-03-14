import { Typography } from '@/shared/ui/Typography/Typography'
import styles from './Authorization.module.css'
import { Button } from '@/shared/ui/Button/Button'
import { useForm, SubmitHandler } from 'react-hook-form'
import { authenticateAdmin } from '@/shared/api/http'
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

type FormValues = {
  login: string
  password: string
}

export const Authorization = () => {
  const { register, handleSubmit } = useForm<FormValues>()
  const [disabled, setDisabled] = useState(false)
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      setDisabled(true)
      const response = await authenticateAdmin(data)

      if (response.success) {
        toast.success(
          response.result + ' Вы будете перенаправлены на страницу' ||
            'Авторизация прошла успешно! Вы будете перенаправлены на страницу',
          {
            theme: 'dark',
            className: styles['toast'],
            onClose: () => {
              setDisabled(false)
              navigate('/admin')
            },
          },
        )

        localStorage.setItem('authToken', JSON.stringify(data))
      } else {
        toast.error(response.error || 'Ошибка авторизации', {
          theme: 'dark',
          className: styles['toast'],
          onClose: () => {
            setDisabled(false)
          },
        })
      }
    } catch (error) {
      console.log('Ошибка при авторизации:', error)
    }
  }

  return (
    <>
      <form
        className={styles['authorization-form']}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Typography
          as="h5"
          variant="heading-bold"
          className={styles['authorization-form__title']}
        >
          Авторизация
        </Typography>

        <div className={styles['authorization-form__fields']}>
          <p className={styles['authorization-form__field']}>
            <label htmlFor="login">Email</label>
            <input
              {...register('login', { required: true })}
              id="login"
              type="login"
              placeholder="example@domain.xyz"
              autoComplete="login"
            />
          </p>

          <p className={styles['authorization-form__field']}>
            <label htmlFor="password">Пароль</label>
            <input
              {...register('password', { required: true })}
              id="password"
              type="password"
              autoComplete="current-password"
            />
          </p>

          <Button
            className={styles['authorization-form__btn']}
            text="Авторизоваться"
            variant="enter"
            type="submit"
            disabled={disabled}
          />

          <ToastContainer
            autoClose={1000}
            position="top-center"
            draggable="mouse"
          />
        </div>
      </form>
    </>
  )
}
