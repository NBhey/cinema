import { PanelBodyWrapper } from '@/shared/ui'
import useAdminPanelHeader from '../../lib/useAdminPanelHeader'
import { Button } from '@/shared/ui/Button/Button'
import { useHallsQuery } from '@/shared/api/hall/quieries'
import { useRef, useState } from 'react'
import { FilmList } from './FilmList/FilmList'
import { FilmCreateModal } from './FilmCreateModal/FilmCreateModal'
import styles from './GridSession.module.css'
import { FilmSessionRow } from './FilmSessionRow/FilmSessionRow'
import { DragDropProvider } from '@dnd-kit/react'
import { SeanceAddModal } from './SeanceAddModal/SeanceAddModal'

export const GridSession = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isSeanceFilmOpenModal, setIsSeanceFilmOpenModal] = useState(false)
  const { isPanelOpen, Header } = useAdminPanelHeader('Сетка сеансов')
  const { data } = useHallsQuery()
  const filmId = useRef<number | string | null>(null)
  const hallId = useRef<number | string | null>(null)

  const handleOpenModal = () => setIsOpenModal(true)
  const handleCloseModal = () => setIsOpenModal(false)

  return (
    <>
      <Header />
      {isPanelOpen && (
        <PanelBodyWrapper className={styles['body']}>
          <Button
            variant="standart"
            text="Добавить фильм"
            clickAction={handleOpenModal}
          />
          <DragDropProvider
            onDragEnd={({ operation }) => {
              const { source, target } = operation

              if (source && target) {
                setIsSeanceFilmOpenModal(true)
                filmId.current = source.id
                hallId.current = target.id
              }
            }}
          >
            <FilmList films={data?.result.films} />

            <FilmSessionRow data={data} />
          </DragDropProvider>

          <FilmCreateModal
            isOpenModal={isOpenModal}
            onClose={handleCloseModal}
          />
          <SeanceAddModal
            isOpen={isSeanceFilmOpenModal}
            onClose={() => {
              setIsSeanceFilmOpenModal(false)
            }}
            films={data?.result.films}
            halls={data?.result.halls}
            selectedFilmId={filmId.current}
            selectedHallId={hallId.current}
          />
        </PanelBodyWrapper>
      )}
    </>
  )
}
