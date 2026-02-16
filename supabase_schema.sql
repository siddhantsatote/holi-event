-- Create registrations table
CREATE TABLE registrations (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  ticket_type TEXT NOT NULL,
  amount NUMERIC NOT NULL,
  razorpay_order_id TEXT,
  razorpay_payment_id TEXT,
  payment_status TEXT DEFAULT 'pending',
  tshirt_size TEXT,
  age INTEGER
);

-- Enable Row Level Security (RLS)
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

-- Create Policy: Allow inserts from authenticated users (or anon if needed for public registration)
-- For public registration without user login, we might need to allow anon inserts
-- BUT purely server-side (service role) inserts are safer.
-- Since we use Vercel API with Service Role Key, we don't strictly need public Insert policy if we only insert from backend.
-- However, if we want to read data from frontend (e.g. check status), we might need policies.

-- Policy for Service Role (Full Access) - Implicitly enabled usually, but good to know.

-- Optional: Allow public to view their own registration if they have the ID (not implemented here)
