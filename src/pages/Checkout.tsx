import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { supabase } from "@/lib/supabase";
import { useTranslation } from 'react-i18next';
import { CalendarIcon, Users, Plane, MapPin, Clock } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface BookingData {
  serviceId: string;
  serviceName: string;
  passengers: number;
  totalPrice: number;
  customerInfo: {
    name: string;
    email: string;
    phone: string;
  };
  serviceDetails: {
    date?: Date;
    estimatedTime?: string;
    flightNumber?: string;
    additionalNotes?: string;
  };
}

const Checkout = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [bookingData, setBookingData] = useState<BookingData>({
    serviceId: searchParams.get('service') || '',
    serviceName: searchParams.get('name') || '',
    passengers: 1,
    totalPrice: 0,
    customerInfo: {
      name: '',
      email: '',
      phone: ''
    },
    serviceDetails: {}
  });

  const [date, setDate] = useState<Date>();
  const [isAirportService, setIsAirportService] = useState(false);

  useEffect(() => {
    const serviceId = searchParams.get('service');
    setIsAirportService(serviceId === 'airport');
  }, [searchParams]);

  useEffect(() => {
    calculatePrice();
  }, [bookingData.passengers, bookingData.serviceId]);

  const calculatePrice = () => {
    const serviceId = bookingData.serviceId;
    let basePrice = 0;

    if (serviceId === 'airport') {
      basePrice = 35 * bookingData.passengers;
    } else {
      // Get base price from shared data
      const prices: { [key: string]: number } = {
        guatape: 150,
        comuna13: 80,
        coffee: 120,
        paragliding: 250,
        pablo: 90,
        nightlife: 100,
        multiday: 150
      };
      basePrice = prices[serviceId] || 0;

      // Apply discounts for additional passengers
      if (bookingData.passengers > 1) {
        const discountRates = [0, 0.1, 0.2, 0.3]; // 10%, 20%, 30% for 2nd, 3rd, 4th passenger
        for (let i = 2; i <= bookingData.passengers && i <= 4; i++) {
          basePrice -= basePrice * discountRates[i - 1];
        }
      }
    }

    setBookingData(prev => ({ ...prev, totalPrice: basePrice }));
  };

  const handlePassengerChange = (value: string) => {
    const passengers = parseInt(value);
    setBookingData(prev => ({ ...prev, passengers }));
  };

  const handleInputChange = (field: string, value: string) => {
    setBookingData(prev => ({
      ...prev,
      customerInfo: {
        ...prev.customerInfo,
        [field]: value
      }
    }));
  };

  const handleServiceDetailChange = (field: string, value: string | Date) => {
    setBookingData(prev => ({
      ...prev,
      serviceDetails: {
        ...prev.serviceDetails,
        [field]: value
      }
    }));
  };

  const saveBookingToSupabase = async (paymentId: string) => {
    try {
      const { data, error } = await supabase
        .from('bookings')
        .insert([
          {
            ...bookingData,
            paymentId,
            status: 'confirmed',
            createdAt: new Date().toISOString()
          }
        ]);

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error saving booking:', error);
      throw error;
    }
  };

  const paypalOptions = {
    clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID || "",
    currency: "USD",
    intent: "capture" as const
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 font-display">
            Complete Your Booking
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Booking Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Booking Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Service Info */}
                <div className="p-4 bg-secondary/10 rounded-lg">
                  <h3 className="font-semibold text-lg">{bookingData.serviceName}</h3>
                  <p className="text-sm text-muted-foreground">
                    Service ID: {bookingData.serviceId}
                  </p>
                </div>

                {/* Passenger Count */}
                <div className="space-y-2">
                  <Label htmlFor="passengers">Number of Passengers</Label>
                  <Select onValueChange={handlePassengerChange} defaultValue="1">
                    <SelectTrigger>
                      <SelectValue placeholder="Select passengers" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Passenger</SelectItem>
                      <SelectItem value="2">2 Passengers</SelectItem>
                      <SelectItem value="3">3 Passengers</SelectItem>
                      <SelectItem value="4">4 Passengers</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Airport Specific Fields */}
                {isAirportService && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="estimatedTime" className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Estimated Time of Arrival
                      </Label>
                      <Input
                        id="estimatedTime"
                        type="time"
                        onChange={(e) => handleServiceDetailChange('estimatedTime', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="flightNumber" className="flex items-center gap-2">
                        <Plane className="w-4 h-4" />
                        Flight Number
                      </Label>
                      <Input
                        id="flightNumber"
                        placeholder="e.g. AV123"
                        onChange={(e) => handleServiceDetailChange('flightNumber', e.target.value)}
                      />
                    </div>
                  </div>
                )}

                {/* Tour Date for non-airport services */}
                {!isAirportService && (
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <CalendarIcon className="w-4 h-4" />
                      Tour Date
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={(selectedDate) => {
                            setDate(selectedDate);
                            handleServiceDetailChange('date', selectedDate || new Date());
                          }}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                )}

                {/* Customer Information */}
                <div className="space-y-4">
                  <h3 className="font-semibold">Contact Information</h3>
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      onChange={(e) => handleInputChange('name', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      placeholder="+57 321 6122300"
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes (Optional)</Label>
                  <Textarea
                    id="notes"
                    placeholder="Any special requests or additional information..."
                    onChange={(e) => handleServiceDetailChange('additionalNotes', e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Payment Section */}
            <Card>
              <CardHeader>
                <CardTitle>Payment Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Service:</span>
                    <span className="font-semibold">{bookingData.serviceName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Passengers:</span>
                    <span>{bookingData.passengers}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold border-t pt-2">
                    <span>Total:</span>
                    <span>${bookingData.totalPrice.toFixed(2)} USD</span>
                  </div>
                </div>

                <PayPalScriptProvider options={paypalOptions}>
                  <PayPalButtons
                    createOrder={(data, actions) => {
                      return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                          {
                            amount: {
                              value: bookingData.totalPrice.toFixed(2),
                              currency_code: "USD"
                            },
                            description: `${bookingData.serviceName} - ${bookingData.passengers} passenger(s)`
                          }
                        ]
                      });
                    }}
                    onApprove={async (data, actions) => {
                      if (actions.order) {
                        const order = await actions.order.capture();
                        try {
                          await saveBookingToSupabase(order.id);
                          alert('Booking confirmed! You will receive a confirmation email shortly.');
                          navigate('/');
                        } catch (error) {
                          alert('Payment successful but there was an error saving your booking. Please contact support.');
                        }
                      }
                    }}
                    onError={(error) => {
                      console.error('PayPal error:', error);
                      alert('Payment failed. Please try again.');
                    }}
                  />
                </PayPalScriptProvider>

                <p className="text-sm text-muted-foreground text-center">
                  Secure payment powered by PayPal
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;