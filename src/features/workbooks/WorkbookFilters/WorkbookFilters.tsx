import { useCallback } from "react";
import {
  useSearchParams,
  WorkBookFiltersQueryParams,
} from "../../../lib/hooks/useSearchParams";
import { SideBarMenu } from "../../ui/SideBarMenu";

const reviewFilters = [
  "All reviews",
  "Recent",
  "Created by you",
  "Shared with you",
  "Drafts",
  "Archive",
];

const templateFilters = [
  "All templates",
  "Recent",
  "Created by you",
  "Shared with you",
  "Drafts",
  "Archive",
];

export const WorkbookFilters = () => {
  const { setSearchParam, getSearchParam, removeSearchParam } =
    useSearchParams<WorkBookFiltersQueryParams>();

  const activeFilter = getSearchParam("activeFilter");
  const activeCategory = getSearchParam("activeCategory");

  const handleFilterSelection = useCallback(
    ({
      activeCategory,
      activeFilter,
    }: {
      activeCategory: string;
      activeFilter: string;
    }) => {
      return () => {
        setSearchParam("activeFilter", activeFilter);
        setSearchParam("activeCategory", activeCategory);
      };
    },
    [setSearchParam]
  );

  const handleHomeSelection = useCallback(() => {
    removeSearchParam("activeFilter");
    removeSearchParam("activeCategory");
  }, []);

  const isHomeSelected = !activeFilter && !activeCategory;

  return (
    <div className="w-44 p-5">
      <SideBarMenu.Root>
        <SideBarMenu.Item
          name="Home"
          onSelection={handleHomeSelection}
          isSelected={isHomeSelected}
        />
        <SideBarMenu.Category title="Reviews">
          {reviewFilters.map((filterName) => {
            const isSelected =
              activeFilter === filterName && activeCategory === "Reviews";
            return (
              <SideBarMenu.Item
                key={filterName}
                name={filterName}
                isSelected={isSelected}
                onSelection={handleFilterSelection({
                  activeCategory: "Reviews",
                  activeFilter: filterName,
                })}
              />
            );
          })}
        </SideBarMenu.Category>
        <SideBarMenu.Category title="Templates">
          {templateFilters.map((filterName) => {
            const isSelected =
              activeFilter === filterName && activeCategory === "Templates";
            return (
              <SideBarMenu.Item
                key={filterName}
                name={filterName}
                isSelected={isSelected}
                onSelection={handleFilterSelection({
                  activeCategory: "Templates",
                  activeFilter: filterName,
                })}
              />
            );
          })}
        </SideBarMenu.Category>
      </SideBarMenu.Root>
    </div>
  );
};
