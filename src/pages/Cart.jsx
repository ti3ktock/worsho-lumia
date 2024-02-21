import { useContext } from "react";
import { GlobalContext } from "../components/GlobalContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { value } = useContext(GlobalContext)
  return <main>
    <p>{value}</p>
    <Link to="/" ><p>Home</p></Link>
  </main>
}