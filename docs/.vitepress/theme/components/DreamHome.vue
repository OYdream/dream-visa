<script setup lang="ts">
import { withBase } from 'vitepress'

const steps = [
  { number: '01', title: '选择目的地', detail: '先确定主要停留国家，再判断应该向哪里申请。', icon: 'pin' },
  { number: '02', title: '确认签证类型', detail: '根据旅游、探亲、商务或学习目的找到正确入口。', icon: 'passport' },
  { number: '03', title: '准备申请材料', detail: '照着清单逐项核对，规格、时间和常见错误一起看。', icon: 'luggage' },
  { number: '04', title: '预约递交', detail: '完成填表、预约和现场递交，之后安心等待结果。', icon: 'plane' },
]

const destinations = [
  { zh: '申根区', en: 'Schengen Area', note: '29 国短期签证', href: '/encyclopedia/schengen/tourist', active: true },
  { zh: '美国', en: 'United States', note: 'B1/B2 签证', active: false },
  { zh: '英国', en: 'United Kingdom', note: 'Standard Visitor', active: false },
  { zh: '日本', en: 'Japan', note: '旅游签证', active: false },
  { zh: '加拿大', en: 'Canada', note: '访问签证', active: false },
  { zh: '澳大利亚', en: 'Australia', note: '访客签证', active: false },
  { zh: '新西兰', en: 'New Zealand', note: '访客签证', active: false },
  { zh: '韩国', en: 'South Korea', note: '旅游签证', active: false },
]
</script>

<template>
  <main class="dream-home">
    <section class="dream-hero" aria-labelledby="dream-hero-title">
      <div class="dream-hero__copy">
        <p class="dream-eyebrow">签证自己办，也可以很清楚</p>
        <p class="dream-wordmark">Dream Visa</p>
        <h1 id="dream-hero-title"><span>把复杂的签证，</span><span>拆成一步一步</span></h1>
        <p class="dream-hero__lead">
          欢迎来到 Dream Visa。这里为想了解海外签证、又被流程和材料吓到的人，整理清楚、可靠、可执行的 DIY 指南。从选择目的地、准备材料，到递签与取回护照，跟着步骤走就好。
        </p>
        <div class="dream-hero__actions">
          <a class="dream-button dream-button--primary" :href="withBase('/guide/process')">
            从签证入门开始
            <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11m-4-4 4 4-4 4" /></svg>
          </a>
          <a class="dream-button dream-button--text" href="#destinations">按目的地查找</a>
        </div>
        <p class="dream-trust">
          <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m5 10 3 3 7-7" /></svg>
          免费查阅<span>·</span>持续更新<span>·</span>以使领馆最新要求为准
        </p>
      </div>

      <figure class="dream-hero__visual">
        <img :src="withBase('/hero-travel.webp')" alt="一家人在机场带着行李准备开启海外旅程" width="1600" height="1000" fetchpriority="high" />
        <div class="dream-route" aria-hidden="true">
          <svg viewBox="0 0 360 110" preserveAspectRatio="none">
            <path class="dream-route__path" d="M8 86 C92 12 223 121 350 28" />
            <circle cx="8" cy="86" r="5" />
            <g class="dream-route__plane" transform="translate(210 72) rotate(-18)">
              <path d="M0 0 24-8l-8 10 8 10L0 4l-9 6-4-3 8-9-8-9 4-3z" />
            </g>
          </svg>
        </div>
        <figcaption><span>下一站</span><strong>从准备充分开始</strong></figcaption>
        <div class="dream-transport" aria-label="支持飞机、火车、汽车和轮船等出行方式">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m2 16 20-8-2-2-8 3-5-5-2 1 3 6-4 2z" /></svg>
          <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="3" width="14" height="15" rx="4"/><path d="M8 21l2-3m6 3-2-3M8 8h8m-9 6h.01M17 14h.01" /></svg>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 17h14l-1-6-2-3H8l-2 3-1 6zM7 17v2m10-2v2M7 13h10"/><circle cx="8" cy="16" r="1"/><circle cx="16" cy="16" r="1"/></svg>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 15 3 5h12l3-5-9 3-9-3zM7 15V8h10v7M10 8V4h4v4" /></svg>
        </div>
      </figure>
    </section>

    <section class="dream-section dream-journey" aria-labelledby="journey-title">
      <header class="dream-section__header">
        <p class="dream-kicker">DIY 路线</p>
        <h2 id="journey-title">第一次办签证，从这四步开始</h2>
        <p>先看懂全程，再逐步准备。每一个环节都有对应的说明和清单。</p>
      </header>
      <ol class="dream-steps">
        <li v-for="step in steps" :key="step.number" class="dream-step">
          <div class="dream-step__icon" aria-hidden="true">
            <svg v-if="step.icon === 'pin'" viewBox="0 0 24 24"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>
            <svg v-else-if="step.icon === 'passport'" viewBox="0 0 24 24"><rect x="5" y="3" width="14" height="18" rx="2"/><circle cx="12" cy="11" r="3"/><path d="M9 11h6m-3-3v6M8 17h8"/></svg>
            <svg v-else-if="step.icon === 'luggage'" viewBox="0 0 24 24"><rect x="5" y="7" width="14" height="13" rx="2"/><path d="M9 7V4h6v3M9 11v5m6-5v5M8 22v-2m8 2v-2"/></svg>
            <svg v-else viewBox="0 0 24 24"><path d="m2 16 20-8-2-2-8 3-5-5-2 1 3 6-4 2z"/></svg>
          </div>
          <span class="dream-step__number">{{ step.number }}</span>
          <h3>{{ step.title }}</h3>
          <p>{{ step.detail }}</p>
        </li>
      </ol>
    </section>

    <section id="destinations" class="dream-section dream-destinations" aria-labelledby="destinations-title">
      <header class="dream-section__header dream-section__header--row">
        <div><p class="dream-kicker">按目的地查找</p><h2 id="destinations-title">你想去哪里？</h2></div>
        <p>从目的地进入对应签证类型。资料会按照同一套结构持续补充。</p>
      </header>
      <ul class="dream-destination-list">
        <li v-for="(destination, index) in destinations" :key="destination.en">
          <a v-if="destination.active" :href="withBase(destination.href ?? '/')" class="dream-destination">
            <span class="dream-destination__index">{{ String(index + 1).padStart(2, '0') }}</span>
            <span class="dream-destination__name"><strong>{{ destination.zh }}</strong><span>{{ destination.en }}</span></span>
            <span class="dream-destination__note">{{ destination.note }}</span>
            <span class="dream-destination__arrow" aria-hidden="true">↗</span>
          </a>
          <div v-else class="dream-destination dream-destination--soon" aria-disabled="true">
            <span class="dream-destination__index">{{ String(index + 1).padStart(2, '0') }}</span>
            <span class="dream-destination__name"><strong>{{ destination.zh }}</strong><span>{{ destination.en }}</span></span>
            <span class="dream-destination__note">{{ destination.note }}</span>
            <span class="dream-soon">筹备中</span>
          </div>
        </li>
      </ul>
    </section>

    <section class="dream-start" aria-labelledby="start-title">
      <div class="dream-start__mark" aria-hidden="true">
        <svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="24"/><path d="M8 32h48M32 8c8 7 12 15 12 24S40 49 32 56c-8-7-12-15-12-24S24 15 32 8Z"/><path class="dream-start__flight" d="M17 43c9-20 20-24 32-22"/></svg>
      </div>
      <div>
        <p class="dream-kicker">准备出发</p>
        <h2 id="start-title">先把全流程看一遍，再开始整理材料</h2>
        <p>知道每一步为什么做，会比盲目收集文件更安心，也更不容易遗漏。</p>
      </div>
      <div class="dream-start__actions">
        <a class="dream-button dream-button--primary" :href="withBase('/guide/process')">查看递签全流程</a>
        <a class="dream-button dream-button--light" :href="withBase('/checklist/tourist')">打开材料清单</a>
      </div>
    </section>

    <footer class="dream-home-footer">
      <span>Dream Visa · 免费开放的签证 DIY 知识站</span>
      <span>内容仅供参考，请以使领馆和签证中心最新要求为准</span>
    </footer>
  </main>
</template>
