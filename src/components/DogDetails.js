import { useParams } from "react-router-dom";
import NotFound from "./NotFound";

const DogDetails = (props) => {
  const params = useParams();
  console.log(params, props.dog);
  if (!props.dog) return <NotFound />;
  return (
    <div>
      <div>
        <p>Name:</p> <p>{props.dog.name}</p>
      </div>
      <div>
        <p>Age:</p> <p>{props.dog.age}</p>
      </div>
      <div>
        <p>Facts:</p>{" "}
        <div>
          {props.dog.facts.map((fact) => (
            <p>{fact}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DogDetails;
