# GitHub Pages 部署指南

本指南将帮助你将智育助手官网部署到 GitHub Pages。

## 方法一：使用 GitHub Actions 自动部署（推荐）

### 步骤 1：准备 GitHub 仓库

1. 在 GitHub 上创建一个新仓库（如果还没有）
2. 将代码推送到 GitHub：

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/你的用户名/仓库名.git
git push -u origin main
```

### 步骤 2：启用 GitHub Pages

1. 进入仓库的 **Settings**（设置）
2. 在左侧菜单找到 **Pages**
3. 在 **Source** 部分，选择 **GitHub Actions**
4. 保存设置

### 步骤 3：配置仓库名称（如果需要）

如果你的仓库名称不是 `SmartParentHomePage`，需要修改 `.github/workflows/deploy.yml` 文件中的 `BASE_PATH` 环境变量。

或者，如果你想部署到根路径（如 `username.github.io`），需要：

1. 修改 `next.config.js`，将 `basePath` 设置为空字符串：
```javascript
const basePath = process.env.BASE_PATH || ''
```

2. 修改 `.github/workflows/deploy.yml`，移除或注释掉 `BASE_PATH` 环境变量：
```yaml
- name: Build
  run: npm run export
  # env:
  #   BASE_PATH: ${{ github.event.repository.name }}
```

### 步骤 4：触发部署

1. 推送代码到 `main` 分支
2. GitHub Actions 会自动构建和部署
3. 等待几分钟后，访问 `https://你的用户名.github.io/仓库名/` 查看网站

## 方法二：手动部署

### 步骤 1：构建静态文件

```bash
# 如果部署到子路径（如 username.github.io/repo-name）
BASE_PATH=/仓库名 npm run export

# 如果部署到根路径（如 username.github.io）
npm run export
```

### 步骤 2：部署到 GitHub Pages

1. 构建完成后，会生成 `out` 目录
2. 将 `out` 目录的内容推送到 `gh-pages` 分支：

```bash
# 安装 gh-pages（如果还没有）
npm install --save-dev gh-pages

# 添加到 package.json 的 scripts
# "deploy": "npm run export && gh-pages -d out"

# 部署
npm run deploy
```

或者手动操作：

```bash
cd out
git init
git add .
git commit -m "Deploy to GitHub Pages"
git branch -M gh-pages
git remote add origin https://github.com/你的用户名/仓库名.git
git push -u origin gh-pages
```

3. 在仓库 Settings > Pages 中，选择 `gh-pages` 分支作为源

## 注意事项

1. **图片路径**：已配置 `images.unoptimized: true`，确保图片在静态导出时正常工作

2. **路由**：已启用 `trailingSlash: true`，确保所有路由以 `/` 结尾

3. **Base Path**：
   - 如果部署到 `username.github.io/repo-name`，需要设置 `BASE_PATH=/repo-name`
   - 如果部署到 `username.github.io`（根路径），`BASE_PATH` 应为空字符串

4. **自定义域名**（可选）：
   - 在 `out` 目录创建 `CNAME` 文件
   - 写入你的域名，如：`www.yourdomain.com`
   - 在 GitHub Pages 设置中配置自定义域名

## 故障排除

### 问题：页面显示 404

- 检查 `basePath` 配置是否正确
- 确保所有链接使用相对路径或包含 `basePath`

### 问题：图片不显示

- 确保图片在 `public` 目录中
- 检查图片路径是否正确

### 问题：样式不生效

- 运行 `npm run export` 确保构建成功
- 检查 `out` 目录中是否有 CSS 文件

## 更新网站

每次更新代码后：

1. 提交并推送代码到 GitHub
2. GitHub Actions 会自动重新部署（如果使用方法一）
3. 或手动运行 `npm run deploy`（如果使用方法二）

部署完成后，等待几分钟让 GitHub Pages 更新缓存。

