import Razorpay from 'razorpay';

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const razorpay = new Razorpay({
      key_id: process.env.VITE_RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const { amount, currency = 'INR', receipt } = request.body;

    const options = {
      amount: amount * 100, // amount in paisa
      currency,
      receipt,
    };

    const order = await razorpay.orders.create(options);

    return response.status(200).json(order);
  } catch (error) {
    console.error('Error creating order:', error);
    return response.status(500).json({ error: 'Error creating order' });
  }
}
