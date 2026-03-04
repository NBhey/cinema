import { Button } from '@/shared/ui/Button/Button'
import { Typography } from '@/shared/ui/Typography/Typography'
import { useOutletContext } from 'react-router-dom'

interface ConfirmStepBtnContext {
  handleBookingClick: () => void
}

export const ConfirmStepBtn = () => {
  const { handleBookingClick } = useOutletContext<ConfirmStepBtnContext>()

  return (
    <>
      <Button
        style={{ maxWidth: 337, width: '100%', marginBottom: '9px' }}
        text="Получить код бронирования"
        variant="booking"
        clickAction={handleBookingClick}
      />

      <Typography as="p" variant="text-medium">
        После оплаты билет будет доступен в этом окне, а также придёт вам на
        почту. Покажите QR-код нашему контроллёру у входа в зал.
      </Typography>
    </>
  )
}
