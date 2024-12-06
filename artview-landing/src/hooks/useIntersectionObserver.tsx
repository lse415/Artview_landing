import { useEffect, useState, useRef } from "react";

interface UseIntersectionObserverReturn {
  ref: React.RefObject<HTMLDivElement>;
  isVisible: boolean;
}

const useIntersectionObserver = (): UseIntersectionObserverReturn => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // 뷰포트와 교차 상태 업데이트
      },
      { threshold: 0.1 } // 뷰포트 10%이상 -> 감지
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isVisible };
};

export default useIntersectionObserver;
