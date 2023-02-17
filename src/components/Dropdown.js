import React, { useState } from "react";

// Destructuring the props
function Dropdown({ options }) {
  // State that shows the selected options
  const [selected, setSelected] = useState("");
  // State to display and hide the dropdown
  const [display, setDisplay] = useState(false);

  // Function to change the options of dropdown
  const showSelectedOption = (e) => {
    // setting the state equivalent to the selected item by user
    setSelected(e.target.innerText);
    // After the item is selected then we hide the dropdown menu
    setDisplay(false);
  };

  // menuItems variable contain the list of items within li tag and also with appropriate click handler
  let menuItems = options.map((item) => {
    return <li onClick={showSelectedOption}>{item}</li>;
  });

  return (
    <div className="dropdown">
      {/* Dropdown box */}
      {/* on mouse hover It sets the display property true */}
      <div onMouseEnter={() => setDisplay(true)} className="dropdown-menu">
        <span>Select the Course</span>
        <i className="fa-solid fa-caret-down"></i>
      </div>

      {/* Dropdown list is shown when user hovers the dropdown */}
      {display ? <ul className="menu-items">{menuItems}</ul> : ""}

      {/* To display the selected course */}
      {selected !== "" ? (
        <h3 className="select-option">Selected Course : {selected}</h3>
      ) : (
        ""
      )}
    </div>
  );
}

export default Dropdown;
