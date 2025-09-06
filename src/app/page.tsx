import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import GuildsSection from "@/components/GuildsSection";
import EventsSection from "@/components/EventsSection";
import PartnersSection from "@/components/SponsorsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import CoreMembersSection from "@/components/CoreMembersSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import GallerySection from "@/components/GallerySection";
import FooterJoinContact from "@/components/FooterJoinContact";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="w-full">
        <section id="home" className="scroll-mt-16">
          <HeroBanner />
        </section>
        
        <div className="container mx-auto px-6 max-w-7xl">
          <section id="guilds" className="scroll-mt-16 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold mb-4">Guilds Directory</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover and join communities that match your interests and skills
              </p>
            </div>
            <GuildsSection />
          </section>
          
          <div className="w-full h-px bg-border my-16" />
          
          {/* <section id="events" className="scroll-mt-16 py-16">
            <EventsSection />
          </section> */}
          
          <div className="w-full h-px bg-border my-16" />
          
          <section id="partners" className="scroll-mt-16 py-16">
            <PartnersSection />
          </section>
          
          <div className="w-full h-px bg-border my-16" />
          
{/*           <section id="testimonials" className="scroll-mt-16">
            <TestimonialsSection />
          </section> */}
          
          <div className="w-full h-px bg-border my-16" />
          
          <section id="members" className="scroll-mt-16 py-16">
            <CoreMembersSection />
          </section>
          
          <div className="w-full h-px bg-border my-16" />
          
          <section id="projects" className="scroll-mt-16">
            <ProjectsSection />
          </section>
          
          <div className="w-full h-px bg-border my-16" />
          
          <section id="gallery" className="scroll-mt-16 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold mb-4">Gallery</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore moments captured from our events, workshops, and community gatherings
              </p>
            </div>
            <GallerySection />
          </section>
        </div>
      </main>
      
      <FooterJoinContact />
    </div>
  );
}
