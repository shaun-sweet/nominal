import { PropsWithChildren } from "react";
import cx from "classnames";
import { Divider } from "../Divider";

const SideBarMenu = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-col">{children}</div>;
};

interface SideBarHeadingProps {
  title: string;
  className?: string;
}

const SideBarHeading = ({ title, className }: SideBarHeadingProps) => {
  return (
    <>
      {/* <hr className="my-4 text-gra" /> */}
      <Divider />
      <div className={cx("p1 font-medium uppercase text-xs ", className)}>
        {title}
      </div>
    </>
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
  return (
    <div
      className={cx("p-1 cursor-pointer text-xs rounded-sm", className, {
        "bg-mint-100": isSelected,
        "hover:bg-mint-50": !isSelected,
      })}
      onClick={onSelection}
    >
      {/* shouldShowIcon && <Icon name={name} /> */}
      {name}
    </div>
  );
};

const Root = SideBarMenu;

const Heading = SideBarHeading;

const Item = SideBarItem;

export { Root, Heading, Item };

// RBAC for sidebar

// show success toast automatically on successful form submission

// default selected side bar item

// sidebar has a badge and count  to show and how to think about solving that

// replace toast content

// explain what cors is and how the browser uses it and how to avoid issues with it in apps

// explain what cookies are

// explain when or when not to useEffect

// explain ways you can make your ereact app less performant and how to avoid it

// different types of testing
// explain why css being global is hard and strategies for managing Item
// why would you use graphql

// write debounce function from scratch
