import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Intelligence from '@/components/Intelligence'
import Schulung from '@/components/Schulung'
import Footer from '@/components/Footer'
import Beratung from '@/components/Beratung'
import Workflows from '@/components/Workflows'


export default function Home() {
  return (
    <main>
        <Navbar />
        <Hero />
        <Intelligence />
        <Schulung />
        <Beratung />
        <Workflows />
        <Footer />
    </main>
  )
}