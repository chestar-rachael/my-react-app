import photo from './assets/photo-grid.jpg'

export default function Component() {
  return (
    <section className='grid'>
      <img src={photo} className="photo-grid" />
      <h2 className='photo-header'>Online Experiences</h2>
      <p className='photo-text'>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
    </section>
  )
}