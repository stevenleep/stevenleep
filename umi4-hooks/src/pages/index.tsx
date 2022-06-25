import { useState } from "react";

let count = 0;
export default function HomePage() {
  const [list, setList] = useState([]);
  const handleAddClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setList(list.concat(<button key={count}>{count++}</button>));
  };

  return (
    <div>
      Hello Umi Hook
      <h2>Render List</h2>
      <button onClick={handleAddClick}>Add</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <button>{count++}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
