
import Header from "../../components/Header"
import { useFindAllLaborsQuery } from "../../queries/useFindAllLaborsQuery"
import * as S from "./styles"
import { useParams } from "react-router-dom"
import { Labor as ILabor } from "../../types/labor"
import formatData from "../../helpers/formatData"
import formatPrice from "../../helpers/formatPrice"
import { Icon } from "@iconify-icon/react/dist/iconify.mjs"
import PopUpCardHiring from "../../components/PopUpCardHiring"
import { useState } from "react"

interface LaborContentProps {
  labor: ILabor
}
const LaborContent = ({ labor }: LaborContentProps) => {
  const [showPopUpHiring, setShowPopUpHiring] = useState(false)
  return (
    <>
      <S.Labor>
        <div className="content">
          <div className="infos-labor">
            <h2 className="title-labor">{labor.title}</h2>
            <span className="sub-title-labor"> Pagamento {labor.typeOfPayment} | Atualizada em {formatData(new Date(labor.updatedAt))}</span>
            <div className="plus-infos-labor">
              <span><Icon className="icon" icon="bxs:coin" /> {formatPrice(labor.hourlyRate)}/h</span>
              <span><Icon className="icon" icon="basil:location-solid" /> {labor.localization}</span>
              <span className="person-our-company"><Icon className="icon" icon="mdi:company" />{labor.personOrCompany}</span>
            </div>
            <p className="description-labor">
              {labor.description}
            </p>
            <span className="lang-labor">Idioma: {labor.languageLevel}</span>
            <span className="training-labor">Formação: {labor.training}</span>
            <span className="link-labor">Portfolio: <a target="_blank" href={labor.links.portfolio}>{labor.links.portfolio}</a></span>
            <span className="link-labor">Linkedin: <a target="_blank" href={labor.links.linkedin}>{labor.links.linkedin}</a></span>
          </div>
          <div className="navigatio-buttons">
            <button onClick={() => setShowPopUpHiring(true)}>Contratar</button>
          </div>
        </div>
      </S.Labor>
      <PopUpCardHiring labor={{
        company: labor.personOrCompany,
        hourlyRate: labor.hourlyRate
      }} open={showPopUpHiring} onClose={() => setShowPopUpHiring(false)} />
    </>
  )
}

export default function Labor() {
  const { data: labors } = useFindAllLaborsQuery()
  const { id } = useParams()

  const laborFinded = labors?.find(labor => labor.id === id)

  return laborFinded ? (
    <>
      <Header />
      <LaborContent labor={laborFinded} />
    </>
  ) : <></>
}