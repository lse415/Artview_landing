import styled from "styled-components";
import media from "../../styles/media";
import theme from "../../styles/theme";

interface FeatureCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  onClick: () => void;
}

const CardContainer = styled.div`
  flex: 1;
  display: flex;
  aspect-ratio: 1;
  padding: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  position: relative;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px 5px rgba(246, 195, 187, 0.3);
  }
  ${media.mobile} {
    max-width: 100%;
    padding: 20px;
  }
`;

const CardIcon = styled.div`
  margin-bottom: 15px;
  color: ${theme.colors.primary};
  font-size: 5rem;

  ${media.mobile} {
    font-size: 2.5rem;
    margin-bottom: 0px;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
  font-size: ${({ theme }) => theme.fonts.title_small};
  ${media.mobile} {
    font-size: ${({ theme }) => theme.fonts.small};
  }
`;

const CardDescription = styled.text`
  margin-top: 20px;
  font-size: 1.2rem;
  color: #333;
  font-size: ${({ theme }) => theme.fonts.small};
  ${media.mobile} {
    display: none;
  }
`;
const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  icon,
  description,
  onClick,
}) => (
  <CardContainer onClick={onClick}>
    <CardIcon>{icon}</CardIcon>
    <CardTitle>{title}</CardTitle>
    <CardDescription>{description}</CardDescription>
  </CardContainer>
);

export default FeatureCard;
