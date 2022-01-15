import React from 'react'
import resume from "../Assets/Resume.png"
const Resume = () => {
    return (
        <div className='resume mt-5'>
            <img className='mt-5' src={resume} alt="Resume" /><br/>
            <a href="https://drive.google.com/file/d/14oAMMiPNR807hPwi527D-EDPZUzhF-04/view?usp=sharing" target='_blank' rel='noreferrer' className='btn btn-primary mt-5 btn-lg'>Download</a>
            
        </div>
    )
}

export default Resume
