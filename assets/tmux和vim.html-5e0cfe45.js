import{_ as n}from"./framework-c27b6911.js";import{o as s,c as a,f as e}from"./app-beffe7bc.js";const p={},t=e(`<h2 id="tmux" tabindex="-1"><a class="header-anchor" href="#tmux" aria-hidden="true">#</a> tmux</h2><div class="language-tmux line-numbers-mode" data-ext="tmux"><pre class="language-tmux"><code>功能：
    (1) 分屏。
    (2) 允许断开Terminal连接后，继续运行进程。
结构：
    一个tmux可以包含多个session，一个session可以包含多个window，一个window可以包含多个pane。
    实例：
        tmux:
            session 0:
                window 0:
                    pane 0
                    pane 1
                    pane 2
                    ...
                window 1
                window 2
                ...
            session 1
            session 2
            ...
操作：
    (1) tmux：新建一个session，其中包含一个window，window中包含一个pane，pane里打开了一个shell对话框。
    (2) 按下Ctrl + a后手指松开，然后按%：将当前pane左右平分成两个pane。
    (3) 按下Ctrl + a后手指松开，然后按&quot;（注意是双引号&quot;）：将当前pane上下平分成两个pane。
    (4) Ctrl + d：关闭当前pane；如果当前window的所有pane均已关闭，则自动关闭window；如果当前session的所有window均已关闭，则自动关闭session。
    (5) 鼠标点击可以选pane。
    (6) 按下ctrl + a后手指松开，然后按方向键：选择相邻的pane。
    (7) 鼠标拖动pane之间的分割线，可以调整分割线的位置。
    (8) 按住ctrl + a的同时按方向键，可以调整pane之间分割线的位置。
    (9) 按下ctrl + a后手指松开，然后按z：将当前pane全屏/取消全屏。
    (10) 按下ctrl + a后手指松开，然后按d：挂起当前session。
    (11) tmux a：打开之前挂起的session。
    (12) 按下ctrl + a后手指松开，然后按s：选择其它session。
        方向键 —— 上：选择上一项 session/window/pane
        方向键 —— 下：选择下一项 session/window/pane
        方向键 —— 右：展开当前项 session/window
        方向键 —— 左：闭合当前项 session/window
    (13) 按下Ctrl + a后手指松开，然后按c：在当前session中创建一个新的window。
    (14) 按下Ctrl + a后手指松开，然后按w：选择其他window，操作方法与(12)完全相同。
    (15) 按下Ctrl + a后手指松开，然后按PageUp：翻阅当前pane内的内容。
    (16) 鼠标滚轮：翻阅当前pane内的内容。
    (17) 在tmux中选中文本时，需要按住shift键。（仅支持Windows和Linux，不支持Mac，不过该操作并不是必须的，因此影响不大）
    (18) tmux中复制/粘贴文本的通用方式：
        (1) 按下Ctrl + a后松开手指，然后按[
        (2) 用鼠标选中文本，被选中的文本会被自动复制到tmux的剪贴板
        (3) 按下Ctrl + a后松开手指，然后按]，会将剪贴板中的内容粘贴到光标处
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vim" tabindex="-1"><a class="header-anchor" href="#vim" aria-hidden="true">#</a> vim</h2><div class="language-vim line-numbers-mode" data-ext="vim"><pre class="language-vim"><code>功能：
    <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> 命令行模式下的文本编辑器。
    <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> 根据文件扩展名自动判别编程语言。支持代码缩进、代码高亮等功能。
    <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> 使用方式：<span class="token keyword">vim</span> filename
        如果已有该文件，则打开它。
        如果没有该文件，则打开个一个新的文件，并命名为filename
模式：
    <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> 一般命令模式
        默认模式。命令输入方式：类似于打游戏放技能，按不同字符，即可进行不同操作。可以复制、粘贴、删除文本等。
    <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> 编辑模式
        在一般命令模式里按下i，会进入编辑模式。
        按下ESC会退出编辑模式，返回到一般命令模式。
    <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> 命令行模式
        在一般命令模式里按下<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">?</span>三个字母中的任意一个，会进入命令行模式。命令行在最下面。
        可以查找、替换、保存、退出、配置编辑器等。
操作：
    <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> i：进入编辑模式
    <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> ESC：进入一般命令模式
    <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token keyword">h</span> 或 左箭头键：光标向左移动一个字符
    <span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token keyword">j</span> 或 向下箭头：光标向下移动一个字符
    <span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token keyword">k</span> 或 向上箭头：光标向上移动一个字符
    <span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span> <span class="token keyword">l</span> 或 向右箭头：光标向右移动一个字符
    <span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span> <span class="token keyword">n</span><span class="token operator">&lt;</span>Space<span class="token operator">&gt;</span>：<span class="token keyword">n</span>表示数字，按下数字后再按空格，光标会向右移动这一行的<span class="token keyword">n</span>个字符
    <span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span> <span class="token number">0</span> 或 功能键<span class="token punctuation">[</span>Home<span class="token punctuation">]</span>：光标移动到本行开头
    <span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span> $ 或 功能键<span class="token punctuation">[</span>End<span class="token punctuation">]</span>：光标移动到本行末尾
    <span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> G：光标移动到最后一行
    <span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token punctuation">:</span><span class="token keyword">n</span> 或 nG：<span class="token keyword">n</span>为数字，光标移动到第<span class="token keyword">n</span>行
    <span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span> gg：光标移动到第一行，相当于1G
    <span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span> <span class="token keyword">n</span><span class="token operator">&lt;</span>Enter<span class="token operator">&gt;</span>：<span class="token keyword">n</span>为数字，光标向下移动<span class="token keyword">n</span>行
    <span class="token punctuation">(</span><span class="token number">14</span><span class="token punctuation">)</span> <span class="token operator">/</span>word：向光标之下寻找第一个值为word的字符串。
    <span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span> <span class="token operator">?</span>word：向光标之上寻找第一个值为word的字符串。
    <span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span> <span class="token keyword">n</span>：重复前一个查找操作
    <span class="token punctuation">(</span><span class="token number">17</span><span class="token punctuation">)</span> <span class="token keyword">N</span>：反向重复前一个查找操作
    <span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span> <span class="token punctuation">:</span>n1<span class="token punctuation">,</span>n2s<span class="token operator">/</span>word1<span class="token operator">/</span>word2<span class="token operator">/</span>g：n1与n2为数字，在第n1行与n2行之间寻找word1这个字符串，并将该字符串替换为word2
    <span class="token punctuation">(</span><span class="token number">19</span><span class="token punctuation">)</span> <span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">,</span>$s<span class="token operator">/</span>word1<span class="token operator">/</span>word2<span class="token operator">/</span>g：将全文的word1替换为word2
    <span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">,</span>$s<span class="token operator">/</span>word1<span class="token operator">/</span>word2<span class="token operator">/</span>gc：将全文的word1替换为word2，且在替换前要求用户确认。
    <span class="token punctuation">(</span><span class="token number">21</span><span class="token punctuation">)</span> v：选中文本
    <span class="token punctuation">(</span><span class="token number">22</span><span class="token punctuation">)</span> <span class="token keyword">d</span>：删除选中的文本
    <span class="token punctuation">(</span><span class="token number">23</span><span class="token punctuation">)</span> dd<span class="token punctuation">:</span> 删除当前行
    <span class="token punctuation">(</span><span class="token number">24</span><span class="token punctuation">)</span> <span class="token keyword">y</span>：复制选中的文本
    <span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">)</span> yy<span class="token punctuation">:</span> 复制当前行
    <span class="token punctuation">(</span><span class="token number">26</span><span class="token punctuation">)</span> <span class="token keyword">p</span><span class="token punctuation">:</span> 将复制的数据在光标的下一行<span class="token operator">/</span>下一个位置粘贴
    <span class="token punctuation">(</span><span class="token number">27</span><span class="token punctuation">)</span> <span class="token keyword">u</span>：撤销
    <span class="token punctuation">(</span><span class="token number">28</span><span class="token punctuation">)</span> Ctrl <span class="token operator">+</span> <span class="token keyword">r</span>：取消撤销
    <span class="token punctuation">(</span><span class="token number">29</span><span class="token punctuation">)</span> 大于号 <span class="token operator">&gt;</span>：将选中的文本整体向右缩进一次
    <span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span> 小于号 <span class="token operator">&lt;</span>：将选中的文本整体向左缩进一次
    <span class="token punctuation">(</span><span class="token number">31</span><span class="token punctuation">)</span> <span class="token punctuation">:</span><span class="token keyword">w</span> 保存
    <span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">)</span> <span class="token punctuation">:</span><span class="token keyword">w</span><span class="token operator">!</span> 强制保存
    <span class="token punctuation">(</span><span class="token number">33</span><span class="token punctuation">)</span> <span class="token punctuation">:</span><span class="token keyword">q</span> 退出
    <span class="token punctuation">(</span><span class="token number">34</span><span class="token punctuation">)</span> <span class="token punctuation">:</span><span class="token keyword">q</span><span class="token operator">!</span> 强制退出
    <span class="token punctuation">(</span><span class="token number">35</span><span class="token punctuation">)</span> <span class="token punctuation">:</span><span class="token keyword">wq</span> 保存并退出
    <span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span> <span class="token punctuation">:</span><span class="token keyword">set</span> <span class="token builtin">paste</span> 设置成粘贴模式，取消代码自动缩进
    <span class="token punctuation">(</span><span class="token number">37</span><span class="token punctuation">)</span> <span class="token punctuation">:</span><span class="token keyword">set</span> <span class="token builtin">nopaste</span> 取消粘贴模式，开启代码自动缩进
    <span class="token punctuation">(</span><span class="token number">38</span><span class="token punctuation">)</span> <span class="token punctuation">:</span><span class="token keyword">set</span> <span class="token keyword">nu</span> 显示行号
    <span class="token punctuation">(</span><span class="token number">39</span><span class="token punctuation">)</span> <span class="token punctuation">:</span><span class="token keyword">set</span> <span class="token builtin">nonu</span> 隐藏行号
    <span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">)</span> gg<span class="token operator">=</span>G：将全文代码格式化
    <span class="token punctuation">(</span><span class="token number">41</span><span class="token punctuation">)</span> <span class="token punctuation">:</span><span class="token keyword">noh</span> 关闭查找关键词高亮
    <span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">)</span> Ctrl <span class="token operator">+</span> <span class="token keyword">q</span>：当<span class="token keyword">vim</span>卡死时，可以取消当前正在执行的命令
异常处理：
    每次用<span class="token keyword">vim</span>编辑文件时，会自动创建一个<span class="token operator">.</span>filename<span class="token operator">.</span>swp的临时文件。
    如果打开某个文件时，该文件的swp文件已存在，则会报错。此时解决办法有两种：
        <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> 找到正在打开该文件的程序，并退出
        <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> 直接删掉该swp文件即可
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),i=[t];function o(c,l){return s(),a("div",null,i)}const r=n(p,[["render",o],["__file","tmux和vim.html.vue"]]);export{r as default};
