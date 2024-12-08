import styled, { keyframes } from "styled-components";
import media from "../../styles/media";
import React, { ComponentType } from "react";

interface TeamMemberProps {
  image: ComponentType<React.SVGProps<SVGSVGElement>>;
  name: string;
  role: string;
  email: string;
  github?: string;
  delay: number;
  isVisible: boolean;
  reverse: boolean;
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

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const CardContainer = styled.div<{
  delay: number;
  isVisible: boolean;
  reverse?: boolean;
}>`
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

  ${media.mobile} {
    flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
    align-items: center;
    text-align: ${({ reverse }) => (reverse ? "right" : "left")};
    padding: 10px;

    animation: ${({ isVisible, reverse }) =>
        isVisible ? (reverse ? slideInRight : slideInLeft) : "none"}
      2s ease-out forwards;
    animation-delay: ${({ delay }) => delay}s;
  }
`;

const MemberImage: React.FC<{
  image: ComponentType<React.SVGProps<SVGSVGElement>>;
  isReverse?: boolean;
}> = ({ image: SvgComponent, isReverse }) => (
  <SvgComponent
    style={{
      width: "200px",
      height: "200px",
      marginBottom: "15px",
      ...(isReverse ? { marginLeft: "15px" } : { marginRight: "15px" }),
    }}
  />
);

const MemberDetails = styled.div`
  ${media.mobile} {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;

const MemberName = styled.h3`
  font-size: 1rem;
  color: #333;
  margin-bottom: 5px;

  ${media.mobile} {
    margin-bottom: 0;
  }
`;

const MemberRole = styled.p`
  font-size: 1rem;
  color: #333;
  margin-bottom: 5px;

  ${media.mobile} {
    margin-bottom: 0;
  }
`;

const ContactInfo = styled.div<{ isReverse?: boolean }>`
  text-align: left;
  ${media.mobile} {
    text-align: ${({ isReverse }) => (isReverse ? "right" : "left")};
  }
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

  ${media.mobile} {
    margin-bottom: 0;
  }
`;

const MemberGithub = styled.a<{ isReverse?: boolean }>`
  display: block;
  font-size: 0.9rem;
  color: #666;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const TeamMemberCard: React.FC<TeamMemberProps & { reverse?: boolean }> = ({
  image,
  name,
  role,
  email,
  github,
  delay,
  isVisible,
  reverse = false,
}) => (
  <CardContainer delay={delay} isVisible={isVisible} reverse={reverse}>
    <MemberImage image={image} isReverse={reverse} />
    <MemberDetails>
      <MemberName>{name}</MemberName>
      <MemberRole>{role}</MemberRole>
      <ContactInfo isReverse={reverse}>
        <MemberEmail href={`mailto:${email}`}>{email}</MemberEmail>
        {github && (
          <MemberGithub href={github} target="_blank" rel="noopener noreferrer">
            ↗ GitHub
          </MemberGithub>
        )}
      </ContactInfo>
    </MemberDetails>
  </CardContainer>
);

export default TeamMemberCard;
