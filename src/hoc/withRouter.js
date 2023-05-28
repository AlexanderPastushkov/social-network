import { useParams } from "react-router-dom";

export const withRouter = (OriginalComponent) => {
  let RoutingComponent = (props) => {
    const match = { params: useParams() };
    return <OriginalComponent {...props} match={match} />;
  };
  return RoutingComponent;
};
//========================================================================================================================================================

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => console.log(number + 1)); //example of HOF
