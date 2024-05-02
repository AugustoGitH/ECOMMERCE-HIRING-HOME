import { useParams } from "react-router-dom"
import * as S from "./styles"
import { useFindAllLaborsQuery } from "../../queries/useFindAllLaborsQuery"

import { Labor } from "../../types/labor"
import Header from "../../components/Header"
import CardLabor from "../../components/CardLabor"
import normalizeString from "../../helpers/normalize-string"

const LaborsList = ({ labors }: { labors: Labor[] }) => {
  return (
    <S.LaborsList>
      {
        labors.map(labor => (
          <li key={labor.id}>
            <CardLabor labor={labor} />
          </li>
        ))
      }
    </S.LaborsList>
  )
}

const finded = (title: string, query: string) => {
  title = normalizeString(title)
  query = normalizeString(query)

  title = title.replace(/ /g, "");
  query = query.replace(/ /g, "");


  console.log({ title, query })

  return title.includes(query)

}

export default function SearchLaborResults() {
  const { query } = useParams()
  const { data: labors, isLoading } = useFindAllLaborsQuery()

  const laborsFiltered = query ? labors?.filter(labor => finded(labor.title, query)) : null

  return (
    <>
      <Header />
      <S.SearchLaborResults>
        <div className="content">
          {
            isLoading && !laborsFiltered ? (
              <span>Carregando...</span>
            ) : <></>
          }
          {
            laborsFiltered && laborsFiltered.length > 0 ? (
              <LaborsList labors={laborsFiltered} />
            ) : <></>
          }
          {
            laborsFiltered?.length === 0 ? (
              <span>Nenhuma mão de obra foi encontrada!</span>
            ) : <></>
          }

        </div>
      </S.SearchLaborResults>
    </>
  )
}