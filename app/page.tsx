"use client"

import { useEffect, useRef } from "react"
import { motion } from "motion/react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import MagicCard from "./components/magic-card"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // GSAP ScrollTrigger animations
    const cards = containerRef.current?.querySelectorAll(".feature-card")
    
    cards?.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      )
    })
  }, [])

  return (
    <main ref={containerRef} className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">Focus</div>
          <div className="flex gap-8 items-center">
            <a href="#features" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
              Features
            </a>
            <a href="#how" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
              How It Works
            </a>
            <button className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded hover:bg-blue-700">
              Start Free
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Deep work without distractions.
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-width-prose">
            Focus helps knowledge workers maintain flow state by intelligently blocking interruptions, 
            coordinating schedules, and protecting deep work time.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700">
              Start Free Trial
            </button>
            <button className="px-6 py-3 border border-gray-300 dark:border-gray-700 font-medium rounded hover:bg-gray-50 dark:hover:bg-gray-900">
              Watch Demo
            </button>
          </div>
        </motion.div>

        {/* Stats Section with Magic Card */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <MagicCard className="p-8 bg-gray-50 dark:bg-gray-950">
            <div className="text-3xl font-bold text-blue-600">2.4h</div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">More focused time per day</p>
          </MagicCard>
          <MagicCard className="p-8 bg-gray-50 dark:bg-gray-950">
            <div className="text-3xl font-bold text-blue-600">38%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Fewer interruptions</p>
          </MagicCard>
          <MagicCard className="p-8 bg-gray-50 dark:bg-gray-950">
            <div className="text-3xl font-bold text-blue-600">3k+</div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Teams using Focus</p>
          </MagicCard>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Purpose-built for deep work.</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12">
            Every feature is designed to protect focused time and eliminate context switching.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🚫", title: "Smart Blocking", desc: "Intelligently routes interruptions to when you're available." },
              { icon: "📅", title: "Focus Scheduling", desc: "Coordinate deep work blocks across your team." },
              { icon: "⚡", title: "Status Sync", desc: "Your focus status syncs across Slack, Teams, and calendars." },
              { icon: "📊", title: "Focus Insights", desc: "Track focus patterns and productivity trends." },
              { icon: "🔗", title: "Slack Integration", desc: "Native Slack commands without context switching." },
              { icon: "🛡️", title: "Privacy First", desc: "All data stays with you. Zero tracking." },
            ].map((feature, idx) => (
              <MagicCard
                key={idx}
                className="feature-card p-8 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 opacity-0"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{feature.desc}</p>
              </MagicCard>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Three steps to reclaim your time.</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12">Get started in minutes. No complex setup required.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { num: 1, title: "Connect", desc: "Link your Slack, calendar, and email." },
            { num: 2, title: "Set Patterns", desc: "Define your focus hours and priority rules." },
            { num: 3, title: "Protect Time", desc: "Focus manages interruptions automatically." },
          ].map((step) => (
            <motion.div
              key={step.num}
              whileHover={{ y: -4 }}
              className="feature-card"
            >
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mb-4">
                {step.num}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to protect your focus?</h2>
          <p className="text-lg mb-8 text-blue-100">
            Start a free 14-day trial. No credit card required.
          </p>
          <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded hover:bg-gray-100">
            Start Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:text-black dark:hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-black dark:hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-black dark:hover:text-white">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:text-black dark:hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-black dark:hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-black dark:hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:text-black dark:hover:text-white">Help</a></li>
                <li><a href="#" className="hover:text-black dark:hover:text-white">API</a></li>
                <li><a href="#" className="hover:text-black dark:hover:text-white">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:text-black dark:hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-black dark:hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-black dark:hover:text-white">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center text-sm text-gray-600 dark:text-gray-400">
            <p>© 2024 Focus Inc. Made by humans. For humans.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
