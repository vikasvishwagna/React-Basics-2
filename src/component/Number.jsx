import { useState } from "react"
//1.States and eventhandler.
function Number(){
  const [value, setValue] = useState(8);

  const increment = ()=>{
    setValue(value+1);
  }
  return(
    <div>
      <p style={ {fontSize:'5rem', margin:'5rem'} }>{value}</p>
      <button style={ {fontSize:'2rem', margin:'5rem'} } onClick={increment}>Increment</button>
    </div>
  );
}

export default Number;