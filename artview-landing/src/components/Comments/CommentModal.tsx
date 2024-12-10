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
  padding: 30px;
  border-radius: 15px;
  width: 30%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  box-sizing: border-box;
`;

const ModalTitle = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: ${theme.colors.primary};
  margin-bottom: 3%;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 70%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  font-size: 1rem;
  resize: none;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  color: ${theme.colors.primary};
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    outline: none;
  }
`;

const SubmitButton = styled.button`
  margin-top: 3%;
  padding: 10px 20px;
  font-size: 1rem;
  background-color: ${theme.colors.primary};
  border: none;
  border-radius: 30px;
  color: #fff;
  cursor: pointer;
  align-self: flex-end;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

interface CommentModalProps {
  onClose: () => void;
  onSubmit: (comment: string) => void;
}

const CommentModal: React.FC<CommentModalProps> = ({ onClose, onSubmit }) => {
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (comment.trim() === "" || comment.length > 50) {
      alert("댓글은 1~50자로 작성해 주세요.");
      return;
    }

    try {
      setIsSubmitting(true);
      await onSubmit(comment.trim());
      setComment("");
      onClose();
    } catch (error) {
      alert("댓글 작성에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ModalTitle>아트뷰 팀원들을 응원해 주세요! (최대 50자)</ModalTitle>
        <TextArea
          maxLength={50}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          disabled={isSubmitting}
        />
        <SubmitButton onClick={handleSubmit} disabled={isSubmitting}>
          {isSubmitting ? "전송중 📪" : "전송 📬"}
        </SubmitButton>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default CommentModal;
