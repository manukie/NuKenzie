import styled from "styled-components"

export const StyledNoteNumbers = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;
    border: 2px solid var(--Color-Gray-2);
    gap: 1.25rem;
    position: relative;
    padding: 20px;

    div{
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
    } 

    .StyledParagraph2{
       display: flex;
       justify-self: flex-start;
    }
`