import { SideBarMenu } from "./features/ui/SideBarMenu";
import "./tailwind.css";

export default function App() {
  return (
    <div className="flex p-5">
      <SideBarMenu.Root>
        <SideBarMenu.Heading title="Templates" />
        <SideBarMenu.Item name="All templates" isSelected />
        <SideBarMenu.Item name="Recent" />
        <SideBarMenu.Item name="Created by you" />
        <SideBarMenu.Item name="Shared with you" />
        <SideBarMenu.Item name="Drafts" />
      </SideBarMenu.Root>
    </div>
  );
}
