import styled, { keyframes } from "styled-components";
import { useState } from "react";
import Wrapper from "../Wrapper";
import FeatureCard from "./FeatureCard";
import FeatureModal from "./FeatureModal";
import { FeatureModalProps } from "./FeatureModal";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import media from "../../styles/media";
import { AiOutlineForm, AiOutlineComment, AiOutlineBulb } from "react-icons/ai";

import Recording1 from "../../assets/images/recording/recording1.svg?react";
import Recording2 from "../../assets/images/recording/recording2.svg?react";
import Recording3 from "../../assets/images/recording/recording3.svg?react";

import Community1 from "../../assets/images/community/community1.svg?react";
import Community2 from "../../assets/images/community/community2.svg?react";

import Info1 from "../../assets/images/info/info1.svg?react";
import Info2 from "../../assets/images/info/info2.svg?react";
import Info3 from "../../assets/images/info/info3.svg?react";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.section`
  padding: 80px 0;
  text-align: center;
  margin: 0 120px;

  ${media.mobile} {
    margin: 0;
  }
`;

const Title = styled.h2<{ isVisible: boolean }>`
  font-size: ${({ theme }) => theme.fonts.title};
  color: #333;
  margin-bottom: 20px;

  span {
    display: block;
    font-size: ${({ theme }) => theme.fonts.title_small};
    margin-top: 10px;
  }

  opacity: 0;
  animation: ${({ isVisible }) => (isVisible ? fadeIn : "none")} 0.8s ease-out
    forwards;
  animation-delay: 0.3s;

  ${media.mobile} {
    span {
      font-size: ${({ theme }) => theme.fonts.title_small};
    }
  }
`;

const CardsContainer = styled.div<{ isVisible: boolean }>`
  display: flex;
  justify-content: center;
  gap: 60px;
  margin-top: 50px;

  opacity: 0;
  animation: ${({ isVisible }) => (isVisible ? fadeIn : "none")} 0.8s ease-out
    forwards;
  animation-delay: 1s;

  ${media.mobile} {
    gap: 20px;
    flex-direction: column;
    justify-content: center;
  }
`;

const FeatureSection = () => {
  const { ref, isVisible } = useIntersectionObserver();

  const [selectedFeature, setSelectedFeature] = useState<
    FeatureModalProps["feature"] | null
  >(null);

  const isMobile = window.innerWidth <= 480;

  const features: FeatureModalProps["feature"][] = isMobile
    ? [
        {
          title: "기록",
          description: "전시 관람의 순간을 기록합니다.",
          icon: <AiOutlineForm />,
          image1: <Recording1 />,
          image2: <Recording2 />,
          image3: <Recording3 />,
          detailTitle1: "전시회 기본 정보 입력",
          detailInfo1:
            "전시회명, 전시회 장소, 전시 관람 날짜를 기입합니다. Artview가 제공하는 진행 중인 전시회 정보 데이터를 통해 전시회명 및 전시회 장소를 자동으로 기입해 텍스트 입력의 피로감을 줄여줍니다.",
          detailTitle2: "실시간 관람 기록",
          detailInfo2:
            "전시 관람의 순간을 Artview와 함께 하세요. Artview가 제공하는 템플릿을 통해 실시간으로 작품 사진 및 관련 내용을 정리할 수 있습니다.",
          detailTitle3: "별점 및 기록 등록",
          detailInfo3:
            "전시 관람을 마친 후, 전시회에 대한 종합적인 평가를 별점을 통해 표현한 뒤 기록을 종료하세요. 별점 데이터는 전시회 정보의 아트뷰어 평점을 매기는데 사용됩니다.",
        },
        {
          title: "소통",
          description: "전시 관람 경험을 나누며 소통합니다.",
          icon: <AiOutlineComment />,
          image1: <Community2 />,
          image2: <Community1 />,
          detailTitle1: "감상 공유하기",
          detailInfo1:
            "내 관람 기록을 바탕으로 다른 Artview 사용자들에게 들려줄 여러분의 전시 관람 후기를 남겨 주세요! 감상을 공유하고 싶은 기록을 선택하면 전시회 기본 정보 및 내 별점, 그리고 사진이 자동으로 입력됩니다. 번거로운 타이핑은 Artview에게 맡기고, 여러분은 나누고 싶은 이야기에 집중해 주세요. 감상 키워드 선택을 통해 간결하게 감상을 표현할 수도 있습니다.",
          detailTitle2: "Artview 커뮤니티",
          detailInfo2:
            "Artview 사용자들이 공유한 전시 관람 후기를 SNS 형식으로 모아볼 수 있는 페이지입니다. 불필요한 정보 없이 사용자들의 전시 관람 후기를 둘러보세요. 전체 Artview 사용자들의 후기를 볼 수도 있고, 내가 팔로우하는 사용자들의 후기만 모아 볼 수도 있어요. 아트뷰 커뮤니티를 통해 다양한 아트뷰 사용자들과 소통해 보세요.",
        },
        {
          title: "정보",
          description: "진행 중인 전시회 정보를 제공합니다.",
          icon: <AiOutlineBulb />,
          image1: <Info1 />,
          image2: <Info2 />,
          image3: <Info3 />,
          detailTitle1: "전시 정보 둘러보기",
          detailInfo1:
            "진행 중인 전시 정보를 둘러봅니다. 진행 중인 전시, 무료 전시, 온라인 전시 카테고리를 사용할 수 있고, 원하는 전시회가 있다면 검색해 보는 것도 가능합니다.",
          detailTitle2: "전시 정보 상세보기",
          detailInfo2:
            "전시회에 대한 상세 정보를 확인합니다. 전시 기간, 장소, 갤러리 운영 시간 확인이 가능합니다. 전시회 장소 버튼을 클릭하면 네이버맵으로 바로 이동할 수 있어요.",
          detailTitle3: "전시회 후기 모아보기",
          detailInfo3:
            "아트뷰 사용자들이 커뮤니티에 남겨준 전시회 후기를 모아 보여드립니다. 전시회 후기를 둘러보고 관람 여부를 결정해 보세요. 아트뷰 사용자들의 별점을 모아 보여주는 아트뷰어 평점으로 전시회에 대한 만족도를 직관적으로 확인할 수 있습니다.",
        },
      ]
    : [
        {
          title: "실시간 기록",
          description: "전시 관람의 순간을 기록합니다.",
          icon: <AiOutlineForm />,
          image1: <Recording1 />,
          image2: <Recording2 />,
          image3: <Recording3 />,
          detailTitle1: "전시회 기본 정보 입력",
          detailInfo1:
            "전시회명, 전시회 장소, 전시 관람 날짜를 기입합니다. Artview가 제공하는 진행 중인 전시회 정보 데이터를 통해 전시회명 및 전시회 장소를 자동으로 기입해 텍스트 입력의 피로감을 줄여줍니다.",
          detailTitle2: "실시간 관람 기록",
          detailInfo2:
            "전시 관람의 순간을 Artview와 함께 하세요. Artview가 제공하는 템플릿을 통해 실시간으로 작품 사진 및 관련 내용을 정리할 수 있습니다.",
          detailTitle3: "별점 및 기록 등록",
          detailInfo3:
            "전시 관람을 마친 후, 전시회에 대한 종합적인 평가를 별점을 통해 표현한 뒤 기록을 종료하세요. 별점 데이터는 전시회 정보의 아트뷰어 평점을 매기는데 사용됩니다.",
        },
        {
          title: "감상 공유",
          description: "전시 관람 경험을 나누며 소통합니다.",
          icon: <AiOutlineComment />,
          image1: <Community2 />,
          image2: <Community1 />,
          detailTitle1: "감상 공유하기",
          detailInfo1:
            "내 관람 기록을 바탕으로 다른 Artview 사용자들에게 들려줄 여러분의 전시 관람 후기를 남겨 주세요! 감상을 공유하고 싶은 기록을 선택하면 전시회 기본 정보 및 내 별점, 그리고 사진이 자동으로 입력됩니다. 번거로운 타이핑은 Artview에게 맡기고, 여러분은 나누고 싶은 이야기에 집중해 주세요. 감상 키워드 선택을 통해 간결하게 감상을 표현할 수도 있습니다.",
          detailTitle2: "Artview 커뮤니티",
          detailInfo2:
            "Artview 사용자들이 공유한 전시 관람 후기를 SNS 형식으로 모아볼 수 있는 페이지입니다. 불필요한 정보 없이 사용자들의 전시 관람 후기를 둘러보세요. 전체 Artview 사용자들의 후기를 볼 수도 있고, 내가 팔로우하는 사용자들의 후기만 모아 볼 수도 있어요. 아트뷰 커뮤니티를 통해 다양한 아트뷰 사용자들과 소통해 보세요.",
        },
        {
          title: "전시 정보 제공",
          description: "진행 중인 전시회 정보를 제공합니다.",
          icon: <AiOutlineBulb />,
          image1: <Info1 />,
          image2: <Info2 />,
          image3: <Info3 />,
          detailTitle1: "전시 정보 둘러보기",
          detailInfo1:
            "진행 중인 전시 정보를 둘러봅니다. 진행 중인 전시, 무료 전시, 온라인 전시 카테고리를 사용할 수 있고, 원하는 전시회가 있다면 검색해 보는 것도 가능합니다.",
          detailTitle2: "전시 정보 상세보기",
          detailInfo2:
            "전시회에 대한 상세 정보를 확인합니다. 전시 기간, 장소, 갤러리 운영 시간 확인이 가능합니다. 전시회 장소 버튼을 클릭하면 네이버맵으로 바로 이동할 수 있어요.",
          detailTitle3: "전시회 후기 모아보기",
          detailInfo3:
            "아트뷰 사용자들이 커뮤니티에 남겨준 전시회 후기를 모아 보여드립니다. 전시회 후기를 둘러보고 관람 여부를 결정해 보세요. 아트뷰 사용자들의 별점을 모아 보여주는 아트뷰어 평점으로 전시회에 대한 만족도를 직관적으로 확인할 수 있습니다.",
        },
      ];

  const closeModal = () => setSelectedFeature(null);

  return (
    <Container ref={ref}>
      <Wrapper>
        <Title isVisible={isVisible}>
          Main Features
          <span>주요기능</span>
        </Title>
        <CardsContainer isVisible={isVisible}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              onClick={() => setSelectedFeature(feature)}
            />
          ))}
        </CardsContainer>
      </Wrapper>
      {selectedFeature && (
        <FeatureModal feature={selectedFeature} onClose={closeModal} />
      )}
    </Container>
  );
};

export default FeatureSection;
