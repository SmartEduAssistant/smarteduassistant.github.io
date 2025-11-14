# 自定义域名配置指南

## 已完成的配置

1. ✅ 创建了 `public/CNAME` 文件，内容为 `smarteduassistant.tech`
2. ✅ 更新了 `package.json` 的 `homepage` 为 `.`（根路径）
3. ✅ 更新了 GitHub Actions 工作流，使用空 `PUBLIC_URL`

## DNS 配置步骤

### 方法一：使用 CNAME 记录（推荐，如果支持子域名）

如果你的域名支持 CNAME 记录（通常 `www` 子域名支持），配置如下：

1. 登录你的域名注册商或 DNS 服务商
2. 添加 CNAME 记录：
   - **类型**：CNAME
   - **主机记录**：`@` 或 `www`（取决于你想用 `smarteduassistant.tech` 还是 `www.smarteduassistant.tech`）
   - **记录值**：`你的用户名.github.io`（例如：`mariolin.github.io`）
   - **TTL**：3600（或默认值）

### 方法二：使用 A 记录（根域名必须用 A 记录）

如果使用根域名（`smarteduassistant.tech`），必须使用 A 记录：

1. 登录你的域名注册商或 DNS 服务商
2. 添加 A 记录（需要添加所有 4 个 IP）：
   - **类型**：A
   - **主机记录**：`@`
   - **记录值**：`185.199.108.153`
   - **TTL**：3600

   - **类型**：A
   - **主机记录**：`@`
   - **记录值**：`185.199.109.153`
   - **TTL**：3600

   - **类型**：A
   - **主机记录**：`@`
   - **记录值**：`185.199.110.153`
   - **TTL**：3600

   - **类型**：A
   - **主机记录**：`@`
   - **记录值**：`185.199.111.153`
   - **TTL**：3600

## GitHub Pages 设置

1. 进入你的 GitHub 仓库
2. 点击 **Settings**（设置）
3. 在左侧菜单找到 **Pages**
4. 在 **Custom domain** 部分：
   - 输入你的域名：`smarteduassistant.tech`
   - 勾选 **Enforce HTTPS**（等待 DNS 生效后）
   - 点击 **Save**

## 验证 DNS 配置

配置 DNS 后，等待几分钟到几小时（DNS 传播时间），然后验证：

```bash
# 检查 A 记录
dig smarteduassistant.tech +short

# 检查 CNAME 记录
dig www.smarteduassistant.tech CNAME +short
```

应该看到 GitHub Pages 的 IP 地址或 CNAME 记录。

## 部署

1. 提交并推送代码：
```bash
git add .
git commit -m "Add custom domain configuration"
git push origin main
```

2. 等待 GitHub Actions 完成部署

3. 等待 DNS 传播（通常 5 分钟到 48 小时）

4. 访问 `https://smarteduassistant.tech` 查看网站

## 故障排除

### 问题：Domain does not resolve to the GitHub Pages server

**原因**：DNS 记录未正确配置或未生效

**解决方案**：
1. 确认 DNS 记录已正确添加
2. 等待 DNS 传播（最多 48 小时）
3. 使用 `dig` 或在线工具检查 DNS 解析
4. 确认记录值正确（A 记录指向 GitHub IP，CNAME 指向 `用户名.github.io`）

### 问题：HTTPS 证书未生效

**原因**：DNS 未完全生效

**解决方案**：
1. 等待 DNS 完全生效（通常 24-48 小时）
2. 在 GitHub Pages 设置中取消勾选再重新勾选 **Enforce HTTPS**
3. 等待 GitHub 生成 SSL 证书（可能需要几小时）

### 问题：网站显示但样式/资源加载失败

**原因**：`PUBLIC_URL` 配置不正确

**解决方案**：
- 确认 `package.json` 中 `homepage` 为 `.`
- 确认 GitHub Actions 中 `PUBLIC_URL` 为空字符串
- 重新构建和部署

## 注意事项

1. **DNS 传播时间**：DNS 更改可能需要 5 分钟到 48 小时才能完全生效
2. **HTTPS 证书**：GitHub 会在 DNS 生效后自动生成 SSL 证书，可能需要几小时
3. **CNAME 文件**：确保 `public/CNAME` 文件存在且内容正确
4. **根域名 vs 子域名**：
   - 根域名（`smarteduassistant.tech`）必须使用 A 记录
   - 子域名（`www.smarteduassistant.tech`）可以使用 CNAME 记录

