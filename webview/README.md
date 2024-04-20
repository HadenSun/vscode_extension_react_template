# Webview

This directory contains all of the code that will be executed within the webview content. It can be thought of as the place where all the "frontend" code of a webview is contained.  
这个目录包含了所有webview的代码。可以认为所有webview的“前端”代码都在这里了。  

## Repository Structure
```
.
├── public          # The public folder contains static assets
├── scripts         # Script files used to launch React app
├── src             # React source files
│   └── components  # Folder containing React components
│   └── models      # Folder containing models
|   └── utils       # Folder containing utility functions
├── App.tsx         # Main React component, contains the webview UI
├── index.tsx       # Entry point for React app
└── ...

```

## Getting Started
Run this command to install the dependency:  
运行以下命令安装所有依赖：

```bash
npm install
```

Run this command to build the static files for Visual Studio Extension:  
运行以下命令来编译生成所需要的静态文件：

```bash
npm run build
```

All the static output files in `build/static/` folder.  
所有的静态生成文件都位于`build/static`目录下。