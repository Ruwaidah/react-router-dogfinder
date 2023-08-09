import { Link } from "react-router-dom";
import data from "../data";
import "./DogList.css"

const DogList = (props) => {
  return (
    <div className="DogList">
      {data.dogs.map((dog) => (
        <Link
          key={dog.name}
          onClick={() => props.setDog(dog)}
          to={`/dogs/${dog.name}`}
        >
          {dog.name}
        </Link>
      ))}
    </div>
  );
};

export default DogList;
