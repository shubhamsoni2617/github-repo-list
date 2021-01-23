import React, { memo, useEffect, useState } from "react";
import useDebounce from "../../custom-hook/useDebounce";

const Input = ({ dispatch = () => {} }) => {
  const [input, setInput] = useState("");
  const debouncedSearchTerm = useDebounce(input, 400);

  useEffect(() => {
    dispatch({
      type: "SEARCH",
      payload: debouncedSearchTerm,
    });
  }, [debouncedSearchTerm, dispatch]);

  return (
    <input
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Search by repository name"
    />
  );
};

export default memo(Input);
