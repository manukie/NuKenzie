import { StyledParagraph1, StyledParagraph2 } from "../../../../styles/typography"
import { StyledNoteNumbers } from "./style"

export const NoteNumbers = ({ noteList }) => {
    const totalChar = noteList.reduce((accValue, note) => {
        if (note.type == "Entrada") {
            return Number(accValue) + Number(note.price)
        } else {
            return Number(accValue) - Number(note.price)
        }
    }, 0);

    return (
        <StyledNoteNumbers>
            <div>
                <StyledParagraph1><strong>Valor total:</strong></StyledParagraph1>
                <StyledParagraph2> R$ <strong>{totalChar}</strong></StyledParagraph2>
            </div>
                <StyledParagraph1>O valor refere-se ao saldo</StyledParagraph1>
        </StyledNoteNumbers>
    )
}
