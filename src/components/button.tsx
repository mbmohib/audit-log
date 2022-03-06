import styled from 'styled-components';
import { SpaceProps, space } from 'styled-system';

const ButtonWrapper = styled.div<SpaceProps>`
  .btn {
    background: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.primary};
    border: 1px solid;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    padding: 16px 32px;
    color: ${({ theme }) => theme.colors.primary};
    border-radius: 8px;
    transition: 0.3s;
    cursor: pointer;
    position: relative;
    display: block;
  }

  .btn:hover {
    background-color: ${({ theme }) => theme.colors.primary200};
    color: ${({ theme }) => theme.colors.white};
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
    border: 0.15em solid ${({ theme }) => theme.colors.primary200};
    border-right-color: white;
    border-radius: 50%;
    animation: button-animation 0.7s linear infinite;
    opacity: 0;
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
    color: ${({ theme }) => theme.colors.primary200};
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

type ButtonProps = SpaceProps & {
  isLoading?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
  children: React.ReactNode;
  disabled?: boolean;
};

export default function Button({
  isLoading,
  type,
  children,
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <ButtonWrapper {...rest}>
      <button
        type={type}
        disabled={disabled}
        className={isLoading ? 'btn loading' : 'btn'}
      >
        {children}
      </button>
    </ButtonWrapper>
  );
}
