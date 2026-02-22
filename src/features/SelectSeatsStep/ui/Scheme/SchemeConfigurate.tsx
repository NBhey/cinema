import type { Scheme } from '@/shared/api/type'
import taken from '@/shared/assets/taken.png'
import place from '@/shared/assets/vip_places.png'
import standart from '@/shared/assets/standart_places.png'
import booking from '@/shared/assets/booking.png'
import { Dispatch, SetStateAction } from 'react'

enum PlaceStatus {
  taken = 'taken',
  standart = 'standart',
  vip = 'vip',
  booking = 'booking',
  disabled = 'disabled',
}
const PlaceStatusImage = {
  [PlaceStatus.taken]: taken,
  [PlaceStatus.standart]: standart,
  [PlaceStatus.vip]: place,
  [PlaceStatus.booking]: booking,
  [PlaceStatus.disabled]: taken,
}

export const SchemeConfigurate = ({
  configuration,
  choosePlace,
}: {
  configuration: Scheme['result']
  choosePlace: (indexRow: number, indexPlace: number, place: string) => void
}) => {
  return (
    <>
      {configuration.map((row, indexRow) => {
        return (
          <p key={indexRow}>
            {row.map((place, indexPlace) => {
              return (
                <img
                  key={`${[...[indexRow, indexPlace]]}`}
                  onClick={() => choosePlace(indexRow, indexPlace, place)}
                  src={PlaceStatusImage[place]}
                  alt={PlaceStatusImage[place]}
                  style={{
                    height: 20,
                    width: 20,
                    cursor: place === 'disabled' ? 'not-allowed' : 'pointer',
                  }}
                />
              )
            })}
          </p>
        )
      })}
    </>
  )
}
