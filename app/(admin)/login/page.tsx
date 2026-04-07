import { authActionHandler } from "@/actions/auth";
import { Mail, Lock, ShieldCheck } from "lucide-react";

export default function LoginPage() {
  return (
    <section className="w-full bg-dark-light p-4 md:py-36">
      <div className="max-w-sm p-10 mx-auto bg-[#12100A] rounded-2xl">
        <div className="my-2">
          <h5 className="font-bold text-xl text-center text-white">
            Welcome Back
          </h5>
          <p className=" text-sm text-center text-light/70 my-2">
            Sign in to manage your kitchen and staff.
          </p>
        </div>
        <form className="my-8" action={authActionHandler}>
          <div className="flex flex-col py-2">
            <label className="text-white text-sm">Email Address</label>
            <div className="flex items-center border border-[#36302a] my-2 p-3 rounded-2xl focus-within:border-[#F4AF25] transition">
              <Mail size={18} className="text-light/70 mr-2" />
              <input
                type="email"
                name="email"
                className="w-full text-white outline-none placeholder:text-light/70 placeholder:font-work"
                placeholder="admin@restaurant.com"
              />
            </div>
          </div>
          <div className="flex flex-col py-2">
            <label className="text-white text-sm">Password</label>
            <div className="flex items-center border border-[#36302a] my-2 p-3 rounded-2xl focus-within:border-[#F4AF25] transition">
              <Lock size={18} className="text-light/70 mr-2" />
              <input
                type="password"
                name="password"
                className="w-full outline-none text-white placeholder:text-light/70"
                placeholder="••••••••"
              />
            </div>
          </div>
          <div className="flex gap-2 my-2">
            <input type="checkbox" className="border border-[#36302a]" />
            <p className="text-white text-sm">Remember this session</p>
          </div>
          <div className="text-center">
            <input
              type="submit"
              className="w-full bg-primary hover:bg-[#e6a22b] py-4 rounded-2xl text-md text-white"
              value="Sign In"
            />
          </div>
        </form>
        <div className="flex items-center gap-2 justify-center">
          <ShieldCheck size={16} className="text-light/70" />
          <p className=" font-bold text-sm text-light/70 my-2">
            Secure SSL Encryption
          </p>
        </div>
      </div>
    </section>
  );
}
