import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ServiceCard } from "@/components/ServiceCard";
import { SocialBar, WhatsAppButton } from "@/components/SocialBar";
import { 
  Plane, 
  MapPin, 
  Calendar, 
  Shield, 
  Star, 
  Clock, 
  Users, 
  Car,
  Phone,
  MessageCircle,
  Instagram
} from "lucide-react";
import heroImage from "@/assets/hero-jackie-medellin.jpg";

const services = [
  {
    title: "Airport Pickup",
    description: "Safe, punctual transfers to/from José María Córdova Airport",
    price: "From $35 USD",
    icon: Plane,
    features: [
      "Flight tracking & monitoring",
      "Meet & greet at arrivals",
      "New 2025 sedan",
      "English & Spanish spoken",
      "Fixed pricing - no surprises"
    ]
  },
  {
    title: "Private City Tours",
    description: "Personalized tours of Medellín's best attractions",
    price: "From $60 USD",
    icon: MapPin,
    features: [
      "Comuna 13 graffiti tour",
      "Guatapé & El Peñón day trip",
      "Coffee farm experiences",
      "Pablo Escobar sites (optional)",
      "Customizable itineraries"
    ]
  },
  {
    title: "Multi-Day Chauffeur",
    description: "Full-day or multi-day personal driver service",
    price: "From $150 USD/day",
    icon: Calendar,
    features: [
      "8-12 hours daily availability",
      "Inter-city travel included",
      "Shopping & business trips",
      "Event transportation",
      "Flexible schedule"
    ]
  }
];

const testimonials = [
  {
    name: "Sarah M.",
    location: "Toronto, Canada",
    rating: 5,
    text: "Jackie was absolutely wonderful! Professional, punctual, and her English is perfect. The car was spotless and she knew all the best spots in Medellín.",
  },
  {
    name: "Carlos R.",
    location: "Miami, USA",
    text: "Best decision booking directly with Jackie. Much safer and more personal than ride-sharing apps. Highly recommend for anyone visiting Medellín!",
    rating: 5,
  },
  {
    name: "Emma L.",
    location: "London, UK", 
    text: "Jackie made our Guatapé trip unforgettable. Her knowledge of Colombian culture and perfect bilingual skills made the experience so much richer.",
    rating: 5,
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Car className="w-8 h-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold text-primary">Medellín by Jackie</h1>
              <p className="text-xs text-muted-foreground">Trusted Bilingual Driver</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <SocialBar compact />
            <WhatsAppButton className="ml-4">Book Now</WhatsAppButton>
          </div>
          <div className="md:hidden">
            <Button variant="whatsapp" size="sm">
              <MessageCircle className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Your Trusted Driver in{" "}
                <span className="text-secondary">Medellín</span>
              </h2>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                Airport pickups, private tours, and multi-day chauffeur service with Jackie. 
                New 2025 car, bilingual service, and local expertise you can trust.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <WhatsAppButton className="text-lg">
                Book Direct on WhatsApp
              </WhatsAppButton>
                <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  View Tours
                </Button>
              </div>
              <div className="flex items-center gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Car className="w-5 h-5" />
                  <span>New 2025 Sedan</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>Bilingual Service</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Jackie with her 2025 sedan in Medellín" 
                className="rounded-2xl shadow-elegant w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-elegant">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="font-semibold text-sm">5.0</span>
                </div>
                <p className="text-xs text-muted-foreground">50+ Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-foreground mb-4">
              Professional Transportation Services
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From airport pickups to full-day tours, Jackie provides safe, reliable, and personalized transportation throughout Medellín and beyond.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* About Jackie Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-foreground mb-6">
                Meet Jackie
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Born and raised in Medellín, Jackie has been providing exceptional transportation services for over 5 years. Fluent in both English and Spanish, she specializes in making visitors feel welcome and safe while exploring the beauty of Colombia.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Bilingual</div>
                    <div className="text-sm text-muted-foreground">English & Spanish</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">5+ Years</div>
                    <div className="text-sm text-muted-foreground">Experience</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Licensed</div>
                    <div className="text-sm text-muted-foreground">& Insured</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center">
                    <Car className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">New 2025</div>
                    <div className="text-sm text-muted-foreground">Sedan</div>
                  </div>
                </div>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-muted-foreground mb-4">Follow Jackie for trip ideas and behind-the-scenes content</p>
                <SocialBar />
              </div>
            </div>
            <div className="relative">
              <Card className="bg-gradient-subtle border-0 shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-center text-2xl">Why Book Direct?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-green-600 rounded-full" />
                      </div>
                      <div>
                        <div className="font-semibold">Better Pricing</div>
                        <div className="text-sm text-muted-foreground">No platform fees - direct booking saves you money</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-blue-600 rounded-full" />
                      </div>
                      <div>
                        <div className="font-semibold">Personal Service</div>
                        <div className="text-sm text-muted-foreground">Direct communication with Jackie, customized experience</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-yellow-600 rounded-full" />
                      </div>
                      <div>
                        <div className="font-semibold">Local Expertise</div>
                        <div className="text-sm text-muted-foreground">Insider knowledge of Medellín's best spots and hidden gems</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-purple-600 rounded-full" />
                      </div>
                      <div>
                        <div className="font-semibold">Safety First</div>
                        <div className="text-sm text-muted-foreground">Licensed, insured, and trusted by international visitors</div>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-foreground mb-4">
              What Travelers Say
            </h3>
            <p className="text-xl text-muted-foreground">
              Trusted by visitors from around the world
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-elegant">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/90" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold mb-6">
              Ready to Explore Medellín?
            </h3>
            <p className="text-xl mb-8 text-white/90">
              Book your ride with Jackie today. Airport pickups, city tours, or multi-day adventures - all with the comfort and safety of a new 2025 sedan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <WhatsAppButton className="bg-green-600 hover:bg-green-700 text-lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </WhatsAppButton>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Phone className="w-5 h-5 mr-2" />
                Call Jackie
              </Button>
            </div>
            <p className="text-white/70 text-sm">
              Available 7 days a week • Fast response times • English & Spanish
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Car className="w-8 h-8 text-secondary" />
                <div>
                  <h4 className="text-xl font-bold">Medellín by Jackie</h4>
                  <p className="text-sm text-white/70">Trusted Bilingual Driver</p>
                </div>
              </div>
              <p className="text-white/70 mb-4">
                Professional transportation services in Medellín with a new 2025 sedan. Safe, reliable, and personalized service for international visitors.
              </p>
              <SocialBar className="mb-4" />
            </div>
            <div>
              <h5 className="font-bold mb-4">Services</h5>
              <ul className="space-y-2 text-white/70">
                <li>Airport Transfers</li>
                <li>Private City Tours</li>
                <li>Guatapé Day Trips</li>
                <li>Comuna 13 Tours</li>
                <li>Multi-day Chauffeur</li>
                <li>Coffee Farm Visits</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Contact Jackie</h5>
              <div className="space-y-3 text-white/70">
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp: +57 300 123 4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Instagram className="w-4 h-4" />
                  <span>@jackiemedellin</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Medellín, Colombia</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/70">
            <p>&copy; 2025 Medellín by Jackie. All rights reserved. | Licensed Private Transportation Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;