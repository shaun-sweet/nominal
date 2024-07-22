export const MoreIcon = () => {
  return (
    <div className="flex items-middle gap-[1px]">
      <Dot />
      <Dot />
      <Dot />
    </div>
  );
};

const Dot = () => {
  return (
    <div className="h-[2px] w-[2px] bg-[#6D7482] inline-block rounded-[50%]" />
  );
};
