import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 relative rounded-lg overflow-hidden border-2 border-primary/30">
                <img
                  src={`${process.env.PUBLIC_URL || ''}/applogo1.png`}
                  alt="智育助手"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold text-white">智育助手</span>
            </Link>
            <p className="text-sm text-gray-400 mb-4 max-w-md">
              AI 记得孩子的成长，让家庭教育更科学、更温暖。帮助家长看见孩子的成长轨迹，让 AI 成为家庭教育的长期陪伴者。
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:935532437@qq.com"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="邮箱"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  首页
                </Link>
              </li>
              <li>
                <Link to="/product" className="hover:text-primary transition-colors">
                  产品介绍
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-primary transition-colors">
                  团队
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  联系我们
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">联系方式</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:935532437@qq.com" className="hover:text-primary transition-colors">
                  邮箱：935532437@qq.com
                </a>
              </li>
              <li className="text-gray-400">微信：whitehatl</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            © {currentYear} 智育助手（SmartEdu Assistant）. 保留所有权利.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


