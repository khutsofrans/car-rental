import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BookCar from '../components/BookCar';
import PlanTrip from '../components/PlanTrip';
import PickCar from '@/components/PickCar';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <BookCar/>
      <PlanTrip/>
      <PickCar/>
    </div>
  )
}
