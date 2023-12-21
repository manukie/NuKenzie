import { useState } from "react"
import { Form } from "./components/Form"
import { Header } from "./components/Header"
import { ListSection } from "./components/ListSection"
import { GlobalStyles } from "./styles/global"
import { StyledContainer } from "./styles/grid"
import { StyledFlexBox } from "./styles/flex"
import { GlobalReset } from "./styles/reset"

function App() {
   const [noteList, setNoteList] = useState([])

   return (
      <div className="App">
         <GlobalReset />
         <GlobalStyles />
         <Header />
         <main>
            <StyledContainer>
               <StyledFlexBox>
                  <div className="formBox">
                  <Form setNoteList={setNoteList} />
                  </div>                 
                  <ListSection noteList={noteList} setNoteList={setNoteList} />
               </StyledFlexBox>
            </StyledContainer>
         </main>
      </div>
   )
}

export default App
