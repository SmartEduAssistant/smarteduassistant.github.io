# 智育助手（SmartEdu Assistant）官网

现代化的响应式官网，展示智育助手 AI 教育助手产品。

## 项目特点

- 🎨 **简约温暖的设计**：橙色 (#FFA851) + 米白 (#FFF7ED) 配色方案
- 📱 **完全响应式**：移动端优先设计，适配所有设备
- ✨ **流畅动画**：使用 Framer Motion 实现柔和的页面动画
- 🚀 **现代化技术栈**：Next.js 14 + TypeScript + Tailwind CSS
- ♿ **SEO 友好**：语义化 HTML 和完整的 meta 标签

## 技术栈

- **框架**：Next.js 14
- **语言**：TypeScript
- **样式**：Tailwind CSS
- **动画**：Framer Motion
- **图标**：Lucide React

## 页面结构

- **首页** (`/`)：品牌展示、核心功能、理念介绍、成长报告示例
- **产品介绍** (`/product`)：详细功能说明、数据智能、理论支撑、FAQ
- **团队** (`/team`)：创始团队、顾问团队、团队文化
- **联系我们** (`/contact`)：联系方式、合作表单、招聘信息

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

### 生产构建

```bash
npm run build
npm start
```

## 项目结构

```
SmartParentHomePage/
├── components/          # 可复用组件
│   ├── Navbar.tsx      # 导航栏
│   ├── Footer.tsx      # 页脚
│   ├── HeroSection.tsx # Hero 区域
│   └── FeatureCard.tsx # 功能卡片
├── pages/              # 页面文件
│   ├── index.tsx       # 首页
│   ├── product.tsx     # 产品页
│   ├── team.tsx        # 团队页
│   └── contact.tsx     # 联系页
├── styles/             # 全局样式
│   └── globals.css     # Tailwind CSS 入口
└── public/             # 静态资源
```

## 设计系统

### 颜色

- **主色**：`#FFA851` (橙色)
- **背景色**：`#FFF7ED` (米白色)
- **文字色**：`#1F2937` (深灰)

### 字体

- **中文**：思源黑体 / Source Han Sans CN
- **英文**：Inter

## 自定义配置

所有设计相关的配置都在 `tailwind.config.js` 中，包括：
- 颜色主题
- 字体设置
- 动画效果
- 响应式断点

## 注意事项

1. 表单提交功能需要连接后端 API（当前为演示状态）
2. 二维码图片需要替换为实际的二维码
3. 团队头像和照片需要替换为实际图片
4. 建议添加实际的 favicon 图标

## 部署到 GitHub Pages

本项目已配置支持 GitHub Pages 部署。详细部署说明请查看 [DEPLOY.md](./DEPLOY.md)。

### 快速部署步骤

1. **创建 GitHub 仓库并推送代码**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/你的用户名/仓库名.git
git push -u origin main
```

2. **启用 GitHub Pages**
   - 进入仓库 Settings > Pages
   - Source 选择 "GitHub Actions"

3. **自动部署**
   - 推送代码后，GitHub Actions 会自动构建和部署
   - 访问 `https://你的用户名.github.io/仓库名/` 查看网站

### 本地构建测试

```bash
# 构建静态文件（会生成 out 目录）
npm run export

# 预览构建结果（需要安装 serve）
npx serve out
```

## 许可证

私有项目，保留所有权利。

