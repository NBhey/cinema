import { BrandTitle } from '@/shared/ui'
import { Typography } from '@/shared/ui/Typography/Typography'
import styles from './Authorization.module.css'
import { Button } from '@/shared/ui/Button/Button'
import { useForm, SubmitHandler } from 'react-hook-form'
import { authenticateAdmin } from '@/shared/api/http'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

type FormValues = {
  login: string
  password: string
}

export const Authorization = () => {
  const { register, handleSubmit } = useForm<FormValues>()

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await authenticateAdmin(data)

      if (response.success) {
        toast.success(response.result || 'Авторизация прошла успешно!', {
          theme: 'dark',
          className: styles['toast'],
        })
      } else {
        toast.error(response.error || 'Ошибка авторизации', {
          theme: 'dark',
          className: styles['toast'],
        })
      }
    } catch (error) {
      console.log('Ошибка при авторизации:', error)
    }
  }

  return (
    <>
      <header className={styles['header']}>
        <BrandTitle />
        <Typography className={styles['subtitle']} as="p" variant="text-light">
          Администраторская
        </Typography>
      </header>

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
          />

          <ToastContainer
            autoClose={2000}
            position="top-center"
            draggable="mouse"
          />
        </div>
      </form>
    </>
  )
}
