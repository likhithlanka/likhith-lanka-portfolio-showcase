
import { useState } from 'react';
import { Mail, Linkedin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon."
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-width">
        <div className="observe-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            Let's Connect
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-900">Get in Touch</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm always interested in discussing product opportunities, sharing insights about 
                AI-driven development, or connecting with fellow product managers and entrepreneurs.
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:lankalikhith15@gmail.com"
                  className="flex items-center text-gray-600 hover:text-primary transition-colors group"
                >
                  <Mail className="mr-3 group-hover:scale-110 transition-transform" size={20} />
                  lankalikhith15@gmail.com
                </a>
                <a
                  href="https://linkedin.com/in/likhith-lanka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-primary transition-colors group"
                >
                  <Linkedin className="mr-3 group-hover:scale-110 transition-transform" size={20} />
                  Likhith Lanka
                </a>
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Your message..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="button-primary w-full flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
