import Card from './components/Card'
import Footer from './components/Footer'

import './styles/index.css'

export default function App() {
  return (
    <div className="lg:flex lg:items-center lg:justify-center h-screen flex-col">
      <Card />
      <Footer />
    </div>
  )
}


