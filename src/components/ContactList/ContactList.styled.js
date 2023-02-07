import styled from 'styled-components';

import getRandomHexColor from 'utils/getRandomHexColor';

export const ListIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;

  border-radius: 50%;
  background-color: ${getRandomHexColor};
`;

export const ListBtn = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.transparent};
  cursor: pointer;
  opacity: 0.7;

  :hover,
  :focus {
    opacity: 1;
  }
`;

export const ContactsTable = styled.table`
  width: 100%;

  border-collapse: collapse;
`;

export const ContactsTableHead = styled.th`
  padding: 15px;

  font-weight: 500;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  background-color: #8ea7e9;

  :not(:last-child) {
    border-right: 1px solid ${({ theme }) => theme.colors.white};
  }
`;

export const ContactsTableRow = styled.tr`
  background-color: ${({ theme }) => theme.colors.transparent};
  transition: opacity ${({ theme }) => theme.transitions.slower};

  :hover {
    background-color: ${({ theme }) => theme.colors.accentSecondary};
  }
`;

export const ContactsTableCeil = styled.td`
  padding: 10px;
  text-align: center;

  :not(:last-child) {
    border-right: 1px solid ${({ theme }) => theme.colors.darkgrey};
  }
`;

export const ContactsFlexCeil = styled.td`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;

  :not(:last-child) {
    border-right: 1px solid ${({ theme }) => theme.colors.darkgrey};
  }
`;
