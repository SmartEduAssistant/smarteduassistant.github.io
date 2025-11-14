import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Mail, MessageCircle, Send, CheckCircle, Briefcase } from 'lucide-react'

const Contact = () => {
  useEffect(() => {
    document.title = '联系我们 - 智育助手'
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
                联系我们
              </h1>
              <p className="text-xl text-gray-600">
                有任何问题或合作意向？我们很乐意与您交流
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="section-container bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">邮箱</h3>
              <a
                href="mailto:935532437@qq.com"
                className="text-primary hover:underline"
              >
                935532437@qq.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">微信</h3>
              <p className="text-gray-600 mb-4">whitehatl</p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="section-container bg-background">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                合作意向
              </h2>
              <p className="text-lg text-gray-600">
                填写表单，我们会尽快与您联系
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card"
            >
              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">提交成功！</h3>
                  <p className="text-gray-600">我们会尽快与您联系</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      姓名 *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="请输入您的姓名"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      邮箱 *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      留言 *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      placeholder="请描述您的合作意向或问题..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary inline-flex items-center justify-center space-x-2"
                  >
                    <span>发送消息</span>
                    <Send size={20} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </section>

        {/* Career Section */}
        <section className="section-container bg-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 md:p-12">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    我们在寻找热爱教育的你
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    如果你对教育科技充满热情，相信 AI 能够改变家庭教育，欢迎加入我们。
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-700">前端/后端工程师</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-700">AI 算法工程师</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-700">产品经理</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-700">教育内容策划</span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <a
                      href="mailto:careers@smartedu.ai"
                      className="btn-secondary inline-flex items-center space-x-2"
                    >
                      <span>投递简历</span>
                      <Mail size={18} />
                    </a>
                  </div>
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

export default Contact


