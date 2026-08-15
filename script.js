const categories = [
  {
    name: "Frontier Systems",
    projects: [
      {
        id: "llm-wiki",
        name: "金融 Wiki 百科-草稿",
        status: "Active",
        version: "v1.0",
        summary: "投资与 AI 研究 wiki",
        purpose: "整理公司、概念、产业和宏观主题的静态研究 wiki。",
        stack: ["Astro", "Cloudflare Pages", "Research Wiki"],
        update: "已绑定正式域名 wiki.feolhn.cn，当前入口已更新。",
        next: "持续维护金融与 AI 研究内容，并保持正式域名入口稳定。",
        links: ["https://wiki.feolhn.cn/"],
        cover: 21
      }
    ]
  },
  {
    name: "Frontier Tiles",
    projects: [
      {
        id: "openrouter-ai-model-ranking",
        name: "OpenRouter 模型排行",
        status: "Published",
        version: "v0.1",
        summary: "追踪 OpenRouter 模型排名",
        purpose: "展示 OpenRouter 本周模型排名、Top 5 模型、7D token 量和周环比变化。",
        stack: ["OpenRouter", "Frontier", "ECharts"],
        update: "已注册到 Frontier，preview URL 已更新。",
        next: "维护 OpenRouter rankings 数据刷新链路。",
        links: ["https://tile.okfrontier.com/preview/4828c6c9eeecc3f1"],
        cover: 16
      },
      {
        id: "artificial-analysis-ranking",
        name: "Artificial Analysis 模型排行",
        status: "Published",
        version: "v0.1",
        summary: "追踪模型智能、速度和价格排行",
        purpose: "呈现 Artificial Analysis 首页 Highlights 模型池的智能、速度和价格榜。",
        stack: ["Artificial Analysis", "Frontier", "ECharts"],
        update: "已注册到 Frontier，preview URL 已更新。",
        next: "维护 Artificial Analysis API 刷新链路。",
        links: ["https://tile.okfrontier.com/preview/169b1e477c942960"],
        cover: 18
      },
      {
        id: "world-cup-morning-brief",
        name: "世界杯晨报",
        status: "Published",
        version: "v0.1",
        summary: "追踪 2026 世界杯晨报",
        purpose: "把世界杯晨报摘要、昨晚结果、今日赛程和 48 强进度整理成 Frontier tile。",
        stack: ["Frontier", "World Cup", "Brief"],
        update: "已注册到 Frontier，preview URL 已更新。",
        next: "维护赛程数据源和晨报刷新链路。",
        links: ["https://tile.okfrontier.com/preview/61aced9cdabeac4a"],
        cover: 20
      },
      {
        id: "ipo-action-card",
        name: "A股 IPO 日历",
        status: "Published",
        version: "v0.1",
        summary: "追踪 IPO 行动信号",
        purpose: "把 IPO 相关事件和行动信号压缩成可快速扫描的 Frontier tile。",
        stack: ["Frontier", "Tile", "Signals"],
        update: "已注册到 Frontier，preview URL 返回 200；last_webhook_received_at 仍为空，后续需要确认是否已推送真实数据。",
        next: "定位 A股 IPO 看板对应项目并补齐 webhook 发布链路。",
        links: ["https://tile.okfrontier.com/preview/2aecd82f3e85ac30"],
        cover: 8
      },
      {
        id: "memory-price-cycle",
        name: "存储价格走势",
        status: "Published",
        version: "v0.1",
        summary: "观察存储价格周期",
        purpose: "把内存与存储价格周期整理成可持续刷新的市场观察卡。",
        stack: ["Frontier", "Market data", "Tile"],
        update: "已注册并发布，preview URL 返回 200。",
        next: "确认数据源和定时刷新边界。",
        links: ["https://tile.okfrontier.com/preview/f0bb89a0d2bc2ed9"],
        cover: 9
      },
      {
        id: "fed-rates-oil-pressure",
        name: "美联储政策汇总",
        status: "Published",
        version: "v0.1",
        summary: "跟踪利率、油价和政策压力",
        purpose: "把美联储、利率和油价压力合成一个宏观风险观察入口。",
        stack: ["Frontier", "Macro", "Signals"],
        update: "已注册并发布，preview URL 返回 200。",
        next: "确认宏观数据刷新链路。",
        links: ["https://tile.okfrontier.com/preview/7fd497ce7a947e0e"],
        cover: 10
      },
      {
        id: "credit-risk",
        name: "美国信用风险观测",
        status: "Active",
        version: "v2.0",
        summary: "追踪信用压力是否领先恶化",
        purpose: "在权益市场反应之前，识别信用压力是否正在恶化。",
        stack: ["FRED", "TypeScript", "ECharts", "Frontier"],
        update: "已注册并发布，preview URL 返回 200；本地 tile 项目保留，后续适合迁到 Cloudflare Worker 定时刷新链路。",
        next: "评估 Worker Cron + KV/R2 latest snapshot 发布方式。",
        links: ["https://tile.okfrontier.com/preview/97ba60aaa9b455fe"],
        cover: 3
      },
      {
        id: "a-share-hot-stock",
        name: "A股热股雷达",
        status: "Active",
        version: "v1.4",
        summary: "用雷达视图观察 A 股热度",
        purpose: "用紧凑的市场信号雷达追踪 A 股热门股票动量。",
        stack: ["Sina", "TypeScript", "ECharts", "Publisher"],
        update: "已注册并发布，preview URL 返回 200；后续适合 Cloudflare 定时刷新。",
        next: "整理数据源 fetch 边界，再迁 Worker Cron。",
        links: ["https://tile.okfrontier.com/preview/605079f6f63725ab"],
        cover: 1
      },
      {
        id: "us-ai-basket",
        name: "美股 AI 一篮子走势",
        status: "Active",
        version: "v1.2",
        summary: "跟踪美股 AI 供应链篮子",
        purpose: "监控美股 AI 供应链股票篮子的表现、分化与相对强弱。",
        stack: ["yfinance", "TypeScript", "ECharts", "Node"],
        update: "已注册并发布，preview URL 返回 200；后续适合迁到 Cloudflare 定时刷新。",
        next: "确认 yfinance 采集能否在 Worker 环境替换或拆到外部刷新器。",
        links: ["https://tile.okfrontier.com/preview/49413f3b5cdb8acb"],
        cover: 2
      }
    ]
  },
  {
    name: "UI Labs",
    projects: [
      {
        id: "html-mocks",
        name: "Frontier UI界面调节设置-草稿",
        status: "Active",
        version: "v0.9",
        summary: "frontier APP前端草稿及对比",
        purpose: "探索 Frontier UI 组合方式和可分享的 HTML mockup。",
        stack: ["HTML", "CSS", "Cloudflare Pages", "Assets"],
        update: "已从 Netlify 迁移到 Cloudflare Pages，并接入 Cloudflare Access 私有域名 ui-mocks.lab.feolhn.cn。",
        next: "后续主流程：本地改前端，运行 npm run build，提交并 push GitHub，由 Cloudflare Pages 发布。",
        links: ["https://ui-mocks.lab.feolhn.cn/", "https://github.com/feolhn/frontier-html-mocks"],
        cover: 11
      },
      {
        id: "infinite-canvas",
        name: "无限画布",
        status: "Active",
        version: "v0.8",
        summary: "frontier的无限画布",
        purpose: "原型化一个用于排列 Frontier artifact 的空间思考画布。",
        stack: ["React", "Vercel", "Canvas"],
        update: "已接入 Vercel，并接入 Cloudflare Access 私有域名 infinite-canvas.lab.feolhn.cn。",
        next: "继续维护 Vercel 部署和私有域名。",
        links: ["https://infinite-canvas.lab.feolhn.cn/", "https://github.com/feolhn/frontier-board-lab"],
        cover: 14
      },
    ]
  },
  {
    name: "Other",
    projects: [
      {
        id: "image-output",
        name: "One-page 信息图生成器",
        status: "Active",
        version: "v1.2",
        summary: "测试 LLM 视觉输出管线",
        purpose: "测试 LLM 视觉输出管线，并比较不同生成图像 artifact。",
        stack: ["Next.js", "Vercel", "Image workflow"],
        update: "当前在 Vercel，生产域名已改为 info-to-image.feolhn.cn。",
        next: "继续维护 Vercel 环境变量和自定义域名。",
        links: ["https://info-to-image.feolhn.cn/"],
        cover: 13
      },
      {
        id: "ipo-dashboard",
        name: "A股 IPO 看板",
        status: "Active",
        version: "v0.1",
        summary: "查看新股申购与历史表现",
        purpose: "统计每天可申购的新股，并汇总历史新股的成交额、申购量、上市市盈率与上市后的涨幅变化。",
        stack: ["IPO", "Market data", "Dashboard"],
        update: "已建立新股日历与历史新股汇总入口。",
        next: "完善每日新股数据更新，并补充单只新股的历史变化明细。",
        links: ["https://ipo.feolhn.cn/"],
        cover: 8
      },
      {
        id: "earnings-call-example",
        name: "财报电话会示例",
        status: "Active",
        version: "v0.1",
        summary: "探索电话会文字稿的阅读交互",
        purpose: "将下载的 NBIS 最近一次财报电话会录音转成文字稿，探索如何通过动效、结构化阅读和交互加工，让长篇电话会更易读。",
        stack: ["Transcript", "Interaction", "Motion"],
        update: "已完成一场 NBIS 财报电话会录音的文字稿整理。",
        next: "探索文字稿分段、重点标注、时间轴和动效交互的组合方式。",
        links: ["https://earningcallexample.feolhn.cn/"],
        cover: 7
      },
      {
        id: "harvey-eval-study",
        name: "Harvey 评测研究",
        status: "Active",
        version: "v0.1",
        summary: "拆解开源 Bench 的评测设计",
        purpose: "研究 Harvey 开源 Bench 的评测结构：输入一组任务或材料，生成输出，再通过评分表判断哪些表现加分、哪些表现减分。",
        stack: ["Benchmark", "Evaluation", "Scoring"],
        update: "已从 Harvey 开源 Bench 中摘取一组评测进行结构分析。",
        next: "梳理 Input、Output、评分规则与最终得分之间的完整链路。",
        links: ["https://harvey-eval-study.feolhn.cn/"],
        cover: 19
      }
    ]
  }
];

let selectedId = "credit-risk";
let activeFilter = "Featured";
let searchTerm = "";
let themeMode = localStorage.getItem("themeMode") || "system";
const collapsedCategories = new Set();

const nav = document.querySelector("#projectNav");
const mobileProjectList = document.querySelector("#mobileProjectList");
const searchInput = document.querySelector("#searchInput");
const filterButtons = [...document.querySelectorAll(".filter")];
const appShell = document.querySelector(".app-shell");
const sidebarToggle = document.querySelector("#sidebarToggle");
const themeToggle = document.querySelector("#themeToggle");

const flatProjects = categories.flatMap((category) =>
  category.projects.map((project) => ({ ...project, category: category.name }))
);

const categoryLabels = {
  "Frontier Systems": "Frontier 系统设计",
  "Frontier Tiles": "Frontier 磁贴",
  "UI Labs": "Frontier UI 实验",
  Other: "其他"
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
    "llm-wiki",
    "infinite-canvas",
    "us-ai-basket",
    "openrouter-ai-model-ranking",
    "artificial-analysis-ranking",
    "world-cup-morning-brief",
    "ipo-action-card",
    "memory-price-cycle",
    "fed-rates-oil-pressure",
    "credit-risk"
  ],
  ThisMonth: ["html-mocks", "llm-wiki"],
  LastMonth: [],
  Older: [
    "openrouter-ai-model-ranking",
    "artificial-analysis-ranking",
    "world-cup-morning-brief",
    "ipo-action-card",
    "memory-price-cycle",
    "fed-rates-oil-pressure",
    "credit-risk",
    "a-share-hot-stock",
    "us-ai-basket",
    "infinite-canvas",
    "image-output",
    "llm-wiki"
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

function renderMobileList() {
  const visibleCategories = categories.map((category) => ({
    ...category,
    projects: category.projects.filter((project) => {
      const haystack = `${project.name} ${categoryLabel(category.name)} ${project.summary} ${project.purpose} ${project.stack.join(" ")}`.toLowerCase();
      return !searchTerm || haystack.includes(searchTerm);
    })
  })).filter((category) => category.projects.length);
  mobileProjectList.innerHTML = visibleCategories.map((category) => {
    const collapsed = collapsedCategories.has(category.name);
    return `
    <section class="mobile-category ${collapsed ? "collapsed" : ""}">
      <button class="category-toggle" type="button" data-category-toggle="${category.name}" aria-expanded="${!collapsed}">
        <span class="chevron">${collapsed ? "›" : "⌄"}</span><strong>${categoryLabel(category.name)}</strong><small>${category.projects.length}</small><span class="mobile-chevron">›</span>
      </button>
      <div class="mobile-items" ${collapsed ? "hidden" : ""}>
        ${category.projects.map((project) => `
          <button class="mobile-project-row ${project.id === selectedId ? "active" : ""}" type="button" data-project="${project.id}">
            <span class="dot ${statusClass(project.status)}"></span>
            <span class="mobile-project-name">${project.name}</span>
            <small>${project.version}</small>
          </button>`).join("")}
      </div>
    </section>`;
  }).join("");
}

function renderDetail() {
  const project = flatProjects.find((item) => item.id === selectedId) || flatProjects[0];
  document.querySelector("#detailTitle").textContent = project.name;
  document.querySelector("#detailStatus").textContent = `${statusLabel(project.status)} / ${project.version}`;
  document.querySelector("#detailCategory").textContent = categoryLabel(project.category);
  document.querySelector("#detailPurpose").textContent = project.purpose;
  document.querySelector("#detailUpdate").textContent = project.update;
  document.querySelector("#detailNext").textContent = project.next;
  document.querySelector("#detailStatusDot").className = `dot ${statusClass(project.status)}`;

  document.querySelector("#detailStack").innerHTML = `<span>⌘</span> ${project.stack.join("  ·  ")}`;

  const [open] = project.links;
  const entrySection = document.querySelector("#entrySection");
  entrySection.hidden = !open || open === "#";
  if (open && open !== "#") document.querySelector("#openLink").href = open;

}

function render() {
  renderNav();
  renderMobileList();
  renderDetail();
}

function projectIdFromLocation() {
  return new URLSearchParams(window.location.hash.slice(1)).get("project");
}

function showMobileDetail(projectId) {
  if (!flatProjects.some((project) => project.id === projectId)) return;
  window.clearTimeout(mobileTransitionTimer);
  selectedId = projectId;
  document.body.classList.remove("mobile-detail-closing");
  document.body.classList.add("mobile-detail-open");
  render();
}

let mobileTransitionTimer;

function showMobileList({ animate = true } = {}) {
  window.clearTimeout(mobileTransitionTimer);
  if (!document.body.classList.contains("mobile-detail-open")) return;

  if (!animate) {
    document.body.classList.remove("mobile-detail-open", "mobile-detail-closing");
    return;
  }

  // Keep both views mounted for one frame so the detail page can slide out
  // while the list slides back into place.
  renderMobileList();
  document.body.classList.add("mobile-detail-closing");
  mobileTransitionTimer = window.setTimeout(() => {
    document.body.classList.remove("mobile-detail-open", "mobile-detail-closing");
  }, 280);
}

document.addEventListener("click", (event) => {
  const categoryToggle = event.target.closest("[data-category-toggle]");
  if (categoryToggle) {
    const categoryName = categoryToggle.dataset.categoryToggle;
    if (collapsedCategories.has(categoryName)) collapsedCategories.delete(categoryName);
    else collapsedCategories.add(categoryName);
    renderMobileList();
    return;
  }

  const projectButton = event.target.closest("[data-project]");
  if (projectButton) {
    const isMobileProject = Boolean(projectButton.closest(".mobile-project-list"));
    selectedId = projectButton.dataset.project;
    if (isMobileProject) {
      window.history.pushState(
        { view: "detail", projectId: selectedId, fromList: true },
        "",
        `#project=${encodeURIComponent(selectedId)}`
      );
      document.body.classList.add("mobile-detail-open");
    }
    render();
    return;
  }

  const filterButton = event.target.closest("[data-filter]");
  if (filterButton) {
    activeFilter = filterButton.dataset.filter;
    filterButtons.forEach((button) => button.classList.toggle("active", button === filterButton));
    renderMobileList();
  }
});

searchInput.addEventListener("input", (event) => {
  searchTerm = event.target.value.trim().toLowerCase();
  renderMobileList();
});

document.querySelector("#mobileBack").addEventListener("click", () => {
  if (window.history.state?.fromList) {
    window.history.back();
    return;
  }
  window.history.replaceState({ view: "list" }, "", `${window.location.pathname}${window.location.search}`);
  showMobileList();
});

window.addEventListener("popstate", (event) => {
  const projectId = event.state?.projectId || projectIdFromLocation();
  if (projectId && window.matchMedia("(max-width: 820px)").matches) {
    showMobileDetail(projectId);
    return;
  }
  showMobileList();
});

// Some embedded browsers do not expose the native edge-back gesture to the
// page. Keep the gesture as a small, edge-originating fallback, then use the
// same history path and transition as the back button.
let mobileSwipeStartX = 0;
let mobileSwipeStartY = 0;
let mobileSwipeTracking = false;

document.addEventListener("touchstart", (event) => {
  if (!document.body.classList.contains("mobile-detail-open") || event.touches.length !== 1) return;
  const touch = event.touches[0];
  mobileSwipeTracking = touch.clientX <= 42;
  mobileSwipeStartX = touch.clientX;
  mobileSwipeStartY = touch.clientY;
}, { passive: true });

document.addEventListener("touchmove", (event) => {
  if (!mobileSwipeTracking || event.touches.length !== 1) return;
  const touch = event.touches[0];
  const deltaX = touch.clientX - mobileSwipeStartX;
  const deltaY = touch.clientY - mobileSwipeStartY;
  if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 8) {
    mobileSwipeTracking = false;
    return;
  }
  if (deltaX > 8) event.preventDefault();
}, { passive: false });

document.addEventListener("touchend", (event) => {
  if (!mobileSwipeTracking) return;
  const touch = event.changedTouches[0];
  const deltaX = touch.clientX - mobileSwipeStartX;
  mobileSwipeTracking = false;
  if (deltaX >= 72 && window.history.state?.fromList) window.history.back();
}, { passive: true });

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

const initialProjectId = projectIdFromLocation();
if (
  initialProjectId &&
  flatProjects.some((project) => project.id === initialProjectId) &&
  window.matchMedia("(max-width: 820px)").matches
) {
  selectedId = initialProjectId;
  document.body.classList.add("mobile-detail-open");
  if (!window.history.state?.projectId) {
    window.history.replaceState(
      { view: "detail", projectId: initialProjectId, fromList: false },
      "",
      window.location.href
    );
  }
} else if (!window.history.state) {
  window.history.replaceState({ view: "list" }, "", window.location.href);
}

applyTheme(themeMode);
render();
