import React from "react";

const Contents = ({ children, id }) => {
  return <main id={`${id}__page`}>{children}</main>;
};

export default Contents;