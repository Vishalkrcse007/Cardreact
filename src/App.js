import logo from './logo.svg';
import './App.css';
import Filter from "./components/Filter"
import Navbar from "./components/Navbar"
import Cards from "./components/Cards"
import {apiUrl,filterData} from "./data";
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Spinner from "./components/Spinner"

const App=()=>{

    const[courses,setCourses]=useState(null);
    const[loading,setLoading]=useState(true);

    async function fetchdata(){
        setLoading(true);
        try{
            let response= await fetch(apiUrl);
            let output=await response.json();
            setCourses(output);
        }
        catch(error)
        {
            toast.error("Network issuee hai");
        }
        setLoading(false);
    }
     useEffect(()=>{
        fetchdata();
     },[]);

    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div>
                <Filter filterData={filterData}/>
            </div>
            <div>
                {
                    loading ? (<Spinner/>) :(<Cards/>)
                }
            </div>
        </div>
    )
};
        
        
        

export default App;
