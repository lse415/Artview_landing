import styled from "styled-components";
import LogoIcon from "../../assets/icons/logo-bg.svg";

interface FeatureCardProps {
  title: string;
}

const CardContainer = styled.div`
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const CardIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 15px;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
`;

const FeatureCard: React.FC<FeatureCardProps> = ({ title }) => (
  <CardContainer>
    <CardIcon src={LogoIcon} alt={`${title} Icon`} />
    <CardTitle>{title}</CardTitle>
  </CardContainer>
);

export default FeatureCard;
