import React from "react";
import  ReactDOM  from "react-dom/client";

const myfirstelement=<h1>hello world. This is my first react element.</h1>;
// we have to create the root

const myArray=['orange','banana','appl']; 
      
const mylist=myArray.map(item=><p>{item}</p>)

const root =ReactDOM.createRoot(document.getElementById("root"))

root.render(

<React.StrictMode>
  {mylist}
  </React.StrictMode>

)
