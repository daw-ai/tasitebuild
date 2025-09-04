import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ArrowRight, CheckCircle, Star, Users, TrendingUp, Clock, Target, Zap, Award, ChevronDown } from 'lucide-react'
import './App.css'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-900">
              TechAscension
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('program')}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Program
              </button>
              <button 
                onClick={() => scrollToSection('results')}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Results
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Success Stories
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                FAQ
              </button>
              <Button 
                onClick={() => scrollToSection('cta')}
                className="bg-black text-white hover:bg-gray-800"
              >
                Book Free Call
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gray-100 text-gray-800 hover:bg-gray-200">
              🚀 Join 500+ Tech Professionals Who Made The Switch
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Land Your Dream Tech Role in{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                90 Days
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
                Book Your Free Strategy Call
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
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
              <div className="flex -space-x-2">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                ))}
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
        <div className="text-center mt-16">
          <ChevronDown 
            className="w-6 h-6 text-gray-400 mx-auto animate-bounce cursor-pointer"
            onClick={() => scrollToSection('social-proof')}
          />
        </div>
      </section>

      {/* Social Proof Bar */}
      <section id="social-proof" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-600 mb-8">
            Our candidates now work at Silicon Valley's top tech companies
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center opacity-60">
            {['Google', 'Meta', 'Apple', 'Netflix', 'Uber', 'Airbnb', 'Stripe', 'Shopify'].map((company) => (
              <div key={company} className="text-center">
                <div className="text-2xl font-bold text-gray-400">{company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Tired of Applying and Getting Ghosted?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <p className="text-gray-600">You've sent 100+ applications with no response</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <p className="text-gray-600">You don't know how to network effectively in tech</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <p className="text-gray-600">You struggle with technical interviews and coding challenges</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <p className="text-gray-600">You're unsure which tech roles match your background</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <p className="text-gray-600">You lack confidence in salary negotiations</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <p className="text-gray-600">You feel overwhelmed by the tech industry's complexity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="program" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">THE TECHASCENSION METHOD</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              A Tech Career is for Everyone
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 3-pillar system has helped 500+ professionals land roles at top tech companies, 
              regardless of their background.
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
      <section id="results" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              We've helped 500+ candidates from every background land great tech jobs
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <div className="text-5xl font-bold text-gray-900 mb-2">$125k</div>
              <div className="text-gray-600">Average salary</div>
            </div>
            <div className="p-8">
              <div className="text-5xl font-bold text-gray-900 mb-2">2,500+</div>
              <div className="text-gray-600">Interviews completed</div>
            </div>
            <div className="p-8">
              <div className="text-5xl font-bold text-gray-900 mb-2">78</div>
              <div className="text-gray-600 flex items-center justify-center">
                days
                <span className="text-sm ml-1">Average job placement time</span>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-black text-white hover:bg-gray-800"
              onClick={() => scrollToSection('cta')}
            >
              Get pricing & details
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-gray-50">
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
                "Their passion for helping candidates showed from the first day. 
                You would never guess she was promoted to a 
                Mid-Market AE role."
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
      <section id="faq" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Is TechAscension for you?
            </h2>
          </div>
          
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                I don't have a tech background. Can I still succeed?
              </h3>
              <p className="text-gray-600">
                Absolutely! 70% of our successful candidates came from non-tech backgrounds. 
                We specialize in helping career changers leverage their existing skills and 
                experience to break into tech roles.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                I've spent money before and got burned. How do I know this will work?
              </h3>
              <p className="text-gray-600">
                We understand your concern. That's why we offer a 90-day guarantee. If you don't 
                land a tech role within 90 days of completing our program, we'll work with you 
                for free until you do.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What if I fail again? I'm tired of trying and getting rejected.
              </h3>
              <p className="text-gray-600">
                Our system is different. We don't just teach you to apply to jobs - we teach you 
                to become the candidate that companies actively want to hire. Our 94% success rate 
                speaks for itself.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                I'm worried I'll still be jobless in 6 months. What if nothing changes?
              </h3>
              <p className="text-gray-600">
                With our proven system and personal coaching, change is inevitable. We've never 
                had a committed student not land a role. Plus, our guarantee ensures you're 
                protected.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="cta" className="py-20 px-6 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Change Your Career Trajectory?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the 500+ professionals who've transformed their careers with TechAscension. 
            Book your free strategy call today.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-4"
          >
            Book Your Free Strategy Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm text-gray-400 mt-4">
            No commitment required • 30-minute call • Personalized action plan
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-gray-900 mb-4">TechAscension</div>
              <p className="text-gray-600">
                Helping professionals break into high-paying tech careers through 
                elite coaching and proven systems.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <div className="space-y-2 text-gray-600">
                <div>About</div>
                <div>Success Stories</div>
                <div>Blog</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
              <div className="space-y-2 text-gray-600">
                <div>Free Course</div>
                <div>Career Guide</div>
                <div>Salary Calculator</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
              <div className="space-y-2 text-gray-600">
                <div>hello@techascension.com</div>
                <div>LinkedIn</div>
                <div>Twitter</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2024 TechAscension. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

