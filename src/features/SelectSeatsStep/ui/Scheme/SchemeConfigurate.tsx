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
  originalSheme,
  configuration,
  choosePlace,
}: {
  originalSheme?: Scheme
  configuration: Scheme['result']
  choosePlace: Dispatch<SetStateAction<Scheme['result']>>
}) => {
  return (
    <>
      {configuration.map((row, indexRow) => {
        return (
          <p key={indexRow}>
            {row.map((place, indexPlace) => {
              if (place === 'standart') {
                return (
                  <img
                    key={`${[...[indexRow, indexPlace]]}`}
                    onClick={() => {
                      choosePlace((prev) => {
                        const newScheme = prev.map((row, r) =>
                          r === indexRow
                            ? row.map((cell, c) =>
                                c === indexPlace
                                  ? cell === 'standart'
                                    ? 'booking'
                                    : 'standart'
                                  : cell,
                              )
                            : row,
                        )
                        return newScheme
                      })
                    }}
                    src={PlaceStatusImage[place]}
                    alt={PlaceStatusImage[place]}
                    style={{ height: 20, width: 20, cursor: 'pointer' }}
                  />
                )
              }
              if (place === 'vip') {
                return (
                  <img
                    key={`${[...[indexRow, indexPlace]]}`}
                    onClick={() => {
                      choosePlace((prev) => {
                        const newScheme = prev.map((row, r) =>
                          r === indexRow
                            ? row.map((cell, c) =>
                                c === indexPlace
                                  ? cell === 'vip'
                                    ? 'booking'
                                    : 'vip'
                                  : cell,
                              )
                            : row,
                        )

                        return newScheme
                      })
                    }}
                    src={PlaceStatusImage[place]}
                    alt={PlaceStatusImage[place]}
                    style={{ height: 20, width: 20, cursor: 'pointer' }}
                  />
                )
              }

              if (place === 'booking') {
                return (
                  <img
                    key={`${[...[indexRow, indexPlace]]}`}
                    onClick={() => {
                      choosePlace((prev) => {
                        const newScheme = [...prev]

                        newScheme[indexRow][indexPlace] =
                          originalSheme?.result?.[indexRow]?.[indexPlace]!

                        return newScheme
                      })
                    }}
                    src={PlaceStatusImage[place]}
                    alt={PlaceStatusImage[place]}
                    style={{ height: 20, width: 20, cursor: 'pointer' }}
                  />
                )
              }
              return (
                <img
                  key={`${[...[indexRow, indexPlace]]}`}
                  src={PlaceStatusImage[place]}
                  alt={PlaceStatusImage[place]}
                  style={{ height: 20, width: 20, cursor: 'not-allowed' }}
                />
              )
            })}
          </p>
        )
      })}
    </>
  )
}
