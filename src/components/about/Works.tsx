import React from 'react'
import './works.css'

interface Props {
  years: string,
  text: string
}

const listWorks = [
  {
    years: 'Feb,2019-Mar,2019',
    text: "Freelance: Fixed some bugs and made adaptive design"
  },
  {
    years: 'Mar,2019-Jul,2019',
    text: "Freelance: Made ~5 web sites(HtmL/Sass)"
  },
  {
    years: 'Jul,2019-Jan,2020',
    text: "Freelance: Made ~8 web sites(HtmL/Sass)"
  },
  {
    years: 'Jan,2020-Jun,2020',
    text: "Freelance: Made webSites and put them on WordPress"
  },
  {
    years: 'Jun,2020-Jan,2021',
    text: "Freelance: Made ~17 little web sites(HtmL/Sass/React)"
  },
  {
    years: 'Feb,2021-Apr,2021',
    text: "Worked in a small company on KanBan metodology"
  },
]

const Works: React.FC = () => {
  return (
    <div className="work__container d-flex align-items-center flex-wrap">
      {listWorks.map((item, index) => (
        <WorkItem key={index} years={item.years} text={item.text}/>
      ))}
    </div>
  )
}

const WorkItem:React.FC<Props> = ({years, text}) => {
  return (
    <div className="single__work">
            <div className="work__year">{years}</div>
            <h6 className="work__title">{text}</h6>
        </div>
  )
}

export default Works