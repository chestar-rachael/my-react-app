import CardPic from './assets/rechy.jpeg'
import TravelPic from './assets/travel.jpeg'
import MedicPic from './assets/medic.jpeg'
import Star from './assets/star.png'
export default function Card(){
  return(
    <div className='card-components'>
    <div className="card">
      <img src={CardPic} className='card-pic'/>
      <div className="card-stats" >
        <img src={Star} className='card-star' />
        <span className='gray'>5.0</span>
        <span className='gray'>(6)</span>
        <span className='gray'>USA</span>
      </div>
      <p>Lifelessons with Rachael Rachael</p>
      <p><span className='bold'>From $136 per person</span></p>
    </div>
    <div className="card">
      <img src={TravelPic} className='card-pic'/>
      <div className="card-stats" >
        <img src={Star} className='card-star' />
        <span className='gray'>5.0</span>
        <span className='gray'>(7)</span>
        <span className='gray'>SINGAPORE</span>
      </div>
      <p>Travel guide lessons with Mark Mayin</p>
      <p><span className='bold'>From $136 per person</span></p>
    </div>
    <div className="card">
      <img src={MedicPic} className='card-pic'/>
      <div className="card-stats" >
        <img src={Star} className='card-star' />
        <span className='gray'>5.0</span>
        <span className='gray'>(7)</span>
        <span className='gray'>SINGAPORE</span>
      </div>
      <p>Travel guide lessons with Mark Mayin</p>
      <p><span className='bold'>From $136 per person</span></p>
    </div>
    </div>
  )
}