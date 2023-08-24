import React, { useEffect } from "react";

const Home = ()=>{

    useEffect(()=>{
     document.title="Home"
    },[])
    return <div className="text-center">
       <h1> Home Page</h1>

    </div>
};

export default Home;