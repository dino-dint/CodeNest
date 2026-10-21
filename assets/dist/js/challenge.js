
document.addEventListener("DOMContentLoaded", function () {
  // --- Challenges Data ---
  const challenges = [
    {
      id: "01",
      title: "Binary Search, Rebuilt",
      category: "ALGORITHMS",
      difficulty: "INTERMEDIATE",
      difficultyLabel: "Intermediate",
      solvedCount: "18.4k",
      completionRate: "68%",
      xp: "+220 XP",
      xpValue: 220,
      description:
        "Implement an edge-case resilient binary search with custom predicates and float convergence. Handle inverted arrays, duplicate keys, and out-of-bound conditions.",
      starterCode:
        "function binarySearch(arr, target, predicate) {\n  let low = 0;\n  let high = arr.length - 1;\n  while (low <= high) {\n    let mid = Math.floor((low + high) / 2);\n    if (predicate ? predicate(arr[mid], target) : arr[mid] === target) {\n      return mid;\n    }\n    if (arr[mid] < target) low = mid + 1;\n    else high = mid - 1;\n  }\n  return -1;\n}",
      testCases: ["binarySearch([1, 2, 4, 8, 16], 8) => 3", "binarySearch([10, 20, 30], 25) => -1"],
      isSolved: false,
    },
    {
      id: "02",
      title: "Parse a Log Stream",
      category: "DATA",
      difficulty: "BEGINNER",
      difficultyLabel: "Beginner",
      solvedCount: "31.2k",
      completionRate: "82%",
      xp: "+120 XP",
      xpValue: 120,
      description:
        "Extract client IP addresses, HTTP status codes, and error spikes from an incoming raw Apache / Nginx log stream using regex and frequency maps.",
      starterCode:
        "function parseLogStream(logLines) {\n  const ipCounts = {};\n  const errorCount = 0;\n  // Parse timestamp, IP, method, status code\n  return { totalErrors: errorCount, topIps: ipCounts };\n}",
      testCases: ['parseLogStream(["192.168.1.1 GET / 200", "10.0.0.2 POST /login 500"])'],
      isSolved: false,
    },
    {
      id: "03",
      title: "Concurrent URL Crawler",
      category: "SYSTEMS",
      difficulty: "ADVANCED",
      difficultyLabel: "Advanced",
      solvedCount: "4.8k",
      completionRate: "37%",
      xp: "+480 XP",
      xpValue: 480,
      description:
        "Design an asynchronous worker queue that fetches URLs concurrently with a strict concurrency limit of N, domain rate-limiting, and cycle-safe link extraction.",
      starterCode:
        "class ConcurrentCrawler {\n  constructor(concurrencyLimit, rateLimitMs) {\n    this.limit = concurrencyLimit;\n    this.queue = [];\n    this.visited = new Set();\n  }\n  async crawl(startUrl, maxDepth) {\n    // implement asynchronous traversal pool\n  }\n}",
      testCases: ["Crawler respecting max concurrency <= 5", "Visits 25 distinct nodes without duplication"],
      isSolved: false,
    },
    {
      id: "04",
      title: "Build a Tiny Router",
      category: "FRONTEND",
      difficulty: "INTERMEDIATE",
      difficultyLabel: "Intermediate",
      solvedCount: "12.6k",
      completionRate: "59%",
      xp: "+260 XP",
      xpValue: 260,
      description:
        "Write a lightweight client-side Single Page App (SPA) router supporting dynamic parameterized routes (e.g. /users/:id), hash-mode fallback, and route guard middleware.",
      starterCode:
        "class TinyRouter {\n  constructor() {\n    this.routes = new Map();\n  }\n  on(path, handler) {\n    // match path regex and extract params\n  }\n  navigate(url) {\n    // trigger matched handler\n  }\n}",
      testCases: ["Matches static routes ('/about')", "Extracts param from '/user/42' => { id: '42' }"],
      isSolved: false,
    },
    {
      id: "05",
      title: "SQL Query Optimizer",
      category: "DATABASES",
      difficulty: "ADVANCED",
      difficultyLabel: "Advanced",
      solvedCount: "6.1k",
      completionRate: "41%",
      xp: "+450 XP",
      xpValue: 450,
      description:
        "Analyze EXPLAIN execution plans, eliminate costly sequential table scans across 10 million rows, and construct composite covering indexes for high-volume transactions.",
      starterCode:
        "-- Optimize the slow query below:\n-- SELECT u.id, u.email, COUNT(o.id) \n-- FROM users u LEFT JOIN orders o ON u.id = o.user_id\n-- WHERE o.created_at > NOW() - INTERVAL '30 days'\n-- GROUP BY u.id, u.email;\n\nCREATE INDEX idx_orders_user_created ON orders (user_id, created_at);",
      testCases: ["Eliminates Seq Scan on orders", "Execution cost reduced from 14,200 to 18 ms"],
      isSolved: false,
    },
    {
      id: "06",
      title: "REST API Validator",
      category: "BACKEND",
      difficulty: "BEGINNER",
      difficultyLabel: "Beginner",
      solvedCount: "24.5k",
      completionRate: "79%",
      xp: "+150 XP",
      xpValue: 150,
      description:
        "Create an expressive schema validation middleware that verifies request headers, validates payload types, and normalizes error messages into a consistent RFC 7807 JSON response.",
      starterCode:
        "function validatePayload(schema) {\n  return (req, res, next) => {\n    const errors = [];\n    // Validate required fields and formats\n    if (errors.length > 0) return res.status(400).json({ errors });\n    next();\n  };\n}",
      testCases: ["Valid payload calls next()", "Invalid email returns 400 with detail string"],
      isSolved: false,
    },
    {
      id: "07",
      title: "LRU Cache Implementation",
      category: "ALGORITHMS",
      difficulty: "ADVANCED",
      difficultyLabel: "Advanced",
      solvedCount: "9.3k",
      completionRate: "51%",
      xp: "+380 XP",
      xpValue: 380,
      description:
        "Implement a Least Recently Used (LRU) cache with O(1) time complexity for both get and put operations using a doubly linked list and a hash map.",
      starterCode:
        "class LRUCache {\n  constructor(capacity) {\n    this.capacity = capacity;\n    this.map = new Map();\n  }\n  get(key) {\n    // get item and bump to most recently used\n  }\n  put(key, value) {\n    // insert or update, evict oldest if over capacity\n  }\n}",
      testCases: ["O(1) get & put verified", "Evicts LRU key when capacity exceeded"],
      isSolved: false,
    },
    {
      id: "08",
      title: "Rate Limiter (Token Bucket)",
      category: "SYSTEMS",
      difficulty: "INTERMEDIATE",
      difficultyLabel: "Intermediate",
      solvedCount: "14.2k",
      completionRate: "63%",
      xp: "+290 XP",
      xpValue: 290,
      description:
        "Build a thread-safe token bucket rate limiter with a refill interval, burst capacity allowance, and graceful rejection handling.",
      starterCode:
        "class TokenBucket {\n  constructor(capacity, refillRatePerSec) {\n    this.capacity = capacity;\n    this.tokens = capacity;\n    this.refillRate = refillRatePerSec;\n    this.lastRefill = Date.now();\n  }\n  allowRequest(cost = 1) {\n    // refill and consume\n  }\n}",
      testCases: ["Allows tokens up to burst capacity", "Rejects requests once tokens exhausted"],
      isSolved: false,
    },
  ];

  // State
  let activeDifficulty = "ALL";
  let activeCategory = "ALL";
  let searchQuery = "";
  let userXP = 1240;

  // DOM Elements
  const container = document.getElementById("challengesContainer");
  const countBadge = document.getElementById("challengeCountBadge");
  const searchInput = document.getElementById("challengeSearchInput");
  const difficultyButtons = document.querySelectorAll(".challenge-filter-btn");
  const categoryPills = document.querySelectorAll(".category-pill");
  const userXpDisplay = document.getElementById("userXpDisplay");

  // Render Challenges List
  function renderChallenges() {
    if (!container) return;

    const filtered = challenges.filter((c) => {
      // Difficulty match
      const matchDiff =
        activeDifficulty === "ALL" || c.difficulty === activeDifficulty;

      // Category match
      const matchCat =
        activeCategory === "ALL" ||
        c.category.toLowerCase() === activeCategory.toLowerCase();

      // Search match
      const matchSearch =
        !searchQuery ||
        c.title.toLowerCase().includes(searchQuery) ||
        c.category.toLowerCase().includes(searchQuery) ||
        c.description.toLowerCase().includes(searchQuery);

      return matchDiff && matchCat && matchSearch;
    });

    if (countBadge) {
      countBadge.textContent = `${filtered.length} challenges found`;
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="empty-challenges fade-in">
          <i class="bi bi-search fs-1 text-secondary mb-3 d-block"></i>
          <h5 class="text-white fw-bold">No challenges match your filters</h5>
          <p class="text-secondary small mb-3">Try adjusting your difficulty, category, or search keyword.</p>
          <button class="btn btn-outline-info btn-sm" id="resetFiltersBtn">Reset All Filters</button>
        </div>
      `;
      const resetBtn = document.getElementById("resetFiltersBtn");
      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          activeDifficulty = "ALL";
          activeCategory = "ALL";
          searchQuery = "";
          if (searchInput) searchInput.value = "";
          updateFilterButtonStates();
          renderChallenges();
        });
      }
      return;
    }

    container.innerHTML = filtered
      .map((c) => {
        const diffClass = c.difficulty.toLowerCase();
        return `
        <div class="challenge-card fade-in ${c.isSolved ? "is-solved" : ""}" data-id="${c.id}">
          <div class="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between gap-3">
            <div class="d-flex align-items-start gap-3">
              <span class="challenge-id">#${c.id}</span>
              <div>
                <div class="d-flex align-items-center gap-2 mb-1 flex-wrap">
                  <span class="badge-category">${c.category}</span>
                  <span class="badge-difficulty ${diffClass}">${c.difficultyLabel}</span>
                  ${
                    c.isSolved
                      ? '<span class="solved-indicator ms-2"><i class="bi bi-check-circle-fill"></i> Solved</span>'
                      : ""
                  }
                </div>
                <h4 class="challenge-title mb-1">${c.title}</h4>
                <div class="challenge-meta">
                  <span>${c.solvedCount} solved</span>
                  <span class="challenge-meta-dot">·</span>
                  <span>${c.completionRate} completion</span>
                </div>
              </div>
            </div>
            
            <div class="d-flex flex-row flex-md-column align-items-md-end justify-content-between w-100 w-md-auto mt-2 mt-md-0 pt-2 pt-md-0 border-top border-md-0 border-secondary-subtle">
              <div class="challenge-xp mb-md-2">${c.xp}</div>
              <button class="btn-solve-challenge" data-action="solve" data-id="${c.id}">
                ${c.isSolved ? 'Review Code <i class="bi bi-arrow-right"></i>' : 'Solve <i class="bi bi-arrow-right"></i>'}
              </button>
            </div>
          </div>
        </div>
      `;
      })
      .join("");

    // Attach click handlers to solve buttons
    container.querySelectorAll('[data-action="solve"]').forEach((btn) => {
      btn.addEventListener("click", function () {
        const id = this.getAttribute("data-id");
        openChallengeModal(id);
      });
    });
  }

  // Filter Buttons Interaction
  function updateFilterButtonStates() {
    difficultyButtons.forEach((btn) => {
      const level = btn.getAttribute("data-difficulty");
      if (level === activeDifficulty) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    categoryPills.forEach((pill) => {
      const cat = pill.getAttribute("data-category");
      if (cat === activeCategory) {
        pill.classList.add("active");
      } else {
        pill.classList.remove("active");
      }
    });
  }

  difficultyButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      activeDifficulty = this.getAttribute("data-difficulty");
      updateFilterButtonStates();
      renderChallenges();
    });
  });

  categoryPills.forEach((pill) => {
    pill.addEventListener("click", function (e) {
      e.preventDefault();
      activeCategory = this.getAttribute("data-category");
      updateFilterButtonStates();
      renderChallenges();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      searchQuery = this.value.trim().toLowerCase();
      renderChallenges();
    });
  }

  // --- Daily Challenge Countdown Timer ---
  const timerElement = document.getElementById("dailyCountdown");
  let countdownTimer = null;

  function initDailyCountdown() {
    if (!timerElement) return;

    // Set end of day UTC or 8 hours from load
    const now = new Date();
    const target = new Date(now);
    target.setHours(target.getHours() + 8);
    target.setMinutes(target.getMinutes() + 42);
    target.setSeconds(16);

    function updateTimer() {
      const current = new Date();
      const diffMs = target - current;

      if (diffMs <= 0) {
        timerElement.textContent = "Closes in: 00:00:00";
        if (countdownTimer) clearInterval(countdownTimer);
        return;
      }

      const hours = Math.floor(diffMs / (1000 * 60 * 60));
      const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

      const pad = (n) => String(n).padStart(2, "0");
      timerElement.textContent = `Closes in: ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    }

    updateTimer();
    countdownTimer = setInterval(updateTimer, 1000);
  }

  initDailyCountdown();

  // Cleanup timer if page is unloaded
  window.addEventListener("beforeunload", () => {
    if (countdownTimer) clearInterval(countdownTimer);
  });

  // --- Modal Interaction for Solving Challenges ---
  const modalElement = document.getElementById("challengeModal");
  let bsModal = null;
  if (modalElement && typeof bootstrap !== "undefined") {
    bsModal = new bootstrap.Modal(modalElement);
  }

  let currentModalChallenge = null;

  function openChallengeModal(challengeId) {
    const item = challenges.find((c) => c.id === challengeId);
    if (!item || !modalElement) return;

    currentModalChallenge = item;

    document.getElementById("modalChallengeId").textContent = `#${item.id}`;
    document.getElementById("modalChallengeTitle").textContent = item.title;
    document.getElementById("modalChallengeCategory").textContent = item.category;
    document.getElementById("modalChallengeDifficulty").textContent = item.difficultyLabel;
    document.getElementById("modalChallengeXp").textContent = item.xp;
    document.getElementById("modalChallengeDescription").textContent = item.description;
    document.getElementById("modalStarterCode").textContent = item.starterCode;

    const testContainer = document.getElementById("modalTestCases");
    if (testContainer) {
      testContainer.innerHTML = item.testCases
        .map(
          (t) =>
            `<li class="mb-1 text-secondary font-monospace small"><i class="bi bi-arrow-right-short text-info"></i> ${t}</li>`
        )
        .join("");
    }

    const testStatusBox = document.getElementById("modalTestResult");
    if (testStatusBox) {
      testStatusBox.classList.add("d-none");
      testStatusBox.innerHTML = "";
    }

    if (bsModal) {
      bsModal.show();
    }
  }

  // Daily Challenge Attempt Button
  const dailyAttemptBtn = document.getElementById("dailyAttemptBtn");
  if (dailyAttemptBtn) {
    dailyAttemptBtn.addEventListener("click", function () {
      openChallengeModal("08"); // Opens Rate Limiter challenge
    });
  }

  // Modal: Run Tests button
  const runTestsBtn = document.getElementById("modalRunTestsBtn");
  if (runTestsBtn) {
    runTestsBtn.addEventListener("click", function () {
      const statusBox = document.getElementById("modalTestResult");
      if (!statusBox) return;

      this.disabled = true;
      this.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Running test suite...';

      setTimeout(() => {
        this.disabled = false;
        this.innerHTML = '<i class="bi bi-play-fill me-1"></i> Run Tests';
        statusBox.classList.remove("d-none");
        statusBox.className = "alert alert-success mt-3 py-2 px-3 small font-monospace";
        statusBox.innerHTML =
          '<i class="bi bi-check-circle-fill me-2"></i><strong>All 5 tests passed!</strong> Code executed in 14ms with zero edge-case warnings.';
      }, 700);
    });
  }

  // Modal: Submit Solution button
  const submitSolutionBtn = document.getElementById("modalSubmitSolutionBtn");
  if (submitSolutionBtn) {
    submitSolutionBtn.addEventListener("click", function () {
      if (!currentModalChallenge) return;

      this.disabled = true;
      this.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Submitting...';

      setTimeout(() => {
        this.disabled = false;
        this.innerHTML = '<i class="bi bi-cloud-arrow-up me-1"></i> Submit Solution';

        // Mark challenge solved
        currentModalChallenge.isSolved = true;
        userXP += currentModalChallenge.xpValue;

        if (userXpDisplay) {
          userXpDisplay.textContent = `${userXP.toLocaleString()} XP`;
        }

        renderChallenges();

        const statusBox = document.getElementById("modalTestResult");
        if (statusBox) {
          statusBox.classList.remove("d-none");
          statusBox.className = "alert alert-info mt-3 py-2 px-3 font-monospace";
          statusBox.innerHTML = `<i class="bi bi-trophy-fill text-warning me-2"></i><strong>Challenge Completed!</strong> Awarded ${currentModalChallenge.xp} to your profile.`;
        }

        // Close modal automatically after brief confirmation
        setTimeout(() => {
          if (bsModal) bsModal.hide();
        }, 1200);
      }, 600);
    });
  }

  // Initial render
  renderChallenges();
});
