import { NoteCard } from "./NoteCard"
import { StyledNoteList } from "./style"

export const NoteList = ({noteList, setNoteList}) => {

    //Javascript
    const removeNoteFromList = (noteId) => {   
        if(confirm("Tem certeza? Essa ação não poderá ser desfeita.")){     
            setNoteList((noteList) => noteList.filter(note => note.id !== noteId));
        }
    }

    //JSX
    return(
        <StyledNoteList>
            {noteList.map((note) => <NoteCard key={note.id} note={note} removeNoteFromList={removeNoteFromList} />)}            
        </StyledNoteList>
    )
}