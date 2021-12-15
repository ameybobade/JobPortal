import React from 'react'
import JobList from './JobList.js';


export default function Datatable({data,handleApply,isOpenForm}) {
    const handleApplication = (jid) =>
    {
        handleApply(jid);
    }
    const renderJobs = data.map(job => {
        return (
            <>
                
                <JobList key={job.jid} job={job} handleApplication={handleApplication} isOpenForm={isOpenForm}/>
                
            </>
        )
    })
    return (
        <div  className="table-responsive">
            <table  className="table table-bordered table-striped table-hover">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Company's Website</th>
                        <th>Job Description</th>
                        <th>Primary Skills</th>
                        <th>Additional Skills</th>
                        <th>Experience</th>
                        <th>Salary</th>
                        <th>Openings</th>
                        <th>Role Start</th>
                        <th>Apply here</th>
                    </tr>
                </thead>
                <tbody>
                    {renderJobs}
                </tbody>
            </table>
        </div>
    )
}
