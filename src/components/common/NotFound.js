import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <p>Click to route to "/oops" which isn't a registered route:</p>
      <Link to="/">Let's go</Link>
    </div>
  );
}

export default NotFound;
