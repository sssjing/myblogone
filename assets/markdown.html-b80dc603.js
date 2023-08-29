import{_ as u}from"./framework-c27b6911.js";import{r as t,o as m,c as b,a as n,e as a,w as e,b as s,f as r}from"./app-beffe7bc.js";const k={},h=n("h2",{id:"内置markdown扩展",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#内置markdown扩展","aria-hidden":"true"},"#"),s(" 内置Markdown扩展")],-1),g=n("h3",{id:"链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#链接","aria-hidden":"true"},"#"),s(" 链接")],-1),_={href:"https://www.bilibili.com",target:"_blank",rel:"noopener noreferrer"},w=r(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 相对路径 --&gt;</span>
<span class="token url">[<span class="token content">首页</span>](<span class="token url">../../README.md</span>)</span>
<span class="token comment">&lt;!-- 绝对路径 --&gt;</span>
<span class="token url">[<span class="token content">首页</span>](<span class="token url">/</span>)</span>
<span class="token comment">&lt;!-- URL --&gt;</span>
<span class="token url">[<span class="token content">Bilibili</span>](<span class="token url">https://www.bilibili.com</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="emoji" tabindex="-1"><a class="header-anchor" href="#emoji" aria-hidden="true">#</a> Emoji</h3>`,2),f=n("code",null,":EMOJICODE:",-1),j={href:"https://github.com/ikatyang/emoji-cheat-sheet",target:"_blank",rel:"noopener noreferrer"},x=n("h3",{id:"目录",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),s(" 目录")],-1),E=n("p",null,[n("code",null,"[[toc]]"),s(" 输出：")],-1),y={class:"table-of-contents"},A=r(`<h2 id="选项卡" tabindex="-1"><a class="header-anchor" href="#选项卡" aria-hidden="true">#</a> 选项卡</h2><h3 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h3><p>需要将选项卡包装在<code>tabs</code>容器中。 可以在<code>tabs</code>容器中添加一个 id 后缀，该后缀将用作选项卡 id。 所有具有相同 id 的选项卡将共享相同的切换事件。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tabs#fruit

<span class="token comment">&lt;!-- 这里，fruit 将用作 id，它是可选的 --&gt;</span>

<span class="token comment">&lt;!-- 选项卡内容 --&gt;</span>

:::

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个容器内，你应该使用 <code>@tab</code> 标记来标记和分隔选项卡内容。</p><p>在 <code>@tab</code> 标记后，你可以添加文本 <code>:active</code> 默认激活选项卡，之后的文本将被解析为选项卡标题。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tabs

@tab 标题 1

<span class="token comment">&lt;!-- tab 1 内容 --&gt;</span>

@tab 标题 2

<span class="token comment">&lt;!-- tab 2 内容 --&gt;</span>

@tab:active 标题 3

<span class="token comment">&lt;!-- tab 3 将会被默认激活 --&gt;</span>

<span class="token comment">&lt;!-- tab 3 内容 --&gt;</span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认情况下，标题将用作选项卡的值，但你可以使用 id 后缀覆盖它。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tabs

@tab 标题 1

<span class="token comment">&lt;!-- 此处，选项卡 1 的标题“标题 1”将用作值。 --&gt;</span>

<span class="token comment">&lt;!-- tab 1 内容 --&gt;</span>

@tab 标题 2#值 2

<span class="token comment">&lt;!-- 这里，tab 2 的标题将是 “标题 2”，但它会使用 “值 2” 作为选项卡的值--&gt;</span>

<span class="token comment">&lt;!-- tab 2 内容 --&gt;</span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h3><p>一个水果选项卡列表</p>`,11),B=n("p",null,"Apple",-1),C=n("p",null,"Banana",-1),V=r(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tabs#fruit

@tab apple#apple

Apple

@tab banana#banana

Banana

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另一个水果选项卡：</p>`,2),L=n("p",null,"Apple",-1),M=n("p",null,"Banana",-1),T=n("p",null,"Orange",-1),D=r(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tabs#fruit

@tab apple

Apple

@tab banana

Banana

@tab orange

Orange

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="容器" tabindex="-1"><a class="header-anchor" href="#容器" aria-hidden="true">#</a> 容器</h2><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>信息容器。</p></div><div class="hint-container note"><p class="hint-container-title">注</p><p>注释容器。</p></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>提示容器</p></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>警告容器</p></div><div class="hint-container danger"><p class="hint-container-title">警告</p><p>危险容器</p></div><details class="hint-container details"><summary>详情</summary><p>详情容器</p></details><div class="hint-container info"><p class="hint-container-title">自定义标题</p><p>一个有 <code>代码</code> 和 <a href="#%E6%BC%94%E7%A4%BA">链接</a> 的信息容器。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><div class="hint-container note"><p class="hint-container-title">自定义标题</p><p>一个有 <code>代码</code> 和 <a href="#%E6%BC%94%E7%A4%BA">链接</a> 的注释容器。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><div class="hint-container tip"><p class="hint-container-title">自定义标题</p><p>一个有 <code>代码</code> 和 <a href="#%E6%BC%94%E7%A4%BA">链接</a> 的提示容器。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><div class="hint-container warning"><p class="hint-container-title">自定义标题</p><p>一个有 <code>代码</code> 和 <a href="#%E6%BC%94%E7%A4%BA">链接</a> 的警告容器。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><div class="hint-container danger"><p class="hint-container-title">自定义标题</p><p>一个有 <code>代码</code> 和 <a href="#%E6%BC%94%E7%A4%BA">链接</a> 的危险容器。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><details class="hint-container details"><summary>自定义标题</summary><p>一个有 <code>代码</code> 和 <a href="#%E6%BC%94%E7%A4%BA">链接</a> 的详情容器。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details><div class="hint-container info"><p class="hint-container-title">自定义信息</p></div><div class="hint-container note"><p class="hint-container-title">自定义注释</p></div><div class="hint-container tip"><p class="hint-container-title">自定义提示</p></div><div class="hint-container warning"><p class="hint-container-title">自定义警告</p></div><div class="hint-container danger"><p class="hint-container-title">自定义危险</p></div><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: info
信息容器。
:::

::: note
注释容器。
:::

::: tip
提示容器
:::

::: warning
警告容器
:::

::: danger
危险容器
:::

::: details
详情容器
:::

::: info 自定义标题

一个有 <span class="token code-snippet code keyword">\`代码\`</span> 和 <span class="token url">[<span class="token content">链接</span>](<span class="token url">#演示</span>)</span> 的信息容器。

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::

::: note 自定义标题

一个有 <span class="token code-snippet code keyword">\`代码\`</span> 和 <span class="token url">[<span class="token content">链接</span>](<span class="token url">#演示</span>)</span> 的注释容器。

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::

::: tip 自定义标题

一个有 <span class="token code-snippet code keyword">\`代码\`</span> 和 <span class="token url">[<span class="token content">链接</span>](<span class="token url">#演示</span>)</span> 的提示容器。

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::

::: warning 自定义标题

一个有 <span class="token code-snippet code keyword">\`代码\`</span> 和 <span class="token url">[<span class="token content">链接</span>](<span class="token url">#演示</span>)</span> 的警告容器。

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::

::: danger 自定义标题

一个有 <span class="token code-snippet code keyword">\`代码\`</span> 和 <span class="token url">[<span class="token content">链接</span>](<span class="token url">#演示</span>)</span> 的危险容器。

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::

::: details 自定义标题

一个有 <span class="token code-snippet code keyword">\`代码\`</span> 和 <span class="token url">[<span class="token content">链接</span>](<span class="token url">#演示</span>)</span> 的详情容器。

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::

::: info 自定义信息
:::

::: note 自定义注释
:::

::: tip 自定义提示
:::

::: warning 自定义警告
:::

::: danger 自定义危险
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="标记" tabindex="-1"><a class="header-anchor" href="#标记" aria-hidden="true">#</a> 标记</h2><p>VuePress Theme Hope <mark>非常</mark> 强大!</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>VuePress Theme Hope ==非常== 强大!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="更多markdown增强语法" tabindex="-1"><a class="header-anchor" href="#更多markdown增强语法" aria-hidden="true">#</a> 更多markdown增强语法</h2>`,24),N={href:"https://theme-hope.vuejs.press/zh/guide/markdown/mark.html#%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"};function O(R,I){const p=t("RouterLink"),o=t("ExternalLinkIcon"),i=t("router-link"),v=t("Tabs");return m(),b("div",null,[h,g,n("p",null,[a(p,{to:"/"},{default:e(()=>[s("首页")]),_:1}),n("a",_,[s("Bilibili"),a(o)])]),w,n("p",null,[s("可以在Markdown中输入"),f,s("来添加表情。 前往"),n("a",j,[s("emoji-cheat-sheet"),a(o)])]),x,E,n("nav",y,[n("ul",null,[n("li",null,[a(i,{to:"#内置markdown扩展"},{default:e(()=>[s("内置Markdown扩展")]),_:1}),n("ul",null,[n("li",null,[a(i,{to:"#链接"},{default:e(()=>[s("链接")]),_:1})]),n("li",null,[a(i,{to:"#emoji"},{default:e(()=>[s("Emoji")]),_:1})]),n("li",null,[a(i,{to:"#目录"},{default:e(()=>[s("目录")]),_:1})])])]),n("li",null,[a(i,{to:"#选项卡"},{default:e(()=>[s("选项卡")]),_:1}),n("ul",null,[n("li",null,[a(i,{to:"#用法"},{default:e(()=>[s("用法")]),_:1})]),n("li",null,[a(i,{to:"#案例"},{default:e(()=>[s("案例")]),_:1})])])]),n("li",null,[a(i,{to:"#容器"},{default:e(()=>[s("容器")]),_:1})]),n("li",null,[a(i,{to:"#标记"},{default:e(()=>[s("标记")]),_:1})]),n("li",null,[a(i,{to:"#更多markdown增强语法"},{default:e(()=>[s("更多markdown增强语法")]),_:1})])])]),A,a(v,{id:"52",data:[{title:"apple",id:"apple"},{title:"banana",id:"banana"}],"tab-id":"fruit"},{tab0:e(({title:l,value:d,isActive:c})=>[B]),tab1:e(({title:l,value:d,isActive:c})=>[C]),_:1}),V,a(v,{id:"68",data:[{title:"apple"},{title:"banana"},{title:"orange"}],"tab-id":"fruit"},{tab0:e(({title:l,value:d,isActive:c})=>[L]),tab1:e(({title:l,value:d,isActive:c})=>[M]),tab2:e(({title:l,value:d,isActive:c})=>[T]),_:1}),D,n("p",null,[n("a",N,[s("点击这里"),a(o)])])])}const z=u(k,[["render",O],["__file","markdown.html.vue"]]);export{z as default};
