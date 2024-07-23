import {
  useSearchParams,
  WorkBookFiltersQueryParams,
} from "../../../lib/hooks/useSearchParams";
import { useToast } from "../../ui/Toast";

export const Workbook = () => {
  const { getSearchParam } = useSearchParams<WorkBookFiltersQueryParams>();
  const selectedCategory = getSearchParam("activeCategory");
  const selectedFilter = getSearchParam("activeFilter");
  const { showToast } = useToast();

  return (
    <div>
      <h2>Current Category: {selectedCategory}</h2>
      <h2>Current Filter: {selectedFilter}</h2>

      <div className="flex flex-col gap-4">
        <button
          className="cursor-pointer border border-[#DADCE0] p-2"
          onClick={() => showToast("test")}
        >
          CLICK TO TOAST ME FOR TEST TEXT
        </button>

        <button
          className="cursor-pointer border border-[#DADCE0] p-2"
          onClick={() => showToast(<div>this is a react component test</div>)}
        >
          CLICK TO TOAST ME FOR TEST TEXT
        </button>
      </div>
    </div>
  );
};
