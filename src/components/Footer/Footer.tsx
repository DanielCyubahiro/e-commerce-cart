import styled from 'styled-components';

export const StyledFooter = styled.footer`
    background-color: var(--foreground);
    color: var(--background);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Footer = () => {
  return (
      <StyledFooter>
        <p>
          @Acme Co 2025. All rights reserved.
        </p>
        <p>
          Privacy Policy . Terms and Conditions
        </p>
      </StyledFooter>
  );
};

export default Footer;