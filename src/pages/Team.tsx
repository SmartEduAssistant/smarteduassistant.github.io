import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Heart, Sparkles, Users } from 'lucide-react'

const Team = () => {
  useEffect(() => {
    document.title = '团队 - 智育助手'
  }, [])

  const values = [
    {
      icon: Heart,
      title: '温度',
      description: '我们相信教育是有温度的，AI 应该成为温暖的陪伴者，而不是冷冰冰的工具。',
    },
    {
      icon: Sparkles,
      title: '专业',
      description: '基于权威教育理论，结合前沿 AI 技术，确保每一个建议都科学、专业。',
    },
    {
      icon: Users,
      title: '陪伴',
      description: '我们不是替代家长，而是成为家长和孩子的长期伙伴，共同见证成长。',
    },
  ]

  return (
    <>
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-background via-background to-primary/10">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                我们相信每个孩子都能被更好地看见
              </h1>
              <p className="text-xl text-gray-600">
                一支热爱教育、专注技术的团队，致力于用 AI 让家庭教育更科学、更温暖
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-container bg-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Culture Section */}
        <section className="section-container bg-background">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">团队文化</h2>
                <p className="text-lg text-gray-600">
                  我们是一群热爱教育、相信技术力量的理想主义者
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-background rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">使命驱动</h3>
                  <p className="text-gray-600 text-sm">
                    我们相信每个孩子都有无限可能，我们的使命是帮助家长更好地看见和培养这些可能。
                  </p>
                </div>
                <div className="p-6 bg-background rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">持续学习</h3>
                  <p className="text-gray-600 text-sm">
                    教育在变化，技术在进步，我们始终保持学习的心态，不断优化产品和服务。
                  </p>
                </div>
                <div className="p-6 bg-background rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">用户第一</h3>
                  <p className="text-gray-600 text-sm">
                    家长和孩子的需求是我们工作的出发点，每一个功能都经过深思熟虑和用户验证。
                  </p>
                </div>
                <div className="p-6 bg-background rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">开放合作</h3>
                  <p className="text-gray-600 text-sm">
                    我们欢迎与教育机构、研究机构、投资机构等各方合作，共同推动教育科技的发展。
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Team


