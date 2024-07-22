import { createContext, PropsWithChildren, useMemo, useState } from "react";

interface SearchParamsContextValue {
  searchParams: string;
  setSearchParams: (searchParams: string) => void;
}

export const SearchParamsContext =
  createContext<SearchParamsContextValue | null>(null);

export const SearchParamsProvider = ({ children }: PropsWithChildren) => {
  const [searchParams, setSearchParams] = useState(window.location.search);

  const api = useMemo(() => {
    return {
      searchParams,
      setSearchParams,
    };
  }, [searchParams, setSearchParams]);

  return (
    <SearchParamsContext.Provider value={api}>
      {children}
    </SearchParamsContext.Provider>
  );
};
