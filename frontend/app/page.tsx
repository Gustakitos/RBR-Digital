import Employee from "./components/Employee";
import WithSubnavigation from "./components/Navbar";

export default function Home() {
  return  (<>
    <WithSubnavigation />
    <Employee />
  </>);
}
