import { useRef, FormEventHandler, SetStateAction, Dispatch } from "react"
import styled from "styled-components"
import { Bond } from "../../types/types"
import { filterDataWithFilters } from "../../utils/filter-utils"
import { data } from "../../data/all-second"



export const FormFilter = styled.form`
display: flex;
/* justify-content: space-between; */
`
type FiltersProps = {
  setData: Dispatch<SetStateAction<Bond[]>>
}
export function Filters({setData}: FiltersProps) {

  const ref = useRef<HTMLFormElement>(null);

  const handleSubmit: FormEventHandler = (evt) => {
    evt.preventDefault();

    if (ref.current) {
      const formData = new FormData(ref.current);
      const filters = Object.fromEntries(formData) as {[k: string]: string}
      const filteredData = filterDataWithFilters(data.data as Bond[], filters)
      setData(filteredData)
    }
  }
  return (
    <FormFilter ref={ref} onSubmit={handleSubmit}>
      <fieldset>
        <legend>эффективная ставка</legend>
        <input type="number" min={0.01} max={1} step={0.001} name="effective_min" placeholder="минимальная"/>
        <input type="number" min={0.01} max={1} step={0.001} name="effective_max" placeholder="максимальная"/>
      </fieldset>
      <fieldset>
        <legend>Остаток долга в портфеле</legend>
        <input type="number" min={0}  step={10} name="debt_max" />
      </fieldset>
      <fieldset>
        <legend>Текущая Цена</legend>
        <input type="number" min={0.9} max={1.1} step={0.01} name="current_price_min" placeholder="минимальная"/>
        <input type="number" min={0.9} max={1.1} step={0.01} name="current_price_max" placeholder="максимальная"/>
      </fieldset>
      <fieldset>
        <legend>Статус</legend>
        <input type="number" min={0} max={1} step={0.01} name="progress_min" placeholder="минимальная"/>
        <input type="number" min={0} max={1} step={0.01} name="progress_max" placeholder="максимальная"/>
      </fieldset>
      <button type="submit">Применить</button>


    </FormFilter>
  )
}
