import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import FeatureCard from '../components/FeatureCard'
import RadarChart from '../components/RadarChart'
import { MessageSquare, BookOpen, FileText, Sparkles, TrendingUp, Heart, Users } from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: MessageSquare,
      title: '快问快答',
      description: '即时获取个性化教育建议，AI 基于孩子的成长画像和历史记录，提供精准的育儿指导。',
      href: '/product#quick-qa',
    },
    {
      icon: BookOpen,
      title: '每日练习',
      description: 'AI 生成个性化的成长计划与场景化训练，帮助孩子在游戏中学习，在互动中成长。',
      href: '/product#daily-practice',
    },
    {
      icon: FileText,
      title: '成长档案',
      description: '多维度雷达图、周报总结与家长反馈闭环，让每个家长清晰看见孩子的成长轨迹。',
      href: '/product#growth-profile',
    },
  ]

  const principles = [
    {
      icon: Sparkles,
      title: '记得孩子',
      description: 'AI 持续记录孩子的学习轨迹、兴趣偏好和成长数据，形成完整的成长画像。',
    },
    {
      icon: TrendingUp,
      title: '持续学习',
      description: '基于维果斯基、皮亚杰等教育理论，AI 不断优化建议，陪伴孩子持续成长。',
    },
    {
      icon: Heart,
      title: '个性化陪伴',
      description: '每个孩子都是独特的，AI 提供量身定制的教育方案，让家庭教育更有温度。',
    },
  ]

  return (
    <>
      <Navbar />

      <main>
        {/* Hero Section */}
        <HeroSection
          title="AI 记得孩子的成长"
          subtitle="让家庭教育更科学、更温暖"
          primaryCTA={{ text: '立即体验 App', href: '/contact' }}
          secondaryCTA={{ text: '了解产品理念', href: '/product' }}
        />

        {/* Core Features Section */}
        <section className="section-container bg-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              核心功能
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              三大核心功能，全方位支持孩子的成长
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                href={feature.href}
                delay={index * 0.1}
              />
            ))}
          </div>
        </section>

        {/* Why SmartEdu Section */}
        <section className="section-container bg-background">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                AI 让家长真正「看见」孩子成长
              </h2>
              <p className="text-lg text-gray-600">
                智育助手的三大核心理念
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <principle.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-gray-600">
                    {principle.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Growth Report Example Section */}
        <section className="section-container bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                成长报告示例
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                AI 从数据中生成每周成长报告，让每个家长看见孩子的变化
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-background to-primary/5 rounded-3xl p-8 md:p-12 shadow-xl"
            >
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Radar Chart */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center md:text-left">
                      成长维度雷达图
                    </h3>
                    <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-4 min-h-[300px] flex items-center justify-center">
                      <RadarChart
                        data={[
                          { label: '语言能力', value: 75 },
                          { label: '逻辑思维', value: 65 },
                          { label: '社交能力', value: 80 },
                          { label: '创造力', value: 70 },
                          { label: '运动能力', value: 60 },
                          { label: '情绪管理', value: 85 },
                        ]}
                        size={280}
                      />
                    </div>
                  </div>

                  {/* Report Summary */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center md:text-left">
                      本周成长总结
                    </h3>
                    <div className="space-y-4">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="p-4 bg-background rounded-lg hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-medium text-gray-900">语言能力</span>
                          <span className="text-primary font-semibold text-sm">+12%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '75%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="bg-gradient-to-r from-primary to-primary-dark h-3 rounded-full"
                          />
                        </div>
                        <p className="text-xs text-gray-500 mt-2">本周完成 15 次语言练习</p>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="p-4 bg-background rounded-lg hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-medium text-gray-900">逻辑思维</span>
                          <span className="text-primary font-semibold text-sm">+8%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '65%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="bg-gradient-to-r from-primary to-primary-dark h-3 rounded-full"
                          />
                        </div>
                        <p className="text-xs text-gray-500 mt-2">本周完成 12 次思维训练</p>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="p-4 bg-background rounded-lg hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-medium text-gray-900">社交能力</span>
                          <span className="text-primary font-semibold text-sm">+15%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '80%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="bg-gradient-to-r from-primary to-primary-dark h-3 rounded-full"
                          />
                        </div>
                        <p className="text-xs text-gray-500 mt-2">本周完成 8 次社交互动</p>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="p-4 bg-background rounded-lg hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-medium text-gray-900">情绪管理</span>
                          <span className="text-primary font-semibold text-sm">+10%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '85%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="bg-gradient-to-r from-primary to-primary-dark h-3 rounded-full"
                          />
                        </div>
                        <p className="text-xs text-gray-500 mt-2">本周情绪表现稳定良好</p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="section-container bg-gradient-to-br from-primary to-primary-dark text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              让 AI 陪你一起育儿
            </h2>
            <p className="text-xl mb-8 text-white/90">
              加入智育助手，开启科学育儿的温暖之旅
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="bg-white text-primary hover:bg-gray-100 font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center space-x-2">
                <span>下载 App</span>
                <Users size={20} />
              </Link>
              <Link to="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                联系我们
              </Link>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Home

