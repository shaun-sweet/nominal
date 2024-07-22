import { useCallback, useMemo, useState } from "react"


export interface WorkBookFiltersQueryParams {
  activeFilter: string;
  activeCategory: string;
}

export const useSearchParams = <T>() => {
  const urlParams = new URLSearchParams(window.location.search)
  const [searchParams, setSearchParams] = useState(window.location.search)
 

  const setNewSearchParams = useCallback((newSearchParams: string) => {
    history.pushState({}, '', newSearchParams)
    setSearchParams(newSearchParams)
  }, [searchParams])

  const setSearchParam = useCallback((key: Extract<keyof T, string>, value: string)=> {
    urlParams.set(key, value)
    const newSearchParams = `?${urlParams.toString()}`
    setNewSearchParams(newSearchParams)
  },[searchParams])

  const getSearchParam = useCallback((key: Extract<keyof T, string>) => {
    return urlParams.get(key)
  }, [searchParams])

  const removeSearchParam = useCallback((key: Extract<keyof T, string>) => {
    urlParams.delete(key)
    const newSearchParams = `?${urlParams.toString()}`
    setNewSearchParams(newSearchParams)
  }, [searchParams])

  const api = useMemo(() => {
    return {
      setSearchParam,
      getSearchParam,
      removeSearchParam
    }
  }, [setSearchParam, getSearchParam, removeSearchParam])
  
  return api
}