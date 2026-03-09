import Image from "next/image";

export default function Home() {
  const values = [
    {
      no: "01",
      title: "NFC 验真",
      desc: "每件产品拥有独立数字身份，通过移动端快速完成真伪识别与结果反馈。",
    },
    {
      no: "02",
      title: "数字所有权",
      desc: "围绕绑定、转赠与收藏关系形成可持续的数字记录，增强品牌与用户连接。",
    },
    {
      no: "03",
      title: "收藏成就",
      desc: "构建系列化、成长型的收藏体验，让产品从一次购买变成长期参与。",
    },
  ];

  const products = [
    { name: "LUMOON ORIGIN 01", series: "Origin Series", price: "¥69", image: "/images/lumoon1.png" },
    { name: "LUMOON CORE 02", series: "Core Series", price: "¥69", image: "/images/lumoon2.png" },
    { name: "LUMOON NEXUS 03", series: "Nexus Series", price: "¥69", image: "/images/lumoon3.png" },
  ];

  const stats = [
    { label: "累计验真次数", value: "120,000+" },
    { label: "注册用户", value: "36,000+" },
    { label: "产品系列", value: "18+" },
  ];

  return (
    <main className="min-h-screen pt-16">
      <section className="grid-glow relative flex min-h-[calc(100vh-4rem)] items-center">
        <div className="container-shell grid gap-14 py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-white/62 light:text-slate-700">
              LUMOON Official Website
            </p>

            <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-[-0.04em] text-white md:text-7xl xl:text-8xl light:text-slate-900">
              年轻化的
              <span className="brand-text"> 数字收藏品牌 </span>
              与可信认证体验
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/82 light:text-slate-700">
              以 NFC、数字证书与品牌身份系统为基础，连接实体产品、用户参与和长期收藏关系，
              打造兼具潮流感、科技感与沉浸感的下一代官网体验。
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/products"
                className="btn-base btn-primary h-12 px-7 text-sm"
              >
                探索产品
              </a>
              <a
                href="/verify"
                className="btn-base btn-primary h-12 px-7 text-sm"
              >
                立即验真
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="glass-card rounded-[2rem] p-5 hover-lift light:shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_center,rgba(110,231,255,0.15),transparent_35%),linear-gradient(135deg,#0f172a,#111827,#1e293b)] light:border-slate-200">
                <>
                  <Image
                    src="/images/lumoon3.png"
                    alt="LUMOON 首页主视觉"
                    fill
                    priority
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,16,30,0.06),rgba(5,16,30,0.3))]" />
                  <div className="absolute inset-x-0 bottom-0 p-8">
                    <div className="text-sm uppercase tracking-[0.28em] text-white/62">
                      Hero Visual
                    </div>
                    <div className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                      LUMOON 品牌主视觉
                    </div>
                  </div>
                </>
              </div>
            </div>

            <div className="glass-card absolute -bottom-8 -left-6 hidden rounded-3xl px-5 py-4 md:block light:border-slate-300 light:bg-white/96">
              <div className="text-xs uppercase tracking-[0.2em] text-white/55 light:text-slate-600">
                NFC Flow
              </div>
              <div className="mt-2 text-lg font-semibold text-white light:text-slate-900">
                碰一碰 · 即刻验证
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-white/48 light:text-slate-600">
              Why Lumoon
            </p>
            <h2 className="section-title mt-4 text-white light:text-slate-950">品牌价值主张</h2>
            <p className="section-desc mx-auto mt-6 max-w-2xl">
              从“防伪验证”升级到“数字关系构建”，让每一件产品都承载更长期的品牌互动与收藏意义。
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {values.map((item) => (
              <div
                key={item.title}
                className="glass-card hover-lift rounded-[1.75rem] p-8"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-sm tracking-[0.25em] text-white/48 light:text-slate-500">
                    {item.no}
                  </span>
                  <span className="card-orb h-10 w-10 rounded-full light:border-slate-200 light:bg-slate-100" />
                </div>
                <h3 className="text-2xl font-semibold text-white light:text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-5 leading-8 text-white/68 light:text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="container-shell">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-white/48 light:text-slate-600">
                Products
              </p>
              <h2 className="section-title mt-4 text-white light:text-slate-950">精选产品展示</h2>
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
                key={product.name}
                className="group glass-card hover-lift overflow-hidden rounded-[1.75rem]"
              >
                <div className="relative h-72 overflow-hidden bg-[linear-gradient(135deg,#111827,#0f172a)]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,16,30,0.04),rgba(5,16,30,0.16))]" />
                </div>

                <div className="p-6">
                  <p className="text-sm text-white/52 light:text-slate-600">{product.series}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white light:text-slate-950">
                    {product.name}
                  </h3>

                  <div className="mt-7 flex items-center justify-between">
                    <span className="text-lg font-medium text-white light:text-slate-900">
                      {product.price}
                    </span>
                    <a
                      href="/products"
                      className="text-sm text-white/65 transition hover:text-white light:text-slate-700 light:hover:text-slate-950"
                    >
                      查看详情
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
              <p className="text-sm uppercase tracking-[0.25em] text-white/48 light:text-slate-600">
              Technology
            </p>
            <h2 className="section-title mt-4 text-white light:text-slate-950">可信技术底层</h2>
            <p className="section-desc mt-6">
              通过 NFC 芯片、数字证书、身份校验与记录机制，
              让每一件实体收藏品都具备唯一、可验证、可追踪的数字身份。
            </p>

            <div className="mt-8 space-y-4">
              <div className="glass-card hover-lift rounded-2xl p-5">
                <h3 className="text-lg font-semibold text-white light:text-slate-950">碰一碰验证</h3>
                <p className="mt-2 leading-7 text-white/68 light:text-slate-600">
                  使用手机快速读取产品标签信息，获得真实状态与关联内容。
                </p>
              </div>
              <div className="glass-card hover-lift rounded-2xl p-5">
                <h3 className="text-lg font-semibold text-white light:text-slate-950">数字证书记录</h3>
                <p className="mt-2 leading-7 text-white/68 light:text-slate-600">
                  对绑定关系、流转状态与收藏历史进行统一数字记录。
                </p>
              </div>
              <div className="glass-card hover-lift rounded-2xl p-5">
                <h3 className="text-lg font-semibold text-white light:text-slate-950">品牌长期连接</h3>
                <p className="mt-2 leading-7 text-white/68 light:text-slate-600">
                  让官网不只是展示窗口，更成为用户参与品牌生态的入口。
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-[2rem] p-6">
            <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-8 light:border-slate-200">
              <p className="text-sm uppercase tracking-[0.25em] text-white/48 light:text-slate-600">
                NFC Animation
              </p>
              <h3 className="mt-4 text-3xl font-semibold text-white light:text-slate-950">
                NFC 验证动画展示位
              </h3>
              <p className="mt-5 max-w-lg leading-8 text-white/68 light:text-slate-600">
                后续可接入滚动触发动画、GSAP 视差效果或 React Three Fiber 交互式展示。
              </p>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {["STEP 01", "STEP 02", "STEP 03"].map((step, index) => (
                  <div
                    key={step}
                    className="rounded-2xl border border-white/12 bg-white/8 p-5 light:border-slate-200 light:bg-slate-50"
                  >
                    <div className="text-xs tracking-[0.2em] text-white/50 light:text-slate-600">
                      {step}
                    </div>
                    <div className="mt-3 text-lg font-semibold text-white light:text-slate-950">
                      {index === 0 && "手机靠近产品"}
                      {index === 1 && "读取身份信息"}
                      {index === 2 && "输出数字证书"}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="/technology"
                className="btn-base btn-secondary mt-8 h-11 px-5 text-sm font-medium"
              >
                了解更多技术 →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-white/48 light:text-slate-600">
              Data
            </p>
            <h2 className="section-title mt-4 text-white light:text-slate-950">平台数据成就</h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {stats.map((item) => (
              <div
                key={item.label}
                className="glass-card hover-lift rounded-[1.75rem] p-8 text-center"
              >
                <div className="text-4xl font-bold text-white md:text-5xl light:text-slate-950">
                  {item.value}
                </div>
                <div className="mt-4 text-white/72 light:text-slate-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-28">
        <div className="container-shell">
          <div className="glass-card rounded-[2rem] px-8 py-14 md:px-14">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-white/48 light:text-slate-600">
                  Contact
                </p>
                <h2 className="section-title mt-4 text-white light:text-slate-950">
                  与 LUMOON 建立连接
                </h2>
                <p className="section-desc mt-6 max-w-2xl">
                  无论你是消费者、收藏爱好者，还是潜在合作伙伴，都可以通过官网了解产品、技术与品牌动态。
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
                <a
                  href="/contact"
                  className="btn-base btn-primary h-12 px-6 text-sm"
                >
                  联系我们
                </a>
                <a
                  href="/download"
                className="btn-base btn-primary h-12 px-6 text-sm"
                >
                  下载 App
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


