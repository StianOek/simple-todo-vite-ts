import React, { ChangeEventHandler, useState } from "react";
import "./App.css";
type listProps = {
  item: { todo: string; id: number };
  isChecked: any;
  handleDelete: Function;
};

const List: React.FC<listProps> = ({ item, isChecked, handleDelete }) => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (checked === false || checked === true) {
      setChecked((prev) => !prev);
      isChecked((prev: any) => !prev);
    }
  };

  return (
    <div key={item.todo} className="todo-list">
      <p>{item.todo}</p>
      {/* <input
        onChange={handleChecked}
        type="checkbox"
        checked={checked}
        name={item.todo}
      /> */}
      <button className="delete-button" onClick={() => handleDelete(item.id)}>
        Delete
      </button>
    </div>
  );
};

export default List;
