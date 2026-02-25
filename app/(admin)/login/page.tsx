import { Mail, Lock, ShieldCheck } from "lucide-react";

export default function LoginPage() {
  return (
    <section className="bg-[#231D10] p-4 md:py-36">
      <div className="max-w-sm p-10 mx-auto bg-[#12100A] rounded-2xl">
        <div className="my-2">
          <h5 className="font-bold font-work text-xl text-center text-white">
            Welcome Back
          </h5>
          <p className="font-work text-sm text-center text-[#CBB790]/70 my-2">
            Sign in to manage your kitchen and staff.
          </p>
        </div>
        <form className="my-8">
          <div className="flex flex-col py-2">
            <label className="text-white font-work text-sm">
              Email Address
            </label>
            <div className="flex items-center border border-[#36302a] my-2 p-3 rounded-2xl focus-within:border-[#F4AF25] transition">
              <Mail size={18} className="text-[#CBB790]/70 mr-2" />
              <input
                type="email"
                name="email"
                className="w-full font-work text-white outline-none placeholder:text-[#CBB790]/70 placeholder:font-work"
                placeholder="admin@restaurant.com"
              />
            </div>
          </div>
          <div className="flex flex-col py-2">
            <label className="text-white font-work text-sm">Password</label>
            <div className="flex items-center border border-[#36302a] my-2 p-3 rounded-2xl focus-within:border-[#F4AF25] transition">
              <Lock size={18} className="text-[#CBB790]/70 mr-2" />
              <input
                type="password"
                name="password"
                className="w-full outline-none font-work text-white placeholder:text-[#CBB790]/70"
                placeholder="••••••••"
              />
            </div>
          </div>
          <div className="flex gap-2 my-2">
            <input type="checkbox" className="border border-[#36302a]" />
            <p className="text-white font-work text-sm">
              Remember this session
            </p>
          </div>
          <div className="text-center">
            <input
              type="submit"
              className="w-full bg-[#F4AF25] hover:bg-[#e6a22b] py-4 rounded-2xl font-work text-md text-white"
              value="Sign In"
            />
          </div>
        </form>
        <div className="flex items-center gap-2 justify-center">
          <ShieldCheck size={16} className="text-[#CBB790]/70" />
          <p className="font-work font-bold text-sm text-[#CBB790]/70 my-2">
            Secure SSL Encryption
          </p>
        </div>
      </div>
    </section>
  );
}
