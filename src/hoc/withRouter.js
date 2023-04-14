import { useParams } from "react-router-dom";

export function withRouter(Component) {
  return (props) => {
    const match = { params: useParams() };
    return <Component {...props} match={match} />;
  };
} // we create our HOC instead of withrouter from react-router-dom

const withRouter = (props) => {
  return;
};
