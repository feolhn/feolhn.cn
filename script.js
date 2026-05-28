const categories = [
  {
    name: "Frontier Tiles",
    projects: [
      {
        id: "credit-risk",
        name: "credit market risk light",
        status: "Active",
        version: "v2.0",
        purpose: "Spot whether credit stress is deteriorating before equities react.",
        stack: ["FRED", "TypeScript", "ECharts", "Frontier"],
        update: "Registered and ready for publish after final preview approval.",
        next: "Add HY OAS term structure slope as an early warning feature; backtest vs. equity drawdowns.",
        links: ["#", "#", "#"],
        cover: "amber"
      },
      {
        id: "a-share-hot-stock",
        name: "A-share hot stock radar",
        status: "Active",
        version: "v1.4",
        purpose: "Track hot A-share momentum with a compact market signal radar.",
        stack: ["Sina", "TypeScript", "ECharts", "Publisher"],
        update: "Preview, stress, payload, and publisher scripts are in place.",
        next: "Keep source committed; regenerate dist only when publishing snapshots.",
        links: ["#", "#", "#"],
        cover: "radar"
      },
      {
        id: "us-ai-basket",
        name: "US AI basket monitor",
        status: "Active",
        version: "v1.2",
        purpose: "Monitor U.S.-listed AI supply-chain basket performance and dispersion.",
        stack: ["yfinance", "TypeScript", "ECharts", "Node"],
        update: "Built around local baskets plus a yfinance collector.",
        next: "Add earnings calendar overlay and relative strength heatmap.",
        links: ["#", "#", "#"],
        cover: "blue"
      },
      {
        id: "mega-cap",
        name: "mega-cap concentration",
        status: "Published",
        version: "v1.3",
        purpose: "Show mega-cap concentration and equal-weight divergence as a market risk signal.",
        stack: ["yfinance", "ECharts", "Frontier Runtime"],
        update: "Live in Frontier as an ECharts template tile.",
        next: "Keep ECharts runtime in template mode; do not inline chart libraries into rendered HTML.",
        links: ["#", "#", "#"],
        cover: "paper"
      },
      {
        id: "chinese-tech",
        name: "Chinese tech radar",
        status: "Published",
        version: "v1.1",
        purpose: "Curate Chinese tech and business signals into a compact market deck.",
        stack: ["Data scripts", "TypeScript", "Signals"],
        update: "Published and kept as a reference implementation.",
        next: "Use as a pattern for signal taxonomy and status labeling.",
        links: ["#", "#", "#"],
        cover: "green"
      },
      {
        id: "podcast-digest",
        name: "podcast digest",
        status: "Published",
        version: "v1.0",
        purpose: "Compress podcast conversations into a readable Frontier artifact.",
        stack: ["Transcript", "QA", "Dark mode"],
        update: "QA, stress, and dark-mode changes are committed.",
        next: "Regenerate build output only when adding new episodes.",
        links: ["#", "#", "#"],
        cover: "wave"
      },
      {
        id: "benchmark-radar",
        name: "benchmark radar",
        status: "Baseline",
        version: "v1.2",
        purpose: "Baseline AI model radar and publisher workflow probe.",
        stack: ["Benchmarks", "TypeScript", "Payload QA"],
        update: "Kept as the reference for tile-lab workflow quality gates.",
        next: "Use as a known-good reference before publishing new tiles.",
        links: ["#", "#", "#"],
        cover: "navy"
      },
      {
        id: "market-map",
        name: "market map",
        status: "Blocked",
        version: "v0.4",
        purpose: "Prototype a global market heatmap based on an external widget.",
        stack: ["TradingView", "HTML", "Preview"],
        update: "Blocked because the platform disallows external script embeds.",
        next: "Keep as blocker evidence; do not publish widget-preview as-is.",
        links: ["#", "#", "#"],
        cover: "map"
      }
    ]
  },
  {
    name: "UI Labs",
    projects: [
      {
        id: "html-mocks",
        name: "frontier html mocks",
        status: "Active",
        version: "v0.9",
        purpose: "Explore Frontier UI compositions and shareable HTML mockups.",
        stack: ["HTML", "CSS", "Netlify", "Assets"],
        update: "Contains archived directions, static assets, and distributable shares.",
        next: "Extract the strongest layout motifs into reusable site components.",
        links: ["#", "#", "#"],
        cover: "blueprint"
      },
      {
        id: "image-lab",
        name: "frontier image lab",
        status: "Active",
        version: "v1.0",
        purpose: "Run visual experiments, references, gallery captures, and image workflows.",
        stack: ["Gallery", "Prompts", "References"],
        update: "Current UI, experiments, gallery, references, scripts, and skills are separated.",
        next: "Use record-sleeve covers as a reusable visual language for lab projects.",
        links: ["#", "#", "#"],
        cover: "photo"
      },
      {
        id: "infinite-canvas",
        name: "frontier infinite canvas",
        status: "Active",
        version: "v0.8",
        purpose: "Prototype a spatial thinking canvas for arranging Frontier artifacts.",
        stack: ["React", "Vercel", "Canvas"],
        update: "Vercel-connected lab with a focused source tree.",
        next: "Expose a project preview that feels more spatial than dashboard-like.",
        links: ["#", "#", "#"],
        cover: "grid"
      },
      {
        id: "logo-motion",
        name: "frontier logo motion",
        status: "Active",
        version: "v0.7",
        purpose: "Explore motion, identity, and site assets around the Frontier mark.",
        stack: ["Motion", "Output", "Site"],
        update: "Output, public assets, site, and source folders are available.",
        next: "Curate the best motion stills as record covers.",
        links: ["#", "#", "#"],
        cover: "motion"
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
        purpose: "Test LLM visual output pipelines and compare generated image artifacts.",
        stack: ["Next.js", "Vercel", "Image workflow"],
        update: "App, docs, lib, output, and public folders are present.",
        next: "Add structured review metadata to each generated image set.",
        links: ["#", "#", "#"],
        cover: "glass"
      },
      {
        id: "llm-wiki",
        name: "llm wiki",
        status: "Active",
        version: "v0.6",
        purpose: "Maintain an LLM-assisted wiki with ingest, runs, tools, and handoff artifacts.",
        stack: ["Streamlit", "Scripts", "Wiki", "Runs"],
        update: "Artifacts, config, docs, handoff, runs, scripts, tools, and wiki are separated.",
        next: "Clarify source sufficiency and make ingest runs easier to inspect.",
        links: ["#", "#", "#"],
        cover: "paper-dark"
      },
      {
        id: "wiki-deck",
        name: "wiki deck lab",
        status: "Baseline",
        version: "v0.3",
        purpose: "Experiment with deck-shaped summaries from wiki material.",
        stack: ["Deck", "Dist", "Narrative"],
        update: "Dist output exists as the main working artifact.",
        next: "Treat as reference for future presentation exports.",
        links: ["#", "#", "#"],
        cover: "slides"
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
        purpose: "Extract evidence-backed contribution profiles from WeChat group exports.",
        stack: ["Python", "Streamlit", "Data runs"],
        update: "Runs include profile review dashboards and growth profile data.",
        next: "Separate private raw exports from public-facing project descriptions.",
        links: ["#", "#", "#"],
        cover: "profile"
      },
      {
        id: "rss-system",
        name: "rss 信息源系统",
        status: "Active",
        version: "v0.5",
        purpose: "Map official feeds, RSSHub routes, and fallback sources for investment and AI wiki ingest.",
        stack: ["RSS", "RSSHub", "Source QA"],
        update: "Prioritizes official RSS, then stable pages, then private RSSHub.",
        next: "Promote only tested sources into the MVP ingest path.",
        links: ["#", "#", "#"],
        cover: "rss"
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

const projectCopy = {
  "credit-risk": {
    summary: "追踪信用压力是否领先恶化",
    purpose: "在权益市场反应之前，识别信用压力是否正在恶化。",
    update: "已注册，等待最终预览确认后发布。",
    next: "加入 HY OAS 期限结构斜率作为早期预警，并回测与权益回撤的关系。"
  },
  "a-share-hot-stock": {
    summary: "用雷达视图观察 A 股热度",
    purpose: "用紧凑的市场信号雷达追踪 A 股热门股票动量。",
    update: "预览、压力状态、payload 和发布脚本已就位。",
    next: "保留源码提交，只在发布快照时重新生成 dist。"
  },
  "us-ai-basket": {
    summary: "跟踪美股 AI 供应链篮子",
    purpose: "监控美股 AI 供应链股票篮子的表现、分化与相对强弱。",
    update: "围绕本地股票篮子和 yfinance 采集器搭建。",
    next: "加入财报日历叠层和相对强弱热力图。"
  },
  "mega-cap": {
    summary: "观察巨头集中度和等权背离",
    purpose: "把超大市值公司集中度和等权指数背离作为市场风险信号展示。",
    update: "已作为 ECharts 模板 tile 在 Frontier 中上线。",
    next: "保持 ECharts 运行时为模板模式，不把图表库内联进 rendered HTML。"
  },
  "chinese-tech": {
    summary: "整理中国科技与商业信号",
    purpose: "把中国科技和商业信号整理成紧凑的市场观察卡组。",
    update: "已发布，并作为信号分类和状态标注的参考实现保留。",
    next: "复用其信号 taxonomy 和状态标签模式。"
  },
  "podcast-digest": {
    summary: "把播客对话压缩成摘要卡",
    purpose: "把播客长对话压缩成可读、可回看的 Frontier artifact。",
    update: "QA、压力状态和暗色模式改动已提交。",
    next: "只有新增节目时才重新生成构建输出。"
  },
  "benchmark-radar": {
    summary: "AI 模型雷达和发布基准",
    purpose: "作为 AI 模型雷达和 publisher 工作流的基准探针。",
    update: "作为 tile-lab 工作流质量门禁的参考样本保留。",
    next: "发布新 tile 前，把它作为已知良好的对照样本。"
  },
  "market-map": {
    summary: "外部组件版全球市场热图",
    purpose: "基于外部组件原型化全球市场热力图。",
    update: "因平台不允许外部脚本嵌入而受阻。",
    next: "作为阻塞证据保留，不直接发布 widget-preview。"
  },
  "html-mocks": {
    summary: "探索 Frontier UI 组合",
    purpose: "探索 Frontier UI 组合方式和可分享的 HTML mockup。",
    update: "包含方向归档、静态素材和可分发页面。",
    next: "把最强的布局 motif 抽成可复用站点组件。"
  },
  "image-lab": {
    summary: "管理视觉实验和图像流",
    purpose: "管理视觉实验、参考图、gallery capture 和图像生成工作流。",
    update: "current UI、experiments、gallery、references、scripts 和 skills 已拆分。",
    next: "把唱片封套作为实验项目的可复用视觉语言。"
  },
  "infinite-canvas": {
    summary: "空间化组织 Frontier artifact",
    purpose: "原型化一个用于排列 Frontier artifact 的空间思考画布。",
    update: "已接入 Vercel，源码结构较聚焦。",
    next: "把项目预览做得更像空间画布，而不是普通 dashboard。"
  },
  "logo-motion": {
    summary: "探索 Frontier 标识动效",
    purpose: "围绕 Frontier 标识探索动效、身份系统和站点资产。",
    update: "output、public、site 和 source 目录已分开。",
    next: "挑选最好的动效静帧作为唱片封面。"
  },
  "image-output": {
    summary: "测试 LLM 视觉输出管线",
    purpose: "测试 LLM 视觉输出管线，并比较不同生成图像 artifact。",
    update: "app、docs、lib、output 和 public 目录已就位。",
    next: "给每组生成图加入结构化 review 元数据。"
  },
  "llm-wiki": {
    summary: "维护 LLM 辅助 wiki",
    purpose: "维护一个包含 ingest、runs、tools 和 handoff artifact 的 LLM 辅助 wiki。",
    update: "artifacts、config、docs、handoff、runs、scripts、tools 和 wiki 已拆分。",
    next: "明确 source sufficiency，让 ingest run 更容易检查。"
  },
  "wiki-deck": {
    summary: "把 wiki 内容转成 deck",
    purpose: "实验如何把 wiki 材料整理成 deck 形态的摘要。",
    update: "dist 输出是当前主要工作 artifact。",
    next: "作为未来 presentation export 的参考。"
  },
  "frontier-profile": {
    summary: "从群聊中提取贡献画像",
    purpose: "从微信群导出中提取有证据支撑的贡献画像。",
    update: "runs 已包含 profile review dashboard 和 growth profile data。",
    next: "把私有 raw exports 和公开项目描述严格分离。"
  },
  "rss-system": {
    summary: "梳理投资与 AI 信息源",
    purpose: "为投资和 AI wiki ingest 梳理官方 feed、RSSHub 路由和 fallback source。",
    update: "优先官方 RSS，其次稳定网页，再考虑私有 RSSHub。",
    next: "只把通过测试的信息源推进 MVP ingest 主链路。"
  }
};

const projectGroups = {
  Featured: [
    "credit-risk",
    "a-share-hot-stock",
    "us-ai-basket",
    "mega-cap",
    "chinese-tech",
    "podcast-digest",
    "benchmark-radar",
    "html-mocks",
    "image-lab",
    "infinite-canvas",
    "rss-system"
  ],
  ThisMonth: [
    "credit-risk",
    "a-share-hot-stock",
    "us-ai-basket",
    "html-mocks",
    "image-lab",
    "infinite-canvas",
    "frontier-profile",
    "rss-system"
  ],
  LastMonth: ["mega-cap", "chinese-tech", "podcast-digest", "benchmark-radar", "logo-motion", "image-output", "llm-wiki"],
  Older: ["market-map", "wiki-deck"]
};

function categoryLabel(name) {
  return categoryLabels[name] || name;
}

function statusLabel(status) {
  return statusLabels[status] || status;
}

function copyFor(project) {
  return projectCopy[project.id] || {
    summary: project.purpose,
    purpose: project.purpose,
    update: project.update,
    next: project.next
  };
}

function statusClass(status) {
  return status.replace(/\s+/g, "");
}

function colorVars(project) {
  const palettes = {
    amber: ["#161514", "#f4d273", "radial-gradient(circle at 58% 62%, rgba(242,176,42,.65) 0 10%, transparent 11% 100%), linear-gradient(0deg, rgba(255,255,255,.08), transparent 35%)"],
    radar: ["#171916", "#f1efe4", "repeating-radial-gradient(circle at 50% 55%, rgba(210,147,34,.5) 0 1px, transparent 1px 34px), radial-gradient(circle at 50% 55%, rgba(210,147,34,.65) 0 5%, transparent 6% 100%)"],
    blue: ["#f4efe3", "#222a30", "linear-gradient(145deg, transparent 0 44%, rgba(71,117,183,.22) 45% 48%, transparent 49%), radial-gradient(circle at 68% 32%, rgba(71,117,183,.18), transparent 42%)"],
    paper: ["#e9dfc9", "#22231f", "linear-gradient(140deg, transparent 0 45%, rgba(60,75,70,.22) 46% 58%, transparent 59%), radial-gradient(circle at 40% 65%, rgba(80,90,82,.18), transparent 34%)"],
    green: ["#151a16", "#edf5e8", "repeating-radial-gradient(circle at 54% 58%, rgba(76,154,106,.5) 0 1px, transparent 1px 28px), radial-gradient(circle at 54% 58%, rgba(76,154,106,.5), transparent 20%)"],
    wave: ["#151722", "#f2effa", "repeating-linear-gradient(90deg, transparent 0 8px, rgba(125,99,167,.3) 9px 10px), radial-gradient(ellipse at 50% 70%, rgba(125,99,167,.7), transparent 42%)"],
    navy: ["#152235", "#e9f1fb", "repeating-radial-gradient(circle at 62% 62%, rgba(71,117,183,.55) 0 1px, transparent 1px 30px), linear-gradient(135deg, transparent, rgba(71,117,183,.2))"],
    map: ["#eee8d8", "#222722", "radial-gradient(circle at 70% 42%, rgba(76,154,106,.24), transparent 20%), radial-gradient(circle at 36% 55%, rgba(71,117,183,.2), transparent 24%)"],
    blueprint: ["#17325a", "#edf4ff", "linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,.08) 1px, transparent 1px)"],
    photo: ["#1b1a14", "#f3ecd6", "radial-gradient(circle at 55% 42%, rgba(210,147,34,.45), transparent 23%), radial-gradient(circle at 25% 70%, rgba(76,154,106,.35), transparent 22%)"],
    grid: ["#121817", "#edf3ec", "radial-gradient(circle at 70% 40%, rgba(210,147,34,.45) 0 2px, transparent 3px), repeating-linear-gradient(90deg, rgba(255,255,255,.08) 0 1px, transparent 1px 20px), repeating-linear-gradient(0deg, rgba(255,255,255,.08) 0 1px, transparent 1px 20px)"],
    motion: ["#e7dfcf", "#24231e", "radial-gradient(circle at 35% 45%, rgba(183,96,87,.24), transparent 24%), linear-gradient(120deg, transparent 0 48%, rgba(31,35,34,.18) 49% 55%, transparent 56%)"],
    glass: ["#efece4", "#222a30", "radial-gradient(circle at 64% 60%, rgba(71,117,183,.22), transparent 20%), radial-gradient(circle at 40% 45%, rgba(210,147,34,.18), transparent 18%)"],
    "paper-dark": ["#191a17", "#f2efe2", "linear-gradient(90deg, rgba(255,255,255,.08) 0 1px, transparent 1px 38px), radial-gradient(circle at 72% 30%, rgba(210,147,34,.2), transparent 24%)"],
    slides: ["#f2ead9", "#22231f", "linear-gradient(135deg, rgba(71,117,183,.18) 0 28%, transparent 29%), linear-gradient(45deg, transparent 0 58%, rgba(125,99,167,.2) 59%)"],
    profile: ["#221d24", "#f4eff7", "radial-gradient(circle at 50% 38%, rgba(125,99,167,.36), transparent 24%), linear-gradient(180deg, transparent, rgba(255,255,255,.08))"],
    rss: ["#f1e7d2", "#2b251d", "repeating-linear-gradient(45deg, transparent 0 16px, rgba(210,147,34,.16) 17px 20px), radial-gradient(circle at 28% 66%, rgba(210,147,34,.26), transparent 20%)"]
  };
  const [bg, ink, pattern] = palettes[project.cover] || palettes.amber;
  return `--cover-bg:${bg};--cover-ink:${ink};--cover-pattern:${pattern}`;
}

function filteredProjects(projects) {
  return projects.filter((project) => {
    const group = projectGroups[activeFilter] || projectGroups.Featured;
    const matchesFilter = group.includes(project.id);
    const copy = copyFor(project);
    const haystack = `${project.name} ${categoryLabel(project.category)} ${copy.summary} ${copy.purpose} ${project.stack.join(" ")}`.toLowerCase();
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
                  (project) => {
                    const copy = copyFor(project);
                    return `
                    <button class="record ${project.id === selectedId ? "active" : ""}" type="button" data-project="${project.id}" style="${colorVars(project)}">
                      <span>
                        <h2>${project.name}</h2>
                        <small>${copy.summary}</small>
                      </span>
                      <span class="record-footer">
                        <span>${project.version}</span>
                        <span>${statusLabel(project.status)}</span>
                      </span>
                    </button>
                  `;
                  }
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
  const copy = copyFor(project);
  document.querySelector("#detailTitle").textContent = project.name;
  document.querySelector("#detailStatus").textContent = `${statusLabel(project.status)} / ${project.version}`;
  document.querySelector("#detailCategory").textContent = categoryLabel(project.category);
  document.querySelector("#detailPurpose").textContent = copy.purpose;
  document.querySelector("#detailUpdate").textContent = copy.update;
  document.querySelector("#detailNext").textContent = copy.next;
  document.querySelector("#detailStatusDot").className = `dot ${statusClass(project.status)}`;

  document.querySelector("#detailStack").innerHTML = project.stack.map((tag) => `<span>${tag}</span>`).join("");

  const [open, notes, source] = project.links;
  document.querySelector("#openLink").href = open;
  document.querySelector("#notesLink").href = notes;
  document.querySelector("#sourceLink").href = source;

  document.querySelector("#detailPreview").innerHTML = `
    <div class="preview-head">
      <span>${project.name}</span>
      <span>${categoryLabel(project.category)}</span>
    </div>
    <div class="preview-graph"></div>
    <div class="preview-metrics">
      <span>信号<strong>${project.status === "Blocked" ? "0.41" : "0.68"}</strong></span>
      <span>状态<strong>${project.status === "Published" ? "上线" : "迭代"}</strong></span>
      <span>版本<strong>${project.version}</strong></span>
    </div>
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
