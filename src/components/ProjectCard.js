
import React from 'react'
import { Col } from 'react-bootstrap';
// import museumPaint from '../assets/imgs/museumPaint.png'

export default function ProjectCard({title,data,image,link}) {
  return (
    <>
        <Col sm={6} md={4}>
            <a href={link} className='project-card-hover-text'>
            <div className="project-box">
                <img src={image} alt="hello" width={355} height={355} className='project-box-img'/>
                <div className="text">
                    <h4>{title}</h4>
                    <span>{data}</span>
                </div>
            </div>
            </a>
        </Col>
    </>
  )
}
