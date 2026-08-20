(() => {
  'use strict';

  const external = (href) => /^https?:\/\//.test(href);
  const iconPath = (name) => `assets/icons/${name}`;

  const navigation = [
    {
      key: 'get-started',
      label: 'Get Started',
      columns: [
        {
          title: 'Learn',
          items: [
            { title: 'What is TRX?', description: "Learn more about TRON's native token", href: '#market', icon: 'what_trx' },
            { title: 'TRON USDT', description: 'A leading on-chain stablecoin with worldwide circulation', href: 'https://tron.network/usdt/', icon: 'usdt' },
            { title: 'Whitepaper', description: 'Understand how we build the future', href: 'https://tron.network/static/doc/white_paper_v_2_1.pdf', icon: 'whitepaper' },
            { title: 'FAQs', description: 'Find answers to common questions', href: 'https://tron.network/faq/', icon: 'faq' }
          ]
        },
        {
          title: 'Quick Start',
          items: [
            { title: 'Get TRX', description: 'Begin your exploration on TRON', href: 'https://tron.network/trx/#how-to-get', icon: 'get_trx' },
            { title: 'Select a Wallet', description: 'Store and manage your assets with confidence', href: 'https://tron.network/wallet/', icon: 'select_wallet' },
            { title: 'Explorer', description: 'Check on-chain data and transaction details', href: 'https://tronscan.org/', icon: 'visit_explore' },
            { title: 'Developer Center', description: 'Understand our network and start building', href: 'https://developers.tron.network/', icon: 'developer_center' }
          ]
        }
      ]
    },
    {
      key: 'build',
      label: 'Build',
      columns: [
        {
          title: 'Developers',
          items: [
            { title: 'Developer Docs', description: 'View tutorials and documents for developers', href: 'https://developers.tron.network/', icon: 'Documentation' },
            { title: 'Developer Tools', description: 'Build with our DApp toolkit', href: 'https://developers.tron.network/docs/dapp-development-tools', icon: 'dev_tools' },
            { title: 'GitHub', description: 'Contribute to TRONPROTOCOL coding', href: 'https://github.com/tronprotocol', icon: 'github' }
          ]
        },
        {
          title: 'Security',
          items: [
            { title: 'Audit Reports', description: 'Learn more about protocol security and reliability', href: 'https://tron.network/static/doc/TRON_Protocol_Security_Audit_Report.pdf', icon: 'audit_reports' },
            { title: 'Bug Bounty', description: 'Build a stronger network together', href: 'https://hackerone.com/tron_dao?type=team', icon: 'bug_bounty' }
          ]
        }
      ]
    },
    {
      key: 'ecosystem',
      label: 'Ecosystem',
      explore: true,
      columns: [
        {
          title: 'DeFi & Stablecoin',
          items: [
            { title: 'USDD', description: 'A decentralized, over-collateralized stablecoin pegged 1:1 to the US dollar', href: 'https://usdd.io/', icon: 'eco-usdd' },
            { title: 'JustLend DAO', description: 'A growing DeFi ecosystem on TRON', href: 'https://justlend.org/', icon: 'eco-justlend' },
            { title: 'SUN', description: 'The first AMM-based exchange and yield farming platform on TRON', href: 'https://sun.io/', icon: 'eco-sun' },
            { title: 'SunPump', description: 'The first meme fair launch platform on TRON', href: 'https://sunpump.meme/', icon: 'eco-sun' },
            { title: 'SunX', description: 'The first perpetual futures DEX on TRON', href: 'https://www.sunx.io/', icon: 'eco-sun' }
          ]
        },
        {
          title: 'AI & Ecosystem Tools',
          items: [
            { title: 'B.AI', description: 'The financial infrastructure built for AI Agents', href: 'https://b.ai/', icon: 'eco-bai' },
            { title: 'TronLink', description: 'The most professional and secure wallet on TRON', href: 'https://www.tronlink.org/', icon: 'eco-tronlink' },
            { title: 'GasFree', description: 'Low-cost, frictionless transfers for everyone', href: 'https://gasfree.io/', icon: 'eco-gasfree' },
            { title: 'BTTC', description: 'A PoS-based Layer2 protocol', href: 'https://bt.io/', icon: 'eco-bttc' },
            { title: 'WINkLink', description: "TRON's first comprehensive oracle solution", href: 'https://winklink.org/#/home', icon: 'eco-winklink' },
            { title: 'OKX DEX', description: 'Fast, seamless swaps for TRON-based tokens', href: 'https://web3.okx.com/dex-swap?chain=tron,tron', icon: 'eco-okx' }
          ]
        }
      ]
    },
    {
      key: 'governance',
      label: 'Governance',
      columns: [
        {
          title: 'Governance',
          items: [
            { title: 'Super Representatives', description: 'Core nodes of the TRON network', href: 'https://tronscan.org/sr/representatives', icon: 'super_Representatives' },
            { title: 'Parameters & Proposals', description: 'Learn more about network parameters and committee proposals', href: 'https://tronscan.org/sr/parameter', icon: 'Parameters' },
            { title: 'Staking', description: 'Stake TRX to get your votes', href: 'https://tronscan.org/sr/wallet-stake-home', icon: 'stake' },
            { title: 'Voting', description: 'Vote for SRs and earn yields', href: 'https://tronscan.org/sr/votes', icon: 'vote' }
          ]
        }
      ]
    },
    {
      key: 'more',
      label: 'More',
      columns: [
        {
          title: 'Hub',
          items: [
            { title: 'Resources', description: 'Discover the latest news and access media kits', href: 'https://tron.network/resources/', icon: 'resource' },
            { title: 'Careers', description: 'Join the team and build the autonomous finance portal together', href: 'https://tron.network/career/corevalues/', icon: 'careers' },
            { title: 'About', description: 'Learn about the pathfinder and milestones of TRON DAO', href: 'https://tron.network/about/', icon: 'about' }
          ]
        }
      ]
    }
  ];

  const footerGroups = [
    {
      label: 'Get Started',
      subtitle: 'Learn',
      items: navigation[0].columns.flatMap((column) => column.items)
    },
    {
      label: 'Build',
      items: navigation[1].columns.flatMap((column) => column.items)
    },
    {
      label: 'Ecosystem',
      items: [
        { title: 'USDD', href: 'https://usdd.io/' },
        { title: 'JustLend DAO', href: 'https://justlend.org/' },
        { title: 'SUN.io', href: 'https://sun.io/' },
        { title: 'BTTC', href: 'https://bt.io/' },
        { title: 'B.AI', href: 'https://b.ai/' },
        { title: 'WINkLink', href: 'https://winklink.org/#/home' },
        { title: 'OKX DEX', href: 'https://web3.okx.com/dex-swap?chain=tron,tron' }
      ]
    },
    {
      label: 'Governance',
      items: navigation[3].columns.flatMap((column) => column.items)
    },
    {
      label: 'More',
      items: navigation[4].columns.flatMap((column) => column.items)
    }
  ];

  const developerTools = [
    { title: 'TVM', description: 'Seamlessly deploy your Solidity smart contracts.', href: 'https://developers.tron.network/docs/tvm', icon: 'tvm.svg', hover: 'tvm-red.svg' },
    { title: 'DApp Developer Tools', description: 'The comprehensive toolkit for DApp development.', href: 'https://developers.tron.network/docs/dapp-development-tools', icon: 'tronweb.svg', hover: 'tronweb-red.svg' },
    { title: 'GasFree Permit Transfers', description: 'A frictionless gas experience for TRON users.', href: 'https://gasfree.io/', icon: 'gasfree.svg', hover: 'gasfree-red.svg' },
    { title: 'TronLink', description: 'The most professional and secure wallet on TRON.', href: 'https://docs.tronlink.org/', icon: 'tronlink.svg', hover: 'tronlink-red.svg' },
    { title: 'TronScan', description: 'Real-time on-chain data and analytics.', href: 'https://tronscan.org/developer/api', icon: 'tronscan-api.svg', hover: 'tronscan-api-red.svg' },
    { title: 'Bug Bounty', description: 'Earn rewards for identifying protocol vulnerabilities.', href: 'https://hackerone.com/tron_dao', icon: 'audits.svg', hover: 'audits-red.svg' }
  ];

  const ecosystemItems = [
    { title: 'TRON Wallet', description: 'Many outstanding developers have built their wallet brands on TRON. Additionally, a number of world-class wallets have been integrated to provide a smoother user experience.', icon: 'tron-wallet-color.svg', href: 'https://www.tronlink.org/' },
    { title: 'Application Scenario', description: 'From payments to gaming, TRON supports high-throughput applications used around the world.', icon: 'app-scenario-color.svg', href: 'https://tron.network/ecosystem/' },
    { title: 'TRON Crypto ETFs', description: 'Explore institutional access and the evolving path of TRON and crypto-asset exchange-traded products.', icon: 'tron-etfs-color.svg', href: 'https://static.tron.network/pdf/TRON_Crypto%20ETFs%200917.pdf' },
    { title: 'TRC20-USDT', description: 'Fast, low-cost stablecoin transfers with global reach and deep ecosystem support.', icon: 'trc20-usdt-color.svg', href: 'https://tron.network/usdt/' },
    { title: 'TRON DApps', description: 'A growing collection of decentralized finance, gaming and Web3 applications.', icon: 'tron-dapps-color.svg', href: 'https://dappradar.com/rankings/protocol/tron' },
    { title: 'TRON SR', description: 'Community-elected Super Representatives maintain and govern the TRON network.', icon: 'tron-sr-color.svg', href: 'https://tronscan.org/sr/representatives' },
    { title: 'SUN', description: 'An AMM-based exchange and yield farming platform on TRON.', icon: 'sun-color.svg', href: 'https://sun.io/' },
    { title: 'JustLend DAO', description: 'A decentralized lending protocol and growing DeFi ecosystem on TRON.', icon: 'justlend-color.svg', href: 'https://justlend.org/' },
    { title: 'TronScan', description: 'The trusted explorer for TRON transactions, accounts and smart contracts.', icon: 'tronscan-color.svg', href: 'https://tronscan.org/' },
    { title: 'WINkLink', description: "TRON's first comprehensive decentralized oracle solution.", icon: 'winklink-color.svg', href: 'https://winklink.org/' },
    { title: 'SunSwap', description: 'A decentralized token exchange protocol for the TRON ecosystem.', icon: 'sun-color.svg', href: 'https://sunswap.com/' }
  ];

  const partners = [
    { title: 'Poloniex', grey: 'poloniex.svg', color: 'poloniex-color.svg', href: 'https://poloniex.com/', description: 'Poloniex is a global digital asset exchange offering a broad selection of crypto markets and services to users around the world.' },
    { title: 'MEXC', grey: 'mexc.svg', color: 'mexc-color.svg', href: 'https://www.mexc.com/', description: 'MEXC, founded in 2018, serves 40M+ users in 170+ countries with low fees, trending tokens, daily airdrops, and a simple, secure platform for all crypto traders.' },
    { title: 'Swisscom', grey: 'swisscom.svg', color: 'swisscom-color.svg', href: 'https://www.swisscom.ch/', description: 'Swisscom brings trusted telecommunications and blockchain infrastructure expertise to an open, connected digital economy.' },
    { title: 'Opera', grey: 'opera.svg', color: 'opera-color.svg', href: 'https://www.opera.com/', description: 'Opera connects millions of users to Web3 through browser-native wallet experiences and accessible decentralized technology.' },
    { title: 'BitTorrent', grey: 'bit.svg', color: 'bit-color.svg', href: 'https://www.bittorrent.com/', description: 'BitTorrent is a pioneering decentralized communications protocol and a core part of the broader TRON ecosystem.' },
    { title: 'B.AI', grey: 'bai.svg', color: 'bai-color.svg', href: 'https://b.ai/', description: 'B.AI is financial infrastructure designed for autonomous AI agents and the next generation of on-chain applications.' },
    { title: 'Samsung', grey: 'samsung.svg', color: 'samsung-color.svg', href: 'https://www.samsung.com/', description: 'Samsung has helped make blockchain experiences available across a global ecosystem of consumer devices and services.' }
  ];

  const languages = [
    { code: 'EN', locale: 'en', label: 'English', dir: 'ltr' },
    { code: '简', locale: 'zh-Hans', label: '简体中文', dir: 'ltr' },
    { code: '繁', locale: 'zh-Hant', label: '繁體中文', dir: 'ltr' },
    { code: '日', locale: 'ja', label: '日本語', dir: 'ltr' },
    { code: '한', locale: 'ko', label: '한국어', dir: 'ltr' },
    { code: 'RU', locale: 'ru', label: 'Русский', dir: 'ltr' },
    { code: 'TR', locale: 'tr', label: 'Türkçe', dir: 'ltr' },
    { code: 'AR', locale: 'ar', label: 'العربية', dir: 'rtl' }
  ];

  const searchEntries = [
    { title: 'What is TRX?', description: "Learn about TRON's native token", href: '#market', icon: 'T' },
    { title: 'TRON USDT', description: 'Stablecoin scale, transfers and ecosystem', href: 'https://tron.network/usdt/', icon: '$' },
    { title: 'Developer Center', description: 'Documentation, tutorials and developer resources', href: 'https://developers.tron.network/', icon: '</>' },
    { title: 'TRON Virtual Machine', description: 'Deploy Solidity smart contracts with TVM', href: 'https://developers.tron.network/docs/tvm', icon: '◇' },
    { title: 'TRON Ecosystem', description: 'Explore wallets, DApps, DeFi and infrastructure', href: '#ecosystem', icon: '◎' },
    { title: 'Super Representatives', description: 'Learn about TRON network governance', href: 'https://tronscan.org/sr/representatives', icon: 'SR' },
    { title: 'Audit Reports', description: 'Review protocol security and reliability', href: 'https://tron.network/static/doc/TRON_Protocol_Security_Audit_Report.pdf', icon: '✓' },
    { title: 'Resources & Insights', description: 'News, updates and media resources', href: '#insights', icon: '↗' }
  ];

  const megaShell = document.querySelector('#mega-shell');
  const megaMenu = document.querySelector('#mega-menu');
  const navTriggers = [...document.querySelectorAll('.nav-trigger')];
  let openMenuKey = null;

  function renderMegaMenu(key) {
    const group = navigation.find((item) => item.key === key);
    if (!group) return;
    const single = group.columns.length === 1 ? ' single' : '';
    megaMenu.innerHTML = `
      <div class="mega-layout${single}" style="--columns:${group.columns.length}">
        ${group.columns.map((column) => `
          <section class="mega-column">
            <h2 class="mega-column-title">${column.title}</h2>
            <div class="mega-items">
              ${column.items.map((item) => `
                <a class="mega-item" href="${item.href}" ${external(item.href) ? 'target="_blank" rel="noopener noreferrer"' : ''}>
                  <span class="mega-icon" aria-hidden="true">
                    <img class="default" src="${iconPath(`${item.icon}-default.svg`)}" alt="" decoding="async">
                    <img class="hover" src="${iconPath(`${item.icon}-hover.svg`)}" alt="" decoding="async">
                  </span>
                  <span><h3>${item.title}</h3><p>${item.description}</p></span>
                  <b aria-hidden="true">${external(item.href) ? '↗' : '›'}</b>
                </a>
              `).join('')}
            </div>
          </section>
        `).join('')}
      </div>
      ${group.explore ? `
        <div class="mega-explore">
          <span>Explore more about the TRON ecosystem on:</span>
          <div><a href="https://defillama.com/chain/Tron" target="_blank" rel="noopener noreferrer">DefiLlama</a><a href="https://tokenterminal.com/explorer/projects/tron/ecosystem/projects" target="_blank" rel="noopener noreferrer">Token Terminal</a></div>
        </div>` : ''}
    `;
  }

  function closeMegaMenu() {
    openMenuKey = null;
    megaShell.hidden = true;
    navTriggers.forEach((trigger) => {
      trigger.classList.remove('is-active');
      trigger.setAttribute('aria-expanded', 'false');
    });
  }

  function openMegaMenu(key) {
    renderMegaMenu(key);
    openMenuKey = key;
    megaShell.hidden = false;
    navTriggers.forEach((trigger) => {
      const active = trigger.dataset.menu === key;
      trigger.classList.toggle('is-active', active);
      trigger.setAttribute('aria-expanded', String(active));
    });
  }

  navTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      if (openMenuKey === trigger.dataset.menu) closeMegaMenu();
      else openMegaMenu(trigger.dataset.menu);
    });
    trigger.addEventListener('mouseenter', () => openMegaMenu(trigger.dataset.menu));
    trigger.addEventListener('focus', () => openMegaMenu(trigger.dataset.menu));
  });

  document.querySelector('.site-header').addEventListener('mouseleave', (event) => {
    if (!event.relatedTarget || !event.currentTarget.contains(event.relatedTarget)) closeMegaMenu();
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.site-header')) closeMegaMenu();
  });

  const mobileNav = document.querySelector('#mobile-nav');
  const mobileTrigger = document.querySelector('.mobile-menu-trigger');
  const mobileContent = document.querySelector('#mobile-nav-content');

  mobileContent.innerHTML = navigation.map((group, groupIndex) => `
    <section class="mobile-nav-group">
      <button class="mobile-nav-heading" type="button" aria-expanded="${groupIndex === 0 ? 'true' : 'false'}" aria-controls="mobile-panel-${group.key}">
        <span>${group.label}</span><span aria-hidden="true">+</span>
      </button>
      <div class="mobile-nav-panel" id="mobile-panel-${group.key}" ${groupIndex === 0 ? '' : 'hidden'}>
        ${group.columns.map((column) => `
          <p class="mobile-nav-subtitle">${column.title}</p>
          ${column.items.map((item) => `
            <a class="mobile-nav-link" href="${item.href}" ${external(item.href) ? 'target="_blank" rel="noopener noreferrer"' : ''}>
              <img src="${iconPath(`${item.icon}-default.svg`)}" alt="" aria-hidden="true" loading="lazy" decoding="async">
              <span><strong>${item.title}</strong><small>${item.description}</small></span><span aria-hidden="true">${external(item.href) ? '↗' : '›'}</span>
            </a>
          `).join('')}
        `).join('')}
      </div>
    </section>
  `).join('');

  function setMobileNav(open) {
    mobileNav.hidden = !open;
    mobileTrigger.setAttribute('aria-expanded', String(open));
    mobileTrigger.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    document.body.classList.toggle('is-locked', open);
    if (open) mobileNav.querySelector('button, a')?.focus();
  }

  mobileTrigger.addEventListener('click', () => setMobileNav(mobileTrigger.getAttribute('aria-expanded') !== 'true'));
  mobileContent.addEventListener('click', (event) => {
    const heading = event.target.closest('.mobile-nav-heading');
    if (heading) {
      const panel = document.querySelector(`#${heading.getAttribute('aria-controls')}`);
      const open = heading.getAttribute('aria-expanded') !== 'true';
      heading.setAttribute('aria-expanded', String(open));
      panel.hidden = !open;
      return;
    }
    if (event.target.closest('a')) setMobileNav(false);
  });

  const footerNavigation = document.querySelector('#footer-navigation');
  footerNavigation.innerHTML = footerGroups.map((group) => {
    const subtitle = group.subtitle ? `<p class="footer-subtitle">${group.subtitle}</p>` : '';
    return `<section class="footer-column"><h3>${group.label}</h3>${subtitle}${group.items.map((item) => `<a href="${item.href}" ${external(item.href) ? 'target="_blank" rel="noopener noreferrer"' : ''}>${item.title}</a>`).join('')}</section>`;
  }).join('');

  const languageMenu = document.querySelector('#language-menu');
  const languageTrigger = document.querySelector('.header-actions .language-trigger');
  const mobileLanguage = document.querySelector('#mobile-language');
  const savedLocale = localStorage.getItem('tron-showcase-language') || 'en';

  function renderLanguages() {
    languageMenu.innerHTML = languages.map((language) => `<button type="button" role="menuitem" data-locale="${language.locale}" aria-current="${language.locale === savedLocale}"><span>${language.label}</span><b>${language.code}</b></button>`).join('');
    mobileLanguage.innerHTML = languages.map((language) => `<option value="${language.locale}" ${language.locale === savedLocale ? 'selected' : ''}>${language.label}</option>`).join('');
  }

  function setLanguage(locale, announce = true) {
    const language = languages.find((item) => item.locale === locale) || languages[0];
    document.documentElement.lang = language.locale;
    document.documentElement.dir = language.dir;
    document.querySelectorAll('.language-code').forEach((node) => { node.textContent = language.code; });
    document.querySelectorAll('.footer-language').forEach((node) => { node.innerHTML = `<span aria-hidden="true">◎</span> ${language.code}⌄`; });
    localStorage.setItem('tron-showcase-language', language.locale);
    mobileLanguage.value = language.locale;
    languageMenu.querySelectorAll('button').forEach((button) => button.setAttribute('aria-current', String(button.dataset.locale === language.locale)));
    if (announce) showToast(`${language.label} selected. This shareholder preview retains the approved English content snapshot.`);
  }

  renderLanguages();
  setLanguage(savedLocale, false);
  languageTrigger.addEventListener('click', () => {
    const open = languageMenu.hidden;
    languageMenu.hidden = !open;
    languageTrigger.setAttribute('aria-expanded', String(open));
  });
  languageMenu.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-locale]');
    if (!button) return;
    setLanguage(button.dataset.locale);
    languageMenu.hidden = true;
    languageTrigger.setAttribute('aria-expanded', 'false');
  });
  mobileLanguage.addEventListener('change', () => setLanguage(mobileLanguage.value));
  document.querySelector('.footer-language').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => languageTrigger.click(), 350);
  });
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.language-control')) {
      languageMenu.hidden = true;
      languageTrigger.setAttribute('aria-expanded', 'false');
    }
  });

  const developerGrid = document.querySelector('#developer-grid');
  developerGrid.innerHTML = developerTools.map((tool) => `
    <a class="developer-card reveal" href="${tool.href}" target="_blank" rel="noopener noreferrer">
      <span class="developer-icon" aria-hidden="true"><img class="default" src="${iconPath(tool.icon)}" alt="" loading="lazy" decoding="async"><img class="hover" src="${iconPath(tool.hover)}" alt="" loading="lazy" decoding="async"></span>
      <h3>${tool.title}</h3><p>${tool.description}</p><span class="card-arrow" aria-hidden="true">↗</span>
    </a>
  `).join('');

  const ecosystemGrid = document.querySelector('#ecosystem-grid');
  const detailIcon = document.querySelector('#ecosystem-detail-icon');
  const detailTitle = document.querySelector('#ecosystem-detail-title');
  const detailDescription = document.querySelector('#ecosystem-detail-description');
  const detailLink = document.querySelector('#ecosystem-detail-link');

  ecosystemGrid.innerHTML = ecosystemItems.map((item, index) => `
    <button class="ecosystem-item${index === 0 ? ' is-active' : ''}" type="button" data-index="${index}" aria-pressed="${index === 0}">
      <img src="${iconPath(item.icon)}" alt="" aria-hidden="true" loading="lazy" decoding="async"><span>${item.title}</span>
    </button>
  `).join('');

  function selectEcosystem(index) {
    const item = ecosystemItems[index];
    if (!item) return;
    detailIcon.src = iconPath(item.icon);
    detailTitle.textContent = item.title;
    detailDescription.textContent = item.description;
    detailLink.href = item.href;
    detailLink.setAttribute('aria-label', `Visit ${item.title}`);
    ecosystemGrid.querySelectorAll('.ecosystem-item').forEach((button, buttonIndex) => {
      const active = buttonIndex === index;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  }

  ecosystemGrid.addEventListener('click', (event) => {
    const button = event.target.closest('.ecosystem-item');
    if (button) selectEcosystem(Number(button.dataset.index));
  });

  const partnerTabs = document.querySelector('#partner-tabs');
  const partnerDescription = document.querySelector('#partner-description');
  partnerTabs.innerHTML = partners.map((partner, index) => `
    <button class="partner-tab${index === 1 ? ' is-active' : ''}" type="button" role="tab" aria-selected="${index === 1}" aria-label="${partner.title}" data-index="${index}">
      <img class="grey" src="${iconPath(partner.grey)}" alt="${partner.title}" loading="lazy" decoding="async"><img class="color" src="${iconPath(partner.color)}" alt="" aria-hidden="true" loading="lazy" decoding="async">
    </button>
  `).join('');

  function selectPartner(index) {
    const partner = partners[index];
    if (!partner) return;
    partnerDescription.innerHTML = `${partner.description} <a href="${partner.href}" target="_blank" rel="noopener noreferrer" aria-label="Visit ${partner.title}">↗</a>`;
    partnerTabs.querySelectorAll('.partner-tab').forEach((button, buttonIndex) => {
      const active = buttonIndex === index;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-selected', String(active));
    });
  }

  partnerTabs.addEventListener('click', (event) => {
    const button = event.target.closest('.partner-tab');
    if (button) selectPartner(Number(button.dataset.index));
  });
  partnerTabs.addEventListener('keydown', (event) => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    const current = Number(document.activeElement?.dataset.index ?? 1);
    const next = (current + (event.key === 'ArrowRight' ? 1 : -1) + partners.length) % partners.length;
    const nextButton = partnerTabs.querySelector(`[data-index="${next}"]`);
    selectPartner(next);
    nextButton.focus();
  });
  selectPartner(1);

  const featureCards = [...document.querySelectorAll('.feature-card')];
  const featureDots = [...document.querySelectorAll('.feature-dots button')];
  const featureSection = document.querySelector('#protocol');
  let activeFeature = 0;
  let featureVisible = false;
  let featureTimer;

  function selectFeature(index) {
    activeFeature = (index + featureCards.length) % featureCards.length;
    featureCards.forEach((card, cardIndex) => card.classList.toggle('is-active', cardIndex === activeFeature));
    featureDots.forEach((dot, dotIndex) => {
      const active = dotIndex === activeFeature;
      dot.classList.toggle('is-active', active);
      dot.setAttribute('aria-selected', String(active));
    });
  }

  function startFeatureTimer() {
    clearInterval(featureTimer);
    if (featureVisible && window.matchMedia('(min-width: 901px)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      featureTimer = setInterval(() => selectFeature(activeFeature + 1), 6500);
    }
  }

  document.querySelector('.feature-arrow.prev').addEventListener('click', () => { selectFeature(activeFeature - 1); startFeatureTimer(); });
  document.querySelector('.feature-arrow.next').addEventListener('click', () => { selectFeature(activeFeature + 1); startFeatureTimer(); });
  featureDots.forEach((dot, index) => dot.addEventListener('click', () => { selectFeature(index); startFeatureTimer(); }));
  document.querySelector('.feature-stage').addEventListener('mouseenter', () => clearInterval(featureTimer));
  document.querySelector('.feature-stage').addEventListener('mouseleave', startFeatureTimer);
  window.addEventListener('resize', startFeatureTimer, { passive: true });
  if ('IntersectionObserver' in window) {
    const featureObserver = new IntersectionObserver(([entry]) => {
      featureVisible = entry.isIntersecting;
      startFeatureTimer();
    }, { threshold: 0.15 });
    featureObserver.observe(featureSection);
  } else {
    featureVisible = true;
    startFeatureTimer();
  }

  const blockNumber = document.querySelector('.block-number');
  const transactionCount = document.querySelector('.transaction-count');
  const blockAge = document.querySelector('.block-age');
  let staticBlock = 85485374;
  let blockSeconds = 13;
  setInterval(() => {
    blockSeconds += 1;
    if (blockSeconds >= 16) {
      staticBlock += 1;
      blockSeconds = 1;
      transactionCount.textContent = String(510 + Math.floor(Math.random() * 95));
      blockNumber.textContent = `#${staticBlock}`;
    }
    blockAge.textContent = `${blockSeconds}s ago`;
  }, 1000);

  const searchDialog = document.querySelector('#search-dialog');
  const searchInput = document.querySelector('#search-input');
  const searchResults = document.querySelector('#search-results');

  function renderSearchResults(query = '') {
    const normalized = query.trim().toLowerCase();
    const results = normalized
      ? searchEntries.filter((entry) => `${entry.title} ${entry.description}`.toLowerCase().includes(normalized))
      : searchEntries.slice(0, 5);
    if (!results.length) {
      searchResults.innerHTML = `<div class="search-empty"><div><strong>No results found</strong><span>Try “TRX”, “wallet”, “developer” or “governance”.</span></div></div>`;
      return;
    }
    searchResults.innerHTML = results.map((entry) => `
      <a class="search-result" href="${entry.href}" ${external(entry.href) ? 'target="_blank" rel="noopener noreferrer"' : ''}>
        <span class="search-result-icon" aria-hidden="true">${entry.icon}</span><span><strong>${entry.title}</strong><span>${entry.description}</span></span><b aria-hidden="true">${external(entry.href) ? '↗' : '›'}</b>
      </a>
    `).join('');
  }

  function openSearch() {
    setMobileNav(false);
    renderSearchResults(searchInput.value);
    if (typeof searchDialog.showModal === 'function') searchDialog.showModal();
    else searchDialog.setAttribute('open', '');
    requestAnimationFrame(() => searchInput.focus());
  }

  document.querySelectorAll('.search-trigger').forEach((button) => button.addEventListener('click', openSearch));
  searchInput.addEventListener('input', () => renderSearchResults(searchInput.value));
  searchDialog.querySelector('form').addEventListener('submit', (event) => event.preventDefault());
  searchDialog.querySelector('.dialog-close').addEventListener('click', (event) => { event.preventDefault(); searchDialog.close(); });
  searchDialog.addEventListener('click', (event) => {
    if (event.target === searchDialog) searchDialog.close();
    if (event.target.closest('.search-result') && !external(event.target.closest('.search-result').getAttribute('href'))) searchDialog.close();
  });
  document.addEventListener('keydown', (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      if (searchDialog.open) searchDialog.close();
      else openSearch();
    }
    if (event.key === 'Escape') {
      closeMegaMenu();
      setMobileNav(false);
      languageMenu.hidden = true;
    }
  });
  renderSearchResults();

  const revealNodes = [...document.querySelectorAll('.reveal')];
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealNodes.forEach((node) => revealObserver.observe(node));
  } else {
    revealNodes.forEach((node) => node.classList.add('is-revealed'));
  }

  const countNodes = [...document.querySelectorAll('[data-count]')];
  function formatCount(node, value) {
    const decimals = Number(node.dataset.decimals || 0);
    const prefix = node.dataset.prefix || '';
    const suffix = node.dataset.suffix || '';
    const formatted = decimals ? value.toFixed(decimals) : Math.round(value).toLocaleString('en-US');
    return `${prefix}${formatted}${suffix}`;
  }

  countNodes.forEach((node) => {
    node.textContent = formatCount(node, Number(node.dataset.count));
  });

  const backToTop = document.querySelector('.back-to-top');
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('is-visible', window.scrollY > 680);
  }, { passive: true });
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  let toastTimer;
  function showToast(message) {
    const toast = document.querySelector('#toast');
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add('is-visible');
    toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 3600);
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => link.addEventListener('click', () => {
    closeMegaMenu();
    setMobileNav(false);
  }));
})();
