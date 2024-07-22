import {
  useSearchParams,
  WorkBookFiltersQueryParams,
} from "../../../lib/hooks/useSearchParams";

export const Workbook = () => {
  const { getSearchParam } = useSearchParams<WorkBookFiltersQueryParams>();
  const selectedCategory = getSearchParam("activeCategory");
  const selectedFilter = getSearchParam("activeFilter");
  return (
    <div>
      <h2>Current Category: {selectedCategory}</h2>
      <h2>Current Filter: {selectedFilter}</h2>
    </div>
  );
};
