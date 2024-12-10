import { useState } from "react";
import styled, { keyframes } from "styled-components";
import Wrapper from "../Wrapper";
import CommentModal from "./CommentModal";
import media from "../../styles/media";
import theme from "../../styles/theme";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

// 애니메이션 정의
const floatUpAndHover = keyframes`
  0% {
    transform: translateY(100px) scale(0.9);
    opacity: 0;
  }
  50% {
    transform: translateY(-10px) scale(1.05);
    opacity: 0.8;
  }
  100% {
    transform: translateY(0px) scale(1);
    opacity: 1;
  }`;

const hoverEffect = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }`;

const slideInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }`;

const floatUp = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }`;

const drift = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Background = styled.section`
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  position: relative;
  overflow: hidden;

  .wave {
    position: absolute;
    top: 10%;
    left: -30%;
    width: 100vh;
    height: 100vh;
    transform-origin: 50% 48%;
    border-radius: 43%;
    animation: ${drift} 7s infinite linear;
    background: ${theme.colors.light_pink};
    opacity: 0.4;

    &.-two {
      animation-duration: 10s;
      background: ${theme.colors.light_yellow};
      opacity: 0.2;
    }

    &.-three {
      animation-duration: 15s;
      background: ${theme.colors.primary};
      opacity: 0.1;
    }
    ${media.mobile} {
      display: none;
    }
  }
`;

const Container = styled.section`
  padding: 80px 0 300px 0;
  margin: 0 120px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 10;
  position: relative;

  ${media.mobile} {
    margin: 0;
  }
`;

const AnimatedHeart = styled.span<{ isVisible: boolean }>`
  font-size: 3rem;
  color: ${theme.colors.primary};
  opacity: 0;
  animation: ${({ isVisible }) => (isVisible ? slideInUp : "none")} 1s ease-out
    forwards;

  ${media.mobile} {
    font-size: 2rem;
  }
`;

const AnimatedTitle = styled.h3<{ isVisible: boolean; delay: number }>`
  font-size: ${theme.fonts.title_small};
  padding: 5px 0;
  text-align: left;
  color: ${theme.colors.primary};
  opacity: 0;
  animation: ${({ isVisible }) => (isVisible ? slideInUp : "none")} 1s ease-out
    forwards;
  animation-delay: ${({ delay }) => delay}s;

  ${media.mobile} {
    font-size: 1.2rem;
    line-height: 1.6;
  }
`;

const AnimatedButton = styled.button<{ isVisible: boolean }>`
  padding: 10px 20px;
  margin-top: 3%;
  font-size: 1rem;
  color: white;
  background-color: #333;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  opacity: 0;
  animation: ${({ isVisible }) => (isVisible ? slideInLeft : "none")} 1s
    ease-out forwards;
  animation-delay: 2.5s;

  &:hover {
    background-color: #555;
  }

  ${media.mobile} {
    font-size: 0.9rem;
  }
`;

const CommentsContainer = styled.div<{ isVisible: boolean }>`
  margin-top: 80px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  align-items: flex-end;
  width: 100%;
  opacity: 0;
  animation: ${({ isVisible }) => (isVisible ? floatUp : "none")} 2s ease-out
    forwards;
  animation-delay: 2.5s;

  ${media.mobile} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const AnimatedCommentCard = styled.div<{ isNew: boolean }>`
  background-color: #f9f9f9;
  border-radius: 50px;
  padding: 10px 15px;
  font-size: 1rem;
  color: #333;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  animation: ${({ isNew }) => (isNew ? floatUpAndHover : hoverEffect)}
    ${({ isNew }) => (isNew ? "3s ease-out" : "2s ease-in-out infinite")};
  animation-fill-mode: forwards;
`;

const CommentSection = () => {
  const { ref, isVisible } = useIntersectionObserver();
  const [comments, setComments] = useState<string[]>([
    "멋진 프로젝트였습니다. 수고하셨어요!",
    "아트뷰 화이팅! 응원합니다!",
    "정말 놀라운 결과네요!",
    "끝까지 최선을 다한 여러분이 자랑스럽습니다!",
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCommentAdded, setNewCommentAdded] = useState(false);

  const handleAddComment = (newComment: string) => {
    setComments((prevComments) => [newComment, ...prevComments]);
    setNewCommentAdded(true);
    setTimeout(() => setNewCommentAdded(false), 3000);
  };

  return (
    <Background ref={ref}>
      <div className="wave -one"></div>
      <div className="wave -two"></div>
      <div className="wave -three"></div>
      <Container>
        <Wrapper>
          <AnimatedHeart isVisible={isVisible}>💌</AnimatedHeart>
          <AnimatedTitle isVisible={isVisible} delay={0.7}>
            일년간 수고한 아트뷰 팀 멤버들에게
          </AnimatedTitle>
          <AnimatedTitle isVisible={isVisible} delay={1.2}>
            응원의 메시지를 보내 주세요!
          </AnimatedTitle>
          <AnimatedButton
            isVisible={isVisible}
            onClick={() => setIsModalOpen(true)}
          >
            응원하기
          </AnimatedButton>
          {isModalOpen && (
            <CommentModal
              onClose={() => setIsModalOpen(false)}
              onSubmit={handleAddComment}
            />
          )}
          <CommentsContainer isVisible={isVisible}>
            {comments.map((comment, index) => (
              <AnimatedCommentCard
                key={index}
                isNew={newCommentAdded && index === 0}
              >
                {comment}
              </AnimatedCommentCard>
            ))}
          </CommentsContainer>
        </Wrapper>
      </Container>
    </Background>
  );
};

export default CommentSection;
