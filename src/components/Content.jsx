
import {  FaTrashAlt } from "react-icons/fa";


const Content = ({items,setItems}) => {

  
  
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  const handleDelete = (id) => {
    const delitem = items.filter((item) => item.id !== id);
    setItems(delitem);
  };

  

  return (
    <main
      className="col-12 d-flex align-items-center justify-content-center px-5 "
      style={{minHeight:"70vh"}}
    >
      {items.length > 0 ? (
        <ul
          className="col-12 col-md-12 d-flex justify-content-center align-items-start flex-column p-5"
          style={{ backgroundColor: "#bc7fcd" }}
        >
          {items.map((item) => (
            <li
              key={item.id}
              className="col-12 d-flex mt-3 justify-content-between align-items-center p-2"
              style={{ backgroundColor: "#fb9ad1" }}
            >
              <div className="col-12 row">
                <input
                  className="col-4 fw-bold"
                  onChange={() => handleCheck(item.id)}
                  type="checkbox"
                  checked={item.checked}
                />

                <label onDoubleClick={()=>handleCheck(item.id)} className="col-6 fw-bold fs-5">
                  {item.checked ? <s>{item.item}</s> : <span>{item.item}</span>}
                </label>

                <button
                  onClick={() => handleDelete(item.id)}
                  className="col-2 border-0 bg-transparent"
                >
                  <FaTrashAlt role="button" tabIndex="0" />
                </button>

              </div>
            </li> 
          ))}
        </ul>
      ) : (
        <h3
          className="col-12 p-3 text-center fs-3"
          style={{ backgroundColor: "#fb9ad1" }}
        >
          Task is empty
        </h3>
      )}

    </main>
  );
};

export default Content;
