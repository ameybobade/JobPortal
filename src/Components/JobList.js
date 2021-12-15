import React from 'react'

export default function JobList({job,handleApplication,isOpenForm}) {
    const handleApply = (jid) =>
    {
        handleApplication(jid)
        isOpenForm()
    }
    return (
        <tr>
            <td>{job.employer_name}</td>
            <td>{job.employer_website}</td>
            <td>{job.job_description}</td>
            <td>{job.primary_skill}</td>
            <td>{job.other_skills}</td>
            <td>{job.experience_level}</td>
            <td>{job.target_salary}</td>
            <td>{job.number_of_open_demands}</td>
            <td>{job.role_start_date}</td>
            <td><button  type="button" className="btn btn-primary" onClick={() => handleApply(job.jid)}>Apply</button></td>
        </tr>
    )
}
