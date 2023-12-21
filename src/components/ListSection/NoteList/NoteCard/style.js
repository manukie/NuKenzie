import styled, {css} from "styled-components"

export const StyledNoteCard = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 5px solid var(--Color-Blue);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.12);
    padding: 1.6875rem 2.1875rem;
    flex-wrap: wrap;
    min-width: 9.9375rem;

    @media (min-width: 412px){
        flex-direction: column;
        gap: 1.5rem;

        button{
            margin-top: 1rem;
        }
    }

    ${({typeOf}) => {
        switch(typeOf){
            case "Entrada":
                return css`
                   border-left: 7px solid var(--Color-Secondary);
                   border-radius: 7px;

                `
            case "Despesa":
                return css`
                    border-left: 7px solid var(--Color-Gray-3);
                    border-radius: 7px;
                `      
        }
    }}    

    h3{
        margin-bottom: 1rem;
    }

    button{
        height: 25px;
        width: 64px;
    }
`