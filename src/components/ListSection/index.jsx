import { StyledHeadline1 } from "../../styles/typography"
import { NoteList } from "../ListSection/NoteList"
import { NoteNumbers } from "../ListSection/NoteList/NoteNumbers"
import { StyledContainer } from "./style"

export const ListSection = ({ noteList, setNoteList }) => {

   return (
      <section>
         <StyledContainer>
            <NoteNumbers noteList={noteList} />
            <StyledHeadline1 fontSize="small">Resumo financeiro</StyledHeadline1>
            {noteList.length > 0 ? (
               <NoteList noteList={noteList} setNoteList={setNoteList} />
            ) : (
               <StyledHeadline1 fontSize="big">Você ainda não possui nenhum lançamento</StyledHeadline1>
            )}
         </StyledContainer>
      </section>
   )
}