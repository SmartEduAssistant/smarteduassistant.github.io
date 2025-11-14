import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { MessageSquare, BookOpen, FileText, Brain, Target, Zap, Download, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const Product = () => {
  useEffect(() => {
    document.title = '产品介绍 - 智育助手'
  }, [])

  const features = [
    {
      id: 'quick-qa',
      icon: MessageSquare,
      title: '快问快答',
      subtitle: '即时个性化建议',
      description: '当家长遇到育儿困惑时，只需提问，AI 会基于孩子的成长画像和历史交互记录，提供精准、个性化的教育建议。',
      highlights: [
        '引用孩子画像与历史事件',
        '实时响应，秒级解答',
        '场景化建议，可操作性强',
        '持续学习，建议越来越精准',
      ],
      image: '💬',
    },
    {
      id: 'daily-practice',
      icon: BookOpen,
      title: '每日练习',
      subtitle: 'AI 生成成长计划',
      description: '根据孩子的年龄、兴趣和发展阶段，AI 自动生成个性化的每日练习计划，通过场景化训练帮助孩子在游戏中学习。',
      highlights: [
        '个性化成长计划',
        '场景化训练内容',
        '游戏化学习体验',
        '进度实时追踪',
      ],
      image: '📚',
    },
    {
      id: 'growth-profile',
      icon: FileText,
      title: '成长档案',
      subtitle: '多维度成长追踪',
      description: '通过维度雷达图、周报总结和家长反馈闭环，全面记录和展示孩子的成长轨迹，让每个家长清晰看见孩子的变化。',
      highlights: [
        '多维度雷达图可视化',
        '周报自动生成',
        '家长反馈闭环',
        '长期成长趋势分析',
      ],
      image: '📊',
    },
  ]

  const dataIntelligence = [
    {
      icon: Brain,
      title: '孩子画像',
      description: '基于日常交互数据，构建完整的 child_profile，包括兴趣偏好、学习能力、性格特点等。',
    },
    {
      icon: Target,
      title: '历史交互',
      description: '记录所有 interaction_records，分析孩子的学习模式和成长规律，为个性化建议提供数据支撑。',
    },
    {
      icon: Zap,
      title: '智能推荐',
      description: '结合教育理论（维果斯基、皮亚杰、戈尔曼等），AI 生成最适合孩子的教育方案。',
    },
  ]

  const theories = [
    { name: '维果斯基', theory: '最近发展区理论', description: '帮助孩子在其能力范围内获得最大发展' },
    { name: '皮亚杰', theory: '认知发展理论', description: '尊重孩子的认知发展阶段，提供适龄教育' },
    { name: '戈尔曼', theory: '情绪智力理论', description: '培养孩子的情绪管理和社交能力' },
  ]

  const faqs = [
    {
      question: '智育助手适合什么年龄段的孩子？',
      answer: '智育助手主要面向 1-8 岁儿童家庭，根据不同年龄段提供相应的教育内容和建议。',
    },
    {
      question: '如何保护孩子的隐私数据？',
      answer: '我们严格遵守数据保护法规，所有数据加密存储，仅用于提供个性化教育服务，不会泄露给第三方。',
    },
    {
      question: 'AI 建议的科学性如何保证？',
      answer: '我们的 AI 系统基于权威教育理论（如维果斯基、皮亚杰等）构建，并由教育学、心理学专家团队持续优化。',
    },
    {
      question: '如何开始使用智育助手？',
      answer: '下载 App 后，完成简单的注册和设置，即可开始记录孩子的成长，获得个性化的教育建议。',
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
                产品介绍
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                智育助手通过 AI 技术，帮助家长「看见」孩子的成长轨迹，提供科学、温暖的个性化教育建议。
              </p>
              <p className="text-lg text-gray-500">
                我们的使命：让 AI 成为家庭教育的长期陪伴者
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-container bg-white">
          {features.map((feature, index) => (
            <div key={feature.id} id={feature.id} className="mb-20 last:mb-0">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={index % 2 === 1 ? 'lg:col-start-2' : ''}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">{feature.title}</h2>
                      <p className="text-primary font-medium">{feature.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}
                >
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-12 aspect-square flex items-center justify-center">
                    <div className="text-8xl">{feature.image}</div>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </section>

        {/* Data Intelligence Section */}
        <section className="section-container bg-background">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              数据智能
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              AI 如何基于孩子画像和历史交互形成个性化建议
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dataIntelligence.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Data Flow Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-2">
                  <Brain className="w-10 h-10 text-primary" />
                </div>
                <p className="text-sm font-medium text-gray-700">孩子画像</p>
              </div>
              <div className="text-primary text-2xl">+</div>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-2">
                  <Target className="w-10 h-10 text-primary" />
                </div>
                <p className="text-sm font-medium text-gray-700">历史交互</p>
              </div>
              <div className="text-primary text-2xl">→</div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mb-2">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <p className="text-sm font-medium text-gray-700">个性化建议</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Theory Support Section */}
        <section className="section-container bg-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              理念支撑
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              基于权威教育理论，确保建议的科学性与专业性
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {theories.map((theory, index) => (
              <motion.div
                key={theory.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card text-center"
              >
                <h3 className="text-2xl font-bold text-primary mb-2">{theory.name}</h3>
                <p className="text-lg font-semibold text-gray-900 mb-3">{theory.theory}</p>
                <p className="text-gray-600">{theory.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-container bg-background">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              常见问题
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Download CTA */}
        <section className="section-container bg-gradient-to-br from-primary to-primary-dark text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              开始使用智育助手
            </h2>
            <p className="text-xl mb-8 text-white/90">
              下载 App，开启科学育儿的温暖之旅
            </p>
            <Link
              to="/contact"
              className="bg-white text-primary hover:bg-gray-100 font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center space-x-2"
            >
              <span>下载 App</span>
              <Download size={20} />
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Product


