import { Modal } from '@/shared/ui/Modal/Modal'
import styles from './FilmCreateModal.module.css'
import { Typography } from '@/shared/ui/Typography/Typography'
import { useEffect, useState } from 'react'
import { Button } from '@/shared/ui/Button/Button'
import { useForm } from 'react-hook-form'

import { ErrorMessage } from '@hookform/error-message'
import { useCreateFilm } from '@/entities/film/useCreateFilm'

type FilmFormValues = {
  filmName: string
  filmDuration: number
  filmDescription: string
  filmOrigin: string
  filePoster: FileList
}

export const FilmCreateModal = ({
  isOpenModal,
  onClose,
}: {
  isOpenModal: boolean
  onClose: () => void
}) => {
  const [image, setImage] = useState<string | null>(null)

  useEffect(() => {
    return () => {
      if (image) {
        URL.revokeObjectURL(image)
      }
    }
  }, [image])

  const { mutate: addFilm } = useCreateFilm()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FilmFormValues>()

  const filmPosterRegister = register('filePoster', {
    validate: (files) => files?.length > 0 || 'Загрузите постер',
  })

  return (
    <Modal
      isOpen={isOpenModal}
      title="Добавление фильма"
      onClose={onClose}
      isModal
      classNameBody={styles['modalWrapper']}
    >
      <form
        onSubmit={handleSubmit((data) => addFilm(data))}
        className={styles['formWrapper']}
      >
        <label htmlFor="filmName" className={styles['label']}>
          <Typography
            as="span"
            variant="text-light"
            className={styles['textField']}
          >
            Название фильма
          </Typography>
          <input
            {...register('filmName', { required: 'Введите название фильма' })}
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
            {...register('filmDuration', {
              required: 'Укажите длительность',
              valueAsNumber: true,
            })}
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
            {...register('filmDescription', {
              required: 'Введите описание',
            })}
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
            {...register('filmOrigin', {
              required: 'Введите страну',
            })}
            className={styles['inputField']}
          />
        </label>

        {image && <img src={image} alt="poster" width={125} height={175} />}

        <div className={styles['btnPanelWrapper']}>
          <Button
            text="Добавить фильм"
            variant="standart"
            type="submit"
          ></Button>

          <label htmlFor="filePoster">
            <div className={styles['downloadImgBtn']}>Загрузить постер</div>
            <input
              id="filePoster"
              type="file"
              accept=".png"
              {...filmPosterRegister}
              onChange={(e) => {
                filmPosterRegister.onChange(e)

                if (!e.target.files?.[0]) {
                  return
                }

                const file = e.target.files[0]
                const sizeFile = file.size / (1024 * 1024)

                if (sizeFile > 3) {
                  alert('Размер файла не должен превышать 3 МБ')
                  e.target.value = ''
                  return
                }

                const imageObjectUrl = URL.createObjectURL(file)
                setImage((prev) => {
                  if (prev) {
                    URL.revokeObjectURL(prev)
                  }
                  return imageObjectUrl
                })
              }}
              className={styles['downloadImgInput']}
            />
          </label>

          <Button
            clickAction={onClose}
            text="Отменить"
            variant="standart"
          ></Button>
        </div>
      </form>

      <ErrorMessage
        errors={errors}
        name="filePoster"
        render={({ message }) => !image && <p>{message}</p>}
      />
    </Modal>
  )
}
