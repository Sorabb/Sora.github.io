---
layout: post
title:  "Welcome to Jekyll!"
date:   2015-10-23 13:40
categories: web
tags: web
---
第一篇博客，就来记录下这个博客的搭建过程吧

很早就被安利了github pages，以前就实践过一次失败了，这次又遇到了同样的问题又失败了，还好这次解决了这个自己的鱼唇造成的这个问题（╯#-_-)╯╧═╧

这次看到别人的博客用的Jekyll搭建的，非常喜欢左边栏的pjax，就想要自己也动手来一个了

主要参考教程下面这些

- [http://jekyllrb.com/][jekyll]
- [粉丝日志][fens]

这个过程中配置ruby环境变量竟然是份额较大的东西，期间下载还报了个An existing connection was forcibly closed by the remote host的错误，本来以为是2.2的版本问题，切回2.0，结果最后一试才知道还是墙的原因(╯‵□′)╯︵┻━┻ 还得跑去 [淘宝的镜像服务器][taobaogems] 下载

接着就按照step1 step2 一步步来吧，过程其实并不难。但是为什么上传后怎么都是404呢？重复过程，各种尝试，依然不行，看下别人有没有遇到这个问题……提到一个build成功会发邮件？那我的邮件提示是什么？  
**It will soon be necessary to verify an email address in order to access all of GitHub’s features. Please take a moment to verify this email address**  
邮箱未验证？什么鬼，简直被自己蠢哭了好吗(;´༎ຶД༎ຶ`)  
验证邮箱后，果然可以顺利使用了……之后就是买域名之类的了

这个过程真的是蛮有趣的，也可能是因为我太蠢了吧，不过以前好多听过的东西终于跟实践挂上钩了，很多东西并不像自己想象的那样。

####纸上得来终觉浅，绝知此事要躬行


[jekyll]:      http://jekyllrb.com
[fens]: http://blog.fens.me/jekyll-bootstarp-github
[taobaogems]: https://ruby.taobao.org
