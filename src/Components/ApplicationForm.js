import React,{useRef, useState} from 'react'
import AppliedtoJobDetails from './AppliedtoJobDetails'
// import Email from 'https://smtpjs.com/v3/smtp.js'

export default function ApplicationForm({data,appliedJid,isOpenForm}) {
    const applicantName = useRef()
    const applicantEmail = useRef()
    const applicantMobile = useRef()
    const applicantAddress = useRef()
    const applicantResume = useRef()
    const [genderValue, setgenderValue] = useState("Male")
    const [cityValue, setcityValue] = useState("Pune")

    const handleCityChange = (e) => {
        setcityValue(e.target.value)
    }
    const handleGenderSelect = (e) => {
        setgenderValue(e.target.value);
    };
    const handleReset = (e) => {
        applicantName.current.value = ""
        applicantEmail.current.value = ""
        applicantMobile.current.value = ""
        applicantAddress.current.value = ""
        applicantResume.current.value = ""
        setcityValue("Pune")
        setgenderValue("Male");
    }
    const FilterDataWithJid = () => {
        return data.filter((x)=> x.jid.toString() === appliedJid.toString())
    }
    const handleSubmit = (e) =>
    {
        console.log(appliedJid)
        console.log(genderValue)
        const row = FilterDataWithJid()
        console.log(row[0].employer_email)
        const body = `Name: ${applicantName.current.value}\nEmail id: ${applicantEmail.current.value}\nMobile no.: ${applicantMobile.current.value}\nGender: ${genderValue}\nCurrent City: ${cityValue}\nAddress: ${applicantAddress.current.value}\nResume Link: ${applicantResume.current.value}\n\n\n\nJob id: ${row[0].jid}\n`
        console.log(body)
        
        // let Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

        // Email.send({
        //     Host : "smtp.gmail.com",
        //     Username : "pmacoe.it@gmail.com",
        //     Password : "pun3pm@c03",
        //     To : row[0].employer_email,
        //     From : "pmacoe.it@gmail.com",
        //     Subject : "New Application mail from: " + applicantName.current.value,
        //     Body : body
        //     }).then((message) => {
        //       if (message == "OK") {
        //           console.log("Sent")
        //           alert("Applied Successfully!!")
        //       }
        //       else{
        //           console.log(message)
        //       }
        //     })
        handleReset()
        isOpenForm()
    }

    return (
        <div>
            <button  type="button" className="btn btn-dark"  onClick={isOpenForm}>Back</button>
            <AppliedtoJobDetails jidDetails={FilterDataWithJid()}/>
            <form className="container mt-3">
                <div className="mb-3">
                    <label className="form-label">Name :</label>
                    <input ref={applicantName} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label me-3">Current City :</label>
                    {/* <input type="text" className="form-control" /> */}
                    <select value={cityValue} onChange={handleCityChange} className="btn border border-primary form-control">
                        <option value="Pune">Pune</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Banglore">Banglore</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Nagpur">Nagpur</option>

                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email id :</label>
                    <input ref={applicantEmail} type="email" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Mobile No. :</label>
                    <input ref={applicantMobile} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label me-3">Gender :</label>
                    <input type="radio" className="me-2" name="fav_language" value="Male" checked={genderValue === 'Male'} onChange={handleGenderSelect}/>
                    <label htmlFor="male" className="me-3">Male</label>
                    <input type="radio" className="me-2" name="fav_language" value="Female" checked={genderValue === 'Female'} onChange={handleGenderSelect}/>
                    <label htmlFor="female" className="me-3">Female</label>
                    <input type="radio" className="me-2" name="fav_language" checked={genderValue === 'Not Specified'} value="Not Specified" onChange={handleGenderSelect}/>
                    <label htmlFor="not specified" className="me-3">Not Specified</label>
                </div>
                <div className="mb-3">
                    <label className="form-label">Current Address :</label>
                    <textarea ref={applicantAddress} type="text" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Resume Link :</label>
                    <input ref={applicantResume} type="text" className="form-control" />
                </div>
                
                <button  type="button" className="btn btn-primary me-3" onClick={handleReset}>Reset</button>
                <button type="button" className="btn btn-success" onClick={handleSubmit}>Submit</button>
                </form>
        </div>
    )
}
