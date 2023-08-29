const e=JSON.parse('{"key":"v-486b7306","path":"/posts/rust/rust%E5%85%A5%E9%97%A8/13-.html","title":"13.迭代器和闭包","lang":"zh-CN","frontmatter":{"title":"13.迭代器和闭包","date":"2023-05-18T00:00:00.000Z","icon":"rust","category":"rust","description":"13.1 闭包1-使用闭包创建抽象行为 什么是闭包（closure） 闭包：可以捕获其所在环境的匿名函数 闭包： 匿名函数 保存为变量或作为参数 可以在一个地方创建闭包，然后在另一个上下文中调用闭包来完成运算 可以从其定义的作用域捕获值 例子-生成自定义运动计划的程序 // 定义一个闭包 let expensive_closure = |num: u32,num2| { // 闭包 函数体 println!(\\"calculate slowly ...\\"); thread::sleep(Duration::from_secs(2)); num // 定义了一个函数，但是没有执行 // 函数遇到小括号以后执行 };","head":[["meta",{"property":"og:url","content":"https://github.com/sssjing/myblogone/myblogone/posts/rust/rust%E5%85%A5%E9%97%A8/13-.html"}],["meta",{"property":"og:title","content":"13.迭代器和闭包"}],["meta",{"property":"og:description","content":"13.1 闭包1-使用闭包创建抽象行为 什么是闭包（closure） 闭包：可以捕获其所在环境的匿名函数 闭包： 匿名函数 保存为变量或作为参数 可以在一个地方创建闭包，然后在另一个上下文中调用闭包来完成运算 可以从其定义的作用域捕获值 例子-生成自定义运动计划的程序 // 定义一个闭包 let expensive_closure = |num: u32,num2| { // 闭包 函数体 println!(\\"calculate slowly ...\\"); thread::sleep(Duration::from_secs(2)); num // 定义了一个函数，但是没有执行 // 函数遇到小括号以后执行 };"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-22T03:59:03.000Z"}],["meta",{"property":"article:author","content":"杨景"}],["meta",{"property":"article:published_time","content":"2023-05-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-22T03:59:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"13.迭代器和闭包\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-05-18T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-22T03:59:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"杨景\\",\\"url\\":\\"https://github.com/sssjing/myblogone\\",\\"email\\":\\"yangjing_202103@163.com\\"}]}"]]},"headers":[{"level":2,"title":"13.1 闭包1-使用闭包创建抽象行为","slug":"_13-1-闭包1-使用闭包创建抽象行为","link":"#_13-1-闭包1-使用闭包创建抽象行为","children":[{"level":3,"title":"什么是闭包（closure）","slug":"什么是闭包-closure","link":"#什么是闭包-closure","children":[]},{"level":3,"title":"例子-生成自定义运动计划的程序","slug":"例子-生成自定义运动计划的程序","link":"#例子-生成自定义运动计划的程序","children":[]}]},{"level":2,"title":"13.2 闭包（2）- 闭包类型推断和标注","slug":"_13-2-闭包-2-闭包类型推断和标注","link":"#_13-2-闭包-2-闭包类型推断和标注","children":[{"level":3,"title":"函数和闭包的定义语法","slug":"函数和闭包的定义语法","link":"#函数和闭包的定义语法","children":[]},{"level":3,"title":"闭包的类型推断","slug":"闭包的类型推断","link":"#闭包的类型推断","children":[]}]},{"level":2,"title":"13.3 闭包（3）- 使用泛型参数和fn trait来存储闭包","slug":"_13-3-闭包-3-使用泛型参数和fn-trait来存储闭包","link":"#_13-3-闭包-3-使用泛型参数和fn-trait来存储闭包","children":[{"level":3,"title":"strut","slug":"strut","link":"#strut","children":[]},{"level":3,"title":"如何让strut持有闭包","slug":"如何让strut持有闭包","link":"#如何让strut持有闭包","children":[]},{"level":3,"title":"Fn Trait","slug":"fn-trait","link":"#fn-trait","children":[]},{"level":3,"title":"使用缓存器Cacher实现的限制","slug":"使用缓存器cacher实现的限制","link":"#使用缓存器cacher实现的限制","children":[]}]},{"level":2,"title":"13.4 闭包（4）- 使用闭包捕获环境","slug":"_13-4-闭包-4-使用闭包捕获环境","link":"#_13-4-闭包-4-使用闭包捕获环境","children":[{"level":3,"title":"闭包可以捕获它们所在的环境","slug":"闭包可以捕获它们所在的环境","link":"#闭包可以捕获它们所在的环境","children":[]},{"level":3,"title":"闭包从所在环境捕获值的方式","slug":"闭包从所在环境捕获值的方式","link":"#闭包从所在环境捕获值的方式","children":[]},{"level":3,"title":"move 关键字","slug":"move-关键字","link":"#move-关键字","children":[]},{"level":3,"title":"最佳实践","slug":"最佳实践","link":"#最佳实践","children":[]}]},{"level":2,"title":"13.5 迭代器","slug":"_13-5-迭代器","link":"#_13-5-迭代器","children":[{"level":3,"title":"什么是迭代器","slug":"什么是迭代器","link":"#什么是迭代器","children":[]},{"level":3,"title":"Iterator trait 和 next 方法","slug":"iterator-trait-和-next-方法","link":"#iterator-trait-和-next-方法","children":[]},{"level":3,"title":"几个迭代方法","slug":"几个迭代方法","link":"#几个迭代方法","children":[]}]},{"level":2,"title":"13.6 迭代器（2）- 消耗、产生迭代器","slug":"_13-6-迭代器-2-消耗、产生迭代器","link":"#_13-6-迭代器-2-消耗、产生迭代器","children":[{"level":3,"title":"消耗迭代器的方法","slug":"消耗迭代器的方法","link":"#消耗迭代器的方法","children":[]},{"level":3,"title":"产生其他迭代器的方法","slug":"产生其他迭代器的方法","link":"#产生其他迭代器的方法","children":[]}]},{"level":2,"title":"13.7 使用闭包捕获环境","slug":"_13-7-使用闭包捕获环境","link":"#_13-7-使用闭包捕获环境","children":[{"level":3,"title":"使用闭包捕获环境","slug":"使用闭包捕获环境","link":"#使用闭包捕获环境","children":[]}]},{"level":2,"title":"13.8 创建自定义迭代器","slug":"_13-8-创建自定义迭代器","link":"#_13-8-创建自定义迭代器","children":[{"level":3,"title":"使用Iterator trait来创建自定义迭代器","slug":"使用iterator-trait来创建自定义迭代器","link":"#使用iterator-trait来创建自定义迭代器","children":[]}]},{"level":2,"title":"13.9 改进I/O项目","slug":"_13-9-改进i-o项目","link":"#_13-9-改进i-o项目","children":[]},{"level":2,"title":"13.10 循环和迭代器的性能比较","slug":"_13-10-循环和迭代器的性能比较","link":"#_13-10-循环和迭代器的性能比较","children":[{"level":3,"title":"零开销抽象","slug":"零开销抽象","link":"#零开销抽象","children":[]}]}],"git":{"createdTime":1684727943000,"updatedTime":1684727943000,"contributors":[{"name":"zyf","email":"907392790@qq.com","commits":1}]},"readingTime":{"minutes":6.44,"words":1931},"filePathRelative":"posts/rust/rust入门/13-.md","localizedDate":"2023年5月18日","excerpt":"<h2> 13.1 闭包1-使用闭包创建抽象行为</h2>\\n<h3> 什么是闭包（closure）</h3>\\n<ul>\\n<li>闭包：可以捕获其所在环境的匿名函数</li>\\n<li>闭包：\\n<ul>\\n<li>匿名函数</li>\\n<li>保存为变量或作为参数</li>\\n<li>可以在一个地方创建闭包，然后在另一个上下文中调用闭包来完成运算</li>\\n<li>可以从其定义的作用域捕获值</li>\\n</ul>\\n</li>\\n</ul>\\n<h3> 例子-生成自定义运动计划的程序</h3>\\n<div class=\\"language-rust line-numbers-mode\\" data-ext=\\"rs\\"><pre class=\\"language-rust\\"><code><span class=\\"token comment\\">// 定义一个闭包</span>\\n<span class=\\"token keyword\\">let</span> expensive_closure <span class=\\"token operator\\">=</span> <span class=\\"token closure-params\\"><span class=\\"token closure-punctuation punctuation\\">|</span>num<span class=\\"token punctuation\\">:</span> <span class=\\"token keyword\\">u32</span><span class=\\"token punctuation\\">,</span>num2<span class=\\"token closure-punctuation punctuation\\">|</span></span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token comment\\">// 闭包 函数体</span>\\n  <span class=\\"token macro property\\">println!</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"calculate slowly ...\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token namespace\\">thread<span class=\\"token punctuation\\">::</span></span><span class=\\"token function\\">sleep</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">Duration</span><span class=\\"token punctuation\\">::</span><span class=\\"token function\\">from_secs</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  num\\n  <span class=\\"token comment\\">// 定义了一个函数，但是没有执行</span>\\n  <span class=\\"token comment\\">// 函数遇到小括号以后执行</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
