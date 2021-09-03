import React, { useState }from "react";
const axios = require('axios').default;

function APICall(){

const [quote, setQuote] = useState("");
    
function quoteCall(){
axios.get("https://api.kanye.rest")
.then((response)=>{
    setQuote(response.data.quote)
}
    )
.catch(()=> {
    setQuote("Unable to Connect to API")
}
);
}



return(<div>
<h1>Quotes from Kanye West</h1>
<p>{quote}</p>
<button onClick={quoteCall}>Click for New Quote</button>
</div>)


}





export default APICall;