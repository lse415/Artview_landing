import { useState } from "react";
import styled, { keyframes } from "styled-components";
import Wrapper from "../Wrapper";
import CommentModal from "./CommentModal";
import media from "../../styles/media";

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
const Background = styled.section`
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  position: relative;
  overflow: hidden;
  }
`;

const Container = styled.section`
  padding: 80px 0 300px 0;
  margin: 0 120px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 10; /* 물결보다 위에 표시 */
  position: relative;
  ${media.mobile} {
    margin: 0;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5%;

  ${media.mobile} {
    gap: 15px;
  }
`;

const Heart = styled.span`
  font-size: 3rem;

  ${media.mobile} {
    font-size: 2rem;
  }
`;

const Title = styled.p`
  font-size: 1.5rem;
  text-align: left;
  line-height: 1.8;
  margin-bottom: 3%;

  ${media.mobile} {
    font-size: 1.2rem;
    line-height: 1.6;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background-color: #333;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #555;
  }

  ${media.mobile} {
    font-size: 0.9rem;
  }
`;

const CommentsContainer = styled.div`
  margin-top: 80px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  align-items: flex-end;
  width: 100%;

  ${media.mobile} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const CommentCard = styled.div<{ isNew: boolean }>`
  background-color: #f9f9f9;
  border-radius: 50px;
  padding: 10px 15px;
  font-size: 1rem;
  color: #333;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  animation: ${({ isNew }) => (isNew ? floatUpAndHover : hoverEffect)}
    ${({ isNew }) => (isNew ? "3s ease-out" : "2s ease-in-out infinite")};
  animation-fill-mode: forwards;
  opacity: ${({ isNew }) => (isNew ? "0" : "1")};
  transform: translateY(${({ isNew }) => (isNew ? "100px" : "0")});
`;

const CommentSection = () => {
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
    setTimeout(() => setNewCommentAdded(false), 3000); // 초기 애니메이션 후 상태 변경
  };

  return (
    <Background>
      <div className="wave -one"></div>
      <div className="wave -two"></div>
      <div className="wave -three"></div>
      <Container>
        <Wrapper>
          <TitleContainer>
            <Heart>💌</Heart>
            <Title>
              일년간 수고한 아트뷰 팀 멤버들에게
              <br />
              응원의 메시지를 보내 주세요!
            </Title>
          </TitleContainer>
          <Button onClick={() => setIsModalOpen(true)}>응원하기</Button>
          {isModalOpen && (
            <CommentModal
              onClose={() => setIsModalOpen(false)}
              onSubmit={handleAddComment}
            />
          )}
          <CommentsContainer>
            {comments.map((comment, index) => (
              <CommentCard key={index} isNew={newCommentAdded && index === 0}>
                {comment}
              </CommentCard>
            ))}
          </CommentsContainer>
        </Wrapper>
      </Container>
    </Background>
  );
};

export default CommentSection;
