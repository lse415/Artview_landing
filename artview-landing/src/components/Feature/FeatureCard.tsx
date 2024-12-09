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
  transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;
  position: relative;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px 5px rgba(246, 195, 187, 0.3);
  }
  ${media.mobile} {
    flex-direction: row;
    justify-content: space-between;
    gap: 0px;
    align-items: center;
    width: 90%;
    aspect-ratio: unset;
    padding: 20px;
    margin-bottom: 1%;
  }
`;

const CardIcon = styled.div`
  margin-bottom: 15px;
  color: ${theme.colors.primary};
  font-size: 5rem;
  transition: color 0.2s ease-in-out;

  ${media.mobile} {
    font-size: 3rem;
    margin-bottom: 0;
    width: 15%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const CardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${media.mobile} {
    align-items: flex-start;
    text-align: left;
    width: 80%;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
  font-size: ${({ theme }) => theme.fonts.title_small};
  text-align: center;

  ${media.mobile} {
    font-size: ${({ theme }) => theme.fonts.small};
  }
`;

const CardDescription = styled.p`
  margin-top: 20px;
  color: #333;
  font-size: ${({ theme }) => theme.fonts.small};

  ${media.mobile} {
    margin-top: 5px;
    font-size: ${({ theme }) => theme.fonts.tiny};
    color: #666;
  }
`;

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  icon,
  description,
  onClick,
}) => {
  const isMobile = window.innerWidth <= 480;

  return (
    <CardContainer onClick={onClick}>
      {!isMobile && <CardIcon>{icon}</CardIcon>}
      <CardTextContainer>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardTextContainer>
      {isMobile && <CardIcon>{icon}</CardIcon>}
    </CardContainer>
  );
};

export default FeatureCard;
