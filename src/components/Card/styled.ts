import styled from 'styled-components';

export const CardContainer = styled.div`
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin: 10px;
  border-radius: 6px;
  max-width: 300px;
  position: relative;
  display: block;
  overflow: hidden;
  background-color: ${({ theme }) => theme.palette.blue.light};
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Img = styled.img`
  object-fit: cover;
  height: 65%;
  width: 100%;
`;

export const Select = styled.select`
  width: 100%;
  border: 1px solid var(--select-border);
  border-radius: 0.25em;
  padding: 0.25em 0.5em;
  margin: 2px;
  font-size: 1.25rem;
  cursor: pointer;
  line-height: 1.1;
  background-color: #fff;
  background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
`;
