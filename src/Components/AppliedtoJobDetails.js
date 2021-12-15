import React from 'react'


export default function AppliedtoJobDetails({jidDetails}) {
    console.log(jidDetails)
    
    const styleWords={fontWeight: "bold"}

    return (
        <div className="container border border-dark rounded mt-3 mb-3">
            <h3>Job Details</h3>
            <p><span  style={styleWords} className="me-3">Job id : </span>{jidDetails[0].jid}</p>
            <p><span  style={styleWords} className="me-3">Company Name : </span>{jidDetails[0].employer_name}</p>
            <p><span  style={styleWords} className="me-3">Company Description : </span>{jidDetails[0].job_description}</p>
            <p><span  style={styleWords} className="me-3">Primary Skills : </span>{jidDetails[0].primary_skill}</p>
            <p><span  style={styleWords} className="me-3">Additional Skills : </span>{jidDetails[0].other_skills}</p>
            <p><span  style={styleWords} className="me-3">Role Start : </span>{jidDetails[0].role_start_date}</p>
            <p><span  style={styleWords} className="me-3">Salary : </span>{jidDetails[0].target_salary}</p>
        </div>
    )
}
