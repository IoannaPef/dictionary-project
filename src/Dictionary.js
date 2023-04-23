import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [results, setResults] = useState(null);

  function handleResponse(response){
    console.log(response.data);
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
   
    let apiKey = "1f5fdcf1ceb4ff37fcotf403ad4e9bc8";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleChange} />
      </form>
      <Results results={results} />
    </div>
  );
}
