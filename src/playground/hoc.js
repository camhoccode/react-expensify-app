// import { info } from "node-sass";
import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>haha, {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>this is private info, dont share</p>}
      <WrappedComponent {...props} />
    </div>
  );
};
//requireAuthentication
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthencited ? (
        <WrappedComponent {...props} />
      ) : (
        <p>please login to view info</p>
      )}
    </div>
  );
};
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);
// ReactDOM.render(<Info info='this is the props info'/>, document.getElementById('app'))
createRoot(document.getElementById("app")).render(
  <AuthInfo isAuthencited={true} info="this is the props info" />,
);
