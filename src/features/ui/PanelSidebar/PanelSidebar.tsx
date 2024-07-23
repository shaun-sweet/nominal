import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import cx from "classnames";
import { TriangleIcon } from "../TriangleIcon";
import { MoreIcon } from "../MoreIcon";

const selectionOptions = ["A", "B", "C", "D", "E"];

type SelectionOptions = "A" | "B" | "C" | "D" | "E";

export const PanelSidebar = () => {
  const [selectedSideBarItem, setSelectedSideBarItem] =
    useState<SelectionOptions | null>();

  const [expandedOptionPanels, setExpandedOptionPanels] = useState<{
    [key in SelectionOptions]?: boolean;
  }>({});

  const handleSelection = useCallback(
    (item: "A" | "B" | "C" | "D" | "E") => {
      if (selectedSideBarItem === item) {
        return setSelectedSideBarItem(null);
      }

      setSelectedSideBarItem(item);
    },
    [selectedSideBarItem]
  );

  const handleTogglePanelExpansion = useCallback(() => {
    if (!selectedSideBarItem) return;
    setExpandedOptionPanels((prev) => ({
      ...prev,
      [selectedSideBarItem]: !prev[selectedSideBarItem],
    }));
  }, [selectedSideBarItem]);

  const isExpanded = Boolean(selectedSideBarItem);
  // Typically i don't make booleans memo's but in this case it makes me not have to make type assertions using "as" since I check for a null value up front here
  const isSelectedPanelExpanded = useMemo(() => {
    if (!selectedSideBarItem) return false;

    return expandedOptionPanels[selectedSideBarItem];
  }, [selectedSideBarItem, expandedOptionPanels]);

  return (
    <div
      className={cx("flex h-full bg-[#F9FAFB]  border-[#DDE1E4]", {
        "border-l-[1px]": isExpanded,
      })}
    >
      <div
        className={cx("overflow-hidden transition-all ease-in-out delay-200", {
          "w-96": isExpanded,
          "w-0": !isExpanded,
        })}
      >
        <div className="flex items-center border-b-[1px] border-[#DDE1E4] p-2 group">
          <div
            className={cx("cursor-pointer", {
              "-rotate-90": isSelectedPanelExpanded,
            })}
            onClick={handleTogglePanelExpansion}
          >
            <TriangleIcon />
          </div>
          <span className="ml-2 uppercase text-xs text-[#717886] font-semibold">
            {selectedSideBarItem} options
          </span>
          <div className="flex gap-2 items-center ml-auto invisible group-hover:visible ">
            <div className="text-[#6D7482] cursor-pointer">+</div>

            <div className="flex items-center cursor-pointer h-[24px]">
              <MoreIcon />
            </div>
          </div>
        </div>
        <div
          className={cx("p-2", {
            hidden: !isSelectedPanelExpanded,
          })}
        >
          panel body
        </div>
      </div>

      <div className="w-10 border-l-[1px] border-[#DDE1E4] p-2">
        {selectionOptions.map((option) => {
          const isSelected = selectedSideBarItem === option;
          return (
            <div
              className={cx("flex justify-center cursor-pointer border", {
                "bg-mint-100 text-mint-700 border-mint-700 border": isSelected,
                "border-transparent": !isSelected,
              })}
              key={option}
              onClick={() => {
                handleSelection(option as SelectionOptions);
              }}
            >
              {option}
            </div>
          );
        })}
      </div>
    </div>
  );
};
