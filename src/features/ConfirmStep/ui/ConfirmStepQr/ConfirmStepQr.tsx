import { Typography } from '@/shared/ui/Typography/Typography'
import QRCode from 'react-qr-code'
import { useParams } from 'react-router-dom'

export const ConfirmStepQr = () => {
  const { date, ticket, hallName, seanceId } = useParams()

  return (
    <>
      <QRCode
        style={{ margin: '0 auto' }}
        size={186}
        value={`https://nbhey.github.io/cinema/#/${date}}/halls/${hallName}/seances/${seanceId}/confirm/${ticket}`}
      />

      <Typography as="p" variant="text-medium">
        Покажите QR-код нашему контроллеру для подтверждения бронирования.
      </Typography>
    </>
  )
}
