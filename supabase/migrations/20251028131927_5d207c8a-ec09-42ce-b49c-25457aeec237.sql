-- Create reviews table for tour reviews
CREATE TABLE public.reviews (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  tour_id TEXT NOT NULL,
  user_name TEXT NOT NULL,
  user_email TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster lookups by tour
CREATE INDEX idx_reviews_tour_id ON public.reviews(tour_id);

-- Create index for sorting by date
CREATE INDEX idx_reviews_created_at ON public.reviews(created_at DESC);

-- Enable Row Level Security
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

-- Allow everyone to read reviews
CREATE POLICY "Anyone can view reviews" 
ON public.reviews 
FOR SELECT 
USING (true);

-- Allow anyone to insert reviews (public form submission)
CREATE POLICY "Anyone can submit reviews" 
ON public.reviews 
FOR INSERT 
WITH CHECK (
  LENGTH(user_name) > 0 AND LENGTH(user_name) <= 100 AND
  LENGTH(user_email) > 0 AND LENGTH(user_email) <= 255 AND
  LENGTH(comment) > 0 AND LENGTH(comment) <= 1000
);