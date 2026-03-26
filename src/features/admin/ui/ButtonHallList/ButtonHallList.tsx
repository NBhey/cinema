import { Typography } from '@/shared/ui/Typography/Typography'
import styles from './ButtonHallList.module.css'
import { Hall } from '@/shared/api/type'
import { Button } from '@/shared/ui/Button/Button'
import { Dispatch, SetStateAction } from 'react'

export const ButtonHallList = ({
  halls,
  changeHall,
}: {
  halls?: Hall[]
  changeHall: Dispatch<SetStateAction<Hall | null>>
}) => {
  return (
    <div className={styles['wrapper']}>
      <Typography as="h5" variant="heading-sm" className={styles['title']}>
        Выберите зал для конфигурации:
      </Typography>

      <div>
        {halls?.map((hall) => {
          return (
            <Button
              key={hall.id}
              variant="standart"
              text={hall.hallName}
              clickAction={() => {
                changeHall(hall)
              }}
              className={styles['btn']}
            />
          )
        })}
      </div>
    </div>
  )
}
