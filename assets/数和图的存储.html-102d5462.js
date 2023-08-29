const t=JSON.parse('{"key":"v-aa2f0dc4","path":"/posts/%E7%AE%97%E6%B3%95%E5%9F%BA%E7%A1%80/%E6%90%9C%E7%B4%A2%E4%B8%8E%E5%9B%BE%E8%AE%BA/%E6%95%B0%E5%92%8C%E5%9B%BE%E7%9A%84%E5%AD%98%E5%82%A8.html","title":"树和图的存储及遍历","lang":"zh-CN","frontmatter":{"title":"树和图的存储及遍历","date":"2023-06-04T00:00:00.000Z","icon":"bit","description":"树和图的存储 树是一种特殊的图（无环连通图） 有向图 a -&gt; b 无向图 a - b 特殊的有向图 两种存储方式： 邻接矩阵（用的比较少，浪费空间，空间复杂度为n^2，多用于存储稠密图） 不能存储重边 二维数组g[a,b] a -&gt; b true代表有连通，false代表无连通 邻接表（用的比较多，单链表） 和拉链法存储hash一样 开启n个单链表，每个点上都有一个单链表，存储这个点可以走到哪个点","head":[["meta",{"property":"og:url","content":"https://github.com/sssjing/myblogone/myblogone/posts/%E7%AE%97%E6%B3%95%E5%9F%BA%E7%A1%80/%E6%90%9C%E7%B4%A2%E4%B8%8E%E5%9B%BE%E8%AE%BA/%E6%95%B0%E5%92%8C%E5%9B%BE%E7%9A%84%E5%AD%98%E5%82%A8.html"}],["meta",{"property":"og:title","content":"树和图的存储及遍历"}],["meta",{"property":"og:description","content":"树和图的存储 树是一种特殊的图（无环连通图） 有向图 a -&gt; b 无向图 a - b 特殊的有向图 两种存储方式： 邻接矩阵（用的比较少，浪费空间，空间复杂度为n^2，多用于存储稠密图） 不能存储重边 二维数组g[a,b] a -&gt; b true代表有连通，false代表无连通 邻接表（用的比较多，单链表） 和拉链法存储hash一样 开启n个单链表，每个点上都有一个单链表，存储这个点可以走到哪个点"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://github.com/sssjing/myblogone/myblogone/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"树和图的存储及遍历"}],["meta",{"property":"article:author","content":"杨景"}],["meta",{"property":"article:published_time","content":"2023-06-04T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"树和图的存储及遍历\\",\\"image\\":[\\"https://github.com/sssjing/myblogone/myblogone/\\"],\\"datePublished\\":\\"2023-06-04T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"杨景\\",\\"url\\":\\"https://github.com/sssjing/myblogone\\",\\"email\\":\\"yangjing_202103@163.com\\"}]}"]]},"headers":[{"level":2,"title":"树和图的存储","slug":"树和图的存储","link":"#树和图的存储","children":[]},{"level":2,"title":"树和图的遍历","slug":"树和图的遍历","link":"#树和图的遍历","children":[{"level":3,"title":"树的重心","slug":"树的重心","link":"#树的重心","children":[]},{"level":3,"title":"图中点的层次","slug":"图中点的层次","link":"#图中点的层次","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.64,"words":1092},"filePathRelative":"posts/算法基础/搜索与图论/数和图的存储.md","localizedDate":"2023年6月4日","excerpt":"<h2> 树和图的存储</h2>\\n<p>树是一种特殊的图（无环连通图）</p>\\n<ul>\\n<li>有向图\\n<ul>\\n<li>a -&gt; b</li>\\n</ul>\\n</li>\\n<li>无向图\\n<ul>\\n<li>a - b</li>\\n<li>特殊的有向图</li>\\n</ul>\\n</li>\\n</ul>\\n<p>两种存储方式：</p>\\n<ul>\\n<li>邻接矩阵（用的比较少，浪费空间，空间复杂度为n^2，多用于存储稠密图）\\n<ul>\\n<li>不能存储重边</li>\\n<li>二维数组g[a,b] a -&gt; b\\n<ul>\\n<li>true代表有连通，false代表无连通</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n<li>邻接表（用的比较多，单链表）\\n<ul>\\n<li>和拉链法存储hash一样</li>\\n<li>开启n个单链表，每个点上都有一个单链表，存储这个点可以走到哪个点</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{t as data};
