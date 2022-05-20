import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router";

const Search = () => {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const keyword = e.currentTarget.keyword.value.trim();
    navigate(`/results?keyword=${keyword}`);
    e.currentTarget.keyword.value = "";
  };
  
  return (
    <form className="form-search p-1" onSubmit={submitHandler}>
      <input className="search-bar" type="text" placeholder="Buscar..." name="keyword"></input>
      <button className="search-button p-2">
        <AiOutlineSearch />
      </button>
    </form>
  );
};

export default Search;
