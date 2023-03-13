import { Avatar } from "@bamboo/ui";
import React from "react";
import { BiImageAlt } from "react-icons/bi";
import {
  HomeItemCommentBox,
  HomeItemCommentForm,
  HomeItemCommentInput,
  HomeItemCommentInputText,
  HomeItemInputBox,
  HomeItemInputContainer,
} from "../CommentInput/CommentInput.style";
import Haerin from "../../../asset/haerin.jpeg";
import useCommentPost from "../../../hooks/Post/useCommentPost";
import { stopBubbling } from "custom-util";
import useChildCommentPost from "../../../hooks/Post/useDetailComment";

interface Props {
  postId: number;
}

const DetailInput = ({ postId }: Props) => {
  const { onChange, onSubmit, content } = useChildCommentPost({
    postId,
  });
  return (
    <HomeItemCommentBox onClick={(e) => stopBubbling(e)}>
      <Avatar size="sm" src={Haerin.src} alt="이미지 없음" />
      <HomeItemCommentForm onSubmit={onSubmit}>
        <HomeItemInputBox>
          <HomeItemInputContainer>
            <HomeItemCommentInput
              onChange={onChange}
              placeholder="댓글을 입력하세요"
              value={content}
            />
            <BiImageAlt />
          </HomeItemInputContainer>
          <HomeItemCommentInputText>
            댓글을 게시하려면 Enter 키를 누르세요
          </HomeItemCommentInputText>
        </HomeItemInputBox>
      </HomeItemCommentForm>
    </HomeItemCommentBox>
  );
};

export default DetailInput;