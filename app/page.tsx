import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustedBy from '@/components/Trustedby'
import Intelligence from '@/components/Intellegince'
import Features from '@/components/Features'
import Footer from '@/components/Footer'



export default function Home() {
  return (
    <main>
        <Navbar />
        <Hero />
        <TrustedBy />
        <Intelligence />
        <Features />
        <Footer />
    </main>
  )
}