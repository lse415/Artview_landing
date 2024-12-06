import styled, { keyframes } from "styled-components";

interface PointItemProps {
  keywordText: string;
  explanationText: string;
  delay: number;
  isVisible: boolean;
}

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const PointContainer = styled.div<{ delay: number; isVisible: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 30px;

  opacity: 0;
  animation: ${({ isVisible }) => (isVisible ? slideInLeft : "none")} 2.4s
    ease-out forwards;
  animation-delay: ${({ delay }) => delay}s;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  background-color: #333;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const Keyword = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
`;

const Explanation = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
`;

const PointItem: React.FC<PointItemProps> = ({
  keywordText,
  explanationText,
  delay,
  isVisible,
}) => (
  <PointContainer delay={delay} isVisible={isVisible}>
    <Dot />
    <Keyword>{keywordText}</Keyword>
    <Explanation>{explanationText}</Explanation>
  </PointContainer>
);

export default PointItem;
