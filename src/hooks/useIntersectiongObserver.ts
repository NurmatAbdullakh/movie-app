import { RefObject, useEffect, useState } from "react";

export const useIntersectionObserver = (targetRef: RefObject<HTMLElement>) => {
  const [intersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, {});

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  });

  return [intersecting];
};

export default useIntersectionObserver;
