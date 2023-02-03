import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px 0;
`;

export const LabelContainer = styled.div`
  position: relative;
`;

export const Label = styled.label`
  position: absolute;
  top: 10px;
  left: 9px;
  padding: 0 5px;
  opacity: 0.8;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 8px;
  background: transparent;
  border: 2px solid #e5e0ff;
  border-radius: 5px;

  :focus {
    outline: 1px solid #8ea7e9;
  }

  :focus ~ label,
  :not(:placeholder-shown) ~ label {
    top: -8px;
    font-size: 12px;
    background-color: white;
    opacity: 1;
  }
`;

export const Button = styled.button.attrs({ type: 'submit' })`
  display: flex;
  gap: 5px;
  align-items: center;
  padding: 10px 30px;
  margin-bottom: 20px;
  color: white;
  border: none;
  border-radius: 5px;
  background-color: #8ea7e9;
  cursor: pointer;
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: #7286d3;
  }
`;
