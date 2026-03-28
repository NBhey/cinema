import { Typography } from '@/shared/ui/Typography/Typography'
import styles from './ConfigurateRowAndPlace.module.css'

export const ConfigurateRowAndPlace = ({
  row,
  places,
}: {
  row?: number
  places?: number
}) => {
  return (
    <>
      <Typography as="h5" variant="heading-sm" className={styles['title']}>
        Укажите количество рядов и максимальное количество кресел в ряду:
      </Typography>

      <div>
        <div>
          <label htmlFor="row"></label>
          <input
            className={styles['inputConfigurate']}
            id="row"
            name="row"
            type="number"
            placeholder={String(row)}
            max="10"
            min="1"
          />
        </div>

        <div>
          <label htmlFor="places"></label>
          <input
            className={styles['inputConfigurate']}
            id="places"
            name="places"
            type="number"
            placeholder={String(places)}
            max="10"
            min="1"
          />
        </div>
      </div>
    </>
  )
}
