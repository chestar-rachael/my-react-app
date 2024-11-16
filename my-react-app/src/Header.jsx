import airbnb from './assets/airbnb-logo.png'

function Header(){
  return(
    <div>
      <nav className = "navbar">
        <img src= {airbnb} width = "40px" className='nav-log'/>
        <ul className='list-items'>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Service</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
};

export default Header