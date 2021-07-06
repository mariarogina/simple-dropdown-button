import React from "react";
import { uuid } from "uuidv4";

export default function Dropdownitems({
  items,
  selection,
  setSelection,
  selected,
  handleClick,
}) {
  let clazz;
  return (
    <div style={{ position: "absolute" }}>
      <ul style={{ paddingLeft: "0" }} className="dd-list">
        {items.map((item) => {
          function handleOnClick() {
            setSelection(item);
          }

          const active = selection === item;

          const clazz = active ? "btn-info" : "btn-outline-secondary";

          return (
            <li className="dd-list-item" onClick={handleOnClick}>
              <button
                type="button"
                value={item}
                style={{ width: "150px" }}
                className={`btn ${clazz}`}
              >
                <span>{item}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
