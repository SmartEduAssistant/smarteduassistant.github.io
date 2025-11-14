import { motion } from 'framer-motion'
import { ArrowRight, LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  href?: string
  delay?: number
}

const FeatureCard = ({ icon: Icon, title, description, href, delay = 0 }: FeatureCardProps) => {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="card h-full flex flex-col group"
    >
      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      {href && (
        <Link
          to={href}
          className="inline-flex items-center text-primary font-medium hover:gap-2 transition-all group/link"
        >
          <span>了解更多</span>
          <ArrowRight size={18} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      )}
    </motion.div>
  )

  return content
}

export default FeatureCard


