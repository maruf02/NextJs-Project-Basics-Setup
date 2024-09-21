import React from "react";

const dynamicPage = ({ params, searchParams }) => {
  return (
    <div>
      dynamicPage: {params.about}
      {searchParams.sdf}
    </div>
  );
};

export default dynamicPage;
