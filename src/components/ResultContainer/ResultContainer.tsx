import { userData } from "../../types"
import { ResultElement } from "../ResultElement/ResultElement"
import { ResultContainer } from "./ResultContainer.style"



export const SearchResults = ({userData}:userData) => {
  return (
    <ResultContainer>
        {
          userData?.map((item) => <ResultElement key={item.id} myUser={item} />)
        }
    </ResultContainer>
  )
}
