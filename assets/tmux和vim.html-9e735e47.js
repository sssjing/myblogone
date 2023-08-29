const n=JSON.parse('{"key":"v-8e354b0c","path":"/posts/Linux/tmux%E5%92%8Cvim.html","title":"tmux和vim","lang":"zh-CN","frontmatter":{"title":"tmux和vim","icon":"linux","date":"2023-05-09T00:00:00.000Z","category":["linux"],"description":"tmux 功能： (1) 分屏。 (2) 允许断开Terminal连接后，继续运行进程。 结构： 一个tmux可以包含多个session，一个session可以包含多个window，一个window可以包含多个pane。 实例： tmux: session 0: window 0: pane 0 pane 1 pane 2 ... window 1 window 2 ... session 1 session 2 ... 操作： (1) tmux：新建一个session，其中包含一个window，window中包含一个pane，pane里打开了一个shell对话框。 (2) 按下Ctrl + a后手指松开，然后按%：将当前pane左右平分成两个pane。 (3) 按下Ctrl + a后手指松开，然后按\\"（注意是双引号\\"）：将当前pane上下平分成两个pane。 (4) Ctrl + d：关闭当前pane；如果当前window的所有pane均已关闭，则自动关闭window；如果当前session的所有window均已关闭，则自动关闭session。 (5) 鼠标点击可以选pane。 (6) 按下ctrl + a后手指松开，然后按方向键：选择相邻的pane。 (7) 鼠标拖动pane之间的分割线，可以调整分割线的位置。 (8) 按住ctrl + a的同时按方向键，可以调整pane之间分割线的位置。 (9) 按下ctrl + a后手指松开，然后按z：将当前pane全屏/取消全屏。 (10) 按下ctrl + a后手指松开，然后按d：挂起当前session。 (11) tmux a：打开之前挂起的session。 (12) 按下ctrl + a后手指松开，然后按s：选择其它session。 方向键 —— 上：选择上一项 session/window/pane 方向键 —— 下：选择下一项 session/window/pane 方向键 —— 右：展开当前项 session/window 方向键 —— 左：闭合当前项 session/window (13) 按下Ctrl + a后手指松开，然后按c：在当前session中创建一个新的window。 (14) 按下Ctrl + a后手指松开，然后按w：选择其他window，操作方法与(12)完全相同。 (15) 按下Ctrl + a后手指松开，然后按PageUp：翻阅当前pane内的内容。 (16) 鼠标滚轮：翻阅当前pane内的内容。 (17) 在tmux中选中文本时，需要按住shift键。（仅支持Windows和Linux，不支持Mac，不过该操作并不是必须的，因此影响不大） (18) tmux中复制/粘贴文本的通用方式： (1) 按下Ctrl + a后松开手指，然后按[ (2) 用鼠标选中文本，被选中的文本会被自动复制到tmux的剪贴板 (3) 按下Ctrl + a后松开手指，然后按]，会将剪贴板中的内容粘贴到光标处","head":[["meta",{"property":"og:url","content":"https://github.com/sssjing/myblogone/myblogone/posts/Linux/tmux%E5%92%8Cvim.html"}],["meta",{"property":"og:title","content":"tmux和vim"}],["meta",{"property":"og:description","content":"tmux 功能： (1) 分屏。 (2) 允许断开Terminal连接后，继续运行进程。 结构： 一个tmux可以包含多个session，一个session可以包含多个window，一个window可以包含多个pane。 实例： tmux: session 0: window 0: pane 0 pane 1 pane 2 ... window 1 window 2 ... session 1 session 2 ... 操作： (1) tmux：新建一个session，其中包含一个window，window中包含一个pane，pane里打开了一个shell对话框。 (2) 按下Ctrl + a后手指松开，然后按%：将当前pane左右平分成两个pane。 (3) 按下Ctrl + a后手指松开，然后按\\"（注意是双引号\\"）：将当前pane上下平分成两个pane。 (4) Ctrl + d：关闭当前pane；如果当前window的所有pane均已关闭，则自动关闭window；如果当前session的所有window均已关闭，则自动关闭session。 (5) 鼠标点击可以选pane。 (6) 按下ctrl + a后手指松开，然后按方向键：选择相邻的pane。 (7) 鼠标拖动pane之间的分割线，可以调整分割线的位置。 (8) 按住ctrl + a的同时按方向键，可以调整pane之间分割线的位置。 (9) 按下ctrl + a后手指松开，然后按z：将当前pane全屏/取消全屏。 (10) 按下ctrl + a后手指松开，然后按d：挂起当前session。 (11) tmux a：打开之前挂起的session。 (12) 按下ctrl + a后手指松开，然后按s：选择其它session。 方向键 —— 上：选择上一项 session/window/pane 方向键 —— 下：选择下一项 session/window/pane 方向键 —— 右：展开当前项 session/window 方向键 —— 左：闭合当前项 session/window (13) 按下Ctrl + a后手指松开，然后按c：在当前session中创建一个新的window。 (14) 按下Ctrl + a后手指松开，然后按w：选择其他window，操作方法与(12)完全相同。 (15) 按下Ctrl + a后手指松开，然后按PageUp：翻阅当前pane内的内容。 (16) 鼠标滚轮：翻阅当前pane内的内容。 (17) 在tmux中选中文本时，需要按住shift键。（仅支持Windows和Linux，不支持Mac，不过该操作并不是必须的，因此影响不大） (18) tmux中复制/粘贴文本的通用方式： (1) 按下Ctrl + a后松开手指，然后按[ (2) 用鼠标选中文本，被选中的文本会被自动复制到tmux的剪贴板 (3) 按下Ctrl + a后松开手指，然后按]，会将剪贴板中的内容粘贴到光标处"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-22T03:59:03.000Z"}],["meta",{"property":"article:author","content":"杨景"}],["meta",{"property":"article:published_time","content":"2023-05-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-22T03:59:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"tmux和vim\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-05-09T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-22T03:59:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"杨景\\",\\"url\\":\\"https://github.com/sssjing/myblogone\\",\\"email\\":\\"yangjing_202103@163.com\\"}]}"]]},"headers":[{"level":2,"title":"tmux","slug":"tmux","link":"#tmux","children":[]},{"level":2,"title":"vim","slug":"vim","link":"#vim","children":[]}],"git":{"createdTime":1684727943000,"updatedTime":1684727943000,"contributors":[{"name":"zyf","email":"907392790@qq.com","commits":1}]},"readingTime":{"minutes":5.08,"words":1524},"filePathRelative":"posts/Linux/tmux和vim.md","localizedDate":"2023年5月9日","excerpt":"<h2> tmux</h2>\\n<div class=\\"language-tmux line-numbers-mode\\" data-ext=\\"tmux\\"><pre class=\\"language-tmux\\"><code>功能：\\n    (1) 分屏。\\n    (2) 允许断开Terminal连接后，继续运行进程。\\n结构：\\n    一个tmux可以包含多个session，一个session可以包含多个window，一个window可以包含多个pane。\\n    实例：\\n        tmux:\\n            session 0:\\n                window 0:\\n                    pane 0\\n                    pane 1\\n                    pane 2\\n                    ...\\n                window 1\\n                window 2\\n                ...\\n            session 1\\n            session 2\\n            ...\\n操作：\\n    (1) tmux：新建一个session，其中包含一个window，window中包含一个pane，pane里打开了一个shell对话框。\\n    (2) 按下Ctrl + a后手指松开，然后按%：将当前pane左右平分成两个pane。\\n    (3) 按下Ctrl + a后手指松开，然后按\\"（注意是双引号\\"）：将当前pane上下平分成两个pane。\\n    (4) Ctrl + d：关闭当前pane；如果当前window的所有pane均已关闭，则自动关闭window；如果当前session的所有window均已关闭，则自动关闭session。\\n    (5) 鼠标点击可以选pane。\\n    (6) 按下ctrl + a后手指松开，然后按方向键：选择相邻的pane。\\n    (7) 鼠标拖动pane之间的分割线，可以调整分割线的位置。\\n    (8) 按住ctrl + a的同时按方向键，可以调整pane之间分割线的位置。\\n    (9) 按下ctrl + a后手指松开，然后按z：将当前pane全屏/取消全屏。\\n    (10) 按下ctrl + a后手指松开，然后按d：挂起当前session。\\n    (11) tmux a：打开之前挂起的session。\\n    (12) 按下ctrl + a后手指松开，然后按s：选择其它session。\\n        方向键 —— 上：选择上一项 session/window/pane\\n        方向键 —— 下：选择下一项 session/window/pane\\n        方向键 —— 右：展开当前项 session/window\\n        方向键 —— 左：闭合当前项 session/window\\n    (13) 按下Ctrl + a后手指松开，然后按c：在当前session中创建一个新的window。\\n    (14) 按下Ctrl + a后手指松开，然后按w：选择其他window，操作方法与(12)完全相同。\\n    (15) 按下Ctrl + a后手指松开，然后按PageUp：翻阅当前pane内的内容。\\n    (16) 鼠标滚轮：翻阅当前pane内的内容。\\n    (17) 在tmux中选中文本时，需要按住shift键。（仅支持Windows和Linux，不支持Mac，不过该操作并不是必须的，因此影响不大）\\n    (18) tmux中复制/粘贴文本的通用方式：\\n        (1) 按下Ctrl + a后松开手指，然后按[\\n        (2) 用鼠标选中文本，被选中的文本会被自动复制到tmux的剪贴板\\n        (3) 按下Ctrl + a后松开手指，然后按]，会将剪贴板中的内容粘贴到光标处\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
