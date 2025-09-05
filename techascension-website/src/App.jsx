import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, Star, ChevronDown, ChevronUp, Target, Zap, TrendingUp } from 'lucide-react';
import './App.css';

// Import person images
import Person1 from './assets/Person1.avif';
import person2 from './assets/person2.avif';
import Person3 from './assets/Person3.avif';
import Person4 from './assets/Person4.avif';
import person5 from './assets/person5.avif';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "I've been burned by other programs before. How is this different?",
      answer: "We get it, many of our students felt the exact same way. That's exactly why we offer a 100% money-back guarantee. If you follow our system and don't land a job you love in 60 days, you get every penny back. We're not a course or group program—this is direct 1-on-1 mentorship where we personally guide you through the exact process our founder used to go from 0 to landing interviews at companies like Anthropic. You get our undivided attention until you succeed."
    },
    {
      question: "How do I know I won't still be stuck in 6 months?",
      answer: "That's exactly why we guarantee results in 60 days, not 6 months. Most of our students start getting 2+ interviews per week within the first 30 days. If you're still jobless after following our system, we refund 100% of your investment. We're so confident because this isn't theory—it's the proven path I personally took and have now systemized."
    },
    {
      question: "Do you guarantee placement?",
      answer: "We will work with you until you find work in the industry."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-900">
              TechAscension
            </div>
            <div className="hidden md:flex items-center space-x-12">
              <button 
                onClick={() => scrollToSection('program')}
                className="text-gray-600 hover:text-gray-900 transition-colors no-underline"
              >
                Program
              </button>
              <button 
                onClick={() => scrollToSection('results')}
                className="text-gray-600 hover:text-gray-900 transition-colors no-underline"
              >
                Results
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-600 hover:text-gray-900 transition-colors no-underline"
              >
                Success Stories
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-gray-600 hover:text-gray-900 transition-colors no-underline"
              >
                FAQ
              </button>
              <Button 
                onClick={() => scrollToSection('cta')}
                className="kiln-button"
              >
                Schedule A Call
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-center text-gray-600 mb-8">
            🚀Unlock The Power Of Top 1% Tech
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Land Your Dream Tech Role in{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                60 Days
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We provide elite 1-on-1 coaching and a proven system to help you break into 
              high-paying tech roles at top companies. No CS degree required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-4"
                onClick={() => scrollToSection('cta')}
              >
                Schedule A Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4"
                onClick={() => scrollToSection('results')}
              >
                See Our Results
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-2 text-sm text-gray-500 mt-16">
              <div className="flex -space-x-2">
                <img src={Person1} alt="Person 1" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                <img src={person2} alt="Person 2" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                <img src={Person3} alt="Person 3" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                <img src={Person4} alt="Person 4" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                <img src={person5} alt="Person 5" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
              </div>
              <span>4.9/5 from 200+ candidates</span>
              <div className="flex text-yellow-400">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section id="social-proof" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-600 mb-8">
            Our candidates have landed at these elite tech companies
          </p>
          <div className="overflow-hidden">
            <div className="flex animate-scroll space-x-8 items-center">
              {['Google', 'Meta', 'Apple', 'Netflix', 'Uber', 'Airbnb', 'Stripe', 'Shopify', 'Google', 'Meta', 'Apple', 'Netflix'].map((company, index) => (
                <div key={index} className="text-center flex-shrink-0">
                  <div className="text-2xl font-bold text-gray-400 whitespace-nowrap">{company}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-8 border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Tired of Applying and Getting Ghosted?
          </h2>
          <div className="grid md:grid-cols-1 gap-8 text-left">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <p className="text-lg text-gray-700">
                  You're ready to break into high-paying tech sales but don't have a step-by-step system to get there
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <p className="text-lg text-gray-700">
                  You've been applying online and getting ghosted because you're stuck in the broken HR application process
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <p className="text-lg text-gray-700">
                  You want to bypass traditional recruiting and get directly in front of hiring managers at elite companies
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <p className="text-lg text-gray-700">
                  You're looking for proven interview strategies and personal mentorship from someone who's actually walked this path
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="program" className="py-24 px-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">OUR PROCESS</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We help ambitious individuals like you launch high-paying careers in tech sales, bypassing traditional recruiting 
              to get directly in front of elite hiring managers. Our proven system is designed for those ready to take control 
              of their income, time, and location, ensuring you land a role you love.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategic Positioning</h3>
              <p className="text-gray-600 leading-relaxed">
                We craft a compelling narrative that makes you stand out. From optimizing your LinkedIn 
                to building a portfolio that showcases your unique value proposition.
              </p>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Interview Mastery</h3>
              <p className="text-gray-600 leading-relaxed">
                Go into every interview with unshakeable confidence. We provide mock interviews, 
                technical prep, and behavioral question frameworks that guarantee success.
              </p>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Salary Negotiation</h3>
              <p className="text-gray-600 leading-relaxed">
                Get paid what you're worth, from day one. Our negotiation strategies have helped 
                clients secure 40-60% salary increases in their new tech roles.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-24 px-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              We've helped candidates from every background land great tech jobs
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <div className="text-5xl font-bold text-gray-900 mb-2">$95k</div>
              <div className="text-gray-600">Average salary</div>
            </div>
            <div className="p-8">
              <div className="text-5xl font-bold text-gray-900 mb-2">2,500+</div>
              <div className="text-gray-600">Interviews completed</div>
            </div>
            <div className="p-8">
              <div className="text-5xl font-bold text-gray-900 mb-2">23</div>
              <div className="text-gray-600 flex items-center justify-center">
                days
                <span className="text-sm ml-1">Average job placement time</span>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="kiln-button"
              onClick={() => scrollToSection('cta')}
            >
              Schedule A Call
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What our candidates say about us...
            </h2>
            <p className="text-xl text-gray-600">
              Some have no experience, others are seasoned professionals. But all our candidates 
              seek a fast, fun, and simple job search so they can get to building a great career in tech.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex text-yellow-400 mb-4">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "I went from struggling to land a role in tech sales to landing at a top 
                startup. The program gave me the confidence and strategy I needed."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold text-gray-900">Sarah Chen</div>
                  <div className="text-sm text-gray-600">Sales Engineer, Stripe</div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex text-yellow-400 mb-4">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "No experience? No problem. We got into interviews at 12 
                companies, and he chose an SDR role at Assembled, a top 
                startup that counts big-name customers like Etsy."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold text-gray-900">Marcus Johnson</div>
                  <div className="text-sm text-gray-600">SDR, Assembled</div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex text-yellow-400 mb-4">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "Their passion for helping candidates showed from the first day. You would never guess she was promoted to a Mid-Market AE role."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold text-gray-900">Angela Rodriguez</div>
                  <div className="text-sm text-gray-600">AE, Vercel</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Is TechAscension for you?
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <Card key={index} className="p-6 cursor-pointer" onClick={() => toggleFAQ(index)}>
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
                  {openFAQ === index ? <ChevronUp className="w-5 h-5 text-gray-600" /> : <ChevronDown className="w-5 h-5 text-gray-600" />}
                </div>
                {openFAQ === index && (
                  <p className="mt-4 text-gray-600 leading-relaxed">{item.answer}</p>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="cta" className="py-20 px-6 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Change Your Career Trajectory?
          </h2>
          <p className="text-xl mb-8">
            Join the professionals who've transformed their careers with Tech Ascension.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4"
            onClick={() => scrollToSection('cta')}
          >
            Schedule A Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-gray-400 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="mb-4">
            <span className="text-lg font-bold text-white">TechAscension</span>
          </div>
          <p className="mb-6">
            &copy; {new Date().getFullYear()} TechAscension. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
