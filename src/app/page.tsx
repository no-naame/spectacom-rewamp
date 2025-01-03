import Image from "next/image"
import Navbar from "@/components/navbar"
import Train from "../../public/trainn.png"
import FeaturesComponent from "@/components/Features";
import {LogoTicker} from "@/components/LogoTicker";
import {Footer} from "@/components/Footer";
export default function Home() {
  return (
      <main className="min-h-screen bg-gradient-to-b from-background to-black">
        <Navbar />
        <section className="container mx-auto px-4 pt-32 lg:pt-40">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-9xl font-bold tracking-tighter text-gradient">
                UNLOCK YOUR
                <br />
                POTENTIAL
              </h1>
            </div>
            <div className="text-right space-y-2">
              <p className="text-2xl text-muted-foreground">Inspiring active, healthy lives through innovative solutions and community.</p>
              <p className="text-3xl font-semibold text-gradient">with Spectacom Global</p>
            </div>
          </div>
        </section>

        <section className="relative h-[800px] mt-16">
          {/*<div className="absolute inset-0 z-10" />*/}
          <Image
              src={Train}
              alt="Person training"
              width={1200}
              height={800}
              className="object-cover w-full h-full brightness-100"
              priority
          />

        </section>

        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <div className="text-center space-y-4">
                <h3 className="text-5xl font-light text-gradient">2 MN+</h3>
                <p className="text-lg text-muted-foreground">
                  Growing community of health enthusiasts transforming their lives
                </p>
              </div>
              <div className="text-center space-y-4">
                <h3 className="text-5xl font-light text-gradient">2000+</h3>
                <p className="text-lg text-muted-foreground">
                  Corporate partners committed to employee wellness
                </p>
              </div>
              <div className="text-center space-y-4">
                <h3 className="text-5xl font-light text-gradient">1000+</h3>
                <p className="text-lg text-muted-foreground">
                  Cities worldwide embracing the future of health tech
                </p>
              </div>
            </div>
          </div>
        </section>
        <FeaturesComponent/>
        <LogoTicker/>
          <Footer/>
      </main>
  )
}

