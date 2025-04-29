import React, { useEffect, useState } from "react";
import { useAsyncDebounce } from "react-table";
import "./commontable.scss";

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <input
      value={filter || ''}
      onChange={(e) => setFilter(e.target.value)}
      placeholder="Search..."
      className="search_style"
    />
  );
};
