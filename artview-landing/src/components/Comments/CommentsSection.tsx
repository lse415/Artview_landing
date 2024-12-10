import { useState } from "react";
import styled from "styled-components";
import Wrapper from "../Wrapper";
import CommentModal from "./CommentModal";
import media from "../../styles/media";

const Container = styled.section`
  padding: 80px 0;
  margin: 0 120px 120px 120px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${media.mobile} {
    margin: 0;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

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
  margin-bottom: 1%;

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

const CommentCard = styled.div`
  background-color: #f9f9f9;
  border-radius: 50px;
  padding: 10px 15px;
  font-size: 1rem;
  color: #333;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  ${media.mobile} {
    font-size: 0.8rem;
  }
`;

const CommentSection = () => {
  const [comments, setComments] = useState<string[]>([
    "멋진 프로젝트였습니다. 수고하셨어요!",
    "아트뷰 화이팅! 응원합니다!",
  ]); // 초기 댓글
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddComment = (newComment: string) => {
    setComments((prevComments) => [newComment, ...prevComments]); // 아래부터 위로 정렬
  };

  return (
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
            <CommentCard key={index}>{comment}</CommentCard>
          ))}
        </CommentsContainer>
      </Wrapper>
    </Container>
  );
};

export default CommentSection;
