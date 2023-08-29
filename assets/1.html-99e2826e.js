import{_ as n}from"./framework-c27b6911.js";import{o as a,c as s,f as e}from"./app-beffe7bc.js";const t={},p=e(`<h2 id="新建项目" tabindex="-1"><a class="header-anchor" href="#新建项目" aria-hidden="true">#</a> 新建项目</h2><p>创建Spring Boot项目引入依赖</p><ul><li>Spring Security</li><li>web</li></ul><h3 id="编写一个测试controller" tabindex="-1"><a class="header-anchor" href="#编写一个测试controller" aria-hidden="true">#</a> 编写一个测试Controller</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>zyf<span class="token punctuation">.</span>springsecuritytest<span class="token punctuation">.</span></span><span class="token class-name">Controller</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">GetMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RestController</span></span><span class="token punctuation">;</span>
<span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloController</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/hello&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时候访问<code>http://localhost:8080/hello</code>会从定向到登陆页面</p><p>在 Spring Security 中，默认的登录页面和登录接口，都是 <code>/login</code> ，只不过一个是 get 请求（登录页面），另一个是 post 请求（登录接口）。</p><h2 id="用户配置密码" tabindex="-1"><a class="header-anchor" href="#用户配置密码" aria-hidden="true">#</a> 用户配置密码</h2><h3 id="通过配置文件" tabindex="-1"><a class="header-anchor" href="#通过配置文件" aria-hidden="true">#</a> 通过配置文件</h3><p>可以在application.properties中配置默认密码</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>spring<span class="token punctuation">.</span>security<span class="token punctuation">.</span>user<span class="token punctuation">.</span>name<span class="token operator">=</span>zyf
spring<span class="token punctuation">.</span>security<span class="token punctuation">.</span>user<span class="token punctuation">.</span>password<span class="token operator">=</span><span class="token number">123456</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="通过配置类" tabindex="-1"><a class="header-anchor" href="#通过配置类" aria-hidden="true">#</a> 通过配置类</h3><h4 id="passwordencoder" tabindex="-1"><a class="header-anchor" href="#passwordencoder" aria-hidden="true">#</a> PasswordEncoder</h4><p>PasswordEncoder 这个接口中就定义了三个方法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">PasswordEncoder</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> <span class="token function">encode</span><span class="token punctuation">(</span><span class="token class-name">CharSequence</span> rawPassword<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">boolean</span> <span class="token function">matches</span><span class="token punctuation">(</span><span class="token class-name">CharSequence</span> rawPassword<span class="token punctuation">,</span> <span class="token class-name">String</span> encodedPassword<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">default</span> <span class="token keyword">boolean</span> <span class="token function">upgradeEncoding</span><span class="token punctuation">(</span><span class="token class-name">String</span> encodedPassword<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>encode 方法用来对明文密码进行加密，返回加密之后的密文。</li><li>matches 方法是一个密码校对方法，在用户登录的时候，将用户传来的明文密码和数据库中保存的密文密码作为参数，传入到这个方法中去，根据返回的 Boolean 值判断用户密码是否输入正确。</li><li>upgradeEncoding 是否还要进行再次加密，这个一般来说就不用了。</li></ol><h4 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h4>`,17),o=[p];function c(i,l){return a(),s("div",null,o)}const d=n(t,[["render",c],["__file","1.html.vue"]]);export{d as default};