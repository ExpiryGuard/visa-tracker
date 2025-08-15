import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertTriangle, Clock, Users, Shield, Zap, Star, ArrowRight, FileText, BarChart3, Smartphone } from "lucide-react"

export default function LandingPage() {
  return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center">
                <Shield className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-2xl font-bold text-gray-900">ExpiryGuard</span>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#features" className="text-gray-500 hover:text-gray-900 transition-colors">Features</a>
                <a href="#pricing" className="text-gray-500 hover:text-gray-900 transition-colors">Pricing</a>
                <a href="#testimonials" className="text-gray-500 hover:text-gray-900 transition-colors">Reviews</a>
                <a href="#faq" className="text-gray-500 hover:text-gray-900 transition-colors">FAQ</a>
                <a href="#contact" className="text-gray-500 hover:text-gray-900 transition-colors">Contact</a>
              </nav>
              <div className="flex items-center space-x-4">
                <Button variant="outline">Sign In</Button>
                <Button>Get Started</Button>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <Badge className="mb-4">Made for UAE Companies</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Never Miss Another
              <span className="text-blue-600"> Visa Renewal</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Automated visa and Emirates ID tracking for UAE companies. Get alerts before expiry,
              avoid penalties, and stay MOHRE compliant effortlessly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="text-lg px-8 py-3">
                Start 30-Day Free Trial
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                Watch Demo
              </Button>
            </div>
            <p className="text-sm text-gray-500 mb-12">No credit card required • Setup in 5 minutes</p>

            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                Built by UAE industry insider
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-blue-500 mr-2" />
                30-day money-back guarantee
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-orange-500 mr-2" />
                Personal WhatsApp support
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="bg-red-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Visa Overstays Cost UAE Companies Millions
              </h2>
              <p className="text-xl text-gray-600">
                One missed renewal can result in hefty fines and compliance issues
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-red-200 bg-white">
                <CardHeader>
                  <AlertTriangle className="h-12 w-12 text-red-500 mb-2" />
                  <CardTitle className="text-red-700">AED 25,000+ Fines</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Overstay penalties can reach thousands of dirhams per employee,
                    plus potential visa restrictions.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• AED 125/day overstay fine</li>
                    <li>• Visa ban penalties</li>
                    <li>• MOHRE quota restrictions</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-yellow-200 bg-white">
                <CardHeader>
                  <Clock className="h-12 w-12 text-yellow-500 mb-2" />
                  <CardTitle className="text-yellow-700">HR Time Waste</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    HR teams spend hours manually tracking expiry dates across
                    spreadsheets and calendar reminders.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• 5+ hours/week on tracking</li>
                    <li>• Manual spreadsheet errors</li>
                    <li>• Missed deadline stress</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-orange-200 bg-white">
                <CardHeader>
                  <Users className="h-12 w-12 text-orange-500 mb-2" />
                  <CardTitle className="text-orange-700">Compliance Risk</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    MOHRE inspections and labor quota violations can impact
                    your company reputation and operations.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Surprise MOHRE inspections</li>
                    <li>• Emiratization violations</li>
                    <li>• Business license risks</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Solution Preview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                See ExpiryGuard in Action
              </h2>
              <p className="text-xl text-gray-600">
                A simple dashboard that saves you hours and thousands of dirhams
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-8 text-white">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Dashboard Preview</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3" />
                      Real-time visa status for all employees
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3" />
                      Color-coded expiry warnings
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3" />
                      Automated WhatsApp alerts
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3" />
                      MOHRE compliance reports
                    </li>
                  </ul>
                  <Button variant="secondary" size="lg" className="mt-6">
                    Watch 2-minute Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-green-500/20 rounded">
                      <span>Ahmed Al-Rashid</span>
                      <Badge className="bg-green-500">120 days left</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-yellow-500/20 rounded">
                      <span>Sarah Mohammed</span>
                      <Badge className="bg-yellow-500 text-black">25 days left</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-red-500/20 rounded">
                      <span>John Smith</span>
                      <Badge className="bg-red-500">7 days left</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Everything You Need for Visa Compliance
              </h2>
              <p className="text-xl text-gray-600">
                Automate your visa tracking and never worry about renewals again
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Zap className="h-8 w-8 text-blue-600 mb-2" />
                  <CardTitle>Automated Alerts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">
                    WhatsApp and email alerts 90, 60, 30, and 7 days before expiry.
                    Never miss a deadline again.
                  </p>
                  <Badge variant="outline">Most Popular</Badge>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Users className="h-8 w-8 text-green-600 mb-2" />
                  <CardTitle>Employee Dashboard</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">
                    Track all employee documents in one place. Visa, Emirates ID,
                    passport, and medical test expiries.
                  </p>
                  <Badge variant="outline">Essential</Badge>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Shield className="h-8 w-8 text-purple-600 mb-2" />
                  <CardTitle>MOHRE Compliance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">
                    Real-time compliance dashboard with labor quota tracking
                    and Emiratization monitoring.
                  </p>
                  <Badge variant="outline">Pro Feature</Badge>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <FileText className="h-8 w-8 text-indigo-600 mb-2" />
                  <CardTitle>Bulk Import</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">
                    Import employee data from Excel/CSV. Set up hundreds
                    of employees in minutes, not hours.
                  </p>
                  <Badge variant="outline">Time Saver</Badge>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <BarChart3 className="h-8 w-8 text-red-600 mb-2" />
                  <CardTitle>Risk Reports</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">
                    Generate compliance reports for management and government
                    inspections. Export audit trails easily.
                  </p>
                  <Badge variant="outline">Enterprise</Badge>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Smartphone className="h-8 w-8 text-yellow-600 mb-2" />
                  <CardTitle>Mobile Ready</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">
                    Access your dashboard on any device. Get alerts on your phone
                    and manage renewals on the go.
                  </p>
                  <Badge variant="outline">Coming Soon</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Founder Story */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why I Built ExpiryGuard
              </h2>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="bg-blue-500 rounded-full h-24 w-24 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                    MA
                  </div>
                  <div className="text-left">
                    <blockquote className="text-lg text-gray-700 italic mb-4">
                      "Working in Dubai's business setup industry for 3 years, I watched companies
                      lose thousands of dirhams to visa overstay fines - not because they didn't care,
                      but because tracking hundreds of employee visa expiries in Excel was impossible."
                    </blockquote>
                    <div className="mb-4">
                      <p className="text-gray-600">
                        I saw HR teams drowning in spreadsheets, companies getting surprise MOHRE violations,
                        and employees stressed about their visa status. The existing solutions were either
                        too complex or didn't understand UAE's unique requirements.
                      </p>
                    </div>
                    <div className="mb-4">
                      <p className="text-gray-600">
                        That's when I decided to build ExpiryGuard - a simple, UAE-focused solution that
                        automates what should never be manual. No more missed deadlines, no more fines,
                        no more stress.
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div>
                        <p className="font-semibold text-gray-900">Maharoof P A</p>
                        <p className="text-sm text-gray-500">Founder & Developer</p>
                        <p className="text-xs text-gray-400">3+ years in UAE business setup industry</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why ExpiryGuard is Different
              </h2>
              <p className="text-xl text-gray-600">
                Built by someone who understands UAE business challenges firsthand
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-blue-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">UAE Native</h3>
                  <p className="text-sm text-gray-600">
                    Built specifically for UAE regulations, MOHRE compliance, and local business practices.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-green-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Industry Experience</h3>
                  <p className="text-sm text-gray-600">
                    Created by someone with 3+ years in UAE business setup industry who knows the real pain points.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-purple-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Simple & Fast</h3>
                  <p className="text-sm text-gray-600">
                    No complex setup, no training required. Upload your data and start getting alerts in minutes.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-orange-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Try Risk-Free</h3>
                  <p className="text-sm text-gray-600">
                    30-day free trial, no credit card required. If it doesn't save you money, don't pay.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Personal Touch */}
            <div className="mt-16 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  A Personal Commitment
                </h3>
                <div className="max-w-3xl mx-auto">
                  <p className="text-lg text-gray-700 mb-6">
                    I'm not a big corporation trying to sell you software. I'm a developer who worked
                    in this industry and felt the frustration personally. Every feature in ExpiryGuard
                    solves a real problem I witnessed or experienced myself.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 text-sm">
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-blue-600 font-semibold mb-1">Direct Access</div>
                      <div className="text-gray-600">Chat with me personally on WhatsApp for support</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-green-600 font-semibold mb-1">No Middlemen</div>
                      <div className="text-gray-600">Your feedback goes directly to the person building the product</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-purple-600 font-semibold mb-1">Continuous Improvement</div>
                      <div className="text-gray-600">Regular updates based on real user needs, not corporate decisions</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Choose the plan that fits your company size
              </p>
              <div className="inline-flex items-center bg-white rounded-full p-1 shadow-sm">
                <button className="px-6 py-2 bg-blue-500 text-white rounded-full text-sm font-medium">
                  Monthly
                </button>
                <button className="px-6 py-2 text-gray-500 text-sm font-medium">
                  Yearly (Save 20%)
                </button>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>Perfect for small companies</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">AED 200</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">That's AED 10 per employee</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      Up to 20 employees
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      Email alerts
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      Basic dashboard
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      CSV import
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      Email support
                    </li>
                  </ul>
                  <Button className="w-full">Start 30-Day Free Trial</Button>
                  <p className="text-xs text-gray-500 text-center mt-2">No credit card required</p>
                </CardContent>
              </Card>
              <Card className="border-blue-500 relative hover:shadow-lg transition-shadow">
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-500 text-white">
                    Most Popular
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle>Professional</CardTitle>
                  <CardDescription>For growing companies</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">AED 400</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">That's AED 4 per employee</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      Up to 100 employees
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      WhatsApp + Email alerts
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      Advanced dashboard
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      Compliance reports
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      Priority support
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      Document storage
                    </li>
                  </ul>
                  <Button className="w-full">Start 30-Day Free Trial</Button>
                  <p className="text-xs text-gray-500 text-center mt-2">No credit card required</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>For large organizations</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">AED 800</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Unlimited employees</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      Unlimited employees
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      Custom integrations
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      API access
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      Dedicated support
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      Training & onboarding
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      Custom reports
                    </li>
                  </ul>
                  <Button className="w-full">Contact Sales</Button>
                  <p className="text-xs text-gray-500 text-center mt-2">Custom pricing available</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about ExpiryGuard
              </p>
            </div>
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-left">How quickly can we get started?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Setup takes less than 10 minutes. Simply upload your employee data via CSV,
                    configure your alert preferences, and you're ready to go. Our team can help
                    with data migration if needed.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-left">Is our employee data secure?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Yes, absolutely. We use bank-level encryption, comply with UAE data protection
                    laws, and store all data in secure UAE-based servers. Your data never leaves
                    the UAE and is never shared with third parties.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-left">Do you integrate with existing HR systems?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Yes, we offer integrations with popular HR systems used in the UAE. We also
                    provide API access for custom integrations. Contact our team to discuss your
                    specific requirements.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-left">What types of alerts do you send?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We send WhatsApp and email alerts at 90, 60, 30, 15, and 7 days before expiry.
                    You can customize these timelines and choose who receives which alerts - HR team,
                    employees, or PRO agents.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-left">Can we cancel anytime?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Yes, there are no long-term contracts. You can cancel your subscription anytime
                    with 30 days notice. We also offer a full money-back guarantee within the first
                    30 days if you're not completely satisfied.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-left">Do you provide training and support?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Yes, we provide comprehensive onboarding, training videos, and ongoing support.
                    Professional and Enterprise plans include priority WhatsApp support with response
                    times under 2 hours during business hours.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Eliminate Visa Compliance Stress?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join the growing number of UAE companies choosing authentic, locally-built solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Start Your 30-Day Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600">
                Schedule Demo
              </Button>
            </div>
            <p className="text-blue-200">30-day free trial • No credit card required • Cancel anytime</p>

            {/* Contact Info */}
            <div className="mt-12 pt-8 border-t border-blue-500">
              <div className="grid md:grid-cols-3 gap-6 text-blue-100">
                <div>
                  <h4 className="font-semibold text-white mb-2">WhatsApp Support</h4>
                  <p>+971 50 123 4567</p>
                  <p className="text-sm">Available 9AM - 6PM</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Email</h4>
                  <p>support@expiryguard.ae</p>
                  <p className="text-sm">Response within 2 hours</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Office</h4>
                  <p>Dubai Internet City</p>
                  <p className="text-sm">Building 3, Office 201</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <Shield className="h-8 w-8 text-blue-400" />
                  <span className="ml-2 text-xl font-bold">ExpiryGuard</span>
                </div>
                <p className="text-gray-400 mb-4">
                  Keeping UAE companies compliant, one visa at a time.
                </p>
                <div className="flex space-x-4">
                  <div className="bg-gray-800 p-2 rounded hover:bg-gray-700 cursor-pointer">
                    <span className="text-sm">LinkedIn</span>
                  </div>
                  <div className="bg-gray-800 p-2 rounded hover:bg-gray-700 cursor-pointer">
                    <span className="text-sm">Twitter</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Product</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                  <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Demo</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Support</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">WhatsApp Support</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">System Status</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400">
                  &copy; 2025 ExpiryGuard. All rights reserved. Made with ❤️ in Dubai.
                </p>
                <div className="flex items-center space-x-4 mt-4 md:mt-0">
                  <Badge variant="outline" className="border-gray-600 text-gray-400">
                    🇦🇪 UAE Based
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-400">
                    🔒 GDPR Compliant
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-400">
                    ✅ MOHRE Approved
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
  )
}