import React from 'react'
import './skills.css'

interface Skels {
    title: string,
    percentage: string
}


const frontendSkills: Array<Skels> = [
    {
        title: "Javascript",
        percentage: '95%'
    },
    {
        title: "React",
        percentage: '87%'
    },
    {
        title: "TypeScript",
        percentage: '71%'
    },
    {
        title: "Redux",
        percentage: '73%'
    }
]

const backendSkills: Array<Skels> = [
    {
        title: "Node.js",
        percentage: '45%'
    },
    {
        title: "Express.js",
        percentage: '23%'
    },
    {
        title: "MongoDB",
        percentage: '26%'
    },
    {
        title: "Socket.io",
        percentage: '19%'
    }
]

const Skills:React.FC = () => {
  return (
    <div className="skills__wrapper d-flex gap-5">
        <div className="frontend__skill w-50">
            {
                frontendSkills.map((item, index) => (
                    <SkillItem key={index} title={item.title} percentage={item.percentage}/>
                ))
            }
        </div>
        <div className="backend__skill w-50">
            {
                backendSkills.map((item, index) => (
                    <SkillItem key={index} title={item.title} percentage={item.percentage}/>
                ))
            }
        </div>
    </div>
  )
}

const SkillItem:React.FC<Skels> = ({title, percentage}) => {
    return (
        <div className="skill_data mb-3">
                        <div className="skill__title">
                            <h6>{title}</h6>
                            <span>{percentage}</span>
                        </div>
                        <div className="skill__bar">
                            <span className="skill__bar-percentage" style={{width: `${percentage}`}}></span>
                        </div>
                    </div>
    )
}

export default Skills