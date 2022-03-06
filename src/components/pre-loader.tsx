import styled from 'styled-components';

const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 60vh;

  .loader {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .loader div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    animation: loader 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ theme }) => theme.colors.primary} transparent transparent
      transparent;
  }
  .loader div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .loader div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .loader div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

type PreLoaderProps = {
  children: React.ReactNode;
  isLoading: boolean;
};

export default function PreLoader({ children, isLoading }: PreLoaderProps) {
  return (
    <Wrapper>
      {isLoading ? (
        <LoaderWrapper>
          <div className="loader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </LoaderWrapper>
      ) : (
        children
      )}
    </Wrapper>
  );
}
