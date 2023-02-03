import styled from 'styled-components';

export const PhonebookSection = styled.section`
  display: flex;
  justify-content: center;

  :first-child {
    margin-bottom: 35px;
  }
`;

export const PhonebookContainer = styled.div`
  min-width: 500px;
  padding-top: 20px;
  box-shadow: 0 0 0 2px #8ea7e9, 8px 8px 0 0 #8ea7e9;
  border-radius: 10px;
`;

export const TitleContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 20px;
  border-bottom: 3px solid #8ea7e9;
`;

export const Title = styled.h2``;
