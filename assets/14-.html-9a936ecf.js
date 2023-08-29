import{_ as i}from"./framework-c27b6911.js";import{r,o as t,c as o,a,b as e,e as n,f as s}from"./app-beffe7bc.js";const c={},d=s(`<h2 id="_14-1-通过release-profile来自定义构建" tabindex="-1"><a class="header-anchor" href="#_14-1-通过release-profile来自定义构建" aria-hidden="true">#</a> 14.1 通过release profile来自定义构建</h2><h3 id="release-profile" tabindex="-1"><a class="header-anchor" href="#release-profile" aria-hidden="true">#</a> release profile</h3><ul><li>release profile <ul><li>是预定义的</li><li>可自定义：可用不同的配置，对代码编译拥有更多的控制</li></ul></li><li>每个profile的配置都独立于其他的profile</li><li>Cargo主要的两个profile： <ul><li>dev profile：适用于开发，<code>cargo build</code></li><li>release profile：适用于发布，<code>cargo build -release</code></li></ul></li></ul><h3 id="自定义profile" tabindex="-1"><a class="header-anchor" href="#自定义profile" aria-hidden="true">#</a> 自定义profile</h3><ul><li>针对每个profile，Cargo都提供了默认的配置</li><li>如果想自定义xxxx profile的配置： <ul><li>可以在Carg.toml里添加[profile.xxxx]区域，在里面覆盖默认配置的子集</li></ul></li></ul><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token comment">// 例子</span>
<span class="token punctuation">[</span>profile<span class="token punctuation">.</span>dev<span class="token punctuation">]</span>
opt<span class="token operator">-</span>level <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// 编译过程对rust代码进行哪种程度的优化</span>
<span class="token punctuation">[</span>profile<span class="token punctuation">.</span>release<span class="token punctuation">]</span>
opt<span class="token operator">-</span>level <span class="token operator">=</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),u=a("li",null,"对于每个配置的默认值和完整选项,请参见：",-1),p={href:"https://doc.rust-lang.org/cargo/",target:"_blank",rel:"noopener noreferrer"},h=a("h2",{id:"_14-2发布crate到crates-io",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_14-2发布crate到crates-io","aria-hidden":"true"},"#"),e(" 14.2发布crate到"),a("code",null,"crates.io")],-1),k=a("h3",{id:"crates-io",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#crates-io","aria-hidden":"true"},"#"),e(),a("code",null,"crates.io")],-1),g=a("li",null,"可以通过发布包来共享你的代码",-1),m={href:"https://crates.io/",target:"_blank",rel:"noopener noreferrer"},_=a("ul",null,[a("li",null,"他会分发已注册的包的源代码"),a("li",null,"主要托管开源的代码")],-1),b=s(`<h3 id="文档注释" tabindex="-1"><a class="header-anchor" href="#文档注释" aria-hidden="true">#</a> 文档注释</h3><ul><li>文档注释：用于生成文档 <ul><li>生成HTML文档</li><li>显示公共API的文档注释：如何使用API</li><li>使用///</li><li>支持Mardown</li><li>放置在被说明条目之前</li></ul></li></ul><h3 id="生成html文档的命令" tabindex="-1"><a class="header-anchor" href="#生成html文档的命令" aria-hidden="true">#</a> 生成HTML文档的命令</h3><ul><li><code>cargo doc</code><ul><li>它会运行rustdoc工具（Rust安装包自带）</li><li>把生成的HTML文档放在target/doc目录下</li></ul></li><li><code>cargo doc --open</code><ul><li>构建当前crate的文档（也包含crate依赖项的文档）</li><li>在浏览器打开</li></ul></li></ul><h3 id="常用章节" tabindex="-1"><a class="header-anchor" href="#常用章节" aria-hidden="true">#</a> 常用章节</h3><ul><li>#Examples</li><li>其他常用章节： <ul><li>Panics：函数可能发生panic的场景</li><li>Errors：如果函数返回Result，描述可能的错误种类，以及导致错误的条件</li><li>Safety：如果函数处于unsafe调用，就应该解释函数unsafe的原因，以及调用者确保的使用前提</li></ul></li></ul><h3 id="文档注释作为测试" tabindex="-1"><a class="header-anchor" href="#文档注释作为测试" aria-hidden="true">#</a> 文档注释作为测试</h3><ul><li>示例代码块的附加值 <ul><li>运行cargo test：将把文档注释中的示例代码作为测试来运行</li></ul></li></ul><h3 id="为包含注释的项添加文档注释" tabindex="-1"><a class="header-anchor" href="#为包含注释的项添加文档注释" aria-hidden="true">#</a> 为包含注释的项添加文档注释</h3><ul><li>符号：//!</li><li>这类注释通常描述crate和模块 <ul><li>crate root（按惯例src/lib.rs）</li><li>一个模块内，将crate或模块作为一个整体进行记录</li></ul></li></ul><h2 id="_14-3-pub-use" tabindex="-1"><a class="header-anchor" href="#_14-3-pub-use" aria-hidden="true">#</a> 14.3 pub use</h2><h3 id="使用pub-use-导出方便使用的公共api" tabindex="-1"><a class="header-anchor" href="#使用pub-use-导出方便使用的公共api" aria-hidden="true">#</a> 使用pub use 导出方便使用的公共api</h3><ul><li>问题：crate的程序结构在开发时对于开发这很合理，但对于它的使用者不够方便 <ul><li>开发者会把程序结构分为很多层，使用者想找到这种深层结构中的某个类型很费劲</li></ul></li><li>例如： <ul><li>麻烦：my_crate::some_module::another_module::UsefuilType;</li><li>方便：my_crate::UsefulType;</li></ul></li><li>解决办法： <ul><li>不需要重新组织内部代码结构</li><li>使用pub use：可以重新导出，创建一个与内部私有结构不同的对外公共结构</li></ul></li></ul><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">pub</span> <span class="token keyword">use</span> <span class="token keyword">self</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>kinds<span class="token punctuation">::</span></span><span class="token class-name">PrimaryColor</span><span class="token punctuation">;</span>
<span class="token keyword">pub</span> <span class="token keyword">use</span> <span class="token keyword">self</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>kinds<span class="token punctuation">::</span></span><span class="token class-name">SecondaryColor</span><span class="token punctuation">;</span>
<span class="token keyword">pub</span> <span class="token keyword">use</span> <span class="token keyword">self</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>utils<span class="token punctuation">::</span></span>mix<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_14-4-发布crate到crate-io-2" tabindex="-1"><a class="header-anchor" href="#_14-4-发布crate到crate-io-2" aria-hidden="true">#</a> 14.4 发布crate到<code>crate.io</code>(2)</h2><h3 id="创建并设置crate-io账号" tabindex="-1"><a class="header-anchor" href="#创建并设置crate-io账号" aria-hidden="true">#</a> 创建并设置Crate io账号</h3><ul><li>房补crate之前，需要创建账号并且获得API token</li><li>运行命令 cargo login [你的API token] <ul><li>通知cargo，你的api token存储在本地~/.cargo/credentials</li></ul></li><li>API token可以撤销</li></ul><h3 id="为新的crate添加元数据" tabindex="-1"><a class="header-anchor" href="#为新的crate添加元数据" aria-hidden="true">#</a> 为新的crate添加元数据</h3>`,18),f=a("li",null,"crate需要唯一名称：name",-1),v=a("li",null,"description：一两句话即可，会出现在crate搜索的结果里",-1),x={href:"http://sodx.org.licenses/",target:"_blank",rel:"noopener noreferrer"},y=a("ul",null,[a("li",null,"可以指定多个license：可用OR隔开")],-1),C=a("li",null,"verison",-1),w=a("li",null,"author",-1),P=a("li",null,[e("发布："),a("code",null,"cargo publish"),e("命令")],-1),A=a("h3",{id:"发布到crates-io",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#发布到crates-io","aria-hidden":"true"},"#"),e(" 发布到"),a("code",null,"Crates.io")],-1),E=a("ul",null,[a("li",null,[e("crate一旦发布，就是永久性的，该版本无法覆盖，代码无法删除 "),a("ul",null,[a("li",null,"目的：依赖于该版本的项目可继续正常工作")])])],-1),T=a("h3",{id:"发布已存在crate的新版本",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#发布已存在crate的新版本","aria-hidden":"true"},"#"),e(" 发布已存在crate的新版本")],-1),I=a("li",null,"修改crate后，需要先修改Cargo.toml里的version值，再进行重新发布",-1),q={href:"http://semver.org/",target:"_blank",rel:"noopener noreferrer"},H=s(`<h3 id="使用cargo-yank-从crates-io撤回版本" tabindex="-1"><a class="header-anchor" href="#使用cargo-yank-从crates-io撤回版本" aria-hidden="true">#</a> 使用cargo yank 从Crates.io撤回版本</h3><ul><li>不可以删除crate之前的版本</li><li>但可以防止其他项目把他作为新的依赖：yank(撤回)一个crate版本 <ul><li>防止新项目依赖于该版本</li><li>已经存在的项目可以继续将其作为依赖</li></ul></li><li>yank意味着 <ul><li>所有已经产生Cargo.lock的项目都不会中断</li><li>任何将来生成的cargo.lock文件都不会被yank的版本</li></ul></li><li>命令： <ul><li>yank一个版本（不会删除任何代码）：cargo yank --vers 1.0.1</li><li>取消yank：cargo yank --vers 1.0.1 --undo</li></ul></li></ul><h2 id="_14-5-cargo-工作空间" tabindex="-1"><a class="header-anchor" href="#_14-5-cargo-工作空间" aria-hidden="true">#</a> 14.5 Cargo 工作空间</h2><h3 id="cargo工作空间-workspaces" tabindex="-1"><a class="header-anchor" href="#cargo工作空间-workspaces" aria-hidden="true">#</a> Cargo工作空间（Workspaces）</h3><ul><li>cargo工作空间：帮助管理多个相互关联且需要协同开发的crate</li><li>cargo工作空间是一套共享同一个Cargo.lock和输出文件夹的包</li></ul><h3 id="创建工作空间" tabindex="-1"><a class="header-anchor" href="#创建工作空间" aria-hidden="true">#</a> 创建工作空间</h3><ul><li>有多种方式来组建工作空间例如：1个二进制crate，2个库crate <ul><li>二进制crate：main函数，依赖于其他两个库crate</li><li>其中一个库crate提供add_one函数</li><li>另一个库crate提供add_two函数</li></ul></li><li>在父文件夹下创建Cargo.tmoml</li></ul><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token comment">// Cargo.toml</span>
<span class="token punctuation">[</span>workspace<span class="token punctuation">]</span>

members <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">&quot;adder&quot;</span>
  <span class="token string">&quot;add_one&quot;</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token comment">// 让adder依赖add_one</span>
<span class="token comment">// 编写adder目录下的Cargo.toml</span>

<span class="token punctuation">[</span>dependencies<span class="token punctuation">]</span>

add<span class="token operator">-</span>one <span class="token operator">=</span> <span class="token punctuation">{</span>path <span class="token operator">=</span> <span class="token string">&quot;../add-one&quot;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>运行指定的crate<code>cargo run -p [crate的名称]</code></li></ul><h3 id="工作空间中依赖外部的crate" tabindex="-1"><a class="header-anchor" href="#工作空间中依赖外部的crate" aria-hidden="true">#</a> 工作空间中依赖外部的crate</h3><ul><li>工作空间只有一个Cargo.lock文件，在工作空间的顶层目录 <ul><li>保证工作空间内所有crate使用的依赖版本相同</li><li>工作空间内所有crate相互兼容</li></ul></li></ul><h2 id="_14-6-从crates-io安装二进制crate" tabindex="-1"><a class="header-anchor" href="#_14-6-从crates-io安装二进制crate" aria-hidden="true">#</a> 14.6 从Crates.io安装二进制crate</h2><h3 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h3><ul><li>cargo install</li><li>限制:只能安装具有二进制目标(binary target)的crate</li><li>二进制目标binary targer:是一个可执行程序</li><li>由拥有src/main.rs或其他被指定为二进制文件的crate生成</li><li>通常README里有关于crate的描述 <ul><li>拥有library target</li><li>拥有bianry target</li></ul></li></ul><h3 id="cargo-install" tabindex="-1"><a class="header-anchor" href="#cargo-install" aria-hidden="true">#</a> cargo install</h3><ul><li>cargo install会将安装的二进制存放在根目录的bin文件夹</li><li>如果是用rustup安装的Rust,没有任何自定义配置,那么二进制存放目录是$HOME/.cargo/bin <ul><li>要确保该目录在环境变量$PATH中</li></ul></li></ul><h3 id="使用自定义命令扩展cargo" tabindex="-1"><a class="header-anchor" href="#使用自定义命令扩展cargo" aria-hidden="true">#</a> 使用自定义命令扩展cargo</h3><ul><li>cargo被设计可以使用子命令来扩展</li><li>例:如果$PATH中某个二进制是cargo-something,你可以像子命令一样来运行: <ul><li>cargo something</li></ul></li><li>类似这样的自定义命令可以通过该命令列出: <code>cargo --list</code></li><li><mark>优点</mark>:可以通过<code>cargo install</code>来扩展安装,像内置工具一样来运行</li></ul>`,19);function M(L,R){const l=r("ExternalLinkIcon");return t(),o("div",null,[d,a("ul",null,[u,a("li",null,[a("a",p,[e("https://doc.rust-lang.org/cargo/"),n(l)])])]),h,k,a("ul",null,[g,a("li",null,[e("crate的注册表在 "),a("a",m,[e("https://crates.io/"),n(l)]),_])]),b,a("ul",null,[a("li",null,[e("在发布crate之前，需要在cargo.toml的[package]区域为crate添加一些元数据： "),a("ul",null,[f,v,a("li",null,[e("license：需要提供许可标识值可到"),a("a",x,[e("http://sodx.org.licenses/"),n(l)]),e(" 查找 "),y]),C,w])]),P]),A,E,T,a("ul",null,[I,a("li",null,[e("参照 "),a("a",q,[e("http://semver.org/"),n(l)]),e(" 来使用你的语义版本")])]),H])}const B=i(c,[["render",M],["__file","14-.html.vue"]]);export{B as default};
