import styled from 'styled-components';

interface INavBarExpand {
  expanded: boolean;
}

export const NavBarContainer = styled.div<INavBarExpand>`
  transition: all 0.5s;
  display: flex;
  flex-direction: column;
  border-right-style: solid;
  border-color: ${({ theme }) => theme.palette.blue.light};
  width: ${({ expanded }) => (expanded ? '200px' : '150px')};
  height: 100vh;
  position: fixed;
`;

export const NavItem = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justy-content: center;
  align-items: center;
`;
