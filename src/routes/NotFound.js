import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h3>Page not found</h3>
      <Link to="/">Go to Home page</Link>
    </>
  );
};

export default NotFound;