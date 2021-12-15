import React,{useState, useEffect} from 'react'
import Datatable from './Datatable.js';
import axios from 'axios'
import ApplicationForm from './ApplicationForm.js'
import Login from './Login.js';
import { browserHistory } from 'react-router-dom';
export default function JobSearch({isLoggedIn,LoggedIn,appliedJid,setappliedJid,applicationForm,setApplicationForm}) {

    const [data,setData] = useState([])
    const [q,setQ] = useState("")

    useEffect(() => {
        axios.get("https://job-portalbackend.herokuapp.com/")
        .then((response) => {const result = response.data;
            console.log(result);
            setData(result)},
        (error) => {
            console.log(error);
        })
    },[])

    function search(rows)
    {
        return rows.filter((row) => row.employer_name.toLocaleLowerCase().indexOf(q.toLocaleLowerCase()) > -1 || row.primary_skill.toLocaleLowerCase().indexOf(q.toLocaleLowerCase()) > -1 );

        // if(q!="")
        // {
        //     rows.filter((row) => console.log(typeof row.employer_name));
            
        // }
        // else
        // {
        //     return rows;
        // }
    }

    function handleApply(jid)
    {
        setappliedJid(jid);
    }
    const isOpenForm = () =>
    {
        setApplicationForm(!applicationForm)
    }
    
    const handleForm = () =>
    {
        if(applicationForm)
        {
            if(LoggedIn)
            {
                return (
                    <div>
                        <ApplicationForm data={data} appliedJid={appliedJid} isOpenForm={isOpenForm}/>
                    </div>
                )
            }
            else
            {
                return (
                    <Login isLoggedIn={isLoggedIn}/>
                )
            }
            
        }
        else
        {
            return (
                <>
                    <div  className="input-group flex-nowrap mb-3 mt-3">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Search</span>
                        <input type="text" className="form-control" value={q} placeholder="Search by Company name or Skills" onChange={(e) => setQ(e.target.value)}/>
                    </div>
                    <Datatable data={search(data)} handleApply={handleApply} isOpenForm={isOpenForm}/>
                </>
            );
        }
    }
    return (
        <div className="container">
            
            {handleForm()}
            
        </div>
    )
}
