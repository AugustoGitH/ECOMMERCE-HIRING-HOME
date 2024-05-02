
import { Link } from "react-router-dom"
import { Icon } from "@iconify-icon/react"
import * as S from "./styles"
import { KeyboardEvent, useState } from "react"
import { useNavigate } from "react-router"

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("")

  const navigate = useNavigate()

  const handleKeyDown = (ev: KeyboardEvent<HTMLInputElement>) => {
    if (ev.key === "Enter") {
      handleSearchQuery()
    }
  }
  const handleSearchQuery = () => {
    navigate(searchQuery ? `/labor-search/${searchQuery}` : "/")
  }

  return (
    <S.Header>
      <div className="content">
        <Link className="title" to="/"><h1>Trabalho<span>Fácil</span></h1></Link>
        <div className="input-search">
          <Icon className="icon-search" icon="ic:baseline-search" />
          <input onKeyDown={handleKeyDown} placeholder="Buscar mão de obra" value={searchQuery} onChange={ev => setSearchQuery(ev.target.value)} />
        </div>
        <div className="profile">
          <Icon className="icon-profile" icon="solar:user-bold" />
        </div>
      </div>
    </S.Header>
  )
}