import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SocialBar, WhatsAppButton } from "@/components/SocialBar";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useTranslation } from 'react-i18next';
import sharedData from '@/i18n/locales/shared.json';
import {
  ArrowLeft,
  MapPin,
  Clock,
  Users,
  Star,
  CheckCircle,
  Camera,
  Heart,
  Sparkles
} from "lucide-react";

const TourDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Get tour data from translations and shared data
  const getTourData = (tourId: string) => {
    const sharedServiceData = sharedData.services[tourId as keyof typeof sharedData.services];
    return {
      title: t(`services.${tourId}.title`),
      description: t(`services.${tourId}.description`),
      price: sharedServiceData.price,
      duration: sharedServiceData.duration,
      groupSize: sharedServiceData.groupSize,
      location: t(`services.${tourId}.location`),
      history: t(`services.${tourId}.history`),
      background: t(`services.${tourId}.background`),
      whatToExpect: t(`services.${tourId}.whatToExpect`),
      images: sharedServiceData.images,
      features: t(`services.${tourId}.features`, { returnObjects: true }) as string[],
      itinerary: t(`services.${tourId}.itinerary`, { returnObjects: true }) as string[],
      included: t(`services.${tourId}.included`, { returnObjects: true }) as string[],
      highlights: t(`services.${tourId}.highlights`, { returnObjects: true }) as string[]
    };
  };

  const tour = id ? getTourData(id) : null;

  if (!tour) {
    return (
      <div className="min-h-screen bg-background font-sans flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Tour Not Found</h1>
          <Button onClick={() => navigate('/')}>Return Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => navigate('/')} className="mr-2">
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div>
              <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Jackie Connect Kit
              </h1>
              <p className="text-xs text-muted-foreground font-handwriting">Tour Details</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <SocialBar compact />
            <LanguageSwitcher />
            <WhatsAppButton className="ml-4">{t('header.bookNow')}</WhatsAppButton>
          </div>
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <Button variant="whatsapp" size="sm">
              <Sparkles className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 font-display">
              {tour.title}
            </h1>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              {tour.description}
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Clock className="w-5 h-5" />
                <span>{tour.duration}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Users className="w-5 h-5" />
                <span>{tour.groupSize}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <MapPin className="w-5 h-5" />
                <span>{tour.location}</span>
              </div>
            </div>
            <div className="text-center mb-8">
              <div className="text-4xl font-bold bg-white bg-clip-text text-transparent font-display mb-2">
                {tour.price}
              </div>
              <p className="text-white/80">per person</p>
            </div>
            <WhatsAppButton className="text-lg hover:scale-105">
              Book This Tour Now
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-display">
              Tour Gallery
            </h2>
            <p className="text-lg text-muted-foreground">
              See what makes this experience unforgettable
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {tour.images.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-2xl shadow-hover">
                <img
                  src={image}
                  alt={`${tour.title} - Image ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Camera className="w-6 h-6" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About This Tour Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-display">
                About This Tour
              </h2>
              <p className="text-lg text-muted-foreground">
                Discover the story behind your adventure
              </p>
            </div>

            <div className="space-y-8">
              {/* History */}
              <Card className="shadow-hover">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Heart className="w-6 h-6 text-primary" />
                    History & Context
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {tour.history}
                  </p>
                </CardContent>
              </Card>

              {/* Background */}
              <Card className="shadow-hover">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <MapPin className="w-6 h-6 text-secondary" />
                    Background & Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {tour.background}
                  </p>
                </CardContent>
              </Card>

              {/* What to Expect */}
              <Card className="shadow-hover">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Sparkles className="w-6 h-6 text-accent" />
                    What to Expect
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {tour.whatToExpect}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Itinerary */}
            <Card className="shadow-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <MapPin className="w-6 h-6 text-primary" />
                  Tour Itinerary
                </CardTitle>
                <CardDescription>
                  Your day-by-day adventure plan
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tour.itinerary.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* What's Included */}
            <Card className="shadow-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <CheckCircle className="w-6 h-6 text-secondary" />
                  What's Included
                </CardTitle>
                <CardDescription>
                  Everything you need for an amazing experience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {tour.included.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-display">
              Tour Highlights
            </h2>
            <p className="text-lg text-muted-foreground">
              What makes this tour special
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tour.highlights.map((highlight, index) => (
              <div key={index} className="flex items-center gap-4 p-6 bg-gradient-card rounded-2xl shadow-hover">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{highlight}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-display">
              Ready for an Adventure?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Book your personalized {tour.title.toLowerCase()} experience today and create memories that will last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton className="text-lg hover:scale-105">
                Book This Tour
              </WhatsAppButton>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Heart className="w-5 h-5 mr-2" />
                Add to Wishlist
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TourDetail;
