import { PropsWithChildren } from "react";
import cx from "classnames";
import { Divider } from "../Divider";

const SideBarMenu = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-col font-medium">{children}</div>;
};

interface SideBarCategoryProps {
  title: string;
}

const SideBarCategory = ({
  title,
  children,
}: PropsWithChildren<SideBarCategoryProps>) => {
  return (
    <div>
      <Divider className="my-3 border-red-500" />
      <div
        className={cx(
          "p1 pl-2 uppercase text-xs text-[#717886] font-semibold mb-1"
        )}
      >
        {title}
      </div>
      {children}
    </div>
  );
};

// This would be the type font awesome exports with all the names of their icons
type IconName = "home" | "settings" | "user" | "logout";

interface SideBarItemProps {
  onSelection?: () => void;
  isSelected?: boolean;
  iconName?: IconName;
  name: string;
  className?: string;
}

const SideBarItem = ({
  iconName,
  name,
  onSelection,
  className,
  isSelected = false,
}: SideBarItemProps) => {
  // const shouldShowIcon = Boolean(iconName);
  const classNames = cx(
    "p-1 pl-3 cursor-pointer text-xs rounded-sm text-[#384252]",
    className,
    {
      "bg-mint-100 text-mint-700": isSelected,
      "hover:bg-mint-50": !isSelected,
    }
  );

  return (
    <div className={classNames} onClick={onSelection}>
      {/* shouldShowIcon && <Icon name={name} /> */}
      <span
        className={cx({
          "text-mint-700": isSelected,
        })}
      >
        {name}
      </span>
    </div>
  );
};

const Root = SideBarMenu;

const Category = SideBarCategory;

const Item = SideBarItem;

export { Root, Category, Item };
