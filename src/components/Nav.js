import { Link } from "react-router-dom";
import data from "../data";

const Nav = (props) => {
  return (
    <div>
      {data.dogs.map((dog) => (
        <Link key={dog.name} onClick={() =>props.setDog(dog)} to={`/dogs/${dog.name}`}>{dog.name}</Link>
      ))}
    </div>
  );
};

export default Nav;
