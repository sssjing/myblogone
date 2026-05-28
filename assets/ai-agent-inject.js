(function() {
  // Force full page navigation for AI Agent links (bypass VuePress SPA router)
  document.addEventListener('click', function(e) {
    var link = e.target.closest('a[href*="posts/ai-agent/"]');
    if (link && link.href.indexOf('posts/ai-agent/') !== -1) {
      e.preventDefault();
      e.stopPropagation();
      window.location.href = link.href;
    }
  }, true);

  // Wait for VuePress hydration to complete, then ensure AI Agent articles + nav link are visible
  const AI_ARTICLES = [
    { href: "/myblogone/posts/ai-agent/interview-guide.html", title: "AI Agent 面经与面试题", excerpt: "高频面试题整理：Agent 与 Chatbot 的区别、RAG vs Fine-tuning 选择、Function Calling 原理、Multi-Agent 优缺点、Agent 安全性问题、评估方法等核心知识点。", time: "15 分钟" },
    { href: "/myblogone/posts/ai-agent/frameworks.html", title: "AI Agent 框架对比", excerpt: "全面对比 LangChain/LangGraph、CrewAI、AutoGen、MetaGPT、AutoGPT 等主流框架的特点、优劣势和适用场景。", time: "12 分钟" },
    { href: "/myblogone/posts/ai-agent/memory-planning.html", title: "记忆系统与规划能力", excerpt: "Agent 记忆系统设计（短期记忆、长期记忆、反思模块）、向量检索算法（LSH、HNSW、FAISS）、规划能力评估与优化策略。", time: "10 分钟" },
    { href: "/myblogone/posts/ai-agent/tool-use.html", title: "Function Calling 与工具使用", excerpt: "Function Calling 工作原理、工具描述设计、工具过多时的 RAG 检索方案、工具结果校准、MCP 协议介绍。", time: "8 分钟" },
    { href: "/myblogone/posts/ai-agent/react-pattern.html", title: "ReAct 模式与 Agent 架构", excerpt: "从 Chain-of-Thought 到 ReAct 的演进，Thought-Action-Observation 循环详解，Anthropic 五大工作流模式。", time: "10 分钟" },
    { href: "/myblogone/posts/ai-agent/agent-basics.html", title: "AI Agent 基础概念", excerpt: "什么是 AI Agent？Agent 的核心架构（Planning + Memory + Tool Use）、Agency Level 分级、发展历程与应用场景。", time: "8 分钟" }
  ];

  function injectNavLink() {
    // Ensure AI Agent nav link bypasses VuePress SPA routing
    var navLinks = document.querySelector(".nav-links");
    if (!navLinks) return;
    var aiLink = navLinks.querySelector('a[href*="ai-agent"]');
    if (aiLink) {
      // Fix existing link: remove SPA behavior by replacing with force-navigation
      if (!aiLink.dataset.fixed) {
        aiLink.dataset.fixed = "1";
        aiLink.addEventListener("click", function(e) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          window.location.href = "/myblogone/posts/ai-agent/";
        }, true);
      }
      return;
    }
    // If VuePress didn't render it, create a new nav item
    var categoryLink = navLinks.querySelector('a[href*="/category"]');
    if (!categoryLink) return;
    var categoryItem = categoryLink.closest(".nav-item");
    if (!categoryItem) return;
    var navItem = document.createElement("div");
    navItem.className = "nav-item hide-in-mobile";
    navItem.innerHTML = '<a href="/myblogone/posts/ai-agent/" class="nav-link" aria-label="AI Agent" data-fixed="1"><span class="font-icon icon iconfont icon-category" style=""></span>AI Agent</a>';
    // Add force-navigation click handler
    var link = navItem.querySelector("a");
    link.addEventListener("click", function(e) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      window.location.href = "/myblogone/posts/ai-agent/";
    }, true);
    categoryItem.parentNode.insertBefore(navItem, categoryItem);
  }

  function inject() {
    // Find article list wrapper on homepage or article listing
    const articleList = document.querySelector("#article-list");
    if (!articleList) return;

    // Check if AI Agent articles are already there (hydration preserved them)
    const existing = articleList.querySelector('a[href*="ai-agent/interview-guide"]');
    if (existing) return; // Already present, no need to inject

    // Check if we need to inject (only if viewing blog home or article listing)
    const firstArticleTitle = articleList.querySelector(".title span");
    if (!firstArticleTitle) return;

    // Create and prepend AI Agent article items
    const items = AI_ARTICLES.map(function(a) {
      const div = document.createElement("div");
      div.className = "article-item";
      div.innerHTML = '<article class="article" vocab="https://schema.org/" typeof="Article">' +
        '<a href="' + a.href + '" class=""><header class="title"><span property="headline">' + a.title + '</span></header></a>' +
        '<div class="article-excerpt"><p>' + a.excerpt + '</p></div>' +
        '<hr class="hr">' +
        '<div class="page-info">' +
          '<span class="page-author-info" aria-label="作者" data-balloon-pos="down"><svg xmlns="http://www.w3.org/2000/svg" class="icon author-icon" viewBox="0 0 1024 1024" fill="currentColor"><path d="M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z"></path></svg><span><a class="page-author-item" href="https://github.com/sssjing/myblogone" target="_blank" rel="noopener noreferrer">杨景</a></span></span>' +
          '<span class="page-date-info" aria-label="写作日期" data-balloon-pos="down"><svg xmlns="http://www.w3.org/2000/svg" class="icon calendar-icon" viewBox="0 0 1024 1024" fill="currentColor"><path d="M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z"></path></svg><span>2025-05-27</span></span>' +
          '<span class="page-reading-time-info" aria-label="阅读时间" data-balloon-pos="down"><svg xmlns="http://www.w3.org/2000/svg" class="icon timer-icon" viewBox="0 0 1024 1024" fill="currentColor"><path d="M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z"></path></svg><span>大约 ' + a.time + '</span></span>' +
          '<span class="page-category-info" aria-label="分类" data-balloon-pos="down"><svg xmlns="http://www.w3.org/2000/svg" class="icon category-icon" viewBox="0 0 1024 1024" fill="currentColor"><path d="M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"></path></svg><span class="page-category-item category6 clickable" role="navigation">ai-agent</span></span>' +
        '</div></article>';
      return div;
    });

    // Prepend to article list
    const firstItem = articleList.firstElementChild;
    items.forEach(function(item) {
      articleList.insertBefore(item, firstItem);
    });
  }

  // Try immediately and also after a delay (wait for hydration)
  setTimeout(function() { injectNavLink(); inject(); }, 1000);
  setTimeout(function() { injectNavLink(); inject(); }, 2000);
  setTimeout(function() { injectNavLink(); inject(); }, 4000);
  // Also use MutationObserver to detect when VuePress finishes rendering
  var observer = new MutationObserver(function() {
    injectNavLink();
    inject();
  });
  var target = document.querySelector("#app");
  if (target) observer.observe(target, { childList: true, subtree: true });
})();
