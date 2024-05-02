import Header from "../../components/Header"
import RecommendedLabor from "../../components/RecommendedLabor"
import * as S from "./styles"

export default function Home() {
  return (
    <>
      <Header />
      <S.Home>
        <div className="content">
          <RecommendedLabor />
        </div>
      </S.Home>
    </>
  )
}