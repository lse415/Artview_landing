import styled from "styled-components";

interface PointItemProps {
  keywordText: string;
  explanationText: string;
}

const PointContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 30px;
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
}) => (
  <PointContainer>
    <Dot />
    <Keyword>{keywordText}</Keyword>
    <Explanation>{explanationText}</Explanation>
  </PointContainer>
);

export default PointItem;
