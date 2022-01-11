import styled from 'styled-components';
import { INavBarExpand } from '../interfaces';

export const Container = styled.div<INavBarExpand>`
  transition: all 0.5s;
  padding: 1% 1% 1% 1%;
  /* padding: 1% 1% 1%
    ${({ expanded }) =>
    expanded ? 'calc(200px + 1%)' : 'calc(150px + 1%)'}; */
  /*
  @media screen and ${({ theme }) => theme.breakpoints.sm} {
    padding: 0 0 0 ${({ expanded }) => (expanded ? '21vw' : '11vw')};
    background-color: red;
  } ; */
`;
