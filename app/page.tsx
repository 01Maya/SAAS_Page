'use client'

import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"
import { NavLink } from "@/components/nav-link"
import { SectionObserver } from "@/components/section-observer"
import { TrackzIcon } from "@/components/icons"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Play, Mail, MessageSquare, Zap, BarChart3, Users, Settings, Sparkles, ChevronRight } from 'lucide-react'

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#solutions", label: "Solutions" },
  { href: "#features", label: "Features" },
  { href: "#analytics", label: "Analytics" },
  { href: "#cta", label: "Get Started" },
];

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <center>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center size-8 rounded bg-primary text-white">
              <TrackzIcon />
            </div>
            <span className="text-xl font-bold">Trackz</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium hover:text-primary transition-colors">
              Login
            </Link>
            <Button className="bg-primary hover:bg-primary/90">Sign Up</Button>
          </div>
          <MobileNav />
        </div>
      </header>

      <main className="flex-1">
        <SectionObserver id="hero">
          <section className="py-20">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-8 text-center">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                    One smart solution tool
                    <br />
                    for your business
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                    CRM and analytics for you to run the whole stack of your business, lightweight, customizable, and powered by AI.
                  </p>
                </div>
                <div className="flex flex-col gap-4 min-[400px]:flex-row">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 gap-2">
                    Start Free Now
                    <ArrowRight className="size-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2">
                    Watch Demo
                    <Play className="size-4" />
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </SectionObserver>

        <section className="bg-primary py-12">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-8">
              <p className="text-primary-foreground/80">Trusted by world's best companies</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {['Instacart', 'Slack', 'HubSpot', 'Shopify', 'Attentive'].map((partner, i) => (
                <motion.div
                  key={i}
                  className="flex items-center justify-center h-16 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className="text-primary-foreground font-medium">{partner}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <SectionObserver id="solutions">
          <section className="py-24">
            <div className="container px-4 md:px-6">
              <div className="space-y-16">
                <div className="text-xs uppercase tracking-wider text-gray-500">Solutions</div>
                <div className="grid gap-16 lg:grid-cols-2">
                  <div className="space-y-8">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                      Build a solution
                      <br />
                      that's truly your own.
                    </h2>
                    <motion.div 
                      className="rounded-xl bg-gray-50 p-8 hover:shadow-lg transition-all duration-200"
                      whileHover={{ y: -5 }}
                    >
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <div className="space-y-1">
                            <div className="text-sm text-gray-500">Running Period</div>
                            <div className="font-mono text-2xl font-bold">7892</div>
                          </div>
                          <div className="space-y-1 text-right">
                            <div className="text-sm text-gray-500">Accuracy</div>
                            <div className="font-mono text-2xl font-bold">10.61%</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  <div className="space-y-8">
                    {[
                      {
                        icon: MessageSquare,
                        title: "Business CRM",
                        description: "Get deeper insights into your customer relationships with our comprehensive solution."
                      },
                      {
                        icon: Mail,
                        title: "Email Marketing",
                        description: "Create and send beautiful email campaigns that convert and drive engagement."
                      },
                      {
                        icon: Settings,
                        title: "Sales Automation",
                        description: "Automate your sales processes to close more deals and grow your revenue."
                      }
                    ].map((feature, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start gap-4 group hover:bg-gray-50 p-4 rounded-lg transition-colors"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2 }}
                      >
                        <div className="size-10 flex-none rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <feature.icon className="size-5 text-primary" />
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-medium">{feature.title}</h3>
                          <p className="text-sm text-gray-500">{feature.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SectionObserver>

        <SectionObserver id="features">
          <section className="py-24 bg-gray-50">
            <div className="container px-4 md:px-6">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Your customers are always
                  <br />
                  connected.
                </h2>
                <p className="text-gray-500">
                  Customer relationship management tool for everyone who values collaboration.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
                {[
                  {
                    icon: Users,
                    title: "Contact analysis",
                    description: "Get deeper insights into your customer base"
                  },
                  {
                    icon: BarChart3,
                    title: "Tiered sorting",
                    description: "Sort contacts by priority level"
                  },
                  {
                    icon: Sparkles,
                    title: "Automatic enrichment",
                    description: "Enhance data automatically"
                  },
                  {
                    icon: Zap,
                    title: "Quick actions",
                    description: "Perform actions with one click"
                  },
                  {
                    icon: Settings,
                    title: "Powered by AI",
                    description: "Intelligent automation at work"
                  }
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    className="text-center group hover:bg-white rounded-xl p-6 transition-all duration-200"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="size-6 text-primary" />
                    </div>
                    <h3 className="font-medium mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-500">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
              <div className="text-center mt-12">
                <Button className="bg-primary hover:bg-primary/90">
                  Learn More
                </Button>
              </div>
            </div>
          </section>
        </SectionObserver>

        <SectionObserver id="analytics">
          <section className="py-24">
            <div className="container px-4 md:px-6">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Analytics that drive growth
                </h2>
                <p className="text-gray-500">
                  Get deep insights into your business performance and make data-driven decisions
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto mb-16">
                {[
                  {
                    title: "CRM for Service",
                    description: "Our service solution helps you personalize customer service and track issues."
                  },
                  {
                    title: "CRM for Sales",
                    description: "Our sales tools drive to maximize productivity, maintain pipeline velocity, and grow revenue."
                  }
                ].map((plan, i) => (
                  <motion.div
                    key={i}
                    className="rounded-xl bg-primary p-8 text-white group hover:scale-105 transition-transform duration-200"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.2 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="size-10 rounded-lg bg-white/20 flex items-center justify-center flex-none">
                        <TrackzIcon />
                      </div>
                      <div className="space-y-2 flex-1">
                        <h3 className="font-medium">{plan.title}</h3>
                        <p className="text-sm text-white/80">{plan.description}</p>
                      </div>
                      <ChevronRight className="size-5 text-white/50 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
                {[
                  { number: "12+", label: "Years Of Experience" },
                  { number: "286%", label: "Average ROI" },
                  { number: "25M", label: "Net Present Value" },
                  { number: "60+", label: "analytics served" }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="text-2xl font-bold">{stat.number}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </SectionObserver>

        <SectionObserver id="cta">
          <section className="bg-[#1A1233] text-white py-20">
            <div className="container px-4 md:px-6">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Let's get you growing.
                  <br />
                  Without the pains.
                </h2>
                <p className="mt-4 text-white/80">
                  Get that boost for you to hit the other side you want to hit through Trackz's
                  <br />
                  performance optimization and consulting.
                </p>
                <div className="mt-8 flex flex-col gap-4 min-[400px]:flex-row justify-center">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Start Free Now
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </SectionObserver>
      </main>

      <footer className="border-t bg-background">
        <div className="container px-4 py-12 md:px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <Link href="/" className="flex items-center space-x-2">
                <div className="flex items-center justify-center size-8 rounded bg-primary text-white">
                  <TrackzIcon />
                </div>
                <span className="text-xl font-bold">Trackz</span>
              </Link>
              <p className="mt-4 text-sm text-gray-500">
                Making business growth easier with smart solutions.
              </p>
            </div>
            <div className="grid gap-4">
              <h3 className="text-sm font-medium">Product</h3>
              <nav className="grid gap-2">
                <Link href="#features" className="text-sm text-gray-500 hover:text-primary">
                  Features
                </Link>
                <Link href="#solutions" className="text-sm text-gray-500 hover:text-primary">
                  Solutions
                </Link>
                <Link href="#analytics" className="text-sm text-gray-500 hover:text-primary">
                  Analytics
                </Link>
              </nav>
            </div>
            <div className="grid gap-4">
              <h3 className="text-sm font-medium">Company</h3>
              <nav className="grid gap-2">
                <Link href="#about" className="text-sm text-gray-500 hover:text-primary">
                  About
                </Link>
                <Link href="#careers" className="text-sm text-gray-500 hover:text-primary">
                  Careers
                </Link>
                <Link href="#contact" className="text-sm text-gray-500 hover:text-primary">
                  Contact
                </Link>
              </nav>
            </div>
            <div className="grid gap-4">
              <h3 className="text-sm font-medium">Subscribe</h3>
              <form className="grid gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-md border bg-background px-3 py-2 text-sm"
                />
                <Button type="submit" className="bg-primary hover:bg-primary/90">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="mt-12 border-t pt-6 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Trackz. All rights reserved.
          </div>
        </div>
      </footer>
      </center>
    </div>
  )
}

