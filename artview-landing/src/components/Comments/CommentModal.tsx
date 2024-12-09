import React, { useState } from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 80px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  font-size: 0.9rem;
  resize: none;

  &:focus {
    outline: none;
    border-color: #666;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
  gap: 5%;
  width: 100%;
`;

const Button = styled.button`
  padding: 5px 10px;
  font-size: 0.9rem;
  border: none;
  border-radius: 30px;
  cursor: pointer;

  &:first-child {
    background-color: #fff;
    color: ${theme.colors.primary};
    border: solid;
  }

  &:last-child {
    background-color: ${theme.colors.primary};
    color: #fff;
  }

  &:hover {
    opacity: 0.8;
  }
`;

interface CommentModalProps {
  onClose: () => void;
  onSubmit: (comment: string) => void;
}

const CommentModal: React.FC<CommentModalProps> = ({ onClose, onSubmit }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    if (comment.trim() === "" || comment.length > 50) {
      alert("댓글은 1~50자로 작성해 주세요.");
      return;
    }
    onSubmit(comment.trim());
    onClose();
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <TextArea
          maxLength={50}
          placeholder="댓글을 입력하세요 (최대 50자)"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <ButtonContainer>
          <Button onClick={onClose}>취소</Button>
          <Button onClick={handleSubmit}>확인</Button>
        </ButtonContainer>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default CommentModal;
