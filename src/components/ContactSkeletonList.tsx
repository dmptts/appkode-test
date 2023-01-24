import ContactItemSkeleton from './ContactItemSkeleton';

export default function ContactSkeletonList() {
  const arr = new Array(10);
  return (
    <>
      {arr.map(() => (
        <ContactItemSkeleton />
      ))}
    </>
  );
}
