import { Mail, Phone, Globe2 } from 'lucide-react';

export default function ContactFooter() {
  return (
    <section id="contact" className="pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-white to-amber-50 ring-1 ring-neutral-200 overflow-hidden">
          <div className="grid gap-10 lg:grid-cols-2 p-8 sm:p-12">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">
                Institutional Partnership Inquiries
              </h3>
              <p className="mt-3 text-neutral-600 max-w-prose">
                For trading lines, structured programs, or facility access, contact our Swiss team for a
                confidential briefing.
              </p>

              <div className="mt-8 space-y-3">
                <a
                  href="mailto:partners@sungrain.ch"
                  className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-3 text-white hover:bg-neutral-800"
                >
                  <Mail size={18} /> partners@sungrain.ch
                </a>
                <div className="flex items-center gap-3 text-neutral-700">
                  <Phone size={18} /> +41 (0) 44 000 00 00
                </div>
                <div className="flex items-center gap-3 text-neutral-700">
                  <Globe2 size={18} /> Zurich, Switzerland
                </div>
              </div>
            </div>

            <form
              className="bg-white rounded-2xl ring-1 ring-neutral-200 p-6 sm:p-8 grid grid-cols-1 gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label className="text-sm text-neutral-700">Full Name</label>
                <input
                  type="text"
                  required
                  className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
                  placeholder="First Last"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-neutral-700">Work Email</label>
                  <input
                    type="email"
                    required
                    className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
                    placeholder="name@company.com"
                  />
                </div>
                <div>
                  <label className="text-sm text-neutral-700">Company</label>
                  <input
                    type="text"
                    required
                    className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
                    placeholder="Company Name"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-neutral-700">Message</label>
                <textarea
                  rows={4}
                  className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
                  placeholder="Share objectives, volumes, timelines"
                />
              </div>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-amber-500 px-5 py-3 text-white shadow-sm hover:bg-amber-600"
              >
                Send Request
              </button>
              <p className="text-xs text-neutral-500">
                By submitting, you agree to be contacted by SUNGRAIN CH. We respect institutional privacy.
              </p>
            </form>
          </div>
        </div>

        <footer className="mt-12 py-8 border-t border-neutral-200 text-sm text-neutral-600 flex flex-col sm:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} SUNGRAIN CH. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-3 sm:mt-0">
            <a href="#capabilities" className="hover:text-neutral-900">Capabilities</a>
            <a href="#network" className="hover:text-neutral-900">Network</a>
            <a href="#top" className="hover:text-neutral-900">Back to top</a>
          </div>
        </footer>
      </div>
    </section>
  );
}
