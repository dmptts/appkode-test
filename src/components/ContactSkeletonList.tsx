import ContactItemSkeleton from './ContactItemSkeleton';

export default function ContactSkeletonList() {
  const arr = new Array(10).fill(<ContactItemSkeleton />);
  return (
    <>
      {arr.map((_, i) => {
        return <ContactItemSkeleton key={i} />;
      })}
    </>
  );
}
