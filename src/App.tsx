import "./tailwind.css";
import { WorkbookFilters } from "./features/workbooks/WorkbookFilters";

export default function App() {
  return (
    <div className="flex">
      <WorkbookFilters />
    </div>
  );
}
