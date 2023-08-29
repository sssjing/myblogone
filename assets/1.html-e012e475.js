const t=JSON.parse('{"key":"v-d840f45c","path":"/posts/rust/rust%E9%A1%B9%E7%9B%AE/blog/1.html","title":"","lang":"zh-CN","frontmatter":{"description":"错误处理思路 Handlers都返回Result&lt;T,E&gt;类型，T是响应内容（OK），E是我们自定义的错误类型，它们的类型要可以被ntex作为响应返回给客户端（实现Responder或WebResponseError trait） E是一个枚举，包含了程序中可能出现的错误以及具体的描述信息 我们要为这个枚举实现WebResponseError这个trait，以便把ntex把自定义错误类型转化为HTTP响应并附上对应的状态码（还要实现Display trait）","head":[["meta",{"property":"og:url","content":"https://github.com/sssjing/myblogone/myblogone/posts/rust/rust%E9%A1%B9%E7%9B%AE/blog/1.html"}],["meta",{"property":"og:description","content":"错误处理思路 Handlers都返回Result&lt;T,E&gt;类型，T是响应内容（OK），E是我们自定义的错误类型，它们的类型要可以被ntex作为响应返回给客户端（实现Responder或WebResponseError trait） E是一个枚举，包含了程序中可能出现的错误以及具体的描述信息 我们要为这个枚举实现WebResponseError这个trait，以便把ntex把自定义错误类型转化为HTTP响应并附上对应的状态码（还要实现Display trait）"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"杨景"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"杨景\\",\\"url\\":\\"https://github.com/sssjing/myblogone\\",\\"email\\":\\"yangjing_202103@163.com\\"}]}"]]},"headers":[{"level":2,"title":"错误处理思路","slug":"错误处理思路","link":"#错误处理思路","children":[{"level":3,"title":"简单实现","slug":"简单实现","link":"#简单实现","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":0.79,"words":237},"filePathRelative":"posts/rust/rust项目/blog/1.md","excerpt":"<h2> 错误处理思路</h2>\\n<ul>\\n<li><code>Handlers</code>都返回<code>Result&lt;T,E&gt;</code>类型，T是响应内容（OK），E是我们自定义的错误类型，它们的类型要可以被ntex作为响应返回给客户端（实现Responder或WebResponseError trait）</li>\\n<li>E是一个枚举，包含了程序中可能出现的错误以及具体的描述信息</li>\\n<li>我们要为这个枚举实现<code>WebResponseError</code>这个trait，以便把ntex把自定义错误类型转化为HTTP响应并附上对应的状态码（还要实现Display trait）</li>\\n</ul>","autoDesc":true}');export{t as data};