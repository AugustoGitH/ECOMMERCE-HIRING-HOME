import { Link } from "react-router-dom"
import * as S from "./styles"

import { useFindAllLaborsQuery } from "../../queries/useFindAllLaborsQuery"
import { useMemo, useState } from "react"
import formatPrice from "../../helpers/formatPrice"
import formatData from "../../helpers/formatData"

export default function RecommendedLabor() {
  const { data: labors, isLoading } = useFindAllLaborsQuery()
  const [indexLabor, setIndexLabor] = useState(0)

  const laborCurrent = useMemo(() => labors ? labors[indexLabor] : null, [labors, indexLabor])

  const skipLabor = () => {
    setIndexLabor(prevIndex => prevIndex + 1)
  }

  const skipStartLabor = () => {
    setIndexLabor(0)
  }

  return (
    <S.RecommendedLabor>
      <h2>Mãos de Obra recomendada</h2>
      <div className="card">
        {
          !laborCurrent && isLoading ? (
            <span>Carregando...</span>
          ) : <></>
        }
        {
          laborCurrent && !isLoading ? (
            <>
              <Link to={`/labor/${laborCurrent.id}`} className="title-labor"><h3>{laborCurrent.title}</h3></Link>
              <span className="sub-title-labor">{laborCurrent.personOrCompany}</span>
              <span className="value-labor">{formatPrice(laborCurrent.hourlyRate)}/h</span>
              <span className="created-at-labor">Publicada em {formatData(new Date(laborCurrent.createdAt))}</span>
              <p className="description-labor">{laborCurrent.description}</p>
              <div className="navitaion-buttons">

                {
                  labors && indexLabor < labors.length - 1 ? (
                    <button onClick={skipLabor}>Pular</button>
                  ) : (
                    <button onClick={skipStartLabor}>Voltar</button>
                  )
                }
                <Link to={`/labor/${laborCurrent.id}`} >Ver Mais</Link>
              </div>

            </>
          ) : (
            <></>
          )
        }
      </div>
    </S.RecommendedLabor >
  )
}