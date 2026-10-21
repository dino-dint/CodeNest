
document.addEventListener("DOMContentLoaded", function () {
  // --- Initial Discussions Data ---
  const discussions = [
    {
      id: "disc-1",
      category: "SHOWCASE",
      categoryClass: "showcase",
      title: "I built a local-first Markdown editor with JavaScript & IndexedDB",
      author: "Elena Rostova",
      authorInitials: "ER",
      timeAgo: "2 hours ago",
      repliesCount: 34,
      likesCount: 142,
      isLiked: false,
      tags: ["javascript", "indexeddb", "frontend"],
      content:
        "Hey everyone! Wanted to share a project I spent the last month building: an offline-first markdown notes app that syncs in the background using Web Workers and the Origin Private File System (OPFS). The biggest challenge was handling conflict-free replicated data types (CRDTs) without heavy dependencies. Would love your feedback on the parser architecture!",
      replies: [
        {
          author: "Alex Chen",
          initials: "AC",
          timeAgo: "1 hour ago",
          text: "Incredible work! How did you benchmark latency when storing large file blobs in IndexedDB vs OPFS?",
        },
        {
          author: "Elena Rostova",
          initials: "ER",
          timeAgo: "45 mins ago",
          text: "OPFS delivered roughly 3.5x faster sequential read speeds on 50MB+ datasets compared to IDB blobs!",
        },
      ],
    },
    {
      id: "disc-2",
      category: "HELP",
      categoryClass: "help",
      title: "Why does this Rust lifetime need to be explicit in async traits?",
      author: "Marcus Vance",
      authorInitials: "MV",
      timeAgo: "3 hours ago",
      repliesCount: 19,
      likesCount: 88,
      isLiked: false,
      tags: ["rust", "async", "systems"],
      content:
        "I'm running into an E0106 error when implementing an async handler with a borrowed struct reference across thread boundaries. Even with the new native async fn in traits (Rust 1.75+), the compiler insists on `'a` lifetime bounds on the returned Future. Can someone help clarify why elision fails here?",
      replies: [
        {
          author: "David Chen",
          initials: "DC",
          timeAgo: "2 hours ago",
          text: "Because the Desugared Future captures all arguments by default. If `&self` outlives the Future, you need to tie the Future's lifetime to the borrow or wrap the payload in an Arc.",
        },
      ],
    },
    {
      id: "disc-3",
      category: "CAREER",
      categoryClass: "career",
      title: "My 90-day roadmap from junior developer to backend engineer",
      author: "Sarah Lin",
      authorInitials: "SL",
      timeAgo: "5 hours ago",
      repliesCount: 52,
      likesCount: 310,
      isLiked: false,
      tags: ["career", "backend", "roadmap"],
      content:
        "Three months ago I decided to systematically level up my backend fundamentals. Instead of chasing tutorials, I focused on three pillars: relational database indexing & execution plans, distributed system primitives (idempotency, circuit breakers), and building projects from scratch using CodeNest challenges. Here is the full breakdown of resources that helped me pass interviews.",
      replies: [
        {
          author: "Kofi Mensah",
          initials: "KM",
          timeAgo: "3 hours ago",
          text: "Bookmarked! Did you also prepare system design whiteboard questions during those 90 days?",
        },
        {
          author: "Sarah Lin",
          initials: "SL",
          timeAgo: "2 hours ago",
          text: "Yes! Designing a URL shortener and a rate limiter covered 80% of the interview fundamentals.",
        },
      ],
    },
    {
      id: "disc-4",
      category: "DISCUSSION",
      categoryClass: "discussion",
      title: "What are you building for this month's coding challenge?",
      author: "CodeNest Staff",
      authorInitials: "CN",
      timeAgo: "8 hours ago",
      repliesCount: 41,
      likesCount: 195,
      isLiked: false,
      tags: ["challenges", "community", "codenest"],
      content:
        "The October challenge arena just opened with 8 brand-new systems and algorithms challenges, including the Concurrent URL Crawler and Token Bucket Rate Limiter. Which one are you tackling first? Share your approach, benchmarks, or language choice below!",
      replies: [
        {
          author: "Priya Patel",
          initials: "PP",
          timeAgo: "6 hours ago",
          text: "Just submitted the Tiny Router in pure TypeScript! Moving on to the Concurrent Crawler in Go tonight.",
        },
      ],
    },
    {
      id: "disc-5",
      category: "FRONTEND",
      categoryClass: "frontend",
      title: "How do you organize a large React application in 2026?",
      author: "Priya Patel",
      authorInitials: "PP",
      timeAgo: "11 hours ago",
      repliesCount: 27,
      likesCount: 118,
      isLiked: false,
      tags: ["react", "architecture", "frontend"],
      content:
        "Feature-based folders vs layer-based folders? As our codebase approached 300 components, grouping by technical type (components/, hooks/, api/) caused massive context switching. Switching to domain slices (features/billing, features/editor) cut onboarding time in half.",
      replies: [
        {
          author: "Marcus Vance",
          initials: "MV",
          timeAgo: "9 hours ago",
          text: "Colocating queries and types next to the UI components in feature folders has been a lifesaver for our team as well.",
        },
      ],
    },
    {
      id: "disc-6",
      category: "BACKEND",
      categoryClass: "backend",
      title: "REST API authentication best practices: JWT vs HTTP-only Sessions",
      author: "Noah Becker",
      authorInitials: "NB",
      timeAgo: "1 day ago",
      repliesCount: 38,
      likesCount: 204,
      isLiked: false,
      tags: ["backend", "security", "auth"],
      content:
        "There's still heated debate on where to store auth tokens. While stateless JWTs sound elegant on paper, token revocation and immediate logout across sessions require server-side state anyway. For 95% of standard web applications, secure HTTP-only encrypted session cookies stored in Redis are significantly less error-prone.",
      replies: [
        {
          author: "Alex Chen",
          initials: "AC",
          timeAgo: "22 hours ago",
          text: "Completely agree. People underestimate XSS token extraction when storing JWTs in localStorage.",
        },
      ],
    },
    {
      id: "disc-7",
      category: "DATABASE",
      categoryClass: "database",
      title: "When should I choose PostgreSQL over MySQL? Real-world benchmarks",
      author: "Kofi Mensah",
      authorInitials: "KM",
      timeAgo: "1 day ago",
      repliesCount: 23,
      likesCount: 167,
      isLiked: false,
      tags: ["sql", "database", "postgresql"],
      content:
        "We recently ran head-to-head benchmarks on Postgres 16 vs MySQL 8 for a high-concurrency SaaS product. Postgres dominated in complex CTEs, JSONB partial indexing, and window functions. MySQL held up nicely for pure point-lookups by primary key, but the extensibility of Postgres won out.",
      replies: [
        {
          author: "Elena Rostova",
          initials: "ER",
          timeAgo: "18 hours ago",
          text: "Postgres extensions like pgvector and PostGIS make it almost a no-brainer for modern data workloads.",
        },
      ],
    },
    {
      id: "disc-8",
      category: "DEVOPS",
      categoryClass: "devops",
      title: "My first Docker deployment to AWS ECS — lessons learned",
      author: "Jessica Taylor",
      authorInitials: "JT",
      timeAgo: "2 days ago",
      repliesCount: 15,
      likesCount: 93,
      isLiked: false,
      tags: ["docker", "devops", "cloud"],
      content:
        "Multi-stage Docker builds reduced our production image size from 1.2 GB to just 85 MB! Crucial lessons: always pin base image digests, never run as root inside the container, and ensure SIGTERM is properly trapped by Node so ECS task drains don't drop active HTTP connections.",
      replies: [
        {
          author: "Noah Becker",
          initials: "NB",
          timeAgo: "1 day ago",
          text: "The SIGTERM trap advice is gold. We experienced silent 502 errors during rolling deployments until we fixed our graceful shutdown handlers.",
        },
      ],
    },
  ];

  // State
  let activeCategory = "ALL";
  let searchQuery = "";
  let totalDiscussions = discussions.length;

  // DOM Elements
  const feedContainer = document.getElementById("discussionsFeed");
  const countBadge = document.getElementById("communityCountBadge");
  const searchInput = document.getElementById("communitySearchInput");
  const categoryPills = document.querySelectorAll(".community-category-pill");
  const newPostModalEl = document.getElementById("newPostModal");
  const discussionDetailModalEl = document.getElementById("discussionDetailModal");

  let bsNewPostModal = null;
  let bsDetailModal = null;
  if (newPostModalEl && typeof bootstrap !== "undefined") {
    bsNewPostModal = new bootstrap.Modal(newPostModalEl);
  }
  if (discussionDetailModalEl && typeof bootstrap !== "undefined") {
    bsDetailModal = new bootstrap.Modal(discussionDetailModalEl);
  }

  // --- Render Discussions Feed ---
  function renderDiscussions() {
    if (!feedContainer) return;

    const filtered = discussions.filter((d) => {
      const matchCat =
        activeCategory === "ALL" ||
        d.category.toLowerCase() === activeCategory.toLowerCase();

      const matchSearch =
        !searchQuery ||
        d.title.toLowerCase().includes(searchQuery) ||
        d.content.toLowerCase().includes(searchQuery) ||
        d.author.toLowerCase().includes(searchQuery) ||
        d.tags.some((t) => t.toLowerCase().includes(searchQuery));

      return matchCat && matchSearch;
    });

    if (countBadge) {
      countBadge.textContent = `${filtered.length} discussions`;
    }

    if (filtered.length === 0) {
      feedContainer.innerHTML = `
        <div class="empty-discussions fade-in">
          <i class="bi bi-chat-square-text fs-1 text-secondary mb-3 d-block"></i>
          <h5 class="text-white fw-bold">No discussions found</h5>
          <p class="text-secondary small mb-3">No topics match your current filter or search criteria.</p>
          <button class="btn btn-outline-info btn-sm" id="resetCommunityFilters">View All Discussions</button>
        </div>
      `;
      const resetBtn = document.getElementById("resetCommunityFilters");
      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          activeCategory = "ALL";
          searchQuery = "";
          if (searchInput) searchInput.value = "";
          updateCategoryTabs();
          renderDiscussions();
        });
      }
      return;
    }

    feedContainer.innerHTML = filtered
      .map((d) => {
        return `
        <article class="discussion-card fade-in" data-id="${d.id}">
          <div class="d-flex align-items-center justify-content-between gap-2 mb-2">
            <span class="badge-disc-category ${d.categoryClass}">${d.category}</span>
            <div class="discussion-meta-text">
              <span>${d.timeAgo}</span>
            </div>
          </div>
          
          <h4 class="discussion-title">${d.title}</h4>
          <p class="discussion-snippet">${d.content.length > 180 ? d.content.substring(0, 180) + "..." : d.content}</p>
          
          <div class="d-flex flex-wrap align-items-center justify-content-between gap-3 pt-2 border-top border-secondary-subtle">
            <!-- Author -->
            <div class="d-flex align-items-center gap-2">
              <span class="author-avatar">${d.authorInitials}</span>
              <span class="text-white fw-medium small">${d.author}</span>
            </div>

            <!-- Tags -->
            <div class="d-none d-md-flex gap-2">
              ${d.tags.map((t) => `<span class="tag-chip">#${t}</span>`).join("")}
            </div>

            <!-- Metrics / Actions -->
            <div class="d-flex align-items-center gap-2">
              <button class="action-btn-metric ${d.isLiked ? "liked" : ""}" data-action="like" data-id="${d.id}" title="Like this discussion">
                <i class="bi ${d.isLiked ? "bi-heart-fill" : "bi-heart"}"></i>
                <span>${d.likesCount}</span>
              </button>
              <button class="action-btn-metric" data-action="view" data-id="${d.id}" title="View replies">
                <i class="bi bi-chat-dots"></i>
                <span>${d.repliesCount}</span>
              </button>
            </div>
          </div>
        </article>
      `;
      })
      .join("");

    // Attach Click Handlers
    feedContainer.querySelectorAll(".discussion-card").forEach((card) => {
      card.addEventListener("click", function (e) {
        // Prevent opening modal if clicking like button directly
        if (e.target.closest('[data-action="like"]')) return;
        const id = this.getAttribute("data-id");
        openDiscussionDetail(id);
      });
    });

    feedContainer.querySelectorAll('[data-action="like"]').forEach((btn) => {
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        const id = this.getAttribute("data-id");
        toggleLike(id);
      });
    });
  }

  // --- Like Toggle ---
  function toggleLike(id) {
    const item = discussions.find((d) => d.id === id);
    if (!item) return;

    if (item.isLiked) {
      item.isLiked = false;
      item.likesCount--;
    } else {
      item.isLiked = true;
      item.likesCount++;
    }
    renderDiscussions();
  }

  // --- Category Tabs ---
  function updateCategoryTabs() {
    categoryPills.forEach((pill) => {
      const cat = pill.getAttribute("data-category");
      if (cat === activeCategory) {
        pill.classList.add("active");
      } else {
        pill.classList.remove("active");
      }
    });
  }

  categoryPills.forEach((pill) => {
    pill.addEventListener("click", function (e) {
      e.preventDefault();
      activeCategory = this.getAttribute("data-category");
      updateCategoryTabs();
      renderDiscussions();
    });
  });

  // Search Input
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      searchQuery = this.value.trim().toLowerCase();
      renderDiscussions();
    });
  }

  // Sidebar Popular Tags Quick Filter
  document.querySelectorAll(".sidebar-tag-pill").forEach((tagBtn) => {
    tagBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const tagText = this.getAttribute("data-tag");
      if (searchInput) {
        searchInput.value = tagText;
        searchQuery = tagText.toLowerCase();
        renderDiscussions();
        // Scroll to feed top smoothly
        const feedAnchor = document.getElementById("communityFeedAnchor");
        if (feedAnchor) feedAnchor.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // --- New Post Form Validation & Submission ---
  const newPostForm = document.getElementById("newPostForm");
  const postTitleInput = document.getElementById("postTitle");
  const postCategorySelect = document.getElementById("postCategory");
  const postTagsInput = document.getElementById("postTags");
  const postContentInput = document.getElementById("postContent");
  const postFeedbackAlert = document.getElementById("postFormFeedback");

  if (newPostForm) {
    newPostForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const title = postTitleInput.value.trim();
      const category = postCategorySelect.value;
      const tagsRaw = postTagsInput.value.trim();
      const content = postContentInput.value.trim();

      // Form validation
      if (!title || !content) {
        if (postFeedbackAlert) {
          postFeedbackAlert.className = "alert alert-danger py-2 px-3 small font-monospace mb-3";
          postFeedbackAlert.innerHTML = '<i class="bi bi-exclamation-triangle-fill me-1"></i> Please provide both a title and discussion content.';
          postFeedbackAlert.classList.remove("d-none");
        }
        return;
      }

      // Format Tags
      let tags = tagsRaw
        ? tagsRaw
            .split(",")
            .map((t) => t.trim().replace(/^#/, "").toLowerCase())
            .filter((t) => t.length > 0)
        : [category.toLowerCase()];

      if (tags.length === 0) tags = [category.toLowerCase()];

      // Create new discussion object
      const newId = `disc-${Date.now()}`;
      const newDiscussion = {
        id: newId,
        category: category.toUpperCase(),
        categoryClass: category.toLowerCase(),
        title: title,
        author: "You (Developer)",
        authorInitials: "YOU",
        timeAgo: "Just now",
        repliesCount: 0,
        likesCount: 1,
        isLiked: true,
        tags: tags,
        content: content,
        replies: [],
      };

      // Prepend to discussions list
      discussions.unshift(newDiscussion);
      totalDiscussions++;

      // Reset form and UI
      newPostForm.reset();
      if (postFeedbackAlert) postFeedbackAlert.classList.add("d-none");

      // Hide modal
      if (bsNewPostModal) {
        bsNewPostModal.hide();
      }

      // Re-render discussions and highlight new card
      activeCategory = "ALL";
      searchQuery = "";
      if (searchInput) searchInput.value = "";
      updateCategoryTabs();
      renderDiscussions();

      // Add highlight class to new post
      const firstCard = feedContainer.querySelector(`[data-id="${newId}"]`);
      if (firstCard) {
        firstCard.classList.add("is-new-post");
        firstCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    });
  }

  // --- Discussion Detail Modal ---
  let currentActiveDiscussion = null;

  function openDiscussionDetail(id) {
    const item = discussions.find((d) => d.id === id);
    if (!item || !discussionDetailModalEl) return;

    currentActiveDiscussion = item;

    document.getElementById("detailCategory").textContent = item.category;
    document.getElementById("detailCategory").className = `badge-disc-category ${item.categoryClass}`;
    document.getElementById("detailTitle").textContent = item.title;
    document.getElementById("detailAuthor").textContent = item.author;
    document.getElementById("detailTime").textContent = item.timeAgo;
    document.getElementById("detailAvatar").textContent = item.authorInitials;
    document.getElementById("detailContent").textContent = item.content;

    const tagsContainer = document.getElementById("detailTags");
    if (tagsContainer) {
      tagsContainer.innerHTML = item.tags
        .map((t) => `<span class="tag-chip me-1">#${t}</span>`)
        .join("");
    }

    renderDetailReplies(item);

    if (bsDetailModal) {
      bsDetailModal.show();
    }
  }

  function renderDetailReplies(item) {
    const repliesContainer = document.getElementById("detailRepliesList");
    const repliesHeader = document.getElementById("detailRepliesCount");

    if (repliesHeader) {
      repliesHeader.textContent = `${item.replies.length} Replies`;
    }

    if (!repliesContainer) return;

    if (item.replies.length === 0) {
      repliesContainer.innerHTML = `
        <div class="text-secondary small font-monospace py-3 text-center border border-secondary-subtle rounded-3">
          No replies yet. Be the first to share your thoughts!
        </div>
      `;
      return;
    }

    repliesContainer.innerHTML = item.replies
      .map(
        (r) => `
        <div class="reply-item fade-in">
          <div class="d-flex align-items-center justify-content-between mb-2">
            <div class="d-flex align-items-center gap-2">
              <span class="author-avatar" style="width: 26px; height: 26px; font-size: 0.7rem;">${r.initials}</span>
              <span class="text-white small fw-bold">${r.author}</span>
            </div>
            <span class="text-secondary small font-monospace">${r.timeAgo}</span>
          </div>
          <p class="text-secondary small mb-0">${r.text}</p>
        </div>
      `
      )
      .join("");
  }

  // Reply submission inside modal
  const submitReplyBtn = document.getElementById("btnSubmitReply");
  const replyInput = document.getElementById("replyContentInput");

  if (submitReplyBtn && replyInput) {
    submitReplyBtn.addEventListener("click", function () {
      const text = replyInput.value.trim();
      if (!text || !currentActiveDiscussion) return;

      currentActiveDiscussion.replies.push({
        author: "You (Developer)",
        initials: "YOU",
        timeAgo: "Just now",
        text: text,
      });

      currentActiveDiscussion.repliesCount = currentActiveDiscussion.replies.length;
      replyInput.value = "";

      renderDetailReplies(currentActiveDiscussion);
      renderDiscussions();
    });
  }

  // --- Upcoming Event Seat Reservation ---
  const reserveSeatBtn = document.getElementById("btnReserveSeat");
  const eventStatusAlert = document.getElementById("eventReserveStatus");

  if (reserveSeatBtn) {
    reserveSeatBtn.addEventListener("click", function () {
      const isReserved = this.classList.contains("reserved");

      if (!isReserved) {
        this.classList.add("reserved");
        this.innerHTML = '<i class="bi bi-check2-circle me-1"></i> Seat Reserved!';
        if (eventStatusAlert) {
          eventStatusAlert.className = "alert alert-success py-2 px-3 small font-monospace mt-2";
          eventStatusAlert.innerHTML =
            '<i class="bi bi-bell-fill me-1"></i> Calendar invite sent. We\'ll notify you 15m before stream starts.';
          eventStatusAlert.classList.remove("d-none");
        }
      } else {
        this.classList.remove("reserved");
        this.innerHTML = '<i class="bi bi-ticket-perforated me-1"></i> Reserve a Seat';
        if (eventStatusAlert) {
          eventStatusAlert.className = "alert alert-secondary py-2 px-3 small font-monospace mt-2";
          eventStatusAlert.textContent = "Seat reservation cancelled.";
          setTimeout(() => {
            if (eventStatusAlert) eventStatusAlert.classList.add("d-none");
          }, 2000);
        }
      }
    });
  }

  // Initial render
  renderDiscussions();
});
