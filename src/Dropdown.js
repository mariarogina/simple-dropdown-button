import React, { useState } from "react";
import Dropdownitems from "./Dropdownitems";

function Dropdown({ title, items }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState("");

  const toggle = () => setOpen(!open);

  return (
    <div className="dd-wrapper" style={{ position: "relative" }}>
      <div
        className="dd-header"
        style={{ height: "500px", width: "500px" }}
        role="button"
      >
        <button
          className="btn btn-outline-success"
          onClick={toggle}
          style={{ width: "150px", height: "50px" }}
        >
          {title}
        </button>

        {open && (
          <Dropdownitems
            items={items}
            selection={selection}
            setSelection={setSelection}
          />
        )}
      </div>
    </div>
  );
}

export default Dropdown;
