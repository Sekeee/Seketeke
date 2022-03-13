import './testimonials.scss'

export default function Testimonials() {

  const data = [
    {
      id:2,
      name: "Bataa",
      title: "Graphic Designer",
      img: 'assets/profilepic.gif',
      desc: 'Hello guys id like to introduce myself to yall. I have more than 10 years of experience in this industry',
    },
    {
      id:1,
      name: "Baji",
      title: "CEO of Lemendo",
      img: 'assets/profilepic.gif',
      desc: 'Hello guys id like to introduce myself to yall. I have more than 10 years of experience in this industry',
      featured: true,
    },
    {
      id:1,
      name: "Dorjoo",
      title: "Technical adiviser",
      img: 'assets/profilepic.gif',
      desc: 'Hello guys id like to introduce myself to yall. I have more than 10 years of experience in this industry'
    }
  ]

  return (
    <div className='testimonials' id='testimonials'>
      <h1>OUR TEAM</h1>
      <div className="container">
        {data.map(d => (
             <div className={d.featured ? 'card featured' : 'card'}>
             <div className="top">
     
               <img src={d.img} alt="" className='user'/>
               
             </div>
             <div className="center"> {d.desc} </div>
             <div className="bottom">
               <h3> {d.name} </h3>
               <h4> {d.title} </h4>
             </div>
           </div>
        ))}
     
      </div>
    </div>
  )
}  
