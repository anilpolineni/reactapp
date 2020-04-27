import React from 'react';
import './App.css';
import Data from './data/data.json';

class resume extends React.Component{
    render(){
        var indexValue=this.props.location.data.id;
        var specificprofile=Data.profiles[indexValue];
        return(
            // <div>
            //     <h2>{specificprofile.basicInfo.name}</h2>
            // </div>
            <section className="parent">
                <div className="card">
                    <div className="card-top">
                    <h3>{specificprofile.basicInfo.name}</h3>
                    <h3>{specificprofile.basicInfo.email}</h3>
                    </div>
                    <div className="card-bottom">
                    <a href={"mailto:"+specificprofile.basicInfo.email} className="link">{specificprofile.basicInfo.email}  </a><br />
                    <a href={"tel:"+specificprofile.basicInfo.mobileno} className="link">{specificprofile.basicInfo.mobileno}</a>
                    </div>
                </div>
                
                
                <div className="card2">
                    <div className="card-bottom">
                        <h2>CareerObjective</h2>
                    </div>
                    <div className="card-top">
                        <p>{specificprofile.careerobjective.object}</p>
                        </div>
                        
                        
                        <div className="card-bottom">
                            <h2>Education Qualifcation</h2>
                            </div>
                            <div className="card-top">
                                {specificprofile.education.map((i,j)=>(
                                <ul>
                                    <li>{i.degree} {i.university} {i.institute} {i.aggregrate}</li>
                                    </ul>
                                    ))}
                                    </div>
                    <div className="card-bottom">
                        <h2>Skills</h2>
                    </div>
                    <div className="card-top">
                    <ul>
                    <li>{specificprofile.skills.languages}</li>
                    <li>{specificprofile.skills.technicalskills}</li>
                    <li>{specificprofile.skills.weddesign}</li>
                    </ul>
                    </div>
                    <div className="card-bottom">
                        <h2>Personal Strenghts</h2>
                    </div>
                    <div className="card-top">
                    <ul>
                    <li>{specificprofile.personalstrength.attitude}</li>
                    <li>{specificprofile.personalstrength.attitude1}</li>
                    <li>{specificprofile.personalstrength.attitude2}</li>
                    </ul>
                    </div>
                    </div>
            </section>
        )
    }

}
export default resume;