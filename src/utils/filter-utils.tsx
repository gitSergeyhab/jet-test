import { Bond } from "../types/types";

type FilterByProgress = {
  bond: Bond, min?: number, max?: number
}
export const filterByProgress = ({bond, min=0, max=1}: FilterByProgress) =>
  ((bond.progress || 0) >= min) && ((bond.progress || 0) <= max)

type FilterProgressType = {
  data: Bond[], min?: number, max?: number
}

export const FilterProgress = ({data, min=0, max=1}: FilterProgressType) =>
  data.filter((bond) =>  filterByProgress({bond, min, max}))



export const FilterProgress2to10 = (data: Bond[]) => FilterProgress({data, min: 0.02, max: 0.1})

type FilterByCurrentPrice = {
  bond: Bond, min?: number, max?: number
}
export const filterByCurrentPrice = ({bond, min=0, max=1}: FilterByCurrentPrice) =>
  ((bond.min_price || 0) >= min) && ((bond.min_price || 0) <= max)


export const filterByYtm = ({bond, min=0}: FilterByCurrentPrice) =>
  ((bond.ytm || 0) >= min)

export const filterByContracts = ({bond}: FilterByCurrentPrice) =>
  ((bond.invested_contracts_count || 0) < 1)

export const filterByInvestedCompanyDebt = ({bond, max=0}: FilterByCurrentPrice) =>
  ((bond.invested_company_debt || 0) <= max)

export const filterData = (data:  Bond[]) =>
  data.filter((bond) =>
  filterByCurrentPrice({bond, min: 0.99, max: 1.01})
  && filterByProgress({bond, min: 0.02, max: 0.1})
  && filterByYtm({bond, min: 0.188})
  && filterByInvestedCompanyDebt({bond, max: 10})
  // && filterByContracts({bond})
  )

type DataFromFilters = {
  current_price_max?: string,
  current_price_min?: string,
  debt_max?: string,
  effective_max?: string,
  effective_min?: string,
  progress_max?: string,
  progress_min?: string,
}



export const filterDataWithFilters = (data:  Bond[], filters: DataFromFilters) => {
  const currentPriceMax = filters.current_price_max ? +filters.current_price_max : 2;
  const currentPriceMin = filters.current_price_min ? +filters.current_price_min : 0;

  const debtMax = filters.debt_max ? +filters.debt_max : 0;

  // const effectiveMax = filters.effective_max ? +filters.effective_max : 1;
  const effectiveMin = filters.effective_min ? +filters.effective_min : 0;

  const progressMax = filters.progress_max ? +filters.progress_max : 1;
  const progressMin = filters.progress_min ? +filters.progress_min : 0;

  console.log({filters})

  console.log({currentPriceMax, currentPriceMin, debtMax, effectiveMin, progressMax, progressMin})

  return data.filter((bond) =>
  filterByCurrentPrice({bond, min: currentPriceMin, max: currentPriceMax})
  && filterByProgress({bond, min: progressMin, max: progressMax})
  && filterByYtm({bond, min: effectiveMin})
  && filterByInvestedCompanyDebt({bond, max: debtMax})
  )
}
