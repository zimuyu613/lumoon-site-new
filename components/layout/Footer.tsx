import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-transparent light:border-slate-300/70">
      <div className="container-shell py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <h3 className="text-lg font-semibold text-white light:text-slate-950">LUMOON</h3>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/68 light:text-slate-600">
              以 NFC 与数字身份技术为核心，构建年轻化、科技感与沉浸式兼具的品牌收藏体验。
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm text-white/64 light:text-slate-600">
            <Link href="/privacy" className="transition hover:text-white light:hover:text-slate-950">
              隐私政策
            </Link>
            <Link href="/terms" className="transition hover:text-white light:hover:text-slate-950">
              用户协议
            </Link>
            <Link href="/contact" className="transition hover:text-white light:hover:text-slate-950">
              联系我们
            </Link>
          </div>

          <div className="text-sm text-white/64 light:text-slate-600">
            <p>微信公众号 / 小程序码</p>
            <p className="mt-3">商务合作：hello@lumoon.com</p>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-sm text-white/42 light:border-slate-300/70 light:text-slate-500">
          © 2026 LUMOON. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
