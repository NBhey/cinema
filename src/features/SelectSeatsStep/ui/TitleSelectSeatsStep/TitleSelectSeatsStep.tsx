import { Typography } from '@/shared/ui/Typography/Typography'
import Skeleton from 'react-loading-skeleton'
import styles from './TitleSelectSeatsStep.module.css'
import { Films } from '@/shared/api/type'

interface TitleSelectSeatsStepProps {
  film: Films | undefined
  seanceData: {
    id: number
    seanceFilmid: number
    seanceHallid: number
    seanceTime: string
  } | undefined
  hallName: string | undefined
}

export const TitleSelectSeatsStep: React.FC<TitleSelectSeatsStepProps> = ({
  film,
  seanceData,
  hallName,
}) => {
  return (
    <div className={styles['title']}>
      <Typography variant="heading-sm" as="h3">
        {film?.filmName || (
          <Skeleton
            count={1}
            inline
            width={90}
            baseColor="#de9741"
            highlightColor="#e6be89"
            duration={0.35}
          />
        )}
      </Typography>
      <Typography variant="text-medium" as="p">
        Начало сеанса:{' '}
        {seanceData?.seanceTime || (
          <Skeleton
            count={1}
            inline
            width={45}
            baseColor="#de9741"
            highlightColor="#e6be89"
            duration={0.35}
          />
        )}
      </Typography>
      <Typography
        style={{ textTransform: 'capitalize' }}
        as={'h4'}
        variant="heading-sm"
      >
        {hallName}
      </Typography>
    </div>
  )
}
