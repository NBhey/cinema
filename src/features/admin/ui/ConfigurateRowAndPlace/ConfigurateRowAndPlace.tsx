import { Typography } from '@/shared/ui/Typography/Typography'
import styles from './ConfigurateRowAndPlace.module.css'
import { useForm } from 'react-hook-form'

export const ConfigurateRowAndPlace = ({
  row,
  places,
  onChangeRow,
  onChangePlaces,
}: {
  row?: number
  places?: number
  onChangeRow: (value: number) => void
  onChangePlaces?: (value: number) => void
}) => {
  const { register, handleSubmit } = useForm()

  return (
    <>
      <Typography as="h5" variant="heading-sm" className={styles['title']}>
        Укажите количество рядов и максимальное количество кресел в ряду:
      </Typography>

      <form>
        <div>
          <label htmlFor="row"> Рядов, шт</label>
          <input
            id="row"
            className={styles['inputConfigurate']}
            {...register('row', {
              required: 'Поле обязательно для заполнения',
              min: 1,
              max: 10,
            })}
            type="number"
            max={10}
            min={1}
            placeholder={String(row)}
            onChange={(e) => {
              if (Number(e.target.value) > 10) {
                return
              }
              onChangeRow(Number(e.target.value))
            }}
          />
        </div>

        <div>
          <label htmlFor="places">Мест, шт</label>
          <input
            className={styles['inputConfigurate']}
            id="places"
            type="number"
            placeholder={String(places)}
            {...register('places', {
              required: 'Поле обязательно для заполнения',
              min: 1,
              max: 20,
            })}
            onChange={(e) => {
              if (Number(e.target.value) > 10) {
                return
              }
              // onChangePlaces(Number(e.target.value))
            }}
          />
        </div>
      </form>
    </>
  )
}
