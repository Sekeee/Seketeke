import './intro.scss'
import { init } from 'ityped'
import { useEffect , useRef } from 'react'

export default function Intro() {

  const textRef = useRef();

  useEffect(() => {
      init(textRef.current, {
        showCursor: false,
        backDelay: 1500,
        strings: ["Social media platform"],
      });
  } , [])

  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="assets/lemendo.svg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h1>WHO WE ARE ?</h1>
          <p><strong>Lemendo</strong> digital branding agency. We help you tell your brand story in a compelling way,
           so that you can generate more sales and revenue digitally. We authenticate your brand with a distinct voice 
           and feel to separate you from your competitors on <span ref={textRef}></span> </p>
          <a href="#portfolio">
            <img src="assets/down.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}
