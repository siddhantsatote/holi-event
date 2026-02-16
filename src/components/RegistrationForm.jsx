import { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * RAZORPAY PAYMENT LINK APPROACH
 * ================================
 * 1. Go to Razorpay Dashboard → Payment Links → Create Payment Link
 * 2. Set amounts for each ticket type (or create one link per ticket type)
 * 3. Paste the link(s) below in PAYMENT_LINKS
 * 4. The form collects user data, then redirects to Razorpay for payment
 */

// Replace these with your actual Razorpay Payment Links
const PAYMENT_LINKS = {
  earlyBird: 'https://rzp.io/l/your-early-bird-link',
  regular: 'https://rzp.io/l/your-regular-link',
  vip: 'https://rzp.io/l/your-vip-link',
};

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    ticketType: 'regular',
    tshirtSize: 'M',
  });

  const ticketPrices = {
    earlyBird: 499,
    regular: 999,
    vip: 2499,
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error on change
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  // Validate Step 1
  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.phone.trim() || formData.phone.length < 10) newErrors.phone = 'Valid phone number is required';
    if (!formData.age || formData.age < 5 || formData.age > 120) newErrors.age = 'Valid age is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && !validateStep1()) return;
    setStep(step + 1);
  };
  const handleBack = () => setStep(step - 1);

  // Save registration to Supabase, then redirect to Razorpay Payment Link
  const handlePayment = async () => {
    setLoading(true);
    const amount = ticketPrices[formData.ticketType];

    try {
      // 1. Save registration to Supabase (status: pending)
      const res = await fetch(`${SUPABASE_URL}/rest/v1/registrations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Prefer': 'return=representation',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          age: parseInt(formData.age),
          ticket_type: formData.ticketType,
          tshirt_size: formData.tshirtSize,
          amount: amount,
          payment_status: 'pending',
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to save registration');
      }

      // 2. Redirect to Razorpay Payment Link
      const paymentLink = PAYMENT_LINKS[formData.ticketType];
      window.open(paymentLink, '_blank');

      // Show success message
      alert('Registration saved! You will be redirected to the payment page. Complete payment to confirm your booking.');

    } catch (error) {
      console.error('Registration failed:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 shadow-2xl">
      <h2 className="text-3xl font-heading font-bold text-center mb-6">Registration</h2>
      
      {/* Step Indicators */}
      <div className="flex justify-between mb-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className={`flex items-center ${i < 3 ? 'w-full' : ''}`}>
             <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step >= i ? 'bg-primary text-white' : 'bg-gray-700 text-gray-400'}`}>
               {i}
             </div>
             {i < 3 && <div className={`flex-1 h-1 mx-2 ${step > i ? 'bg-primary' : 'bg-gray-700'}`}></div>}
          </div>
        ))}
      </div>

      <motion.div
        key={step}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
      >
        {/* STEP 1: Personal Details */}
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="w-full bg-white/10 border border-white/20 rounded-lg p-3 focus:outline-none focus:border-primary text-white placeholder-gray-400" />
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="w-full bg-white/10 border border-white/20 rounded-lg p-3 focus:outline-none focus:border-primary text-white placeholder-gray-400" />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full bg-white/10 border border-white/20 rounded-lg p-3 focus:outline-none focus:border-primary text-white placeholder-gray-400" />
              {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
            </div>
            <div>
              <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} className="w-full bg-white/10 border border-white/20 rounded-lg p-3 focus:outline-none focus:border-primary text-white placeholder-gray-400" />
              {errors.age && <p className="text-red-400 text-sm mt-1">{errors.age}</p>}
            </div>
            <button onClick={handleNext} className="w-full bg-primary hover:bg-orange-600 text-white font-bold py-3 rounded-lg mt-4 transition-colors">Next</button>
          </div>
        )}

        {/* STEP 2: Ticket Selection */}
        {step === 2 && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Select Ticket Type</h3>
            {Object.entries(ticketPrices).map(([type, price]) => (
              <label key={type} className={`block p-4 rounded-lg border cursor-pointer transition-all ${formData.ticketType === type ? 'border-primary bg-primary/20' : 'border-white/20 hover:bg-white/5'}`}>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="ticketType" value={type} checked={formData.ticketType === type} onChange={handleChange} className="accent-primary" />
                    <span className="capitalize text-lg">{type.replace(/([A-Z])/g, ' $1').trim()}</span>
                  </div>
                  <span className="font-bold text-xl">₹{price}</span>
                </div>
              </label>
            ))}
            <div className="flex gap-4 mt-6">
              <button onClick={handleBack} className="w-1/2 bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 rounded-lg transition-colors">Back</button>
              <button onClick={handleNext} className="w-1/2 bg-primary hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition-colors">Next</button>
            </div>
          </div>
        )}

        {/* STEP 3: Summary & Pay */}
        {step === 3 && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Additional Preferences</h3>
            <select name="tshirtSize" value={formData.tshirtSize} onChange={handleChange} className="w-full bg-white/10 border border-white/20 rounded-lg p-3 focus:outline-none focus:border-primary text-white">
              <option value="S">Small</option>
              <option value="M">Medium</option>
              <option value="L">Large</option>
              <option value="XL">Extra Large</option>
            </select>
             <div className="bg-white/5 p-4 rounded-lg mt-4">
               <h4 className="font-bold text-lg mb-2">Summary</h4>
               <p className="flex justify-between"><span>Name:</span> <span>{formData.name}</span></p>
               <p className="flex justify-between"><span>Email:</span> <span>{formData.email}</span></p>
               <p className="flex justify-between"><span>Ticket:</span> <span className="capitalize">{formData.ticketType.replace(/([A-Z])/g, ' $1').trim()}</span></p>
               <p className="flex justify-between font-bold text-xl mt-2 pt-2 border-t border-white/10"><span>Total:</span> <span>₹{ticketPrices[formData.ticketType]}</span></p>
             </div>
            <div className="flex gap-4 mt-6">
              <button onClick={handleBack} className="w-1/2 bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 rounded-lg transition-colors">Back</button>
              <button onClick={handlePayment} disabled={loading} className="w-1/2 bg-secondary hover:bg-green-600 text-black font-bold py-3 rounded-lg transition-colors flex justify-center items-center gap-2">
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                    Processing...
                  </span>
                ) : 'Pay Now →'}
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default RegistrationForm;
