import Image from "next/image";

const valueProps = [
  {
    no: "01",
    title: "官方认证",
    desc: "帮助用户更安心地确认产品信息与品牌归属。",
  },
  {
    no: "02",
    title: "数字确权",
    desc: "为产品建立清晰可信的数字身份，让每一次收藏更有依据。",
  },
  {
    no: "03",
    title: "收藏记录",
    desc: "围绕收藏关系、版本信息与品牌互动，形成更完整的长期体验。",
  },
];

const products = [
  {
    series: "ORIGIN 系列",
    desc: "从角色诞生的第一刻开始，记录每一次相遇。",
    image: "/images/lumoon1.png",
  },
  {
    series: "CORE 系列",
    desc: "以陪伴感与辨识度为核心，打造日常收藏中的情绪连接。",
    image: "/images/lumoon2.png",
  },
  {
    series: "NEXUS 系列",
    desc: "连接产品、用户与品牌互动的特别系列。",
    image: "/images/lumoon3.png",
  },
];

const rightsPoints = [
  "产品身份更清晰",
  "收藏信息更可信",
  "限量信息更明确",
  "品牌服务更持续",
];

const steps = [
  "了解产品与系列信息",
  "完成收藏并确认产品身份",
  "获得对应的收藏记录与品牌服务入口",
  "持续参与新品、活动与系列更新",
];

const newsItems = [
  {
    title: "LUMOON 新系列发布预告",
    desc: "关于新角色设定、首发时间与发售方式的最新信息。",
  },
  {
    title: "LUMOON 收藏服务升级说明",
    desc: "关于用户体验、收藏记录与品牌服务优化的说明。",
  },
  {
    title: "LUMOON 线下活动回顾",
    desc: "记录品牌展出、用户互动与现场体验的精彩内容。",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      <section id="home" className="grid-glow relative flex min-h-[calc(100vh-4rem)] scroll-mt-24 items-center">
        <div className="container-shell grid gap-14 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-white/62 light:text-slate-700">
              LUMOON
            </p>

            <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-[-0.04em] text-white md:text-7xl xl:text-8xl light:text-slate-900">
              让每一件潮玩拥有
              <span className="brand-text"> 可验证的数字身份 </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/82 light:text-slate-700">
              LUMOON 是一个融合原创设计、实体收藏与数字确权体验的潮玩品牌。
              我们希望每一件作品都不止于被购买，更能被确认、被记录、被长期珍藏。
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#products" className="btn-base btn-primary h-12 px-7 text-sm">
                探索产品
              </a>
              <a href="#brand-story" className="btn-base btn-primary btn-darkglass h-12 px-7 text-sm font-medium">
                了解更多
              </a>
            </div>

            <p className="mt-8 text-sm uppercase tracking-[0.24em] text-white/52 light:text-slate-600">
              Original Toys · Verified Identity · Long-term Collecting Experience
            </p>
          </div>

          <div className="relative">
            <div className="glass-card rounded-[2rem] p-5 hover-lift light:shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_center,rgba(110,231,255,0.15),transparent_35%),linear-gradient(135deg,#0f172a,#111827,#1e293b)] light:border-slate-200">
                <Image
                  src="/images/lumoon3.png"
                  alt="LUMOON 首页主视觉"
                  fill
                  priority
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,16,30,0.06),rgba(5,16,30,0.3))]" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <div className="text-sm uppercase tracking-[0.28em] text-white/62">LUMOON</div>
                  <div className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                    让收藏更真实，也更值得被记住
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-title text-white light:text-slate-950">
              不止于拥有，更让收藏被认真记录
            </h2>
            <p className="section-desc mx-auto mt-6 max-w-2xl">
              从产品发布到用户收藏，我们希望每一件潮玩都拥有更完整的身份表达与更长期的品牌连接。
              收藏不只是当下的喜爱，也应该是一种可以被确认、被留存的体验。
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {valueProps.map((item) => (
              <div key={item.title} className="glass-card hover-lift rounded-[1.75rem] p-8">
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-sm tracking-[0.25em] text-white/48 light:text-slate-500">
                    {item.no}
                  </span>
                  <span className="card-orb h-10 w-10 rounded-full light:border-slate-200 light:bg-slate-100" />
                </div>
                <h3 className="text-2xl font-semibold text-white light:text-slate-950">{item.title}</h3>
                <p className="mt-5 leading-8 text-white/68 light:text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="scroll-mt-24 py-28">
        <div className="container-shell">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-white/48 light:text-slate-600">
                PRODUCTS
              </p>
              <h2 className="section-title mt-4 text-white light:text-slate-950">精选系列</h2>
              <p className="section-desc mt-6 max-w-2xl">
                围绕原创角色、情绪表达与收藏体验，LUMOON 持续推出盲盒、毛绒与特别款系列，
                让每一个角色都拥有更完整的世界观与更长的生命力。
              </p>
            </div>
            <a
              href="/products"
              className="text-sm text-white/65 transition hover:text-white light:text-slate-700 light:hover:text-slate-950"
            >
              查看全部产品 →
            </a>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.series}
                className="group glass-card hover-lift overflow-hidden rounded-[1.75rem]"
              >
                <div className="relative h-72 overflow-hidden bg-[linear-gradient(135deg,#111827,#0f172a)]">
                  <Image
                    src={product.image}
                    alt={product.series}
                    fill
                    className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,16,30,0.04),rgba(5,16,30,0.16))]" />
                </div>

                <div className="p-6">
                  <p className="text-sm text-white/52 light:text-slate-600">{product.series}</p>
                  <p className="mt-4 leading-8 text-white/68 light:text-slate-600">{product.desc}</p>
                  <a
                    href="/products"
                    className="mt-7 inline-flex text-sm text-white/65 transition hover:text-white light:text-slate-700 light:hover:text-slate-950"
                  >
                    查看详情
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="digital-rights" className="scroll-mt-24 py-28">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <h2 className="section-title text-white light:text-slate-950">
              为什么收藏需要被确认与记录？
            </h2>
            <div className="section-desc mt-6 space-y-5">
              <p>
                一件真正值得收藏的作品，不只是有设计感和工艺感，也应该拥有清晰、可信、可长期留存的身份记录。
              </p>
              <p>
                LUMOON 希望通过数字确权与收藏记录服务，帮助用户更安心地确认产品信息，
                也让限量版本、收藏关系与品牌互动拥有更完整的呈现方式。
              </p>
            </div>
          </div>

          <div className="glass-card rounded-[2rem] p-6">
            <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-8 light:border-slate-200">
              <div className="grid gap-4 sm:grid-cols-2">
                {rightsPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl border border-white/12 bg-white/8 p-5 text-lg font-semibold text-white light:border-slate-200 light:bg-slate-50 light:text-slate-950"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-title text-white light:text-slate-950">从收藏开始，到长期陪伴</h2>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step} className="glass-card hover-lift rounded-[1.75rem] p-8">
                <div className="text-xs tracking-[0.24em] text-white/50 light:text-slate-600">
                  STEP 0{index + 1}
                </div>
                <div className="mt-5 text-xl font-semibold text-white light:text-slate-950">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="brand-story" className="scroll-mt-24 py-28">
        <div className="container-shell">
          <div className="glass-card rounded-[2rem] px-8 py-14 md:px-14">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <h2 className="section-title text-white light:text-slate-950">
                  把设计、陪伴与收藏感做成长期发生的品牌
                </h2>
                <div className="section-desc mt-6 space-y-5 max-w-2xl">
                  <p>
                    LUMOON 相信，一件好的潮玩不只是被看见，更应该被珍惜、被记住、被持续参与。
                  </p>
                  <p>
                    我们用原创设计表达角色个性，也用更完整的收藏记录方式让每一次相遇更有意义。
                  </p>
                </div>
                <a href="#contact" className="btn-base btn-secondary mt-8 h-11 px-5 text-sm font-medium">
                  了解品牌故事
                </a>
              </div>

              <div className="relative min-h-[320px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,#111827,#0f172a)] light:border-slate-200">
                <Image
                  src="/images/lumoon2.png"
                  alt="LUMOON 品牌故事预告"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,16,30,0.08),rgba(5,16,30,0.36))]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="news" className="scroll-mt-24 py-28">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-title text-white light:text-slate-950">最新动态</h2>
            <p className="section-desc mx-auto mt-6 max-w-2xl">
              在这里了解新品发布、系列更新、展会活动与品牌合作消息。
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {newsItems.map((item) => (
              <article key={item.title} className="glass-card hover-lift rounded-[1.75rem] p-8">
                <h3 className="text-2xl font-semibold text-white light:text-slate-950">{item.title}</h3>
                <p className="mt-5 leading-8 text-white/68 light:text-slate-600">{item.desc}</p>
                <a
                  href="#contact"
                  className="mt-7 inline-flex text-sm text-white/65 transition hover:text-white light:text-slate-700 light:hover:text-slate-950"
                >
                  阅读全文
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 pb-28">
        <div className="container-shell">
          <div className="glass-card rounded-[2rem] px-8 py-14 md:px-14">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="section-title text-white light:text-slate-950">与 LUMOON 建立连接</h2>
                <p className="section-desc mt-6 max-w-2xl">
                  无论你是消费者、收藏爱好者，还是潜在合作伙伴，都可以通过官网了解产品、品牌动态与合作信息。
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
                <a href="#contact" className="btn-base btn-primary h-12 px-6 text-sm">
                  联系我们
                </a>
                <a href="#news" className="btn-base btn-primary btn-darkglass h-12 px-6 text-sm font-medium">
                  关注品牌动态
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
