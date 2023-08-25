import './App.css'
import Testimonials from './components/Testimonials'


export default function App() {
  return (
    <> 
      <div className="App">
        <div className="container-principal">
          <h1>MENTHA</h1>
          <Testimonials 
            name="Daniela Espitia"
            country="Bogotá"
            cargo="Endodoncist"
            image="emma.png"
            company="Mentha"
            testimonial="I'm going to bring you the most comfortable experience"
          />
          <Testimonials 
            name="Shawn Valderrama"
            country="Medellín"
            cargo="Ortodoncist"
            image="shawn.png"
            company="Odontofamily"
            testimonial="I'm going to bring you the most comfortable experience"
          />
          <Testimonials 
            name="Sarah Díaz"
            country="Bogotá"
            cargo="Endodoncist"
            image="sarah.png"
            company="Citydent"
            testimonial="I'm going to bring you the most comfortable experience"
          />
        </div>
      </div>
    </>
  )
}