import React from "react";
import { Breadcrumbs } from "react-breadcrumbs";

function Breadcrumb() {
  const breadcrumbData = [
    { name: "Home", link: "/" },
    { name: "Shopping Page", link: "/shoppingpage" },
    { name: "Subcategory", link: "/category/subcategory" },
    { name: "Current Page" },
  ];

  return (
    <div>
      <Breadcrumbs
        data={breadcrumbData}
        separator={<i className="fa fa-angle-right mx-2"></i>}
      />
      <h1>Current Page</h1>
      <p>Some content here...</p>
    </div>
  );
}

export default Breadcrumb;
