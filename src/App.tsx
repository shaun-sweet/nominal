import "./tailwind.css";
import { WorkbookFilters } from "./features/workbooks/WorkbookFilters";
import { PanelSidebar } from "./features/ui/PanelSidebar";
import { Workbook } from "./features/workbooks/Workbook";
import { ToastContainer } from "./features/ui/Toast";

export default function App() {
  return (
    <div className="flex min-h-screen">
      <div className=" p-5">
        <WorkbookFilters />
      </div>
      <div className="flex flex-1 items-middle justify-center p-5">
        <Workbook />
      </div>
      <div className="ml-auto">
        <PanelSidebar />
      </div>
      <ToastContainer />
    </div>
  );
}
