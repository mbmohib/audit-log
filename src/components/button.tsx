import styled, { css } from 'styled-components';
import { SpaceProps, space } from 'styled-system';

type ButtonWrapperProps = SpaceProps & {
  variant?: 'primary' | 'secondary';
};

const ButtonWrapper = styled.div<ButtonWrapperProps>`
  .btn {
    border: 1px solid;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    padding: 10px 24px;
    border-radius: 8px;
    transition: 0.3s;
    cursor: pointer;
    position: relative;
    display: block;

    ${({ variant }) =>
      variant === 'primary' &&
      css`
        background: ${({ theme }) => theme.colors.white};
        border-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.primary};
      `}

    ${({ variant }) =>
      variant === 'secondary' &&
      css`
        background: ${({ theme }) => theme.colors.white};
        border-color: ${({ theme }) => theme.colors.black};
        color: ${({ theme }) => theme.colors.black};
      `}
  }

  .btn:hover {
    ${({ variant }) =>
      variant === 'primary' &&
      css`
        background-color: ${({ theme }) => theme.colors.primary200};
        color: ${({ theme }) => theme.colors.white};
      `}

    ${({ variant }) =>
      variant === 'secondary' &&
      css`
        background-color: ${({ theme }) => theme.colors.black};
        color: ${({ theme }) => theme.colors.white};
      `}
  }

  .btn:focus {
    outline: none;
    outline-offset: 0.05em;
  }

  .btn::after {
    content: '';
    display: block;
    width: 1.2em;
    height: 1.2em;
    position: absolute;
    left: calc(50% - 0.75em);
    top: calc(50% - 0.75em);
    border: 0.15em solid;
    border-right-color: white;
    border-radius: 50%;
    animation: button-animation 0.7s linear infinite;
    opacity: 0;

    ${({ variant }) =>
      variant === 'primary' &&
      css`
        border-color: ${({ theme }) => theme.colors.primary200};
      `}

    ${({ variant }) =>
      variant === 'secondary' &&
      css`
        border-color: ${({ theme }) => theme.colors.white};
      `}
  }

  @keyframes button-animation {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .btn.loading {
    ${({ variant }) =>
      variant === 'primary' &&
      css`
        color: ${({ theme }) => theme.colors.primary200};
      `}

    ${({ variant }) =>
      variant === 'secondary' &&
      css`
        color: ${({ theme }) => theme.colors.black};
      `}
  }

  .btn.loading::after {
    opacity: 1;
  }

  .btn:disabled {
    cursor: wait;
    background-color: ${({ theme }) => theme.colors.primary200};
  }

  a {
    color: inherit;
  }

  ${space}
`;

ButtonWrapper.defaultProps = {
  variant: 'primary',
};

type ButtonProps = SpaceProps & {
  isLoading?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
  children: React.ReactNode;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
};

export default function Button({
  isLoading,
  type,
  children,
  disabled,
  variant,
  onClick,
  ...rest
}: ButtonProps) {
  return (
    <ButtonWrapper {...rest} variant={variant}>
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={isLoading ? 'btn loading' : 'btn'}
      >
        {children}
      </button>
    </ButtonWrapper>
  );
}
