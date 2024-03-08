import { userData } from "../types"
import { ResultElement } from "./ResultElement"
import { ResultContainer } from "./styles/ResultContainer.style"



export const SearchResults = ({userData}:userData) => {
  return (
    <ResultContainer>
        {
          userData?.map((item) => <ResultElement key={item.id} myUser={item} />)
        }
    </ResultContainer>
  )
}
