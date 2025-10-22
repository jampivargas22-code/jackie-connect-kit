import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ServiceCard } from "@/components/ServiceCard";
import { SocialBar, WhatsAppButton } from "@/components/SocialBar";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import sharedData from '@/i18n/locales/shared.json';
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

const Index = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const services = [
    {
      id: 'airport',
      title: t('services.airport.title'),
      description: t('services.airport.description'),
      price: sharedData.services.airport.price,
      image: sharedData.services.airport.images[0],
      features: t('services.airport.features', { returnObjects: true }) as string[]
    },
    {
      id: 'guatape',
      title: t('services.guatape.title'),
      description: t('services.guatape.description'),
      price: sharedData.services.guatape.price,
      image: sharedData.services.guatape.images[0],
      features: t('services.guatape.features', { returnObjects: true }) as string[]
    },
    {
      id: 'comuna13',
      title: t('services.comuna13.title'),
      description: t('services.comuna13.description'),
      price: sharedData.services.comuna13.price,
      image: sharedData.services.comuna13.images[0],
      features: t('services.comuna13.features', { returnObjects: true }) as string[]
    },
    {
      id: 'coffee',
      title: t('services.coffee.title'),
      description: t('services.coffee.description'),
      price: sharedData.services.coffee.price,
      image: sharedData.services.coffee.images[0],
      features: t('services.coffee.features', { returnObjects: true }) as string[]
    },
    {
      id: 'paragliding',
      title: t('services.paragliding.title'),
      description: t('services.paragliding.description'),
      price: sharedData.services.paragliding.price,
      image: sharedData.services.paragliding.images[0],
      features: t('services.paragliding.features', { returnObjects: true }) as string[]
    },
    {
      id: 'pablo',
      title: t('services.pablo.title'),
      description: t('services.pablo.description'),
      price: sharedData.services.pablo.price,
      image: sharedData.services.pablo.images[0],
      features: t('services.pablo.features', { returnObjects: true }) as string[]
    },
    {
      id: 'nightlife',
      title: t('services.nightlife.title'),
      description: t('services.nightlife.description'),
      price: sharedData.services.nightlife.price,
      image: sharedData.services.nightlife.images[0],
      features: t('services.nightlife.features', { returnObjects: true }) as string[]
    },
    {
      id: 'multiday',
      title: t('services.multiday.title'),
      description: t('services.multiday.description'),
      price: sharedData.services.multiday.price,
      image: sharedData.services.multiday.images[0],
      features: t('services.multiday.features', { returnObjects: true }) as string[]
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
    text: "That Guatapé trip was UNREAL! Jackie's local knowledge and amazing personality made everything so much better. Plus her playlist was fire 🔥",
    rating: 5,
  }
];

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
                {t('header.title')}
              </h1>
              <p className="text-xs text-muted-foreground font-handwriting">{t('header.subtitle')}</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <WhatsAppButton className="ml-4 hover:rotate-2">{t('header.bookNow')}</WhatsAppButton>
          </div>
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
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
                  {t('hero.badge')}
                </span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight font-display">
                {t('hero.greeting')}{" "}
                <span className="text-secondary font-handwriting text-6xl lg:text-7xl">{t('hero.name')}</span>
                <br />
                {t('hero.tagline')}
              </h2>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                {t('hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <WhatsAppButton className="text-lg hover:rotate-2 animate-bounce-in">
                  {t('hero.chatButton')}
                </WhatsAppButton>
                <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:scale-105" onClick={() => {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  <Camera className="w-5 h-5 mr-2" />
                  {t('hero.adventuresButton')}
                </Button>
              </div>
              <div className="flex items-center gap-6 text-white/80 text-sm">
                <div className="flex items-center gap-2 animate-slide-up delay-300">
                  <Shield className="w-5 h-5" />
                  <span>{t('hero.licensed')}</span>
                </div>
                <div className="flex items-center gap-2 animate-slide-up delay-500">
                  <Car className="w-5 h-5" />
                  <span>{t('hero.newCar')}</span>
                </div>
                <div className="flex items-center gap-2 animate-slide-up delay-700">
                  <Users className="w-5 h-5" />
                  <span>{t('hero.happyTravelers')}</span>
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
                <p className="text-sm text-muted-foreground font-handwriting">50+ {t('hero.happyTravelers')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-block mb-4">
              <span className="bg-gradient-primary text-white px-6 py-2 rounded-full text-sm font-semibold shadow-fun">
                {t('services.badge')}
              </span>
            </div>
            <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 font-display">
              {t('services.title')}{" "}
              <span className="text-secondary font-handwriting">{t('services.titleAccent')}</span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                <ServiceCard 
                  {...service} 
                  onClick={() => navigate(`/tour/${service.id}`)}
                />
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
                  {t('about.badge')}
                </span>
              </div>
              <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 font-display">
                {t('about.title')}
                <span className="text-primary font-handwriting text-5xl lg:text-6xl"> {t('about.titleAccent')} </span>
                {t('about.titleEnd')}
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {t('about.description')}
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3 animate-bounce-in">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center animate-pulse-glow">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold">{t('about.experience')}</div>
                    <div className="text-sm text-muted-foreground">{t('about.experienceSub')}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 animate-bounce-in delay-200">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center animate-pulse-glow">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold">{t('about.experience')}</div>
                    <div className="text-sm text-muted-foreground">{t('about.experienceSub')}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 animate-bounce-in delay-300">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center animate-pulse-glow">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold">{t('about.licensed')}</div>
                    <div className="text-sm text-muted-foreground">{t('about.licensedSub')}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 animate-bounce-in delay-400">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center animate-pulse-glow">
                    <Car className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold">{t('about.newCar')}</div>
                    <div className="text-sm text-muted-foreground">{t('about.newCarSub')}</div>
                  </div>
                </div>
              </div>
              {/* Social media section hidden */}
            </div>
            <div className="relative animate-slide-up delay-300">
              <Card className="bg-gradient-card border-0 shadow-hover hover:shadow-glow transition-elastic hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-center text-2xl font-display flex items-center justify-center gap-2">
                    {t('about.whyDirect')} <Sparkles className="w-6 h-6 text-primary" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 animate-slide-up delay-600">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-3 h-3 bg-green-600 rounded-full animate-wiggle" />
                      </div>
                      <div>
                        <div className="font-bold">{t('about.betterPrices')}</div>
                        <div className="text-sm text-muted-foreground">{t('about.betterPricesSub')}</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 animate-slide-up delay-700">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-3 h-3 bg-blue-600 rounded-full animate-wiggle" />
                      </div>
                      <div>
                        <div className="font-bold">{t('about.personalTouch')}</div>
                        <div className="text-sm text-muted-foreground">{t('about.personalTouchSub')}</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 animate-slide-up delay-800">
                      <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-3 h-3 bg-yellow-600 rounded-full animate-wiggle" />
                      </div>
                      <div>
                        <div className="font-bold">{t('about.localSecrets')}</div>
                        <div className="text-sm text-muted-foreground">{t('about.localSecretsSub')}</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 animate-slide-up delay-900">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-3 h-3 bg-purple-600 rounded-full animate-wiggle" />
                      </div>
                      <div>
                        <div className="font-bold">{t('about.safetyFirst')}</div>
                        <div className="text-sm text-muted-foreground">{t('about.safetyFirstSub')}</div>
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
                {t('testimonials.badge')}
              </span>
            </div>
            <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 font-display">
              {t('testimonials.title')}{" "}
              <span className="text-accent font-handwriting">{t('testimonials.titleAccent')}</span>
              {" "}{t('testimonials.titleEnd')}
            </h3>
            <p className="text-xl text-muted-foreground">
              {t('testimonials.subtitle')}
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
                Making Medellín adventures unforgettable since day one! New 2025 sedan, great communication, 
                and all the local secrets you need. Let's explore together! 🌟
              </p>
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
                  <span>WhatsApp: +57 321 6122300</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>Phone: +57 321 6122300</span>
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