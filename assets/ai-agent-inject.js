(function() {
  "use strict";

  // CRITICAL: Immediately convert AI Agent nav link from <a> to <span>
  // to prevent Vue Router from intercepting clicks and showing 404.
  // Use mousedown (fires before click) for maximum reliability.
  document.addEventListener("mousedown", function(e) {
    var el = e.target;
    // Walk up the DOM tree to find the AI Agent link
    while (el && el !== document.body) {
      if (el.tagName === "A" && el.getAttribute("href") && el.getAttribute("href").indexOf("posts/ai-agent/") !== -1) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        window.location.href = el.getAttribute("href");
        return;
      }
      el = el.parentElement;
    }
  }, true);

  // Backup: also intercept click event
  document.addEventListener("click", function(e) {
    var link = e.target.closest('a[href*="posts/ai-agent/"]');
    if (link) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      window.location.href = link.getAttribute("href");
    }
  }, true);

  var AI_ARTICLES = [
    { href: "/myblogone/posts/ai-agent/interview-guide.html", title: "AI Agent \u9762\u7ECF\u4E0E\u9762\u8BD5\u9898", excerpt: "\u9AD8\u9891\u9762\u8BD5\u9898\u6574\u7406\uFF1AAgent \u4E0E Chatbot \u7684\u533A\u522B\u3001RAG vs Fine-tuning \u9009\u62E9\u3001Function Calling \u539F\u7406\u3001Multi-Agent \u4F18\u7F3A\u70B9\u3001Agent \u5B89\u5168\u6027\u95EE\u9898\u3001\u8BC4\u4F30\u65B9\u6CD5\u7B49\u6838\u5FC3\u77E5\u8BC6\u70B9\u3002", time: "15 \u5206\u949F" },
    { href: "/myblogone/posts/ai-agent/frameworks.html", title: "AI Agent \u6846\u67B6\u5BF9\u6BD4", excerpt: "\u5168\u9762\u5BF9\u6BD4 LangChain/LangGraph\u3001CrewAI\u3001AutoGen\u3001MetaGPT\u3001AutoGPT \u7B49\u4E3B\u6D41\u6846\u67B6\u7684\u7279\u70B9\u3001\u4F18\u52A3\u52BF\u548C\u9002\u7528\u573A\u666F\u3002", time: "12 \u5206\u949F" },
    { href: "/myblogone/posts/ai-agent/memory-planning.html", title: "\u8BB0\u5FC6\u7CFB\u7EDF\u4E0E\u89C4\u5212\u80FD\u529B", excerpt: "Agent \u8BB0\u5FC6\u7CFB\u7EDF\u8BBE\u8BA1\uFF08\u77ED\u671F\u8BB0\u5FC6\u3001\u957F\u671F\u8BB0\u5FC6\u3001\u53CD\u601D\u6A21\u5757\uFF09\u3001\u5411\u91CF\u68C0\u7D22\u7B97\u6CD5\uFF08LSH\u3001HNSW\u3001FAISS\uFF09\u3001\u89C4\u5212\u80FD\u529B\u8BC4\u4F30\u4E0E\u4F18\u5316\u7B56\u7565\u3002", time: "10 \u5206\u949F" },
    { href: "/myblogone/posts/ai-agent/tool-use.html", title: "Function Calling \u4E0E\u5DE5\u5177\u4F7F\u7528", excerpt: "Function Calling \u5DE5\u4F5C\u539F\u7406\u3001\u5DE5\u5177\u63CF\u8FF0\u8BBE\u8BA1\u3001\u5DE5\u5177\u8FC7\u591A\u65F6\u7684 RAG \u68C0\u7D22\u65B9\u6848\u3001\u5DE5\u5177\u7ED3\u679C\u6821\u51C6\u3001MCP \u534F\u8BAE\u4ECB\u7ECD\u3002", time: "8 \u5206\u949F" },
    { href: "/myblogone/posts/ai-agent/react-pattern.html", title: "ReAct \u6A21\u5F0F\u4E0E Agent \u67B6\u6784", excerpt: "\u4ECE Chain-of-Thought \u5230 ReAct \u7684\u6F14\u8FDB\uFF0CThought-Action-Observation \u5FAA\u73AF\u8BE6\u89E3\uFF0CAnthropic \u4E94\u5927\u5DE5\u4F5C\u6D41\u6A21\u5F0F\u3002", time: "10 \u5206\u949F" },
    { href: "/myblogone/posts/ai-agent/agent-basics.html", title: "AI Agent \u57FA\u7840\u6982\u5FF5", excerpt: "\u4EC0\u4E48\u662F AI Agent\uFF1FAgent \u7684\u6838\u5FC3\u67B6\u6784\uFF08Planning + Memory + Tool Use\uFF09\u3001Agency Level \u5206\u7EA7\u3001\u53D1\u5C55\u5386\u7A0B\u4E0E\u5E94\u7528\u573A\u666F\u3002", time: "8 \u5206\u949F" }
  ];

  function createNavSpan() {
    var span = document.createElement("span");
    span.className = "nav-link";
    span.setAttribute("aria-label", "AI Agent");
    span.style.cursor = "pointer";
    span.innerHTML = '<span class="font-icon icon iconfont icon-category" style=""></span>AI Agent';
    span.onclick = function() { window.top.location.replace("/myblogone/posts/ai-agent/"); };
    return span;
  }

  function fixNavLink() {
    var navLinks = document.querySelector(".nav-links");
    if (!navLinks) return;

    // CRITICAL: Convert ALL AI Agent <a> tags to <span> IMMEDIATELY.
    // Even if multiple exist (race condition), convert them all.
    var aiAnchors = navLinks.querySelectorAll('a[href*="ai-agent"]');
    for (var j = 0; j < aiAnchors.length; j++) {
      var anchor = aiAnchors[j];
      // Skip if parent is already our fixed item
      var parentItem = anchor.closest(".nav-item");
      if (parentItem && parentItem.dataset.fixed !== "1") {
        var span = createNavSpan();
        anchor.parentNode.replaceChild(span, anchor);
        parentItem.dataset.fixed = "1";
      }
    }

    // Check if we already have a working <span>
    if (navLinks.querySelector('span.nav-link[aria-label="AI Agent"]')) return;

    // If nothing exists, inject a new nav item before "分类"
    var categoryAnchor = navLinks.querySelector('a[href*="/category"]');
    if (!categoryAnchor) return;
    var categoryItem = categoryAnchor.closest(".nav-item");
    if (!categoryItem) return;

    var navItem = document.createElement("div");
    navItem.className = "nav-item hide-in-mobile";
    navItem.dataset.fixed = "1";
    navItem.appendChild(createNavSpan());
    categoryItem.parentNode.insertBefore(navItem, categoryItem);
  }

  function injectArticles() {
    var articleList = document.querySelector("#article-list");
    if (!articleList) return;
    if (articleList.querySelector('a[href*="ai-agent/interview-guide"]')) return;
    if (!articleList.querySelector(".title span")) return;

    AI_ARTICLES.forEach(function(a) {
      var div = document.createElement("div");
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
      articleList.insertBefore(div, articleList.firstElementChild);
    });
  }

  function run() { fixNavLink(); injectArticles(); }

  // Run multiple times to handle initial hydration timing
  setTimeout(run, 500);
  setTimeout(run, 1500);
  setTimeout(run, 3500);

  // MutationObserver: IMMEDIATELY fix AI Agent nav link on every DOM change.
  // This is critical - any delay means Vue Router can intercept the click.
  var app = document.querySelector("#app");
  if (app) {
    var ticking = false;
    var observer = new MutationObserver(function() {
      if (!ticking) {
        ticking = true;
        // Use microtask for near-instant execution
        Promise.resolve().then(function() {
          fixNavLink();
          injectArticles();
          ticking = false;
        });
        // Also fix synchronously for the nav link (critical path)
        fixNavLink();
      }
    });
    observer.observe(app, { childList: true, subtree: true });
  }
})();
