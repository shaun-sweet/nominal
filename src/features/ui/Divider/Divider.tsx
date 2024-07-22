import cx from "classnames";

interface DividerProps {
  className?: string;
}

export const Divider = ({ className }: DividerProps) => {
  const classNames = cx("border-t-[1px] border-[#D1D5DB]", className);
  return <div className={classNames} />;
};
