import styled, { keyframes } from 'styled-components';

export default function ContactItemSkeleton() {
  return (
    <SkeletonContainer>
      <UserpicSkeleton />
      <div>
        <NameSkeleton />
        <SpecialitySkeleton />
      </div>
    </SkeletonContainer>
  );
}

const PulseAnimation = keyframes`
  0% {background-color: var(--color-bg-secondary)}
  50% {background-color: var(--color-bg-thirdly)}
  110% {background-color: var(--color-bg-secondary)}
`;

const SkeletonContainer = styled.div`
  display: flex;
  column-gap: 8px;
  align-items: center;

  padding-top: 8px;
  padding-bottom: 8px;
`;

const UserpicSkeleton = styled.div`
  width: 72px;
  height: 72px;

  background-color: var(--color-bg-secondary);
  border-radius: 50%;

  animation-name: ${PulseAnimation};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
`;

const NameSkeleton = styled.div`
  width: 144px;
  height: 16px;
  margin-bottom: 6px;

  background-color: var(--color-bg-secondary);
  border-radius: 8px;

  animation-name: ${PulseAnimation};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
`;

const SpecialitySkeleton = styled.div`
  width: 80px;
  height: 12px;

  background-color: var(--color-bg-secondary);
  border-radius: 6px;

  animation-name: ${PulseAnimation};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
`;
