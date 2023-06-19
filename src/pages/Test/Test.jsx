// import React from "react";

import Swal from "sweetalert2";

const Test = () => {
  const alertPop = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <div>
      <button
        onClick={alertPop}
        className="btn-primary absolute top-2/4 left-0"
      >
        Alert
      </button>
    </div>
  );
};

export default Test;
