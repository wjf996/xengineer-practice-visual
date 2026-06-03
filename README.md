# AI PR Review 助手

## 项目介绍

AI PR Review 助手是一个面向开发者的代码评审辅助工具。用户可以输入 PR 描述或代码片段，系统会生成风险提示、修改建议和测试建议，帮助开发者提高 PR 质量。

## 核心功能

- 输入 PR 描述或代码片段
- 生成代码风险提示
- 生成修改建议
- 生成测试建议
- 生成更清晰的 PR 描述

## 技术栈

- Frontend: HTML / CSS / JavaScript
- Backend: FastAPI
- Version Control: GitHub + Pull Request

## 项目结构

```text
.
├─ backend
│  ├─ main.py
│  └─ requirements.txt
├─ frontend
│  ├─ index.html
│  ├─ style.css
│  └─ app.js
└─ README.md
运行方式
前端版本：直接打开 frontend/index.html。

后端版本：

cd backend
pip install -r requirements.txt
uvicorn main:app --reload
开发过程
本项目通过多个 PR 分阶段完成，包括项目初始化、页面开发、核心功能实现、后端接口和文档完善。

AI 辅助说明
本项目使用 AI 工具辅助需求拆解、代码生成、问题排查和文档优化。功能设计、代码整合、测试验证和最终提交由本人完成。

Demo 视频
视频链接：待补充


**2. 打开 `backend/requirements.txt`，写入：**

```text
fastapi
uvicorn