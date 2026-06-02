const categories = [
  {
    name: "Frontier Tiles",
    projects: [
      {
        id: "epoch-compute-supply",
        name: "Epoch Compute Supply",
        status: "Published",
        version: "v0.1",
        summary: "追踪 AI 算力供给信号",
        purpose: "把 Epoch 相关算力供给、模型训练资源和产业节奏整理成 Frontier tile。",
        stack: ["Frontier", "Compute", "AI"],
        update: "已注册到 Frontier，tile_id 为 da3a8bb7c206a501。",
        next: "进入 /Users/hujiawei/Documents/180k/tiles/frontier-epoch-compute-supply，确认 webhook 数据推送和定时刷新链路。",
        links: ["https://tile.okfrontier.com/preview/da3a8bb7c206a501", "#", "#"],
        cover: 5
      },
      {
        id: "openrouter-ai-model-ranking",
        name: "OpenRouter AI Model Ranking",
        status: "Published",
        version: "v0.1",
        summary: "追踪 OpenRouter 模型排名",
        purpose: "展示 OpenRouter 本周模型排名、Top 5 模型、7D token 量和周环比变化。",
        stack: ["OpenRouter", "Frontier", "ECharts"],
        update: "已注册到 Frontier，preview URL 已更新。",
        next: "进入 /Users/hujiawei/Documents/180k/tiles/frontier-openrouter-ai-model-ranking，维护 OpenRouter rankings 数据刷新链路。",
        links: ["https://tile.okfrontier.com/preview/4828c6c9eeecc3f1", "#", "#"],
        cover: 16
      },
      {
        id: "artificial-analysis-ranking",
        name: "Artificial Analysis Ranking Picks",
        status: "Published",
        version: "v0.1",
        summary: "追踪模型智能、速度和价格排行",
        purpose: "呈现 Artificial Analysis 首页 Highlights 模型池的智能、速度和价格榜。",
        stack: ["Artificial Analysis", "Frontier", "ECharts"],
        update: "已注册到 Frontier，preview URL 已更新。",
        next: "进入 /Users/hujiawei/Documents/180k/tiles/frontier-artificial-analysis-ranking，维护 Artificial Analysis API 刷新链路。",
        links: ["https://tile.okfrontier.com/preview/169b1e477c942960", "#", "#"],
        cover: 18
      },
      {
        id: "ipo-action-card",
        name: "IPO Action Card",
        status: "Published",
        version: "v0.1",
        summary: "追踪 IPO 行动信号",
        purpose: "把 IPO 相关事件和行动信号压缩成可快速扫描的 Frontier tile。",
        stack: ["Frontier", "Tile", "Signals"],
        update: "已注册到 Frontier，preview URL 返回 200；last_webhook_received_at 仍为空，后续需要确认是否已推送真实数据。",
        next: "进入 /Users/hujiawei/Documents/180k/tiles，定位 IPO Action Card 对应目录并补齐 webhook 发布链路。",
        links: ["https://tile.okfrontier.com/preview/2aecd82f3e85ac30", "#", "#"],
        cover: 8
      },
      {
        id: "memory-price-cycle",
        name: "Memory Price Cycle",
        status: "Published",
        version: "v0.1",
        summary: "观察存储价格周期",
        purpose: "把内存与存储价格周期整理成可持续刷新的市场观察卡。",
        stack: ["Frontier", "Market data", "Tile"],
        update: "已注册并发布，preview URL 返回 200。",
        next: "进入 /Users/hujiawei/Documents/180k/tiles，确认数据源和定时刷新边界。",
        links: ["https://tile.okfrontier.com/preview/f0bb89a0d2bc2ed9", "#", "#"],
        cover: 9
      },
      {
        id: "fed-rates-oil-pressure",
        name: "Fed / Rates / Oil Pressure Card",
        status: "Published",
        version: "v0.1",
        summary: "跟踪利率、油价和政策压力",
        purpose: "把美联储、利率和油价压力合成一个宏观风险观察入口。",
        stack: ["Frontier", "Macro", "Signals"],
        update: "已注册并发布，preview URL 返回 200。",
        next: "进入 /Users/hujiawei/Documents/180k/tiles，确认宏观数据刷新链路。",
        links: ["https://tile.okfrontier.com/preview/7fd497ce7a947e0e", "#", "#"],
        cover: 10
      },
      {
        id: "credit-risk",
        name: "Credit Market Risk Light",
        status: "Active",
        version: "v2.0",
        summary: "追踪信用压力是否领先恶化",
        purpose: "在权益市场反应之前，识别信用压力是否正在恶化。",
        stack: ["FRED", "TypeScript", "ECharts", "Frontier"],
        update: "已注册并发布，preview URL 返回 200；本地 tile 项目保留，后续适合迁到 Cloudflare Worker 定时刷新链路。",
        next: "进入 /Users/hujiawei/Documents/180k/tiles/frontier-credit-market-risk-light，评估 Worker Cron + KV/R2 latest snapshot 发布方式。",
        links: ["https://tile.okfrontier.com/preview/97ba60aaa9b455fe", "#", "#"],
        cover: 3
      },
      {
        id: "a-share-hot-stock",
        name: "A-share Hot Stock Radar",
        status: "Active",
        version: "v1.4",
        summary: "用雷达视图观察 A 股热度",
        purpose: "用紧凑的市场信号雷达追踪 A 股热门股票动量。",
        stack: ["Sina", "TypeScript", "ECharts", "Publisher"],
        update: "已注册并发布，preview URL 返回 200；后续适合 Cloudflare 定时刷新。",
        next: "进入 /Users/hujiawei/Documents/180k/tiles/frontier-a-share-hot-stock-radar，整理数据源 fetch 边界，再迁 Worker Cron。",
        links: ["https://tile.okfrontier.com/preview/605079f6f63725ab", "#", "#"],
        cover: 1
      },
      {
        id: "us-ai-basket",
        name: "US AI Basket Monitor",
        status: "Active",
        version: "v1.2",
        summary: "跟踪美股 AI 供应链篮子",
        purpose: "监控美股 AI 供应链股票篮子的表现、分化与相对强弱。",
        stack: ["yfinance", "TypeScript", "ECharts", "Node"],
        update: "已注册并发布，preview URL 返回 200；后续适合迁到 Cloudflare 定时刷新。",
        next: "进入 /Users/hujiawei/Documents/180k/tiles/frontier-us-ai-basket-monitor，先确认 yfinance 采集能否在 Worker 环境替换或拆到外部刷新器。",
        links: ["https://tile.okfrontier.com/preview/49413f3b5cdb8acb", "#", "#"],
        cover: 2
      },
      {
        id: "chinese-tech",
        name: "Chinese Tech Business Radar",
        status: "Published",
        version: "v1.1",
        summary: "整理中国科技与商业信号",
        purpose: "把中国科技和商业信号整理成紧凑的市场观察卡组。",
        stack: ["Data scripts", "TypeScript", "Signals"],
        update: "已注册并发布，preview URL 返回 200；后续适合 Cloudflare 统一调度。",
        next: "进入 /Users/hujiawei/Documents/180k/tiles/frontier-chinese-tech-radar，保留 signal taxonomy，迁移 RSS/LLM 刷新流程。",
        links: ["https://tile.okfrontier.com/preview/0d5a0f83200073db", "#", "#"],
        cover: 6
      },
      {
        id: "podcast-digest",
        name: "Podcast Conversation Map",
        status: "Published",
        version: "v1.0",
        summary: "把播客对话映射成结构图",
        purpose: "把播客长对话整理成可读、可回看的 Frontier conversation map。",
        stack: ["Transcript", "QA", "Dark mode"],
        update: "已注册并发布，preview URL 返回 200；后续适合 Cloudflare 定时刷新。",
        next: "进入 /Users/hujiawei/Documents/180k/tiles/frontier-podcast-digest，确认 RSSHub 与 LLM key 边界，再迁 Worker Cron。",
        links: ["https://tile.okfrontier.com/preview/fb6ca4004efbab26", "#", "#"],
        cover: 7
      }
    ]
  },
  {
    name: "UI Labs",
    projects: [
      {
        id: "html-mocks",
        name: "Frontier UI Mocks",
        status: "Active",
        version: "v0.9",
        summary: "frontier APP前端草稿及对比",
        purpose: "探索 Frontier UI 组合方式和可分享的 HTML mockup。",
        stack: ["HTML", "CSS", "Cloudflare Pages", "Assets"],
        update: "已从 Netlify 迁移到 Cloudflare Pages，并接入 Cloudflare Access 私有域名 ui-mocks.lab.feolhn.cn。",
        next: "后续主流程：本地改前端，运行 npm run build，提交并 push GitHub，由 Cloudflare Pages 发布。",
        links: ["https://ui-mocks.lab.feolhn.cn/", "#", "https://github.com/feolhn/frontier-html-mocks"],
        cover: 11
      },
      {
        id: "image-lab",
        name: "frontier image lab",
        status: "Active",
        version: "v1.0",
        summary: "管理视觉实验和图像流",
        purpose: "管理视觉实验、参考图、gallery capture 和图像生成工作流。",
        stack: ["Gallery", "Prompts", "References"],
        update: "current UI、experiments、gallery、references、scripts 和 skills 已拆分。",
        next: "把唱片封套作为实验项目的可复用视觉语言。",
        links: ["#", "#", "#"],
        cover: 12
      },
      {
        id: "infinite-canvas",
        name: "frontier infinite canvas",
        status: "Active",
        version: "v0.8",
        summary: "frontier的无限画布",
        purpose: "原型化一个用于排列 Frontier artifact 的空间思考画布。",
        stack: ["React", "Vercel", "Canvas"],
        update: "已接入 Vercel，并接入 Cloudflare Access 私有域名 infinite-canvas.lab.feolhn.cn。",
        next: "进入 /Users/hujiawei/Documents/180k/ui-labs/frontier-infinite-canvas，继续维护 Vercel 部署和私有域名。",
        links: ["https://infinite-canvas.lab.feolhn.cn/", "#", "https://github.com/feolhn/frontier-board-lab"],
        cover: 14
      },
      {
        id: "logo-motion",
        name: "frontier logo motion",
        status: "Active",
        version: "v0.7",
        summary: "探索 Frontier 标识动效",
        purpose: "围绕 Frontier 标识探索动效、身份系统和站点资产。",
        stack: ["Motion", "Output", "Site"],
        update: "output、public、site 和 source 目录已分开。",
        next: "挑选最好的动效静帧作为唱片封面。",
        links: ["#", "#", "#"],
        cover: 15
      }
    ]
  },
  {
    name: "LLM Tools",
    projects: [
      {
        id: "image-output",
        name: "image output lab",
        status: "Active",
        version: "v1.2",
        summary: "测试 LLM 视觉输出管线",
        purpose: "测试 LLM 视觉输出管线，并比较不同生成图像 artifact。",
        stack: ["Next.js", "Vercel", "Image workflow"],
        update: "当前在 Vercel，生产域名已改为 info-to-image.feolhn.cn。",
        next: "进入 /Users/hujiawei/Documents/180k/llm-tools/image-output-lab，继续维护 Vercel 环境变量和自定义域名。",
        links: ["https://info-to-image.feolhn.cn/", "#", "https://github.com/feolhn/prompt-lab"],
        cover: 13
      },
      {
        id: "wiki-deck",
        name: "wiki deck lab",
        status: "Baseline",
        version: "v0.3",
        summary: "把 wiki 内容转成 deck",
        purpose: "实验如何把 wiki 材料整理成 deck 形态的摘要。",
        stack: ["Deck", "Dist", "Narrative"],
        update: "dist 输出是当前主要工作 artifact。",
        next: "作为未来 presentation export 的参考。",
        links: ["#", "#", "#"],
        cover: 10
      }
    ]
  },
  {
    name: "Research Systems",
    projects: [
      {
        id: "frontier-profile",
        name: "frontier profile",
        status: "Active",
        version: "run-008",
        summary: "从群聊中提取贡献画像",
        purpose: "从微信群导出中提取有证据支撑的贡献画像。",
        stack: ["Python", "Streamlit", "Data runs"],
        update: "runs 已包含 profile review dashboard 和 growth profile data。",
        next: "把私有 raw exports 和公开项目描述严格分离。",
        links: ["#", "#", "#"],
        cover: 19
      },
      {
        id: "rss-system",
        name: "rss 信息源系统",
        status: "Active",
        version: "v0.5",
        summary: "梳理投资与 AI 信息源",
        purpose: "为投资和 AI wiki ingest 梳理官方 feed、RSSHub 路由和 fallback source。",
        stack: ["RSS", "RSSHub", "Source QA"],
        update: "优先官方 RSS，其次稳定网页，再考虑私有 RSSHub。",
        next: "只把通过测试的信息源推进 MVP ingest 主链路。",
        links: ["#", "#", "#"],
        cover: 17
      }
    ]
  }
];

let selectedId = "credit-risk";
let activeFilter = "Featured";
let searchTerm = "";
let themeMode = localStorage.getItem("themeMode") || "system";

const nav = document.querySelector("#projectNav");
const shelfRows = document.querySelector("#shelfRows");
const searchInput = document.querySelector("#searchInput");
const filterButtons = [...document.querySelectorAll(".filter")];
const appShell = document.querySelector(".app-shell");
const sidebarToggle = document.querySelector("#sidebarToggle");
const themeToggle = document.querySelector("#themeToggle");

const flatProjects = categories.flatMap((category) =>
  category.projects.map((project) => ({ ...project, category: category.name }))
);

const categoryLabels = {
  "Frontier Tiles": "Frontier 瓦片",
  "UI Labs": "UI 实验",
  "LLM Tools": "LLM 工具",
  "Research Systems": "研究系统"
};

const statusLabels = {
  Active: "进行中",
  Published: "已发布",
  Baseline: "基准",
  Blocked: "受阻"
};

const projectGroups = {
  Featured: [
    "html-mocks",
    "image-output",
    "infinite-canvas",
    "us-ai-basket",
    "epoch-compute-supply",
    "openrouter-ai-model-ranking",
    "artificial-analysis-ranking",
    "ipo-action-card",
    "memory-price-cycle",
    "fed-rates-oil-pressure",
    "credit-risk"
  ],
  ThisMonth: ["html-mocks"],
  LastMonth: [],
  Older: [
    "epoch-compute-supply",
    "openrouter-ai-model-ranking",
    "artificial-analysis-ranking",
    "ipo-action-card",
    "memory-price-cycle",
    "fed-rates-oil-pressure",
    "credit-risk",
    "a-share-hot-stock",
    "us-ai-basket",
    "chinese-tech",
    "podcast-digest",
    "image-lab",
    "infinite-canvas",
    "logo-motion",
    "image-output",
    "wiki-deck",
    "frontier-profile",
    "rss-system"
  ]
};

function categoryLabel(name) {
  return categoryLabels[name] || name;
}

function statusLabel(status) {
  return statusLabels[status] || status;
}

function statusClass(status) {
  return status.replace(/\s+/g, "");
}

function coverVars(index) {
  return `--cover-image:url("./assets/covers/cover-${String(index).padStart(2, "0")}.webp")`;
}

function filteredProjects(projects) {
  return projects.filter((project) => {
    const group = projectGroups[activeFilter] || projectGroups.Featured;
    const matchesFilter = group.includes(project.id);
    const haystack = `${project.name} ${categoryLabel(project.category)} ${project.summary} ${project.purpose} ${project.stack.join(" ")}`.toLowerCase();
    const matchesSearch = !searchTerm || haystack.includes(searchTerm);
    return matchesFilter && matchesSearch;
  });
}

function renderNav() {
  nav.innerHTML = categories
    .map((category) => {
      const items = category.projects
        .map(
          (project) => `
            <button class="nav-item ${project.id === selectedId ? "active" : ""}" type="button" data-project="${project.id}">
              <span class="dot ${statusClass(project.status)}"></span>
              <span>${project.name}</span>
            </button>
          `
        )
        .join("");

      return `
        <section class="category">
          <button class="category-toggle" type="button" aria-expanded="true">
            <span class="chevron">⌄</span>
            <strong>${categoryLabel(category.name)}</strong>
            <small>${category.projects.length}</small>
          </button>
          <div class="nav-items">${items}</div>
        </section>
      `;
    })
    .join("");
}

function rowsForShelf() {
  const projects = filteredProjects(flatProjects);
  const rows = [];
  for (let i = 0; i < projects.length; i += 4) rows.push(projects.slice(i, i + 4));
  return rows;
}

function renderShelf() {
  const rows = rowsForShelf();
  shelfRows.innerHTML = rows.length
    ? rows
        .map(
          (row) => `
            <div class="shelf-row">
              ${row
                .map(
                  (project) => `
                    <button class="record ${project.id === selectedId ? "active" : ""}" type="button" data-project="${project.id}" style='${coverVars(project.cover)}'>
                      <span>
                        <h2>${project.name}</h2>
                        <small>${project.summary}</small>
                      </span>
                      <span class="record-footer">
                        <span>${project.version}</span>
                        <span>${statusLabel(project.status)}</span>
                      </span>
                    </button>
                  `
                )
                .join("")}
            </div>
          `
        )
        .join("")
    : `<div class="empty-state">没有符合当前筛选的项目。</div>`;
}

function renderDetail() {
  const project = flatProjects.find((item) => item.id === selectedId) || flatProjects[0];
  document.querySelector("#detailTitle").textContent = project.name;
  document.querySelector("#detailStatus").textContent = `${statusLabel(project.status)} / ${project.version}`;
  document.querySelector("#detailCategory").textContent = categoryLabel(project.category);
  document.querySelector("#detailPurpose").textContent = project.purpose;
  document.querySelector("#detailUpdate").textContent = project.update;
  document.querySelector("#detailStatusDot").className = `dot ${statusClass(project.status)}`;

  document.querySelector("#detailStack").innerHTML = project.stack.map((tag) => `<span>${tag}</span>`).join("");

  const [open] = project.links;
  document.querySelector("#openLink").href = open;

  document.querySelector("#detailPreview").innerHTML = `
    <span>待开发</span>
  `;
}

function render() {
  renderNav();
  renderShelf();
  renderDetail();
}

document.addEventListener("click", (event) => {
  const projectButton = event.target.closest("[data-project]");
  if (projectButton) {
    selectedId = projectButton.dataset.project;
    render();
    return;
  }

  const filterButton = event.target.closest("[data-filter]");
  if (filterButton) {
    activeFilter = filterButton.dataset.filter;
    filterButtons.forEach((button) => button.classList.toggle("active", button === filterButton));
    renderShelf();
  }
});

searchInput.addEventListener("input", (event) => {
  searchTerm = event.target.value.trim().toLowerCase();
  renderShelf();
});

sidebarToggle.addEventListener("click", () => {
  const collapsed = appShell.classList.toggle("sidebar-collapsed");
  sidebarToggle.setAttribute("aria-expanded", String(!collapsed));
  sidebarToggle.setAttribute("aria-label", collapsed ? "展开侧边栏" : "收起侧边栏");
});

const themeOptions = [
  { mode: "light", icon: "☀", label: "日间模式" },
  { mode: "dark", icon: "☾", label: "夜间模式" },
  { mode: "system", icon: "◐", label: "跟随系统" }
];

function applyTheme(mode) {
  themeMode = mode;
  localStorage.setItem("themeMode", mode);
  if (mode === "system") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", mode);
  }

  const current = themeOptions.find((option) => option.mode === mode) || themeOptions[2];
  themeToggle.textContent = current.icon;
  themeToggle.setAttribute("aria-label", `主题：${current.label}`);
  themeToggle.setAttribute("title", `主题：${current.label}`);
}

themeToggle.addEventListener("click", () => {
  const currentIndex = themeOptions.findIndex((option) => option.mode === themeMode);
  const next = themeOptions[(currentIndex + 1) % themeOptions.length];
  applyTheme(next.mode);
});

applyTheme(themeMode);
render();
