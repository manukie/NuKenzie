import Logo from "../../assets/NuKenzie.svg";
import { StyledContainer } from "../../styles/grid";
import { StyledHeader } from "./style";

export const Header = () => {
   return (
      <StyledHeader>
         <StyledContainer>
            <div className="flexBox">
               <img src={Logo} alt="Logo da NuKenzie" />
            </div>
         </StyledContainer>
      </StyledHeader>
   );
};