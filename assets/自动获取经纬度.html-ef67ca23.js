const n=JSON.parse(`{"key":"v-5b15422a","path":"/posts/%E4%B8%AA%E4%BA%BA%E8%84%9A%E6%9C%AC/%E8%87%AA%E5%8A%A8%E8%8E%B7%E5%8F%96%E7%BB%8F%E7%BA%AC%E5%BA%A6.html","title":"自动获取经纬度","lang":"zh-CN","frontmatter":{"title":"自动获取经纬度","description":"import time import requests def get_coordinates(address): # 延时 time.sleep(0.1) url = f\\"https://apis.map.qq.com/ws/geocoder/v1/?address={address}&amp;key=C4KBZ-VXMCL-RJFPO-EJKC7-PJLMF-OZBXO\\" response = requests.get(url) data = response.json() if data['status'] == 0: location = data['result']['location'] lat = location['lat'] lon = location['lng'] similarity = data['result']['similarity'] return lat, lon, similarity else: return None, None # address = \\"天津市红桥区西青道华润万家1011.1013.1015\\" # lat, lon = get_coordinates(address) # 按行读取1.txt中的address with open('1.txt', 'r' , encoding=\\"UTF-8\\") as f: for line in f.readlines(): address = line.strip() lat, lon ,s= get_coordinates(address) if lat and lon: print(f\\"The coordinates for {address} are: {lat}, {lon}, similarity:{s}\\") else: print(f\\"Unable to retrieve coordinates for {address}\\") print(get_coordinates(address))","head":[["meta",{"property":"og:url","content":"https://github.com/sssjing/myblogone/myblogone/posts/%E4%B8%AA%E4%BA%BA%E8%84%9A%E6%9C%AC/%E8%87%AA%E5%8A%A8%E8%8E%B7%E5%8F%96%E7%BB%8F%E7%BA%AC%E5%BA%A6.html"}],["meta",{"property":"og:title","content":"自动获取经纬度"}],["meta",{"property":"og:description","content":"import time import requests def get_coordinates(address): # 延时 time.sleep(0.1) url = f\\"https://apis.map.qq.com/ws/geocoder/v1/?address={address}&amp;key=C4KBZ-VXMCL-RJFPO-EJKC7-PJLMF-OZBXO\\" response = requests.get(url) data = response.json() if data['status'] == 0: location = data['result']['location'] lat = location['lat'] lon = location['lng'] similarity = data['result']['similarity'] return lat, lon, similarity else: return None, None # address = \\"天津市红桥区西青道华润万家1011.1013.1015\\" # lat, lon = get_coordinates(address) # 按行读取1.txt中的address with open('1.txt', 'r' , encoding=\\"UTF-8\\") as f: for line in f.readlines(): address = line.strip() lat, lon ,s= get_coordinates(address) if lat and lon: print(f\\"The coordinates for {address} are: {lat}, {lon}, similarity:{s}\\") else: print(f\\"Unable to retrieve coordinates for {address}\\") print(get_coordinates(address))"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"杨景"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"自动获取经纬度\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"杨景\\",\\"url\\":\\"https://github.com/sssjing/myblogone\\",\\"email\\":\\"yangjing_202103@163.com\\"}]}"]]},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":0.46,"words":138},"filePathRelative":"posts/个人脚本/自动获取经纬度.md","excerpt":"<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">import</span> time\\n\\n<span class=\\"token keyword\\">import</span> requests\\n<span class=\\"token keyword\\">def</span> <span class=\\"token function\\">get_coordinates</span><span class=\\"token punctuation\\">(</span>address<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token comment\\"># 延时</span>\\n    time<span class=\\"token punctuation\\">.</span>sleep<span class=\\"token punctuation\\">(</span><span class=\\"token number\\">0.1</span><span class=\\"token punctuation\\">)</span>\\n    url <span class=\\"token operator\\">=</span> <span class=\\"token string-interpolation\\"><span class=\\"token string\\">f\\"https://apis.map.qq.com/ws/geocoder/v1/?address=</span><span class=\\"token interpolation\\"><span class=\\"token punctuation\\">{</span>address<span class=\\"token punctuation\\">}</span></span><span class=\\"token string\\">&amp;key=C4KBZ-VXMCL-RJFPO-EJKC7-PJLMF-OZBXO\\"</span></span>\\n    response <span class=\\"token operator\\">=</span> requests<span class=\\"token punctuation\\">.</span>get<span class=\\"token punctuation\\">(</span>url<span class=\\"token punctuation\\">)</span>\\n    data <span class=\\"token operator\\">=</span> response<span class=\\"token punctuation\\">.</span>json<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n\\n    <span class=\\"token keyword\\">if</span> data<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'status'</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">==</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">:</span>\\n        location <span class=\\"token operator\\">=</span> data<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'result'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'location'</span><span class=\\"token punctuation\\">]</span>\\n        lat <span class=\\"token operator\\">=</span> location<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'lat'</span><span class=\\"token punctuation\\">]</span>\\n        lon <span class=\\"token operator\\">=</span> location<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'lng'</span><span class=\\"token punctuation\\">]</span>\\n        similarity <span class=\\"token operator\\">=</span> data<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'result'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'similarity'</span><span class=\\"token punctuation\\">]</span>\\n        <span class=\\"token keyword\\">return</span> lat<span class=\\"token punctuation\\">,</span> lon<span class=\\"token punctuation\\">,</span> similarity\\n    <span class=\\"token keyword\\">else</span><span class=\\"token punctuation\\">:</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token boolean\\">None</span><span class=\\"token punctuation\\">,</span> <span class=\\"token boolean\\">None</span>\\n<span class=\\"token comment\\"># address = \\"天津市红桥区西青道华润万家1011.1013.1015\\"</span>\\n<span class=\\"token comment\\"># lat, lon = get_coordinates(address)</span>\\n<span class=\\"token comment\\"># 按行读取1.txt中的address</span>\\n<span class=\\"token keyword\\">with</span> <span class=\\"token builtin\\">open</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'1.txt'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'r'</span> <span class=\\"token punctuation\\">,</span> encoding<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"UTF-8\\"</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">as</span> f<span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token keyword\\">for</span> line <span class=\\"token keyword\\">in</span> f<span class=\\"token punctuation\\">.</span>readlines<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n        address <span class=\\"token operator\\">=</span> line<span class=\\"token punctuation\\">.</span>strip<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n        lat<span class=\\"token punctuation\\">,</span> lon <span class=\\"token punctuation\\">,</span>s<span class=\\"token operator\\">=</span> get_coordinates<span class=\\"token punctuation\\">(</span>address<span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token keyword\\">if</span> lat <span class=\\"token keyword\\">and</span> lon<span class=\\"token punctuation\\">:</span>\\n            <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string-interpolation\\"><span class=\\"token string\\">f\\"The coordinates for </span><span class=\\"token interpolation\\"><span class=\\"token punctuation\\">{</span>address<span class=\\"token punctuation\\">}</span></span><span class=\\"token string\\"> are: </span><span class=\\"token interpolation\\"><span class=\\"token punctuation\\">{</span>lat<span class=\\"token punctuation\\">}</span></span><span class=\\"token string\\">, </span><span class=\\"token interpolation\\"><span class=\\"token punctuation\\">{</span>lon<span class=\\"token punctuation\\">}</span></span><span class=\\"token string\\">, similarity:</span><span class=\\"token interpolation\\"><span class=\\"token punctuation\\">{</span>s<span class=\\"token punctuation\\">}</span></span><span class=\\"token string\\">\\"</span></span><span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token keyword\\">else</span><span class=\\"token punctuation\\">:</span>\\n            <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string-interpolation\\"><span class=\\"token string\\">f\\"Unable to retrieve coordinates for </span><span class=\\"token interpolation\\"><span class=\\"token punctuation\\">{</span>address<span class=\\"token punctuation\\">}</span></span><span class=\\"token string\\">\\"</span></span><span class=\\"token punctuation\\">)</span>\\n            <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span>get_coordinates<span class=\\"token punctuation\\">(</span>address<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
