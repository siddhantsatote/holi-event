import Razorpay from 'razorpay';
import crypto from 'crypto';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY // Use Service Role Key for backend writes
);

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      userData
    } = request.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest('hex');

    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
      // Payment verified, verify uniqueness and store in Database
      const { data, error } = await supabase
        .from('registrations')
        .insert([
          {
            ...userData,
            razorpay_order_id,
            razorpay_payment_id,
            payment_status: 'completed',
            amount: userData.amount,
            created_at: new Date().toISOString()
          }
        ])
        .select();

      if (error) {
        console.error('Supabase error:', error);
        return response.status(500).json({ error: 'Database error' });
      }

      return response.status(200).json({ 
        message: 'Payment verified and registration successful',
        registration: data[0]
      });
    } else {
      return response.status(400).json({ error: 'Invalid signature' });
    }
  } catch (error) {
    console.error('Error verifying payment:', error);
    return response.status(500).json({ error: 'Error verifying payment' });
  }
}
