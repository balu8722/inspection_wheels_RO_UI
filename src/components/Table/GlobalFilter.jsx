import React, { useEffect, useState } from "react";
import { useAsyncDebounce } from "react-table";
import "./commontable.scss";

// export const GlobalFilter = ({ filter, setFilter }) => {
//   const [value, setValue] = useState(filter);

//   const onChange = useAsyncDebounce((value) => {
//     setFilter(value || undefined);
//   }, 200);

//   useEffect(() => {
//     setValue(filter || '')
//     // onChange(value)
//   }, [filter])

//   const deleteText = () => {
//     setFilter("");
//     setValue("");
//     // console.log("clicked!!!");
//   };

//   return (
//     <div className="position-relative searchDiv">
//       <input
//         autoComplete="off"
//         className="searchInput"
//         type="text"
//         id="search"
//         name="search"
//         value={value || ""}
//         placeholder="Search"
//         onChange={(e) => {
//           setValue(e.target.value);
//           onChange(e.target.value);
//         }}
//       />
//     </div>
//   );
// };

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <input
      value={filter || ''}
      onChange={(e) => setFilter(e.target.value)}
      placeholder="Search..."
      style={{
        // marginBottom: 10,
        padding: '6px 10px',
        width: '100%',
        maxWidth: 300,
        borderRadius: 4,
        border: '1px solid #ccc',
      }}
    />
  );
};
