import { useState } from 'react'
import './work.scss'

export default function Works() {

  const [currentSlide , setCurrentSlide ] = useState(0)

  const data = [
    {
      id: 1,
      icon: "./assets/lemendo.svg",
      title: "Web Design",
      desc: "Hi there we are going to something great",
      img: "/assets/nest.png"
    },
    {
      id: 2,
      icon: "./assets/lemendo.svg",
      title: "Mobile app",
      desc: "Hi there we are going to something great",
      img: "/assets/firebase.png"
    },
    {
      id: 3,
      icon: "./assets/lemendo.svg",
      title: "UX Design",
      desc: "Hi there we are going to something great",
      img: "/assets/js.png"
    }
  ]

  const handleClick = (way) => {
    way === 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : data.length -1) :
    setCurrentSlide(currentSlide < data.length -1 ? currentSlide +1 : 0)
    console.log(currentSlide);
  };

  return (
    <div className='works' id='works'>
      <div 
        className="slider"
        style={{transform: `translateX(${ currentSlide * 100}vw)`}} >
        {data.map(d => (<div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.icon } alt="" />
                </div>
                <h2> { d.title } </h2>
                <p> { d.desc } </p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src= { d.img } alt="" />
            </div>
          </div>
        </div>))}
      </div>
      <img src="assets/down.svg" className='arrow left' alt="" onClick={() => handleClick('left')} />
      <img src="assets/down.svg" className='arrow right' alt="" onClick={() => handleClick()} />
    </div>
  )
}
 