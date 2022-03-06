import styled from 'styled-components';

import Typography from './typography';

const FormWrapper = styled.div`
  .form-control {
    position: relative;
  }

  input,
  textarea {
    color: ${({ theme }) => theme.colors.gray900};
    height: 40px;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.gray100};
    border-radius: 8px;
  }

  textarea {
    min-height: 100px;
    padding: 16px;
  }

  input:focus,
  textarea:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  input:focus + .form-control__placeholder .form-control__label,
  textarea:focus + .form-control__placeholder .form-control__label {
    background-color: white;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primary};
    transform: translate(0, -120%);
  }

  input:not(input[value='']) + .form-control__placeholder .form-control__label,
  textarea:not(textarea:empty)
    + .form-control__placeholder
    .form-control__label {
    background-color: white;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.black};
    transform: translate(0, -120%);
  }

  textarea:not(textarea:empty)
    + .form-control__placeholder
    .form-control__label {
    transform: translate(0, -260%);
  }

  textarea:empty + .form-control__placeholder .form-control__label {
    transform: translate(0, -140%);
  }

  textarea:focus:empty + .form-control__placeholder .form-control__label {
    transform: translate(0, -260%);
  }

  input:focus + .form-control__placeholder .form-control__label,
  textarea:focus + .form-control__placeholder .form-control__label {
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
  .form-control__placeholder,
  textarea .form-control__placeholder {
    font-size: 16px;
    padding: 0 1.2rem;
  }
`;

type FormControlProps = {
  children: React.ReactNode;
  id: string;
  placeholder?: string;
  label?: string;
  error: string | undefined;
  isError: boolean;
};

export default function FormControl({
  children,
  id,
  placeholder,
  label,
  error,
  isError,
}: FormControlProps) {
  return (
    <FormWrapper>
      <div className="form-control">
        {children}
        <label
          className="form-control__placeholder"
          htmlFor={id}
          id={placeholder}
        >
          <div className="form-control__label">{label}</div>
        </label>
      </div>
      {isError && <Typography color="error">{error}</Typography>}
    </FormWrapper>
  );
}
