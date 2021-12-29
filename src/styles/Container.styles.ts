import styled from 'styled-components';

interface INavBarExpand {
  expanded: boolean;
}

export const Container = styled.div<INavBarExpand>`
  transition: all 0.5s;
  width: ${({ expanded }) => (expanded ? '80vw' : '90vw')};
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  padding-left: ${({ expanded }) => (expanded ? '70px' : '40px')};
`;
