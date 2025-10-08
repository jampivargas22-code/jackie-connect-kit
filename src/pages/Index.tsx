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
  Instagram,
  Heart,
  Camera,
  Coffee,
  Music2,
  Sparkles,
  Zap
} from "lucide-react";
import heroImage from "@/assets/hero-jackie-medellin.jpg";

const services = [
  {
    title: "Airport Vibes ✈️",
    description: "No more sketchy airport pickups! I'll be there with a big smile (and AC)",
    price: "$35-45 USD",
    icon: Plane,
    features: [
      "Flight tracking (I know when you land) 📲",
      "Meet & greet at arrivals 👋",
      "Brand new 2025 car (spotless AF) ✨",
      "Speaks fluent English & Spanish 🗣️",
      "Fixed price - no surge nonsense 💯"
    ]
  },
  {
    title: "Guatapé Magic 🌈",
    description: "THE iconic day trip! Climb El Peñol rock, explore the colorful town, eat at hidden gem spots",
    price: "$150 USD",
    icon: MapPin,
    features: [
      "Private round-trip transport (2hrs each way) 🚗",
      "El Peñol Rock - 740 steps to heaven 🏔️",
      "Colorful zócalos town photo ops 📸",
      "Hidden local restaurants (best bandeja!) 🍽️",
      "Lakeside views & boat rides (optional) ⛵",
      "8-10 hours of pure adventure 🌟"
    ]
  },
  {
    title: "Comuna 13 Vibes 🎨",
    description: "From war zone to art zone - see Medellín's most inspiring transformation story!",
    price: "$80 USD",
    icon: Camera,
    features: [
      "Electric escalators (world-famous!) 🛗",
      "Street art & graffiti tour 🎨",
      "Meet local artists & guides 👨‍🎨",
      "Hip-hop history & transformation story 🎤",
      "Souvenir shopping & local snacks 🛍️",
      "4-5 hours including transport 🕐"
    ]
  },
  {
    title: "Coffee Farm Adventure ☕",
    description: "Bean-to-cup experience in Colombia's coffee country - taste the real deal!",
    price: "$120 USD",
    icon: Coffee,
    features: [
      "Visit authentic coffee finca 🌱",
      "Learn the full coffee process 👨‍🌾",
      "Taste freshly roasted beans ☕",
      "Stunning mountain views 🏔️",
      "Traditional lunch included 🍽️",
      "Full day trip (8 hours) 🌅"
    ]
  },
  {
    title: "Paragliding Thrill 🪂",
    description: "Fly over Medellín like a bird! Epic views + adrenaline rush = unforgettable",
    price: "$250 USD",
    icon: Zap,
    features: [
      "Transport to/from San Félix 🚗",
      "20-30 min flight included 🪂",
      "Professional pilot & gear ✅",
      "GoPro photos/videos 📹",
      "Pre-flight safety briefing 🛡️",
      "Half day experience (4-5 hours) ⏰"
    ]
  },
  {
    title: "Pablo History Tour 🕵️",
    description: "Controversial but curious? See the real story - not glorified, just facts",
    price: "$90 USD",
    icon: MapPin,
    features: [
      "Monaco building & transformation 🏢",
      "Inflection Memorial (victims honored) 🕊️",
      "His final neighborhood 📍",
      "Historical context (1980s-90s) 📚",
      "Balanced perspective - not glorification ⚖️",
      "4-5 hours with local insights 🗣️"
    ]
  },
  {
    title: "Food & Nightlife 🍻",
    description: "Eat like a local, party like a local - salsa, drinks, and epic eats!",
    price: "$100 USD",
    icon: Music2,
    features: [
      "Traditional Colombian dinner 🍽️",
      "Best salsa bars & clubs 💃",
      "Safe bar-hopping with local tips 🍺",
      "Meet other travelers 🌍",
      "Late night safe rides home 🌙",
      "5-6 hours of fun (starts 7pm) 🎉"
    ]
  },
  {
    title: "Multi-Day Chauffeur 🚗",
    description: "Need a driver for the whole trip? I got you covered for days/weeks!",
    price: "$150 USD/day",
    icon: Calendar,
    features: [
      "8-12 hours daily convenience 🕐",
      "Inter-city road trips included 🛣️",
      "Business meetings & coworking runs 💼",
      "Shopping sprees & restaurant hopping 🛍️",
      "Late night safe rides 🌙",
      "100% flexible schedule 📅"
    ]
  }
];

const testimonials = [
  {
    name: "Sarah M. 🇨🇦",
    location: "Toronto, Canada",
    rating: 5,
    text: "Jackie is literally THE BEST! So professional but also super fun to hang with. Her car is pristine and she knows all the hidden gems. Booking direct was the smartest thing I did!",
  },
  {
    name: "Carlos R. 🇺🇸",
    location: "Miami, USA", 
    text: "Forget Uber - Jackie is where it's at! Way safer, more personal, and she actually cares about showing you the real Colombia. Already planning my next trip back!",
    rating: 5,
  },
  {
    name: "Emma L. 🇬🇧",
    location: "London, UK",
    text: "That Guatapé trip was UNREAL! Jackie's bilingual skills and local knowledge made everything so much better. Plus her playlist was fire 🔥",
    rating: 5,
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50 animate-slide-up">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 animate-bounce-in">
            <div className="w-12 h-12 bg-gradient-fun rounded-full flex items-center justify-center animate-pulse-glow">
              <Car className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Medellín by Jackie
              </h1>
              <p className="text-xs text-muted-foreground font-handwriting">Your cool local driver 🇨🇴</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <SocialBar compact />
            <WhatsAppButton className="ml-4 hover:rotate-2">Book Now</WhatsAppButton>
          </div>
          <div className="md:hidden">
            <Button variant="whatsapp" size="sm" className="animate-wiggle">
              <MessageCircle className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <Sparkles className="w-8 h-8 text-white/30" />
        </div>
        <div className="absolute top-40 right-20 animate-float delay-1000">
          <Heart className="w-6 h-6 text-white/30" />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float delay-500">
          <Zap className="w-7 h-7 text-white/30" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-slide-up">
              <div className="inline-block mb-4">
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold border border-white/30">
                  ✨ Your Medellín Adventure Starts Here
                </span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight font-display">
                Hey, I'm{" "}
                <span className="text-secondary font-handwriting text-6xl lg:text-7xl">Jackie!</span>
                <br />
                Your favorite local driver 🚗💨
              </h2>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                Forget boring taxi rides! I'm here to show you the REAL Medellín with style, safety, and way too much fun. 
                New 2025 car, perfect English, and all the local tea ☕
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <WhatsAppButton className="text-lg hover:rotate-2 animate-bounce-in">
                  Let's Chat! 💬
                </WhatsAppButton>
                <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:scale-105">
                  <Camera className="w-5 h-5 mr-2" />
                  See Adventures
                </Button>
              </div>
              <div className="flex items-center gap-6 text-white/80 text-sm">
                <div className="flex items-center gap-2 animate-slide-up delay-300">
                  <Shield className="w-5 h-5" />
                  <span>Licensed & Insured ✅</span>
                </div>
                <div className="flex items-center gap-2 animate-slide-up delay-500">
                  <Car className="w-5 h-5" />
                  <span>2025 Ride 🔥</span>
                </div>
                <div className="flex items-center gap-2 animate-slide-up delay-700">
                  <Users className="w-5 h-5" />
                  <span>Bilingual AF 🗣️</span>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-up delay-300">
              <img 
                src={heroImage} 
                alt="Jackie with her 2025 sedan in Medellín" 
                className="rounded-3xl shadow-hover w-full h-auto object-cover transform hover:scale-105 transition-elastic"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-card rounded-2xl p-6 shadow-hover animate-bounce-in delay-1000">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 animate-wiggle" style={{animationDelay: `${i * 0.1}s`}} />
                    ))}
                  </div>
                  <span className="font-bold text-lg">5.0</span>
                </div>
                <p className="text-sm text-muted-foreground font-handwriting">50+ Happy Travelers 🎉</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-block mb-4">
              <span className="bg-gradient-primary text-white px-6 py-2 rounded-full text-sm font-semibold shadow-fun">
                🎯 What I Do Best
              </span>
            </div>
            <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 font-display">
              Choose Your{" "}
              <span className="text-secondary font-handwriting">Adventure</span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From airport pickups to epic day trips - I've got your transportation covered with style and good vibes only! 🌟
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Jackie Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="inline-block mb-6">
                <span className="bg-gradient-secondary text-white px-6 py-2 rounded-full text-sm font-semibold shadow-secondary">
                  👋 Get to Know Me
                </span>
              </div>
              <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 font-display">
                Why Everyone
                <span className="text-primary font-handwriting text-5xl lg:text-6xl"> Loves </span>
                Jackie ❤️
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Born and raised in Medellín (so I know ALL the spots 📍), I've been the go-to driver for cool travelers for 5+ years. 
                Fluent in English and Spanish, always with the best playlist, and committed to making your Colombian adventure absolutely unforgettable! 
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3 animate-bounce-in">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center animate-pulse-glow">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold">Perfectly Bilingual</div>
                    <div className="text-sm text-muted-foreground">English & Spanish 🗣️</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 animate-bounce-in delay-200">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center animate-pulse-glow">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold">5+ Years</div>
                    <div className="text-sm text-muted-foreground">Making memories ✨</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 animate-bounce-in delay-300">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center animate-pulse-glow">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold">100% Licensed</div>
                    <div className="text-sm text-muted-foreground">& Insured ✅</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 animate-bounce-in delay-400">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center animate-pulse-glow">
                    <Car className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold">Brand New 2025</div>
                    <div className="text-sm text-muted-foreground">Sedan (so fresh) 🔥</div>
                  </div>
                </div>
              </div>
              <div className="text-center lg:text-left animate-slide-up delay-500">
                <p className="text-muted-foreground mb-4 font-handwriting text-lg">
                  Follow me for daily Medellín vibes & travel inspo! 📸
                </p>
                <SocialBar />
              </div>
            </div>
            <div className="relative animate-slide-up delay-300">
              <Card className="bg-gradient-card border-0 shadow-hover hover:shadow-glow transition-elastic hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-center text-2xl font-display flex items-center justify-center gap-2">
                    Why Book Direct? <Sparkles className="w-6 h-6 text-primary" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 animate-slide-up delay-600">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-3 h-3 bg-green-600 rounded-full animate-wiggle" />
                      </div>
                      <div>
                        <div className="font-bold">Better Prices 💰</div>
                        <div className="text-sm text-muted-foreground">No sneaky app fees - just honest pricing</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 animate-slide-up delay-700">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-3 h-3 bg-blue-600 rounded-full animate-wiggle" />
                      </div>
                      <div>
                        <div className="font-bold">Personal Touch 🤝</div>
                        <div className="text-sm text-muted-foreground">Direct chat with me - customize everything!</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 animate-slide-up delay-800">
                      <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-3 h-3 bg-yellow-600 rounded-full animate-wiggle" />
                      </div>
                      <div>
                        <div className="font-bold">Local Secrets 🗺️</div>
                        <div className="text-sm text-muted-foreground">Hidden gems that tourists never find</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 animate-slide-up delay-900">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-3 h-3 bg-purple-600 rounded-full animate-wiggle" />
                      </div>
                      <div>
                        <div className="font-bold">Safety First 🛡️</div>
                        <div className="text-sm text-muted-foreground">Licensed, trusted by international travelers</div>
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
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-block mb-4">
              <span className="bg-gradient-fun text-white px-6 py-2 rounded-full text-sm font-semibold shadow-fun">
                💬 Real Talk
              </span>
            </div>
            <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 font-display">
              What My{" "}
              <span className="text-accent font-handwriting">Travelers</span>
              {" "}Say
            </h3>
            <p className="text-xl text-muted-foreground">
              Don't just take my word for it - here's what awesome people are saying! 🌟
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-hover hover:shadow-glow transition-elastic hover:scale-105 animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 animate-wiggle" style={{animationDelay: `${i * 0.1}s`}} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 font-medium leading-relaxed">"{testimonial.text}"</p>
                  <div>
                    <div className="font-bold text-foreground text-lg">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground font-handwriting">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/20" />
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <Music2 className="w-8 h-8 text-white/20" />
        </div>
        <div className="absolute bottom-20 right-20 animate-float delay-1000">
          <Coffee className="w-6 h-6 text-white/20" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-slide-up">
            <div className="inline-block mb-6">
              <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold border border-white/30">
                🚀 Ready for an Adventure?
              </span>
            </div>
            <h3 className="text-4xl lg:text-5xl font-bold mb-6 font-display">
              Let's Make Some{" "}
              <span className="text-secondary font-handwriting text-5xl lg:text-6xl">Epic</span>
              {" "}Memories! 📸
            </h3>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Ready to explore Medellín like a local? Hit me up and let's plan your perfect Colombian adventure. 
              Airport rides, city tours, or multi-day fun - all in my comfy 2025 ride! 🚗✨
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <WhatsAppButton className="bg-green-500 hover:bg-green-600 text-lg hover:rotate-2 animate-bounce-in">
                <MessageCircle className="w-5 h-5 mr-2" />
                Let's Chat! 💬
              </WhatsAppButton>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:scale-105 animate-bounce-in delay-200">
                <Phone className="w-5 h-5 mr-2" />
                Call Jackie 📞
              </Button>
            </div>
            <p className="text-white/70 text-sm font-handwriting text-lg">
              Available 24/7 • Lightning fast replies • English & Spanish • Good vibes only ✨
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="animate-slide-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-fun rounded-full flex items-center justify-center animate-pulse-glow">
                  <Car className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-display">Medellín by Jackie</h4>
                  <p className="text-sm text-white/70 font-handwriting">Your cool local driver 🇨🇴</p>
                </div>
              </div>
              <p className="text-white/70 mb-4 leading-relaxed">
                Making Medellín adventures unforgettable since day one! New 2025 sedan, bilingual service, 
                and all the local secrets you need. Let's explore together! 🌟
              </p>
              <SocialBar className="mb-4" />
            </div>
            <div className="animate-slide-up delay-200">
              <h5 className="font-bold mb-4 text-lg font-display">Epic Adventures 🎯</h5>
              <ul className="space-y-2 text-white/70">
                <li>✈️ Airport Transfers</li>
                <li>🎨 Street Art Tours</li>
                <li>🏔️ Guatapé Day Trips</li>
                <li>🏘️ Comuna 13 Tours</li>
                <li>🚗 Multi-day Chauffeur</li>
                <li>☕ Coffee Farm Visits</li>
              </ul>
            </div>
            <div className="animate-slide-up delay-300">
              <h5 className="font-bold mb-4 text-lg font-display">Let's Connect! 📱</h5>
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
                  <span>Medellín, Colombia 🇨🇴</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/70">
            <p className="font-handwriting text-lg">
              &copy; 2025 Medellín by Jackie. Made with ❤️ in Colombia. Licensed Private Transportation Service ✅
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;