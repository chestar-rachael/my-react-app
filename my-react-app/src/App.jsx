import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Component from './Component.jsx'
import Card from './Card.jsx'
function App() {
  return(
    <>
    <Header/>
    <Component/>
    <Card
    img = "rechy.svg"
    rating = "5.0"
    reviewCount = "6"
    country = "USA"
    title = "Lifelessons with Rachael Rachael"
    price = "$136"
    />
    <Footer/>
    </>
    
  )
}

export default App
