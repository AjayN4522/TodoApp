import React from "react";

const Footer = ({items,setItems}) => {
  const year = new Date();

  return(
    <footer className="col-12 d-flex justify-content-around p-2 bg-dark text-white col-12 fixed-bottom"> 
        <h4> copyright &copy; {year.getFullYear()} </h4>
        <h4 className="text-white" >{items.length} {items.length > 1 ? "items":"item"} </h4>
    </footer>
  );
};

export default Footer;
