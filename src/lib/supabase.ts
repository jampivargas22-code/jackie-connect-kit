import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseKey);

// Database types
export interface Booking {
  id?: string;
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
    date?: string;
    estimatedTime?: string;
    flightNumber?: string;
    additionalNotes?: string;
  };
  paymentId: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}

// Supabase table creation SQL (run this in Supabase SQL editor):
/*
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

-- Create an index on payment_id for faster lookups
CREATE INDEX idx_bookings_payment_id ON bookings(payment_id);

-- Create an index on status for filtering
CREATE INDEX idx_bookings_status ON bookings(status);
*/