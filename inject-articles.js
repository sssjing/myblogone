const fs = require("fs");

// Restore original first
const { execSync } = require("child_process");
execSync('git checkout -- assets/app-beffe7bc.js');

let content = fs.readFileSync("assets/app-beffe7bc.js", "utf8");

function fmt(v) {
  if (v === null) return "null";
  if (typeof v === "number") {
    if (v > 1e10) return (v / 1e5) + "e5";
    return String(v);
  }
  if (typeof v === "boolean") return v ? "true" : "false";
  if (typeof v === "string") return JSON.stringify(v);
  if (Array.isArray(v)) return "[" + v.map(fmt).join(",") + "]";
  if (typeof v === "object") {
    const pairs = [];
    for (const [k, val] of Object.entries(v)) pairs.push(k + ":" + fmt(val));
    return "{" + pairs.join(",") + "}";
  }
  return String(v);
}

const d = 1748304000000;
const entries = [
  ["v-aa000001", "/posts/ai-agent/interview-guide.html", { d, l: "2025年5月27日", c: ["ai-agent"], g: ["ai-agent"], e: "<p>高频面试题整理：Agent 与 Chatbot 的区别、RAG vs Fine-tuning 选择、Function Calling 原理、Multi-Agent 优缺点、Agent 安全性问题、评估方法等核心知识点。</p>", r: { minutes: 15, words: 450 }, y: "a", t: "AI Agent 面经与面试题", i: "article" }, ["/posts/ai-agent/interview-guide.html", "/posts/ai-agent/interview-guide", "/posts/ai-agent/interview-guide.md"]],
  ["v-aa000002", "/posts/ai-agent/frameworks.html", { d, l: "2025年5月27日", c: ["ai-agent"], g: ["ai-agent"], e: "<p>全面对比 LangChain/LangGraph、CrewAI、AutoGen、MetaGPT、AutoGPT 等主流框架的特点、优劣势和适用场景。</p>", r: { minutes: 12, words: 360 }, y: "a", t: "AI Agent 框架对比", i: "article" }, ["/posts/ai-agent/frameworks.html", "/posts/ai-agent/frameworks", "/posts/ai-agent/frameworks.md"]],
  ["v-aa000003", "/posts/ai-agent/memory-planning.html", { d, l: "2025年5月27日", c: ["ai-agent"], g: ["ai-agent"], e: "<p>Agent 记忆系统设计（短期记忆、长期记忆、反思模块）、向量检索算法（LSH、HNSW、FAISS）、规划能力评估与优化策略。</p>", r: { minutes: 10, words: 300 }, y: "a", t: "记忆系统与规划能力", i: "article" }, ["/posts/ai-agent/memory-planning.html", "/posts/ai-agent/memory-planning", "/posts/ai-agent/memory-planning.md"]],
  ["v-aa000004", "/posts/ai-agent/tool-use.html", { d, l: "2025年5月27日", c: ["ai-agent"], g: ["ai-agent"], e: "<p>Function Calling 工作原理、工具描述设计、工具过多时的 RAG 检索方案、工具结果校准、MCP 协议介绍。</p>", r: { minutes: 8, words: 240 }, y: "a", t: "Function Calling 与工具使用", i: "article" }, ["/posts/ai-agent/tool-use.html", "/posts/ai-agent/tool-use", "/posts/ai-agent/tool-use.md"]],
  ["v-aa000005", "/posts/ai-agent/react-pattern.html", { d, l: "2025年5月27日", c: ["ai-agent"], g: ["ai-agent"], e: "<p>从 Chain-of-Thought 到 ReAct 的演进，Thought-Action-Observation 循环详解，Anthropic 五大工作流模式。</p>", r: { minutes: 10, words: 300 }, y: "a", t: "ReAct 模式与 Agent 架构", i: "article" }, ["/posts/ai-agent/react-pattern.html", "/posts/ai-agent/react-pattern", "/posts/ai-agent/react-pattern.md"]],
  ["v-aa000006", "/posts/ai-agent/agent-basics.html", { d, l: "2025年5月27日", c: ["ai-agent"], g: ["ai-agent"], e: "<p>什么是 AI Agent？Agent 的核心架构（Planning + Memory + Tool Use）、Agency Level 分级、发展历程与应用场景。</p>", r: { minutes: 8, words: 240 }, y: "a", t: "AI Agent 基础概念", i: "article" }, ["/posts/ai-agent/agent-basics.html", "/posts/ai-agent/agent-basics", "/posts/ai-agent/agent-basics.md"]],
  ["v-aa000007", "/posts/ai-agent/", { y: "p", t: "AI Agent" }, ["/posts/ai-agent/", "/posts/ai-agent/index.html"]],
  ["v-aa000008", "/category/ai-agent/", { y: "p", t: "ai-agent 分类", I: 0 }, ["/category/ai-agent/", "/category/ai-agent/index.html"]],
  ["v-aa000009", "/tag/ai-agent/", { y: "p", t: "ai-agent 标签", I: 0 }, ["/tag/ai-agent/", "/tag/ai-agent/index.html"]],
];

const newEntriesStr = entries.map(([k, p, m, s]) => "[\"" + k + "\",\"" + p + "\"," + fmt(m) + "," + fmt(s) + "]").join(",");

// Check original bracket count
console.log("Original [...] count:", (content.match(/\[/g) || []).length, (content.match(/\]/g) || []).length);

// Find the last article entry ending - which is blog/3.md"]]
const findStr = 'blog/3.md"]]';
const pos = content.indexOf(findStr);
if (pos === -1) { console.log("NOT FOUND"); process.exit(1); }

// Check what comes after blog/3.md"]]
const after = content.substring(pos + findStr.length, pos + findStr.length + 30);
console.log("After blog/3.md\"]]:", JSON.stringify(after));

// The structure after blog/3.md"]] should be: ,["v-3706649a",...
// So we insert: ,[new entries]
// The new content should be: blog/3.md"]],[new entries],["v-3706649a",...

const insertAt = pos + findStr.length; // position right after ]]
// insertAt should point to the comma before ["v-3706649a"
console.log("Char at insertAt:", JSON.stringify(content.charAt(insertAt)));

// Insert: , + new entries + ,
const newContent = content.substring(0, insertAt) + "," + newEntriesStr + "," + content.substring(insertAt);

console.log("New [...] count:", (newContent.match(/\[/g) || []).length, (newContent.match(/\]/g) || []).length);
console.log("New {...} count:", (newContent.match(/\{/g) || []).length, (newContent.match(/\}/g) || []).length);

// Check that the inserted entries look right
const verify = newContent.indexOf('v-aa000001');
console.log("First new entry context:", newContent.substring(verify - 20, verify + 150));

fs.writeFileSync("assets/app-beffe7bc.js", newContent, "utf8");
console.log("Done");
