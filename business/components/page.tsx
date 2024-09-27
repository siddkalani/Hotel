"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ChevronRight, BarChart, Users, Briefcase, LineChart, Lightbulb, Globe, CheckCircle, Phone, Mail, MapPin, Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeService, setActiveService] = useState("strategy")

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="flex flex-col w-full h-screen">
      <header className="px-4 lg:px-6 h-20 flex items-center bg-white shadow-sm fixed w-full z-50">
        <Link className="flex items-center justify-center" href="#">
          <Image src="/placeholder.svg?height=40&width=40" alt="Logo" width={40} height={40} className="mr-2" />
          <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-teal-400 text-transparent bg-clip-text">Centric Consulting</span>
        </Link>
        <nav className={`ml-auto flex gap-4 sm:gap-6 ${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-20 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0`}>
          <Link className="text-sm font-medium hover:text-blue-600 transition-colors" href="#services">
            Services
          </Link>
          <Link className="text-sm font-medium hover:text-blue-600 transition-colors" href="#industries">
            Industries
          </Link>
          <Link className="text-sm font-medium hover:text-blue-600 transition-colors" href="#insights">
            Insights
          </Link>
          <Link className="text-sm font-medium hover:text-blue-600 transition-colors" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:text-blue-600 transition-colors" href="#careers">
            Careers
          </Link>
        </nav>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="ml-4" variant="outline">
              Contact Us
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Contact Us</DialogTitle>
              <DialogDescription>Fill out the form below and we'll get back to you shortly.</DialogDescription>
            </DialogHeader>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your email" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="How can we help you?" />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </DialogContent>
        </Dialog>
        <Button variant="ghost" size="icon" className="ml-2 md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </header>
      <main className="flex-1 pt-20">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-cover bg-center relative">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Transforming Businesses for the Future
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Drive innovation, optimize operations, and achieve sustainable growth with our expert business consulting services.
                </p>
              </div>
              <div className="space-x-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-blue-600 text-white hover:bg-blue-700">
                      Get Started
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Start Your Transformation Journey</DialogTitle>
                      <DialogDescription>Tell us about your business needs and we'll create a tailored solution.</DialogDescription>
                    </DialogHeader>
                    <form className="space-y-4">
                      <div>
                        <Label htmlFor="company">Company Name</Label>
                        <Input id="company" placeholder="Your company name" />
                      </div>
                      <div>
                        <Label htmlFor="industry">Industry</Label>
                        <Input id="industry" placeholder="Your industry" />
                      </div>
                      <div>
                        <Label htmlFor="challenge">Business Challenge</Label>
                        <Textarea id="challenge" placeholder="Describe your main business challenge" />
                      </div>
                      <Button type="submit" className="w-full">Submit</Button>
                    </form>
                  </DialogContent>
                </Dialog>
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="services">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">Our Services</h2>
            <Tabs defaultValue={activeService} className="w-full" onValueChange={setActiveService}>
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
                <TabsTrigger value="strategy">Strategy</TabsTrigger>
                <TabsTrigger value="operations">Operations</TabsTrigger>
                <TabsTrigger value="technology">Technology</TabsTrigger>
                <TabsTrigger value="innovation">Innovation</TabsTrigger>
                <TabsTrigger value="project">Project Management</TabsTrigger>
                <TabsTrigger value="digital">Digital Transformation</TabsTrigger>
              </TabsList>
              <TabsContent value="strategy">
                <Card>
                  <CardHeader>
                    <CardTitle>Strategy & Operations</CardTitle>
                    <CardDescription>Align your business strategy with operational processes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Business model innovation</li>
                      <li>Market entry and expansion strategies</li>
                      <li>Operational excellence and process optimization</li>
                      <li>Supply chain management</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="operations">
                <Card>
                  <CardHeader>
                    <CardTitle>Organizational Change</CardTitle>
                    <CardDescription>Navigate complex transformations with expert guidance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Change management and cultural transformation</li>
                      <li>Organizational design and restructuring</li>
                      <li>Leadership development and coaching</li>
                      <li>Talent management and workforce planning</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="technology">
                <Card>
                  <CardHeader>
                    <CardTitle>Technology Solutions</CardTitle>
                    <CardDescription>Leverage cutting-edge technology to streamline operations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>IT strategy and roadmap development</li>
                      <li>Enterprise architecture and systems integration</li>
                      <li>Cloud migration and optimization</li>
                      <li>Cybersecurity and risk management</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="innovation">
                <Card>
                  <CardHeader>
                    <CardTitle>Innovation & Design</CardTitle>
                    <CardDescription>Foster a culture of innovation and design thinking</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Design thinking workshops and training</li>
                      <li>Product and service innovation</li>
                      <li>Customer experience design</li>
                      <li>Innovation lab setup and management</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="project">
                <Card>
                  <CardHeader>
                    <CardTitle>Program & Project Management</CardTitle>
                    <CardDescription>Ensure successful delivery of complex initiatives</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Project portfolio management</li>
                      <li>Agile and traditional project methodologies</li>
                      <li>PMO setup and optimization</li>
                      <li>Risk and issue management</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="digital">
                <Card>
                  <CardHeader>
                    <CardTitle>Digital Transformation</CardTitle>
                    <CardDescription>Revolutionize your business models with digital technologies</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Digital strategy development</li>
                      <li>Data analytics and AI implementation</li>
                      <li>IoT and Industry 4.0 solutions</li>
                      <li>Digital customer engagement</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">Why Choose Us</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CheckCircle className="w-10 h-10 mb-2 text-blue-600" />
                  <CardTitle>Experienced Team</CardTitle>
                </CardHeader>
                <CardContent>
                  Our consultants bring decades of industry experience and a track record of successful transformations across various sectors.
                </CardContent>
              </Card>
              <Card className="bg-white hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Users className="w-10 h-10 mb-2 text-blue-600" />
                  <CardTitle>Tailored Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  We develop customized solutions that address your unique challenges and align with your specific business goals and culture.
                </CardContent>
              </Card>
              <Card className="bg-white hover:shadow-lg transition-shadow">
                <CardHeader>
                  <BarChart className="w-10 h-10 mb-2 text-blue-600" />
                  <CardTitle>Proven Methodologies</CardTitle>
                </CardHeader>
                <CardContent>
                  Our tried-and-tested frameworks ensure consistent delivery of high-quality results across all engagements and industries.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Your Business?
                </h2>
                <p className="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Let's work together to unlock your organization's full potential and drive sustainable growth.
                </p>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-white text-blue-600 hover:bg-gray-100">
                    Schedule a Consultation
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Schedule a Consultation</DialogTitle>
                    <DialogDescription>Choose a date and time that works best for you.</DialogDescription>
                  </DialogHeader>
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Your email" />
                    </div>
                    <div>
                      <Label htmlFor="date">Preferred Date</Label>
                      <Input id="date" type="date" />
                    </div>
                    <div>
                      <Label htmlFor="time">Preferred Time</Label>
                      <Input id="time" type="time" />
                    </div>
                    <Button type="submit" className="w-full">Schedule</Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">Our Global Presence</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <MapPin className="w-10 h-10 mb-2 text-blue-600" />
                  <CardTitle>North America</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>New York, San Francisco, Toronto, Mexico City</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <MapPin className="w-10 h-10 mb-2 text-blue-600" />
                  <CardTitle>Europe</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>London, Paris, Berlin, Amsterdam</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <MapPin className="w-10 h-10 mb-2 text-blue-600" />
                  <CardTitle>Asia Pacific</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Singapore, Tokyo, Sydney, Mumbai</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>What industries do you specialize in?</AccordionTrigger>
                <AccordionContent>
                  We have extensive experience across various industries including technology, healthcare, finance, retail, and manufacturing. Our diverse team of consultants brings industry-specific knowledge to each engagement.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How long does a typical consulting project take?</AccordionTrigger>
                <AccordionContent>
                  The duration of our projects varies depending on the scope and complexity of the engagement. Some projects may be completed in a few weeks, while others can span several months. We work closely with our clients to establish realistic timelines and milestones.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What is your approach to digital transformation?</AccordionTrigger>
                <AccordionContent>
                  Our approach to digital transformation is holistic, considering technology, people, and processes. We start by assessing your current digital maturity, then develop a tailored roadmap that aligns with your business objectives. We focus on change management and capability building to ensure sustainable transformation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How do you measure the success of your consulting engagements?</AccordionTrigger>
                <AccordionContent>
                  We establish clear, measurable objectives at the outset of each engagement. These may include financial metrics, operational KPIs, or other relevant indicators. We regularly track progress and provide transparent reporting throughout the project, ensuring alignment with your goals.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-sm text-gray-400">Centric Consulting is a leading business and technology consulting firm, dedicated to guiding organizations through their most challenging transformations.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#services" className="hover:text-blue-400 transition-colors">Services</Link></li>
                <li><Link href="#industries" className="hover:text-blue-400 transition-colors">Industries</Link></li>
                <li><Link href="#insights" className="hover:text-blue-400 transition-colors">Insights</Link></li>
                <li><Link href="#careers" className="hover:text-blue-400 transition-colors">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><Phone className="w-4 h-4 mr-2" /> +1 (800) 555-1234</li>
                <li className="flex items-center"><Mail className="w-4 h-4 mr-2" /> info@centricconsulting.com</li>
                <li className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> 123 Business Ave, Suite 100, New York, NY 10001</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-blue-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </Link>
                <Link href="#" className="hover:text-blue-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                </Link>
                <Link href="#" className="hover:text-blue-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                </Link>
                <Link href="#" className="hover:text-blue-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">© 2023 Centric Consulting. All rights reserved.</p>
            <nav className="flex gap-4 mt-4 sm:mt-0">
              <Link className="text-sm text-gray-400 hover:text-white transition-colors" href="#">
                Privacy Policy
              </Link>
              <Link className="text-sm text-gray-400 hover:text-white transition-colors" href="#">
                Terms of Service
              </Link>
              <Link className="text-sm text-gray-400 hover:text-white transition-colors" href="#">
                Cookie Policy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}