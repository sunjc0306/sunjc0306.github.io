const translations = {
  en: {
    pageTitle: 'Jianchi Sun | Academic Homepage',
    skip: 'Skip to content',
	'nav.homepage':'HomePage',
    'nav.about': 'About',
    'nav.education': 'Education',
    'nav.publications': 'Publications',
    'nav.awards': 'Awards',
    'about.title': 'About Me <span>孙见弛</span>',
    'about.bio': 'I am a Ph.D. candidate in computer science and technology, supervised by <a href="https://graphvision.whu.edu.cn/" target="_blank" rel="noreferrer">Prof. Chunxia Xiao</a>, at Wuhan University, China. Before that, I received the B.S. degree in information and computing science from Wuhan Polytechnic University, China, in 2020, and the M.E. degree in computer science and technology from Central China Normal University, China, in 2023.',
    'about.papers': 'I have authored (co-authored) more than 10 papers in refereed top international journals and conference proceedings, including IEEE TVCG, ACM TOG, IEEE TMM, AAAI, ACM MM, and Chinese Journal of CAD&CG, etc.',
    'about.interests': 'My research interests include geometry processing and 3D human reconstruction.',
    'about.availability': 'I am open to research collaborations and academic opportunities. Please feel free to get in touch.',
    'education.title': 'Education',
    'education.whu': 'Wuhan University',
    'education.phd': 'Ph.D. in Computer Science and Technology',
    'education.advisorXiao': 'Advisor: Prof. Chunxia Xiao',
    'education.present': '2023.09 — Present',
    'education.ccnu': 'Central China Normal University',
    'education.master': 'M.E. in Computer Science and Technology',
    'education.advisorLiu': 'Advisor: Prof. Leyuan Liu',
    'education.whpu': 'Wuhan Polytechnic University',
    'education.bachelor': 'B.S. in Information and Computing Science',
    'education.advisorZhou': 'Advisor: Prof. Kang Zhou',
    'publications.title': 'Publication',
    'publications.loading': 'Loading publications…',
    'publications.empty': 'No publications yet.',
    'publications.error': 'Unable to load publications. Please check publications.json.',
    'awards.title': 'Awards & Service',
    'profile.name': 'Jianchi Sun',
    'profile.role': 'Ph.D. Candidate',
    'profile.school': 'School of Computer Science',
    'profile.university': 'Wuhan University',
    'profile.location': 'Wuhan, China',
    'profile.wechat': 'WeChat',
    'profile.wechatHint': 'Scan, open, or save',
    'profile.wechatSave': 'Download QR code',
    'profile.wechatClose': 'Close WeChat QR code',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeDark: 'Switch to dark mode',
    themeLight: 'Switch to light mode',
    languageSwitch: '切换到中文',
    navLabel: 'Main navigation',
    displayPreferences: 'Display preferences'
  },
  zh: {
    pageTitle: '孙见弛｜个人学术主页',
    skip: '跳转到主要内容',
	
	'nav.homepage':'主页',
    'nav.about': '关于我',
    'nav.education': '教育经历',
    'nav.publications': '论文发表',
    'nav.awards': '获奖经历',
    'about.title': '关于我 <span>Jianchi Sun</span>',
    'about.bio': '我目前是武汉大学计算机科学与技术专业博士研究生，导师<a href="https://graphvision.whu.edu.cn/" target="_blank" rel="noreferrer">肖春霞教授</a>。此前，我于2020年在武汉轻工大学获得信息与计算科学学士学位，并于2023年在华中师范大学获得计算机科学与技术硕士学位。',
    'about.papers': '我已在国际期刊和会议上发表（合作发表）论文十余篇，包括 IEEE TVCG、ACM TOG、IEEE TMM、AAAI、ACM MM 和《计算机辅助设计与图形学学报》等。',
    'about.interests': '我的研究兴趣包括几何处理与三维人体重建。',
    'about.availability': '欢迎开展科研合作与学术交流，期待与您联系。',
    'education.title': '教育经历',
    'education.whu': '武汉大学',
    'education.phd': '计算机科学与技术 · 博士研究生',
    'education.advisorXiao': '导师：肖春霞 教授',
    'education.present': '2023.09 — 至今',
    'education.ccnu': '华中师范大学',
    'education.master': '计算机科学与技术 · 工学硕士',
    'education.advisorLiu': '导师：刘乐元 教授',
    'education.whpu': '武汉轻工大学',
    'education.bachelor': '信息与计算科学 · 理学学士',
    'education.advisorZhou': '导师：周康 教授',
    'publications.title': '论文发表',
    'publications.loading': '正在加载论文…',
    'publications.empty': '暂无论文。',
    'publications.error': '论文加载失败，请检查 publications.json。',
    'awards.title': '获奖经历',
    'profile.name': '孙见弛',
    'profile.role': '博士研究生',
    'profile.school': '计算机学院',
    'profile.university': '武汉大学',
    'profile.location': '中国 · 武汉',
    'profile.wechat': '微信',
    'profile.wechatHint': '扫码添加，点击图片可查看原图',
    'profile.wechatSave': '下载保存二维码',
    'profile.wechatClose': '关闭微信二维码',
    menuOpen: '打开菜单',
    menuClose: '关闭菜单',
    themeDark: '切换到夜间模式',
    themeLight: '切换到白天模式',
    languageSwitch: 'Switch to English',
    navLabel: '主导航',
    displayPreferences: '显示偏好设置'
  }
};

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#site-nav');
const languageToggle = document.querySelector('#language-toggle');
const themeToggle = document.querySelector('#theme-toggle');
const publicationList = document.querySelector('#publication-list');
const publicationStatus = document.querySelector('#publication-status');
const themeMeta = document.querySelector('meta[name="theme-color"]');
const wechatContact = document.querySelector('.wechat-contact');
const wechatButton = document.querySelector('.wechat-button');
const wechatPopover = document.querySelector('.wechat-popover');
const wechatCloseButton = document.querySelector('.wechat-close');

let currentLanguage = localStorage.getItem('site-language') === 'zh' ? 'zh' : 'en';
let currentTheme = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
let publicationData = [];

function translate(key) {
  return translations[currentLanguage][key] || translations.en[key] || key;
}

function updateMenuLabel() {
  if (!menuButton) return;
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-label', translate(isOpen ? 'menuClose' : 'menuOpen'));
}

function updateThemeLabel() {
  if (!themeToggle) return;
  const isDark = currentTheme === 'dark';
  const label = translate(isDark ? 'themeLight' : 'themeDark');
  themeToggle.setAttribute('aria-label', label);
  themeToggle.setAttribute('title', label);
  themeToggle.setAttribute('aria-pressed', String(isDark));
}

function setWechatOpen(open) {
  if (!wechatContact || !wechatButton) return;
  wechatContact.classList.toggle('is-open', open);
  wechatButton.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('wechat-open', open);
}

function updateWechatLabel() {
  if (!wechatButton) return;
  const label = translate('profile.wechat');
  wechatButton.setAttribute('aria-label', label);
  wechatButton.setAttribute('title', label);
  wechatCloseButton?.setAttribute('aria-label', translate('profile.wechatClose'));
}

function applyTheme(theme, persist = true) {
  currentTheme = theme === 'dark' ? 'dark' : 'light';
  document.documentElement.dataset.theme = currentTheme;
  if (themeMeta) themeMeta.setAttribute('content', currentTheme === 'dark' ? '#11171a' : '#ffffff');
  updateThemeLabel();
  if (persist) localStorage.setItem('site-theme', currentTheme);
}

function applyLanguage(language, persist = true) {
  currentLanguage = language === 'zh' ? 'zh' : 'en';
  document.documentElement.lang = currentLanguage === 'zh' ? 'zh-CN' : 'en';
  document.title = translate('pageTitle');

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = translate(element.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    element.innerHTML = translate(element.dataset.i18nHtml);
  });

  if (languageToggle) {
    languageToggle.textContent = currentLanguage === 'en' ? '中文' : 'EN';
    languageToggle.setAttribute('aria-label', translate('languageSwitch'));
    languageToggle.setAttribute('title', translate('languageSwitch'));
  }
  nav?.setAttribute('aria-label', translate('navLabel'));
  document.querySelector('.header-controls')?.setAttribute('aria-label', translate('displayPreferences'));
  updateMenuLabel();
  updateThemeLabel();
  updateWechatLabel();
  renderPublications();

  if (persist) localStorage.setItem('site-language', currentLanguage);
}

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  nav?.classList.toggle('open', !open);
  updateMenuLabel();
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    updateMenuLabel();
  });
});

languageToggle?.addEventListener('click', () => {
  applyLanguage(currentLanguage === 'en' ? 'zh' : 'en');
});

themeToggle?.addEventListener('click', () => {
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

wechatButton?.addEventListener('click', (event) => {
  event.stopPropagation();
  setWechatOpen(wechatButton.getAttribute('aria-expanded') !== 'true');
});

wechatContact?.addEventListener('click', (event) => event.stopPropagation());
wechatCloseButton?.addEventListener('click', () => setWechatOpen(false));
wechatPopover?.addEventListener('click', (event) => {
  if (event.target === wechatPopover) setWechatOpen(false);
});
document.addEventListener('click', () => setWechatOpen(false));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    setWechatOpen(false);
    wechatButton?.focus();
  }
});

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

function publicationLink(paper) {
  const paperLink = paper.links?.find((link) => link.label?.toLowerCase() === 'paper');
  return paper.primaryUrl || paperLink?.url || `#${paper.id || 'publications'}`;
}

function renderAuthors(authors = []) {
  const line = document.createElement('p');
  line.className = 'authors';

  authors.forEach((author, index) => {
    if (index > 0) line.append(', ');
    const name = document.createElement(author.highlight ? 'strong' : 'span');
    name.textContent = author.name;
    line.append(name);
  });

  return line;
}

function publicationLinkIcon(label = '') {
  const icon = document.createElement('span');
  icon.className = 'paper-link-icon';
  icon.setAttribute('aria-hidden', 'true');

  const icons = {
    project: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 4.5 6 4.5 9S15 18 12 21M12 3C9 6 7.5 9 7.5 12S9 18 12 21"/></svg>',
    paper: '<svg viewBox="0 0 24 24"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></svg>',
    code: '<svg viewBox="0 0 24 24" class="is-github"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 7.69a9.6 9.6 0 0 1 2.5.34c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v1.9c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg>',
    demo: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="m10 8 6 4-6 4z"/></svg>'
  };

  icon.innerHTML = icons[label.toLowerCase()] || '<svg viewBox="0 0 24 24"><path d="M7 17 17 7M9 7h8v8"/></svg>';
  return icon;
}

function translatedPaperLink(kind, fallback) {
  if (currentLanguage !== 'zh') return fallback;
  return { project: '项目主页', paper: '论文', code: '代码', demo: '演示' }[kind] || fallback;
}

function renderPublication(paper) {
  const article = document.createElement('article');
  article.className = 'publication';
  if (paper.id) article.id = paper.id;

  const primaryUrl = publicationLink(paper);
  const imageLink = document.createElement('a');
  imageLink.className = 'paper-image';
  imageLink.href = primaryUrl;
  imageLink.setAttribute('aria-label', `${currentLanguage === 'zh' ? '打开' : 'Open'} ${paper.title}`);

  if (paper.image?.src) {
    const image = document.createElement('img');
    image.src = paper.image.src;
    image.alt = paper.image.alt || '';
    image.width = 560;
    image.height = 330;
    image.loading = 'lazy';
    imageLink.append(image);
  }

  const copy = document.createElement('div');
  copy.className = 'paper-copy';

  const venue = document.createElement('p');
  venue.className = 'venue';
  venue.textContent = paper.venue || '';
  const venueDetails = [paper.year, paper.badge].filter(Boolean).join(' · ');
  if (venueDetails) {
    const details = document.createElement('span');
    details.textContent = venueDetails;
    venue.append(' ', details);
  }

  const heading = document.createElement('h3');
  const titleLink = document.createElement('a');
  titleLink.href = primaryUrl;
  titleLink.textContent = paper.title;
  heading.append(titleLink);

  copy.append(venue, heading, renderAuthors(paper.authors));

  if (paper.description) {
    const description = document.createElement('p');
    description.className = 'paper-description';
    description.textContent = paper.description;
    copy.append(description);
  }

  if (paper.links?.length) {
    const links = document.createElement('div');
    links.className = 'paper-links';
    paper.links.forEach((item) => {
      const link = document.createElement('a');
      link.href = item.url;
      const kind = (item.label || 'link').toLowerCase();
      link.className = `paper-link paper-link-${kind.replace(/[^a-z0-9]+/g, '-')}`;
      link.append(publicationLinkIcon(kind), document.createTextNode(translatedPaperLink(kind, item.label)));
      links.append(link);
    });
    copy.append(links);
  }

  article.append(imageLink, copy);
  return article;
}

function renderPublications() {
  if (!publicationList || !publicationData.length) return;
  const fragment = document.createDocumentFragment();
  publicationData.forEach((paper) => fragment.append(renderPublication(paper)));
  publicationList.replaceChildren(fragment);
}

async function loadPublications() {
  if (!publicationList) return;

  try {
    const response = await fetch('publications.json', { cache: 'no-store' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const data = await response.json();
    if (!Array.isArray(data.publications)) throw new Error('Invalid publications data');

    publicationData = data.publications;
    renderPublications();

    if (publicationStatus) {
      publicationStatus.textContent = publicationData.length ? '' : translate('publications.empty');
      publicationStatus.hidden = publicationData.length > 0;
    }
  } catch (error) {
    console.error('Unable to load publications.json', error);
    if (publicationStatus) {
      publicationStatus.hidden = false;
      publicationStatus.classList.add('is-error');
      publicationStatus.textContent = translate('publications.error');
    }
  }
}

applyTheme(currentTheme, false);
applyLanguage(currentLanguage, false);
loadPublications();
