import { Modal } from '@/shared/ui/Modal/Modal'
import styles from './FilmCreateModal.module.css'
import { Typography } from '@/shared/ui/Typography/Typography'

export const FilmCreateModal = ({
  isOpenModal,
  onClose,
}: {
  isOpenModal: boolean
  onClose: () => void
}) => {
  return (
    <Modal
      isOpen={isOpenModal}
      title="Добавление фильма"
      onClose={onClose}
      isModal
    >
      <form action="" className={styles['formWrapper']}>
        <label htmlFor="filmName" className={styles['label']}>
          <Typography
            as="span"
            variant="text-light"
            className={styles['textField']}
          >
            Название фильма
          </Typography>
          <input
            id="filmName"
            type="text"
            name="filmName"
            placeholder='Например, "Гражданин Кейн"'
            className={styles['inputField']}
          />
        </label>

        <label htmlFor="filmDuration" className={styles['label']}>
          <Typography
            as="span"
            variant="text-light"
            className={styles['textField']}
          >
            Продолжительность фильма (мин.)
          </Typography>

          <input
            id="filmDuration"
            type="text"
            name="filmDuration"
            className={styles['inputField']}
          />
        </label>

        <label htmlFor="filmDescription" className={styles['label']}>
          <Typography
            as="span"
            variant="text-light"
            className={styles['textField']}
          >
            Описание фильма
          </Typography>

          <textarea id="filmDescription" name="filmDescription" />
        </label>

        <label htmlFor="filmCountry" className={styles['label']}>
          <Typography
            as="span"
            variant="text-light"
            className={styles['textField']}
          >
            Страна
          </Typography>

          <input
            type="text"
            name="filmCountry"
            id="filmCountry"
            className={styles['inputField']}
          />
        </label>

        <label htmlFor="file">
          <input
            type="file"
            name="file"
            id="file"
            onChange={(e) => {
              console.log(e.target.files)
            }}
            style={{
              position: 'absolute',
              width: '1px',
              height: '1px',
              padding: 0,
              margin: '-1px',
              overflow: 'hidden',
              clipPath: ' inset(50%)',
              whiteSpace: 'nowrap',
              borderWidth: 0,
            }}
          />
        </label>
      </form>
    </Modal>
  )
}
