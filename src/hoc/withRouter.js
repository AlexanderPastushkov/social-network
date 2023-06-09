import { useParams } from "react-router-dom";

export const withRouter = (OriginalComponent) => {
  let RoutingComponent = (props) => {
    const match = { params: useParams() };
    return <OriginalComponent {...props} match={match} />;
  };
  return RoutingComponent;
};
//========================================================================================================================================================
