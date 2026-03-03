import { Films, Seances } from '@/shared/api/type'
import { Typography } from '@/shared/ui/Typography/Typography'

interface ConfirmStepInfoProps {
  film: Films | undefined
  selectedSeats: number[]
  hallName: string | undefined
  seanceData: Seances | undefined
  cost: number
}

export const ConfirmStepInfo: React.FC<ConfirmStepInfoProps> = ({
  film,
  selectedSeats,
  hallName,
  seanceData,
  cost,
}) => {
  return (
    <>
      <Typography as="p" variant="text-regular">
        На фильм:{' '}
        <Typography as="span" variant="heading-sm">
          {film?.filmName}
        </Typography>
      </Typography>
      <Typography as="p" variant="text-regular">
        Места:{' '}
        <Typography as="span" variant="heading-sm">
          {selectedSeats.join(',')}
        </Typography>
      </Typography>
      <Typography as="p" variant="text-regular">
        В зале:{' '}
        <Typography as="span" variant="heading-sm">
          {hallName}
        </Typography>
      </Typography>
      <Typography as="p" variant="text-regular">
        Начало сеанса:{' '}
        <Typography as="span" variant="heading-sm">
          {seanceData?.seanceTime}
        </Typography>
      </Typography>

      <Typography as="p" variant="text-regular">
        Стоимость:{' '}
        <Typography as="span" variant="heading-sm">
          {cost} рублей
        </Typography>
      </Typography>
    </>
  )
}
