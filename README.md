# 这是一个Vue项目

## webpack4 + Vue + Mint-ui + MUI + scss


## 制作首页中额的的APP 组件
1. 完整HEADER 区域 Mint-ui 中的header组件
2. 制作底部tabbar 
    * 修改样式 添加扩展css样式文件和字体文件 import 导入到项目中. 直接就可以使用对应的类名
    * tabbar 改为router-link
    * 配置路由, 设置路由选中种类的类名 linkActiveClass = 'mui-active'
    * 点击路由展示对应的组件
3. 在中间区域添加一个router-view 用来展示路由匹配到的组件

## webpack 配置解析scss文件 sass-loader / node-sass

## 制作首页轮播图布局 加载数据 vue-resource
**在组件中使用v-for 必须绑定key值**
1. 安装 npm i vue-resourse --save
2. 导入
3. this.$http.get(ur;, callback)
4. v-for 渲染轮播组件

### 实现九宫格布局

### 实现tabbar切换组件的动画效果