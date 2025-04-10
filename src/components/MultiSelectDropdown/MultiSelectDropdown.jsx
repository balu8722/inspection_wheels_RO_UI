import React from "react";
import Select, { components } from "react-select";
import PropTypes from "prop-types";

const MultiSelectDropdown = ({
  options,
  value,
  onChange,
  placeholder,
  isMulti = true,
  isSearchable = true,
  closeMenuOnSelect = false,
  showControls = true,
}) => {
  // Custom MenuList to include buttons inside the dropdown
  const CustomMenuList = (props) => {
    const selectAllHandler = () => {
      onChange(options);
    };

    const clearAllHandler = () => {
      onChange([]);
    };

    return (
      <components.MenuList {...props}>
        {showControls && (
          <div className="px-2 py-1 border-bottom d-flex gap-2 justify-content-end">
            <button
              className="btn btn-sm btn-outline-primary"
              type="button"
              onClick={selectAllHandler}
            >
              Select All
            </button>
            <button
              className="btn btn-sm btn-outline-secondary"
              type="button"
              onClick={clearAllHandler}
            >
              Deselect All
            </button>
          </div>
        )}
        {props.children}
      </components.MenuList>
    );
  };

  return (
    <Select
      options={options}
      value={value}
      onChange={onChange}
      isMulti={isMulti}
      isSearchable={isSearchable}
      closeMenuOnSelect={closeMenuOnSelect}
      placeholder={placeholder}
      components={{ MenuList: CustomMenuList }}
    />
  );
};

MultiSelectDropdown.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  isMulti: PropTypes.bool,
  isSearchable: PropTypes.bool,
  closeMenuOnSelect: PropTypes.bool,
  showControls: PropTypes.bool,
};

export default MultiSelectDropdown;
