# Supabase Setup for Jackie Connect Kit

## Environment Variables

Add these to your `.env` file:

```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_PAYPAL_CLIENT_ID=your_paypal_client_id
```

## Database Setup

Run this SQL in your Supabase SQL Editor to create the bookings table:

```sql
-- Create bookings table
CREATE TABLE bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  service_id TEXT NOT NULL,
  service_name TEXT NOT NULL,
  passengers INTEGER NOT NULL,
  total_price DECIMAL(10,2) NOT NULL,
  customer_info JSONB NOT NULL,
  service_details JSONB,
  payment_id TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_bookings_payment_id ON bookings(payment_id);
CREATE INDEX idx_bookings_status ON bookings(status);
CREATE INDEX idx_bookings_created_at ON bookings(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts (for booking creation)
CREATE POLICY "Allow booking inserts" ON bookings
  FOR INSERT WITH CHECK (true);

-- Create policy to allow reads for admin (you can modify this based on your needs)
CREATE POLICY "Allow booking reads" ON bookings
  FOR SELECT USING (auth.role() = 'authenticated');
```

## PayPal Setup

1. Go to [PayPal Developer](https://developer.paypal.com/)
2. Create a new app or use existing one
3. Get your Client ID from the app settings
4. Add it to your `.env` file as `VITE_PAYPAL_CLIENT_ID`

## Testing

After setup, test the booking flow:
1. Click "Book Now" on the homepage (should scroll to services)
2. Click "Let's Do This!" on any service card
3. Fill out the booking form
4. Complete PayPal payment
5. Check Supabase dashboard to see the booking record