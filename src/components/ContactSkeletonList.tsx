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
  margin: 0;
  padding: 0;
  padding-top: 16px;

  list-style: none;
`;
