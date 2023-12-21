import { StyledDeleteButton } from "../../../../styles/button"
import { StyledHeadline3, StyledParagraph1} from "../../../../styles/typography"
import { StyledNoteCard } from "./style"

export const NoteCard = ({note, removeNoteFromList}) => {
    return(
        <StyledNoteCard typeOf={note.type}>
            <div>
            <StyledHeadline3>{note.desc}</StyledHeadline3>
            <StyledParagraph1>{note.type}</StyledParagraph1>
            </div>
            <div>
            <StyledParagraph1>R$ {note.price}</StyledParagraph1>
            <StyledDeleteButton onClick={() => removeNoteFromList(note.id)}>Excluir</StyledDeleteButton>
            </div>
        </StyledNoteCard>
    )
}