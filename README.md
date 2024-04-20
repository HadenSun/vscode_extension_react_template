# Vscode Extension React Template README

This is a Vscode extensions template, using the React as the webview. You can get more details from [here](https://sunhx.cn/a/chengxu/2024/0401/107.html).  
这是一个使用React作为webview框架的VSCode插件开发模板。更多信息看[这里](https://sunhx.cn/a/chengxu/2024/0401/107.html).  

You need to know some basic knowledge of React and VSCode extension development. You can the basic guides of VSCode extension from [here](https://code.visualstudio.com/api).  
需要具有一些基本的React和VSCode插件开发知识。官方提供了很好的[教程](https://code.visualstudio.com/api)。  

TypeScript is the development language for the extension and webview as it's the recommended language of official. You can also modify the code to use JavaScript to develop the extension and webview based on this project.  
我们使用TypeScript来开发插件和Webview。因为这是官方推荐的开发语言。当然你也可以基于这个项目进行修改，以JavaScript来开发。  

## How to Use

Use this command to install the dependencies:  
使用这个指令来安装所有需要的依赖：  

```bash
npm run install_all
```

Use this command to build the React webview and extension:  
使用这个指令来编译React webview和插件本体：  

```bash
npm run build_all
```

Then you can press `F5` to debug.  
按`F5`开始享受debug吧。  

Use this command to package and release your extension after coding:  
完成开发后，使用这条指令完成打包发布：  

```bash
vsce package
```

## For more information

* [Visual Studio Code Extension developing Guide](https://code.visualstudio.com/api)
* [VS Code插件创作中文开发文档](https://liiked.github.io/VS-Code-Extension-Doc-ZH)
* [Create a VSCode extension with React](https://blog.r2devops.io/blog/All/writing-vscode-extension-with-react/)
* [基于React的VSCode插件开发-创建工程](https://sunhx.cn/a/chengxu/2024/0401/107.html)

**Enjoy!**
