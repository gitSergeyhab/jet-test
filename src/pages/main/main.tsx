import { Link } from "react-router-dom";
import axios from "axios";
import { AppRoute } from "../../app";

export function Main() {


  const handleClick = async() => {
    const {data} = await axios.get('../../test/test.php')
    console.log({data})
  }
  return (
    <>
    <h1>Main</h1>
    <button type="button" onClick={handleClick}>BTN</button>
    <Link to={AppRoute.SecondaryMarket}>Secondary</Link>
    </>

  )

}
