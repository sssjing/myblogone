import{_ as t}from"./framework-c27b6911.js";import{o as a,c as r,f as e}from"./app-beffe7bc.js";const d={},i=e('<h2 id="_3-1-spring中的aop" tabindex="-1"><a class="header-anchor" href="#_3-1-spring中的aop" aria-hidden="true">#</a> 3.1 Spring中的AOP</h2><p>AOP（Aspect Oriented Programming）面向切面编程，是一种变成范式，目的是通过分离横切关注点来提升代码的模块化程度。</p><p><mark>关注点</mark>就是<mark>一段特定的功能</mark>，有些关注点出现在多个模块中，就被成为<mark>横切关注点</mark>。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>一个后台和服系统的每个模块都需要记录客服的操作日志这就是一个能从业务逻辑中分离出来的横切关注点，完全不用交织在每个模块的代码中，可以作为一个单独的模块存在。</p></div><p><mark>AOP中的几个重要概念</mark></p><table><thead><tr><th>概念</th><th>说明</th></tr></thead><tbody><tr><td>切面（aspect）</td><td>按关注点进行模块分解时，横切关注点就表示为一个切面</td></tr><tr><td>连接点（join point）</td><td>程序执行的某一刻，在这个点上可以添加额外的动作</td></tr><tr><td>通知（advice）</td><td>切面在特定连接点上执行的动作</td></tr><tr><td>切入点（pointcut）</td><td>切入点是用来描述连接点的，它决定了当前代码与连接点是否匹配</td></tr></tbody></table><h2 id="_3-2-基于-aspectj的配置" tabindex="-1"><a class="header-anchor" href="#_3-2-基于-aspectj的配置" aria-hidden="true">#</a> 3.2 基于@AspectJ的配置</h2><h2 id="_3-3-基于xml-schema的配置" tabindex="-1"><a class="header-anchor" href="#_3-3-基于xml-schema的配置" aria-hidden="true">#</a> 3.3 基于XML Schema的配置</h2>',8),n=[i];function c(h,o){return a(),r("div",null,n)}const _=t(d,[["render",c],["__file","第三章：Spring Framework中的AOP.html.vue"]]);export{_ as default};
