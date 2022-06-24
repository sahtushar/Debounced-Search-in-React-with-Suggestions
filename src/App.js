import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [str, setStr] = useState("");
  const [results, setresults] = useState([]);

  let suggestions = [
    {
      text: "aliqua nostrud sunt eu consequat"
    },
    {
      text: "aute dolor est ullamco quis in"
    },
    {
      text: "incididunt laborum incididunt magna nisi"
    },
    {
      text: "cupidatat aliqua sint reprehenderit sit"
    },
    {
      text: "laboris aliquip qui quis irure"
    },
    {
      text: "eiusmod ut aliqua esse cillum"
    },
    {
      text: "fugiat sint anim dolore Lorem"
    }
  ];

  function debounce(fun, delay) {
    let timer;
    let context = this;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fun.apply(context, args);
      }, delay);
    };
  }

  useEffect(() => {
    let newresults = [];
    console.log("here");
    if (str) {
      suggestions.filter((item) => {
        if (item.text.toLowerCase().includes(str.toLowerCase())) {
          newresults.push(item);
        }
      });
      setresults(newresults);
    }
    if (str === "") {
      setresults([]);
    }
  }, [str]);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search here"
        onChange={(e) => {
          debounce(() => {
            setStr(e.target.value);
          }, 2000)();
        }}
      />
      <p style={{ fontSize: "12px" }}>
        *Enter terms like <strong>quis, Lorem</strong>, etc to test
      </p>
      <p style={{ fontSize: "12px" }}>
        *Results will be shown with a delay of 2000 as search is debounced
      </p>
      {results?.map((item) => {
        return <div style={{ marginTop: "10px" }}>{item.text}</div>;
      })}
    </div>
  );
}
