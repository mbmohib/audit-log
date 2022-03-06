import styled from 'styled-components';

const FormWrapper = styled.div`
  position: relative;

  input {
    height: 50px;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.gray100};
    border-radius: 8px;
  }
  input:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
  input:focus + .form-control__placeholder .form-control__label {
    background-color: white;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primary};
    transform: translate(0, -120%);
  }
  input:not(input[value='']) + .form-control__placeholder .form-control__label {
    background-color: white;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.black};
    transform: translate(0, -120%);
  }
  input:focus + .form-control__placeholder .form-control__label {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
  .form-control__placeholder {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: 3px solid transparent;
    background-color: transparent;
    pointer-events: none;
    display: flex;
    align-items: center;
  }
  .form-control__label {
    font-size: 16px;
    padding: 0 8px;
    background-color: transparent;
    transform: translate(0);
    color: ${({ theme }) => theme.colors.gray200};
    transition: transform 0.15s ease-out, font-size 0.15s ease-out,
      background-color 0.2s ease-out, color 0.15s ease-out;
  }
  input,
  .form-control__placeholder {
    font-size: 16px;
    padding: 0 1.2rem;
  }
`;

type FormControlProps = {
  children: React.ReactNode;
  id: string;
  placeholder?: string;
  label?: string;
};

export default function FormControl({
  children,
  id,
  placeholder,
  label,
}: FormControlProps) {
  return (
    <FormWrapper>
      {children}
      <label
        className="form-control__placeholder"
        htmlFor={id}
        id={placeholder}
      >
        <div className="form-control__label">{label}</div>
      </label>
    </FormWrapper>
  );
}
