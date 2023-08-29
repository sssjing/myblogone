import{_ as i}from"./framework-c27b6911.js";import{o as e,c as n,f as d}from"./app-beffe7bc.js";const l={},s=d(`<h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>(1) ctrl c: 取消命令，并且换行
(2) ctrl u: 清空本行命令
(3) tab键：可以补全命令和文件名，如果补全不了快速按两下tab键，可以显示备选选项
(4) ls: 列出当前目录下所有文件，蓝色的是文件夹，白色的是普通文件，绿色的是可执行文件
    -l 详细信息
    -h 人性化显示文件大小
    -a 显示隐藏文件（以.开头的文件都是隐藏文件）
    -A 显示隐藏文件不显示当前目录和上层目录
(5) pwd: 显示当前目录绝对路径
(6) cd XXX: 进入XXX目录下, 
    cd .. 返回上层目录，
    cd - 返回上次带过的目录
(7) cp XXX YYY: 将XXX文件复制成YYY，XXX和YYY可以是一个路径
    比如../dir_c/a.txt，表示上层目录下的dir_c文件夹下的文件a.txt
(8) mkdir XXX: 创建目录XXX
(9) rm XXX: 删除普通文件;  rm XXX -r: 删除文件夹
(10) mv XXX YYY: 将XXX文件移动到YYY，和cp命令一样，XXX和YYY可以是一个路径；重命名也是用这个命令
(11) touch XXX: 创建一个文件
(12) cat XXX: 展示文件XXX中的内容
(13) 复制文本
    windows/Linux下：Ctrl + insert，Mac下：command + c
(14) 粘贴文本
    windows/Linux下：Shift + insert，Mac下：command + v
(15) tree: 以树形显示文件目录结构
(16) top：查看进程
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文件系统" tabindex="-1"><a class="header-anchor" href="#文件系统" aria-hidden="true">#</a> 文件系统</h2><ul><li>/ ： 根目录</li><li>bin：存放可执行文件的命令</li><li>etc：配置文件</li><li>var：存放日志文件</li><li>lib：存放安装包或者库文件</li><li>home：所有用户的家目录 <code>~/</code> &lt;=&gt; <code>/home/username/</code></li><li>proc：进程相关信息（cpuinfo）</li></ul><p><strong>绝对路径</strong>：从根目录开始描述</p><p><strong>相对路径</strong>：从当前目录开始去描述</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>绝对路径开头是<code>/</code></p></div><p><code>.</code>：表示当前目录</p><p><code>..</code>：表示上一级目录</p><h2 id="其他常用命令" tabindex="-1"><a class="header-anchor" href="#其他常用命令" aria-hidden="true">#</a> 其他常用命令</h2><ul><li><code>lsb_release -a</code> 查看当前系统版本</li><li><code>source ~/.bashrc</code> 更新系统路径</li></ul>`,11),c=[s];function a(r,v){return e(),n("div",null,c)}const u=i(l,[["render",a],["__file","常用文件命令.html.vue"]]);export{u as default};
