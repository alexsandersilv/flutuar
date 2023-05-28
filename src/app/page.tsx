import { Header } from '@/components/Header';
import { Banner } from '@/components/Banner';
import { Services } from '@/components/Services';
import { AboutUs } from '@/components/AboutUs';
import { PopularDestinations } from '@/components/PopularDestinations';
import { Packages } from '@/components/Packages';
import { Steps } from '@/components/Steps';
import { SignIn } from '@/components/SignIn';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />

        <div className="absolute top-full bottom-4 left-0 right-0">
          <Services />
          <AboutUs />
          <PopularDestinations />
          <Packages />
          <Steps />
          <SignIn />
          <Footer />
        </div>
      </main>
    </>
  )
}
