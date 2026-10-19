const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#site-nav');

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  nav?.classList.toggle('open', !open);
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const publicationList = document.querySelector('#publication-list');
const publicationStatus = document.querySelector('#publication-status');

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

function renderPublication(paper) {
  const article = document.createElement('article');
  article.className = 'publication';
  if (paper.id) article.id = paper.id;

  const primaryUrl = publicationLink(paper);
  const imageLink = document.createElement('a');
  imageLink.className = 'paper-image';
  imageLink.href = primaryUrl;
  imageLink.setAttribute('aria-label', `Open ${paper.title}`);

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
      link.append(publicationLinkIcon(kind), document.createTextNode(item.label));
      links.append(link);
    });
    copy.append(links);
  }

  article.append(imageLink, copy);
  return article;
}

async function loadPublications() {
  if (!publicationList) return;

  try {
    const response = await fetch('publications.json', { cache: 'no-store' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const data = await response.json();
    if (!Array.isArray(data.publications)) throw new Error('Invalid publications data');

    const fragment = document.createDocumentFragment();
    data.publications.forEach((paper) => fragment.append(renderPublication(paper)));
    publicationList.replaceChildren(fragment);

    if (publicationStatus) {
      publicationStatus.textContent = data.publications.length ? '' : 'No publications yet.';
      publicationStatus.hidden = data.publications.length > 0;
    }
  } catch (error) {
    console.error('Unable to load publications.json', error);
    if (publicationStatus) {
      publicationStatus.hidden = false;
      publicationStatus.classList.add('is-error');
      publicationStatus.textContent = 'Unable to load publications. Please check publications.json.';
    }
  }
}

loadPublications();
