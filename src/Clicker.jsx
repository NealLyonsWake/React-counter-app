import React, {useEffect, useState }from "react";

function Clicker(){

const [count, setCount] = useState(0);

useEffect(()=>{
    document.title = `Your counter is now equal to ${count}`
})

function plusClickedMe(){
setCount(count + 1);
}

function minusClickedMe(){
    setCount(count - 1);
}

return(
    <div>
<h1>{count}</h1>
<button onClick={minusClickedMe}>-</button>
<button onClick={plusClickedMe}>+</button>
</div>
)
}

export default Clicker;










