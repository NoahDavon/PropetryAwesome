import Image from "next/image";
import CompoundCard from "./components/CompoundCard";

export default function Home() {
  return (
    <CompoundCard property={{Name: "Sodic East", ID: 1, Lat:0, Long: 0, "Price (Villa)": 1000, "Price/Meter": 10, Description: ""}}/>
    
  );
}
