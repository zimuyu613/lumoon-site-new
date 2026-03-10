export default function AboutPage() {
  const identityItems = [
    "产品身份确认",
    "限量信息留存",
    "收藏记录整理",
    "品牌活动连接",
    "长期用户服务升级",
  ];

  return (
    <main className="min-h-screen pt-16">
      <section className="grid-glow relative overflow-hidden py-24 md:py-32">
        <div className="container-shell">
          <div className="mx-auto max-w-4xl">
            <p className="text-sm uppercase tracking-[0.32em] text-white/52 light:text-slate-600">
              About Lumoon
            </p>
            <h1 className="section-title mt-6 text-white light:text-slate-950">关于 LUMOON</h1>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-white/78 light:text-slate-700">
              一个把原创设计、情绪陪伴与收藏体验结合在一起的潮玩品牌
            </p>
            <p className="section-desc mt-8 max-w-3xl">
              LUMOON 致力于打造兼具设计感、识别度与长期陪伴价值的原创潮玩产品。
              我们相信，潮玩不仅是视觉表达，也是一种情绪连接与个人收藏方式。
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-shell grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="glass-card rounded-[2rem] p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.24em] text-white/48 light:text-slate-600">
              Brand Philosophy
            </p>
            <h2 className="mt-5 text-3xl font-semibold text-white light:text-slate-950">
              让收藏拥有更长的生命力
            </h2>
            <div className="section-desc mt-6 space-y-5">
              <p>
                从角色设定到产品工艺，从首次相遇到长期收藏，LUMOON 希望让每一件产品都不仅仅停留在发售时刻，
                而是在用户的生活中持续产生连接。
              </p>
            </div>
          </div>

          <div className="glass-card rounded-[2rem] p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.24em] text-white/48 light:text-slate-600">
              Keywords
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["原创角色", "收藏体验", "情绪陪伴", "官方认证", "数字确权"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/12 bg-white/6 px-5 py-3 text-sm text-white light:border-slate-200 light:bg-slate-50 light:text-slate-900"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-shell">
          <div className="glass-card rounded-[2rem] p-8 md:p-12">
            <p className="text-sm uppercase tracking-[0.24em] text-white/48 light:text-slate-600">
              Design Direction
            </p>
            <h2 className="mt-5 text-3xl font-semibold text-white light:text-slate-950">
              我们如何做产品？
            </h2>
            <p className="section-desc mt-6 max-w-4xl">
              我们以原创角色世界观为起点，围绕造型、材质、细节与触感进行产品开发，
              兼顾展示性、收藏性与日常陪伴属性，让每一个系列都拥有鲜明个性与长期延展能力。
            </p>
          </div>
        </div>
      </section>

      <section className="pb-28">
        <div className="container-shell">
          <div className="glass-card rounded-[2rem] p-8 md:p-12">
            <p className="text-sm uppercase tracking-[0.24em] text-white/48 light:text-slate-600">
              Verified Identity
            </p>
            <h2 className="mt-5 text-3xl font-semibold text-white light:text-slate-950">
              为什么要重视数字确权？
            </h2>
            <div className="section-desc mt-6 space-y-5 max-w-4xl">
              <p>
                对 LUMOON 来说，数字确权不是复杂的技术概念，而是一种更认真对待收藏的方式。
              </p>
              <p>它帮助我们更好地完成：</p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {identityItems.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/12 bg-white/6 p-5 text-lg font-medium text-white light:border-slate-200 light:bg-slate-50 light:text-slate-950"
                >
                  {item}
                </div>
              ))}
            </div>

            <p className="mt-10 text-lg font-medium text-white light:text-slate-950">
              让每一件潮玩被看见，也被认真对待。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}