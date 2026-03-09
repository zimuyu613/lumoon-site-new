# LUMOON 官网部署与发布规范

本文档用于说明 LUMOON 官网的开发、发布和服务器部署流程。

当前技术架构：

- Framework: Next.js
- Process Manager: PM2
- Web Server: Nginx
- Server Path: /var/www/lumoon-site
- Domain: https://lumoon.cn

---

# 一、项目结构

服务器部署目录：

/var/www/lumoon-site

主要运行流程：

用户访问
↓
Nginx (80 / 443)
↓
反向代理
↓
127.0.0.1:3001
↓
PM2 运行 Next.js 应用

---

# 二、本地开发流程

启动本地开发环境：

npm install
npm run dev

开发完成后必须进行本地构建测试。

---

# 三、本地发布前检查（必须）

在提交代码之前必须执行：

npm run build
npm run start

检查内容：

- 首页是否正常
- 路由页面是否可访问
- 图片资源是否加载
- 控制台是否报错
- 移动端布局是否正常

如果 build 失败，禁止发布。

---

# 四、Git 提交规范

代码修改完成后：

git add .
git commit -m "feat: 更新官网首页内容"
git push origin main

推荐的 commit message 类型：

feat: 新功能  
fix: 修复 bug  
style: 样式调整  
content: 文案更新  
refactor: 代码重构  

示例：

feat: 新增产品展示页面  
fix: 修复移动端导航栏问题  
content: 更新品牌介绍文案

---

# 五、服务器发布流程

登录服务器：

ssh root@服务器IP

进入项目目录：

cd /var/www/lumoon-site

拉取最新代码：

git pull origin main

安装依赖：

npm install

构建生产版本：

npm run build

重启服务：

pm2 restart lumoon-site

---

# 六、发布后检查

检查 PM2 进程：

pm2 list

检查服务端口：

curl http://127.0.0.1:3001

检查域名访问：

curl -I https://lumoon.cn

然后在浏览器访问：

https://lumoon.cn

重点检查：

- 首页
- 产品页
- NFC 验证页
- 新闻页
- 联系页面

---

# 七、PM2 管理命令

查看进程：

pm2 list

查看日志：

pm2 logs lumoon-site

重启服务：

pm2 restart lumoon-site

停止服务：

pm2 stop lumoon-site

删除服务：

pm2 delete lumoon-site

保存进程（重启恢复）：

pm2 save

---

# 八、服务器重启后的自动恢复

系统已配置：

PM2 开机自启
Nginx 开机自启

服务器重启后执行：

systemctl status nginx
pm2 list

确认服务恢复。

---

# 九、紧急回滚方案

如果新版本出现问题，可以回滚。

查看最近 commit：

git log --oneline

回退到指定版本：

git reset --hard <commit-id>

重新部署：

npm install
npm run build
pm2 restart lumoon-site

---

# 十、部署注意事项

禁止直接在服务器修改业务代码。

所有代码修改必须：

本地开发
↓
Git 提交
↓
服务器 git pull

这样可以保证：

- 版本可追踪
- 可以回滚
- 避免线上代码与仓库不一致

---

# 十一、未来优化方向

建议后续升级为：

GitHub Actions 自动部署

实现：

push → 自动构建 → 自动发布

可以减少手动操作并避免发布错误。
