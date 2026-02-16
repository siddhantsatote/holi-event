# Holi Festival 2025 - Event Website

Full-stack event registration website built with React (Vite), Tailwind CSS, and Vercel Serverless Functions.

## Features
- 🎨 **Vibrant UI**: Holi-themed particle background and glassmorphism design.
- 📱 **Responsive**: Fully responsive for all devices.
- 🎫 **Registration**: Multi-step form for ticket booking.
- 💳 **Payments**: Razorpay integration for secure payments.
- 🗄️ **Database**: Supabase for storing registrations.

## Tech Stack
- **Frontend**: React, Vite, Tailwind CSS, Framer Motion
- **Backend**: Vercel Serverless Functions (Node.js)
- **Database**: Supabase (PostgreSQL)
- **Payment Gateway**: Razorpay

## Local Development

1. **Clone & Install**
   ```bash
   cd holi-festival-2025
   npm install
   ```

2. **Environment Variables**
   Create a `.env` file based on `.env.example`:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   ```
   *Note: `VITE_` prefix is for Frontend, others are for Backend.*

3. **Run Locally**
   To run both Frontend and API functions locally, use Vercel CLI:
   ```bash
   npm i -g vercel
   vercel dev
   ```
   Or just run frontend (API calls will fail without proxy):
   ```bash
   npm run dev
   ```

## Deployment on Vercel

1. **Push to GitHub**.
2. **Import in Vercel**.
3. **Configure Environment Variables** in Vercel Project Settings.
4. **Deploy**.

The `api/` directory is automatically detected by Vercel as Serverless Functions.

## Database Setup (Supabase)

Run the SQL queries in `supabase_schema.sql` in your Supabase SQL Editor to create the necessary tables.
