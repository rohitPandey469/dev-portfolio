
import { Col } from 'react-bootstrap';
// import museumPaint from '../assets/imgs/museumPaint.png'

export default function ProjectCard({title,data,image,link}) {
  return (
    <>
        <Col sm={6} md={4}>
            <a href={link} className='project-card-hover-text'>
            <div className="project-box" style={{width: window.innerWidth > 768 ? "420px" : "335px", height:"335px", position: "relative", overflow: "hidden"}}>
                <img src={image} alt="hello" style={{width : "100%", height : "100%", objectFit: "cover", transformOrigin: "top"}}/>
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
