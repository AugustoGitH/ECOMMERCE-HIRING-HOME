import { Link } from "react-router-dom"
import * as S from "./styles"
import { Labor } from "../../types/labor"
import formatPrice from "../../helpers/formatPrice"
import formatData from "../../helpers/formatData"

export default function CardLabor({ labor }: { labor: Labor }) {
  return (
    <S.CardLabor>
      <Link to={`/labor/${labor.id}`} className="title-labor"><h3>{labor.title}</h3></Link>
      <span className="sub-title-labor">{labor.personOrCompany}</span>
      <span className="value-labor">{formatPrice(labor.hourlyRate)}/h</span>
      <span className="created-at-labor">Publicada em {formatData(new Date(labor.createdAt))}</span>
      <p className="description-labor">{labor.description}</p>
      <div className="navitaion-buttons">
        <Link to={`/labor/${labor.id}`} >Ver Mais</Link>
      </div>

    </S.CardLabor>
  )
}