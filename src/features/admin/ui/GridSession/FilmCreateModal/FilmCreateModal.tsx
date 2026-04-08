import { Modal } from '@/shared/ui/Modal/Modal'
import styles from './FilmCreateModal.module.css'
import { Typography } from '@/shared/ui/Typography/Typography'
import { useState } from 'react'

export const FilmCreateModal = ({
  isOpenModal,
  onClose,
}: {
  isOpenModal: boolean
  onClose: () => void
}) => {
  const [image, setImage] = useState<string | null>(null)

  return (
    <Modal
      isOpen={isOpenModal}
      title="Добавление фильма"
      onClose={onClose}
      isModal
      classNameBody={styles['modalWrapper']}
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

          <textarea
            id="filmDescription"
            name="filmDescription"
            className={styles['inputTextarea']}
          />
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
          <div className={styles['downloadImgBtn']}>Загрузить постер</div>
          <input
            type="file"
            name="file"
            id="file"
            onChange={(e) => {
              if (!e.target.files) {
                return
              }
              console.log(e.target.files)
              const imageObjectUrl = URL.createObjectURL(e.target.files[0])
              console.log(imageObjectUrl)
              setImage(imageObjectUrl)
            }}
            className={styles['downloadImgInput']}
          />
        </label>
      </form>
      {image && <img src={image} alt="poster" width={125} height={175} />}
    </Modal>
  )
}
