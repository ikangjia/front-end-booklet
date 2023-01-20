---
title: VitePress 使用说明
editLink: true
lastUpdated: false
layout: doc

---

# {{ $frontmatter.title }}

## Markdown

### 链接

VitePress 支持在 markdown 文档里使用内部链接和外部链接。

**内部链接**

```
.
├─ index.md
├─ foo
│  ├─ index.md
│  ├─ one.md
│  └─ two.md
└─ bar
   ├─ index.md
   ├─ three.md
   └─ four.md
```

使用方式

```markdown
[Home](/) <!-- sends the user to the root index.md -->
[foo](/foo/) <!-- sends the user to index.html of directory foo -->
[foo heading](./#heading) <!-- anchors user to a heading in the foo index file -->
[bar - three](../bar/three) <!-- you can omit extension -->
[bar - three](../bar/three.md) <!-- you can append .md -->
[bar - four](../bar/four.html) <!-- or you can append .html -->
```

**外部链接**

可直接使用 markdown 的链接语法即可：`[XX](https://xx.com)`

### Front Matter

### 使用小图标

### 代码块样式

#### 代码行高亮

#### 关注某行代码

#### 代码中的彩色差异

#### 错误和警告代码行

#### 代码块组

#### 行数展示

### 自定义容器

### 文件包含

### 使用静态资源

## 集成 Algolia 搜索
