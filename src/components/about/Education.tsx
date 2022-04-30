import React from 'react'
import './education.css'

const Education: React.FC = () => {
  return (
    <table className="table">
        <thead>
            <tr>
                <th>Level</th>
                <th>Item of learning</th>
                <th>Sources</th>
                <th>Year</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>B2(IELTS 6.5-7.0)</td>
                <td>English</td>
                <td>Internet, Courses, Communication</td>
                <td>2017 - Present</td>
            </tr>
            <tr>
                <td>Jun-Mid</td>
                <td>PSD2HTML</td>
                <td>Internet, Courses</td>
                <td>2018 - Present</td>
            </tr>
            <tr>
                <td>Jun-Mid</td>
                <td>Frontend(React)</td>
                <td>Internet, job, courses</td>
                <td>2018 - Present</td>
            </tr>
        </tbody>
    </table>
  )
}

export default Education