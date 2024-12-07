import styled from "styled-components";
import LogoIcon from "../../assets/icons/logo-bg.svg";
import media from "../../styles/media";

interface FeatureCardProps {
  title: string;
  onClick: () => void;
}

const CardContainer = styled.div`
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  ${media.mobile} {
    width: 100px;
    height: 100px;
  }
`;

const CardIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 15px;

  ${media.mobile} {
    display: none;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;

  ${media.mobile} {
    font-size: ${({ theme }) => theme.fonts.small};
  }
`;

const FeatureCard: React.FC<FeatureCardProps> = ({ title, onClick }) => (
  <CardContainer onClick={onClick}>
    <CardIcon src={LogoIcon} alt={`${title} Icon`} />
    <CardTitle>{title}</CardTitle>
  </CardContainer>
);

export default FeatureCard;