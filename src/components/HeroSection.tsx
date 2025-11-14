import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { Link } from 'react-router-dom'

interface HeroSectionProps {
  title: string
  subtitle: string
  primaryCTA?: { text: string; href: string }
  secondaryCTA?: { text: string; href: string }
}

const HeroSection = ({ title, subtitle, primaryCTA, secondaryCTA }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/10">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            {title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {primaryCTA && (
              <Link to={primaryCTA.href} className="btn-primary inline-flex items-center space-x-2">
                <span>{primaryCTA.text}</span>
                <Download size={20} />
              </Link>
            )}
            {secondaryCTA && (
              <Link to={secondaryCTA.href} className="btn-secondary inline-flex items-center space-x-2">
                <span>{secondaryCTA.text}</span>
                <ArrowRight size={20} />
              </Link>
            )}
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 max-w-6xl mx-auto"
        >
          <div className="relative">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-2 md:p-4 shadow-2xl">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
                <img
                  src={`${process.env.PUBLIC_URL || ''}/hero1.jpg`}
                  alt="家庭陪伴插画"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection


