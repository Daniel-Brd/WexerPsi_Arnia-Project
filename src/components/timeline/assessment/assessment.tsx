import { Dots, TodoLine } from '@/assets/icons/db-icons'
import { Card, FlexRow, HomeCard } from '@/assets/styles'
import * as S from './styled-assessment'
import { deleteOccurrence } from '@/services/occurrences'

const Assessment = () => {
  return (
    <>
      <S.Icon>
        <S.VerticalLine></S.VerticalLine>
        <TodoLine />
      </S.Icon>
      <Card>
        <HomeCard>
          <S.SideBar>&nbsp;</S.SideBar>
          <FlexRow>
            <h2>Documentos Importantes</h2>
            <button>
              <Dots />
            </button>
          </FlexRow>
          <small>22 de setembro de 2022</small>
          <p>
            Anexo hoje alguns documentos importantes sobre as consultas recentes da paciente Ana Ester Resende.
            Documentos para serem consultados posteriormente, caso necessário.
          </p>
        </HomeCard>
      </Card>
    </>
  )
}

export default Assessment