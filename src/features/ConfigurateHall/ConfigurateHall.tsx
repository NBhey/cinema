import useAdminPanelHeader from '../admin/lib/useAdminPanelHeader'

export const ConfigurateHall = () => {
  const { isOpenPanel, Header } = useAdminPanelHeader('Конфигурация залов')

  return (
    <>
      <Header />
      {isOpenPanel && <section>123</section>}
    </>
  )
}
