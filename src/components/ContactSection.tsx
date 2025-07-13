
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
          <div className="section-header-enhanced">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white">
              Let's Connect
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
              Ready to discuss your next product innovation? Let's build something amazing together.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="card-enhanced p-8">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Let's Build Something Amazing</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                I'm passionate about leveraging AI and data to create products that solve real business problems. 
                Whether you're looking to discuss product strategy, explore AI-driven solutions, or connect about 
                the future of product management, I'd love to hear from you.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-6">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Currently interested in:</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Senior Product Manager opportunities</li>
                  <li>• AI/ML product leadership roles</li>
                  <li>• Product strategy consulting</li>
                  <li>• Speaking engagements on AI in product</li>
                </ul>
              </div>
              <div className="space-y-4">
                <a
                  href="mailto:lankalikhith15@gmail.com"
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary transition-colors group magnetic-hover"
                >
                  <Mail className="mr-3 group-hover:scale-110 transition-transform" size={20} />
                  lankalikhith15@gmail.com
                </a>
                <a
                  href="https://linkedin.com/in/likhith-lanka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary transition-colors group magnetic-hover"
                >
                  <Linkedin className="mr-3 group-hover:scale-110 transition-transform" size={20} />
                  Likhith Lanka
                </a>
              </div>
            </div>
            <div className="card-enhanced p-8">
              <form onSubmit={handleSubmit} className="form-enhanced space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="button-enhanced w-full justify-center"
                >
                  <Send size={20} />
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
