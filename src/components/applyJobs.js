import React, { Component } from 'react';

export default class ApplyJobs extends Component{

  componentDidMount(){
  }

  render(){
    const viewjobList = this.props.simpleReducer.viewjobList;
    let listHTML = null;
    listHTML = viewjobList.map((job, index)=>{
      return(
        <div style={{border:'1px solid blue'}}>
          <div style={{width:'60%', display:'inline', padding:'5px', float:'left', borderLeft:'1px solid blue', borderBottom:'1px solid blue', height: '200px'}}>
            <div><span>Job Id</span>|<span>{job.jobId}</span></div>
            <div>
              <p><b>Job Description</b> : {job.jobDesc}</p>
              <p>SKILLS</p>
              <ul>
              {job.jobSkills.map((skill,index)=><li style={{display:'inline-block', float:'left'}}><div style={{border:'2px solid black', padding:'5px', margin:'5px', cursor: 'pointer'}}>{skill}</div></li>)}
                </ul>
              <div style={{display:'block', clear:'both'}}>
                <p>Job Location : {job.jobLocation}</p>
              </div>
            </div>
          </div>
          <div style={{width:'36.6%', display:'inline', padding:'5px', float:'left', borderRight:'1px solid blue', borderBottom:'1px solid blue', height: '200px'}}>
            <div style={{marginTop:'20px'}}><button>Apply</button></div>
              <div><p>INTERVIEWDATE: {job.interviewDate}</p></div>
          </div>
        </div>
      );
    })
    return <div style={{width:'50%', margin:'auto'}}>
    {listHTML}
    </div>;
  }
}
