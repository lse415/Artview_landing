import styled, { keyframes } from "styled-components";

interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
  email: string;
  github?: string;
  delay: number;
  isVisible: boolean;
}

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CardContainer = styled.div<{ delay: number; isVisible: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  border-radius: 15px;

  opacity: 0;
  animation: ${({ isVisible }) => (isVisible ? slideUp : "none")} 2s ease-out
    forwards;
  animation-delay: ${({ delay }) => delay}s;
`;

const MemberImage = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 15px;
  object-fit: cover;
`;

const MemberName = styled.h3`
  font-size: 1rem;
  color: #333;
  margin-bottom: 5px;
`;

const MemberRole = styled.p`
  font-size: 1rem;
  color: #333;
  margin-bottom: 10px;
`;

const ContactInfo = styled.div`
  text-align: left;
`;

const MemberEmail = styled.a`
  display: block;
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 5px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const MemberGithub = styled.a`
  display: block;
  font-size: 0.9rem;
  color: #666;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const TeamMemberCard: React.FC<TeamMemberProps> = ({
  image,
  name,
  role,
  email,
  github,
  delay,
  isVisible,
}) => (
  <CardContainer delay={delay} isVisible={isVisible}>
    <MemberImage src={image} alt={`${name} photo`} />
    <MemberName>{name}</MemberName>
    <MemberRole>{role}</MemberRole>
    <ContactInfo>
      <MemberEmail href={`mailto:${email}`}>{email}</MemberEmail>
      {github && (
        <MemberGithub href={github} target="_blank" rel="noopener noreferrer">
          ↗ GitHub
        </MemberGithub>
      )}
    </ContactInfo>
  </CardContainer>
);

export default TeamMemberCard;
