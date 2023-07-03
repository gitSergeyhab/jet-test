
import { useEffect, useState } from "react";
import { Filters } from "../../components/filters/filters";
import { RowBond } from "../../components/row-bond/row-bond";
import { TableHeader } from "../../components/table-header/table-header";
import { data } from "../../data/all-second";
import { Bond } from "../../types/types";
// import {  filterData, filterDataWithFilters } from "../../utils/filter-utils";



// const myData = filterData(data.data as Bond[])



export function SecondaryMarket() {

  // const [filters, setFilters] = useState<{[key: string]: string}>({});

  const [filteredData, setData] = useState(data.data as Bond[]);

  const count = filteredData.length;

  // useEffect(() => {
  //   const newData = filterDataWithFilters(filteredData, filters);
  //   setData(newData)
  // }, [filters, setData, filteredData])


  const bondElements = filteredData.length ?
    filteredData.map((item) => <RowBond key={item.loan_id} bond={item}/>) : null;

  return (
    <>
    <h1>Вторичный рынок</h1>
    <Filters setData={setData}/>
    <p> фильтру соответствуют {count} бондов </p>
    <ul>
      <TableHeader/>
      {bondElements}
    </ul>
    </>
  )
}
