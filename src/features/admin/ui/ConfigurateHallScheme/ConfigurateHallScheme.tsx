import { Hall } from '@/shared/api/type'
import standart from '@/shared/assets/admin-standart-place.png'
import disabled from '@/shared/assets/admin-disabled-place.png'
import vip from '@/shared/assets/admin-vip-place.png'
import { HallType } from '@/features/admin/model/hallType'
import styles from './ConfigurateHallScheme.module.css'
import { Typography } from '@/shared/ui/Typography/Typography'

const HallTypeImage = {
  [HallType.standart]: standart,
  [HallType.disabled]: disabled,
  [HallType.vip]: vip,
}

export const ConfigurateHallScheme = ({
  row,
  places,
  scheme,
}: {
  row?: number
  places?: number
  scheme?: Hall['hallConfig']
}) => {
  const array = []
  if (row && places && scheme) {
    for (let i = 0; i < row; i += 1) {
      const rowArray = []

      for (let j = 0; j < places; j += 1) {
        if (scheme[i]?.[j]) {
          rowArray.push(scheme[i][j])
        } else {
          rowArray.push('standart')
        }
      }
      array.push(rowArray)
    }
  }

  return (
    <div className={styles['wrapperContent']}>
      <div>
        <Typography as="p" variant="heading-sm">
          Э К Р А Н
        </Typography>
      </div>
      <div>
        {array?.map((row, rowIndex) => {
          return (
            <p key={rowIndex}>
              {row.map((place, placeIndex) => {
                if (place === HallType['standart']) {
                  return (
                    <img
                      key={placeIndex + HallTypeImage[place]}
                      src={HallTypeImage[place]}
                      alt={HallTypeImage[place]}
                    />
                  )
                }

                if (place === HallType['disabled']) {
                  return (
                    <img
                      key={placeIndex + HallTypeImage[place]}
                      src={HallTypeImage[place]}
                      alt={HallTypeImage[place]}
                    />
                  )
                }

                if (place === HallType['vip']) {
                  return (
                    <img
                      key={placeIndex + HallTypeImage[place]}
                      src={HallTypeImage[place]}
                      alt={HallTypeImage[place]}
                    />
                  )
                }

                return null
              })}
            </p>
          )
        })}
      </div>
    </div>
  )
}
