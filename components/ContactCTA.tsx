import React, { useState, useCallback } from 'react';

const ContactCTA: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.message) {
      setError('Please fill out all required fields.');
      setSuccess(false);
      return;
    }
    setError(null);
    setIsSubmitting(true);
    setSuccess(false);

    try {
      // Send form data to Formspree
      const response = await fetch('https://formspree.io/f/mgvzlbbg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setError('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  }, [formData]);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Contact Info */}
          <div className="max-w-md">
             <h2 className="text-sm font-semibold tracking-widest text-gray-500 uppercase">REACH OUT TO US</h2>
             <p className="mt-4 font-serif text-3xl md:text-4xl text-gray-900 leading-tight">
                Have a project in mind? Let's talk.
             </p>
             <p className="mt-6 text-base text-gray-600 leading-relaxed">
               Contact us today to get a quote on your project or learn more about our company. We look forward to speaking with you and turning your vision into a reality.
             </p>
             <div className="mt-10 pt-10 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-800 tracking-wider uppercase mb-4">Contact Information</h4>
                <p className="text-gray-600 mb-2">Parker, CO</p>
                <p className="text-gray-600">
                    Email: <a href="mailto:info@simpleconstructions.net" className="text-primary hover:underline">info@simpleconstructions.net</a>
                </p>
             </div>
          </div>
          
          {/* Right Column: Form */}
          <div>
            {success ? (
                 <div className="p-8 bg-green-50 border border-green-200 rounded-sm text-center">
                    <h3 className="text-xl font-semibold text-green-800">Thank You!</h3>
                    <p className="mt-2 text-green-700">Your message has been sent successfully. We will get back to you shortly.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} noValidate>
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                            <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-primary focus:border-primary" />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                            <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-primary focus:border-primary" />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Your Phone Number *</label>
                            <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-primary focus:border-primary" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email Address *</label>
                            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-primary focus:border-primary" />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">How Can We Help You? *</label>
                            <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-primary focus:border-primary"></textarea>
                        </div>
                    </div>
                    {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
                    <div className="mt-6">
                        <button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-3 px-8 rounded-sm transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed">
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </div>
                </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;