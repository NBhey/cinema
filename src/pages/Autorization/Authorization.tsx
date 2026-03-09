import { BrandTitle } from '@/shared/ui'
import { Typography } from '@/shared/ui/Typography/Typography'
import styles from './Authorization.module.css'
import { Button } from '@/shared/ui/Button/Button'

export const Authorization = () => {
  return (
    <>
      <header className={styles['header']}>
        <BrandTitle />
        <Typography className={styles['subtitle']} as="p" variant="text-light">
          Администраторская
        </Typography>
      </header>

      <form className={styles['authorization-form']}>
        <Typography
          as="h5"
          variant="heading-bold"
          className={styles['authorization-form__title']}
        >
          Авторизация
        </Typography>
        <div className={styles['authorization-form__fields']}>
          <p className={styles['authorization-form__field']}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="example@domain.xyz"
              autoComplete="email"
            />
          </p>
          <p className={styles['authorization-form__field']}>
            <label htmlFor="password">Пароль</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
            />
          </p>

          <Button
            className={styles['authorization-form__btn']}
            text="Авторизоваться"
            variant="enter"
            type="submit"
          ></Button>
        </div>
      </form>
    </>
  )
}
