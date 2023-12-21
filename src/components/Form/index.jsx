import { useState } from "react"
import { StyledInput, StyledSelect } from "../../styles/form"
import { v4 as uuidv4 } from 'uuid'
import { StyledCreateButton } from "../../styles/button"
import { StyledHeadline3 } from "../../styles/typography"
import { StyledForm } from "./style"

export const Form = ({ setNoteList }) => {
   const [desc, setDesc] = useState("")
   const [price, setPrice] = useState("")
   const [type, setType] = useState("")

   const addNoteToList = () => {
      const newNote = { id: uuidv4(), desc, price, type }
      setNoteList((noteList) => [...noteList, newNote])
   }
   const submit = (e) => {
      e.preventDefault()
      addNoteToList()
      setDesc("")
      setPrice("")
      setType("")
   };

   return (
      <>
         <StyledForm onSubmit={submit}>
            <StyledHeadline3 fontSize="small">Descrição</StyledHeadline3>
            <StyledInput
               type="text"
               placeholder="Digite aqui a sua descrição"
               value={desc}
               onChange={(e) => setDesc(e.target.value)}
               required
            />
            <StyledHeadline3 fontWeight="low" fontSize="small" >Ex: Compra de roupas</StyledHeadline3>
            <StyledHeadline3 fontSize="small">Valor (R$)</StyledHeadline3>
            <StyledInput
               type="number"
               placeholder="Digite aqui o valor a ser inserido"
               value={price}
               onChange={(e) => setPrice(e.target.value)}
               required
            ></StyledInput>
            <StyledHeadline3 fontSize="small">Tipo de Valor</StyledHeadline3>
            <StyledSelect
               value={type}
               onChange={(e) => setType(e.target.value)}
               required>
               <option value="">Selecionar</option>
               <option value="Entrada">Entrada</option>
               <option value="Despesa">Despesa</option>
            </StyledSelect>

            <StyledCreateButton buttonSize="big" fullWidth={true} type="submit">Inserir valor</StyledCreateButton>
         </StyledForm>
      </>
   )
}