---
title: flutter项目初始化
date: 2022/09/21
tags:
 - flutter
categories:
 -  flutter
---

### 初始化

+ 通过命令行
  - flutter create myproject
  - cd myproject
  - flutter run
+ 通过Android Studio
  - 必须安装Flutter插件
+ 通过Vs Code
  - 必须安装Flutter插件（推荐）

#### 创建 Flutter项目（Vs Code）
在 View > Command Palette 下搜索 flutter，在点击 Flutter: new Project即可

### 修改国内镜像源

修改镜像源只需要改一次，再次启动时，无需再改
> 国内特有的问题，防止启动应用时，访问不到 google 等国外资源

在运行 flutter 项目之前，需要先修改运行项目必须的资源路径。需要改两个文件
+ flutter项目/android/build.gradle
+ Flutter SDK 包下的 flutter.gradle 文件

#### flutter项目中

修改文件 flutter项目/android/build.gradle ，把 google() 和 jcenter() 这两行去掉。改为阿里的链
接。

增加
```
maven { url 'https://maven.aliyun.com/repository/google' }
maven { url 'https://maven.aliyun.com/repository/jcenter' }
maven { url 'https://maven.aliyun.com/repository/public' }
```

<img :src="$withBase('/images/flutter/010.jpg')" alt="JDK">


#### Flutter SDK中

修改 Flutter SDK 包下的 flutter.gradle 文件。

我本地的路径为（供参考）：

```
D:\arise-dev-editor\flutter\packages\flutter_tools\gradle\flutter.gradle
```

<img :src="$withBase('/images/flutter/011.jpg')" alt="JDK">

#### 启动

```
cd flutter_start
flutter run
```
<img :src="$withBase('/images/flutter/012.jpg')" alt="JDK">


::: tip
命令中的的相关命令
:::
<img :src="$withBase('/images/flutter/013.jpg')" alt="JDK">

::: tip
需要改变后实时看到数据变化，怎需要通过Vscode 中的 Run启动
:::
<img :src="$withBase('/images/flutter/014.jpg')" alt="JDK">
