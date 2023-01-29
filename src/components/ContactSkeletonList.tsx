import styled from 'styled-components';
import ContactItemSkeleton from './ContactItemSkeleton';

export default function ContactSkeletonList() {
  const arr = new Array(10).fill(<ContactItemSkeleton />);
  return (
    <SkeletonList>
      {arr.map((_, i) => {
        return <ContactItemSkeleton key={i} />;
      })}
    </SkeletonList>
  );
}

const SkeletonList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 6px;

  margin: 0;
  padding: 0;
  padding-top: 12px;
  padding-bottom: 12px;

  list-style: none;
`;
