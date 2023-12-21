import styled, {css} from "styled-components"

export const HeadlineStyles = css`
    font-family: var(--Font-Primary);
    font-size: ${({fontSize}) => fontSize === "big" ? "2rem" : "1.375rem"};
    font-weight: 700;    
    color: var(--Color-Gray-4);

    ${({fontSize}) => {
        switch(fontSize){
            case "big":
                return css`
                    font-size: clamp(1.5rem, 80%, 2.5rem);
                `
            case "medium":
                return css`
                    font-size: clamp(1.25rem, 80%, 2rem);
                `    

            case "small":
                return css`
                    font-size: clamp(1rem, 80%, 1.75rem);
                `      
        }
    }}

    ${({fontWeight}) => {
        switch(fontWeight){
            case "high":
                return css`
                    font-weight: 700;
                `
            case "med":
                return css`
                    font-weight: 500;
                `    

            case "low":
                return css`
                    font-weight: 50;
                `      
        }
    }}
    
`

export const StyledHeadline1 = styled.h1`
    ${HeadlineStyles};   
`

export const StyledHeadline2 = styled.h2`
    ${HeadlineStyles};
`

export const StyledHeadline3 = styled.h3`
    ${HeadlineStyles};
`

export const StyledParagraph1 = styled.p`
    font-family: var(--Font-Primary);
    font-size: 1rem;
    font-weight: ${({fontWeight}) => fontWeight === "bold" ? 700 : 400};
    color: var(--Color-Gray-4);
    line-height: 1.6;

    strong{
        font-weight: 700;
    }
`

export const StyledParagraph2 = styled.p`
    font-family: var(--Font-Primary);
    font-size: 1rem;
    font-weight: ${({fontWeight}) => fontWeight === "bold" ? 700 : 400};
    color: var(--Color-Primary-1);
    line-height: 1.6;

    strong{
        font-weight: 700;
    }
`