"use client";

import { myProfileStore } from "@/store/my-profile.store";
import { errorFormatter } from "@/utils/general.utils";
import { inputClasses } from "@/utils/input-classes.utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
});

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const validate = useMemo(() => {
    const validData = schema.safeParse(form);
    const _errors = errorFormatter(validData);
    return {
      success: validData.success,
      errors: _errors,
    };
  }, [form]);

  const errors = validate.errors;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate.success) {
      return;
    }

    try {
      await myProfileStore.doLogin(form, "admin");
      router.push("/protected/");
    } catch (error) {}
  };

  return (
    <form>
      <div className="space-y-5">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
            Email<span className="text-error-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="info@gmail.com"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            vakue={form.email}
            className={inputClasses.getInputClasses(!!errors?.email)}
          />
        </div>
        {/* <!-- Password --> */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
            Password<span className="text-error-500">*</span>
          </label>
          <div className="relative">
            <input
              placeholder="Enter your password"
              type={showPassword ? "text" : "password"}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              vakue={form.password}
              className={inputClasses.getInputClasses(!!errors?.password)}
            />
            <span className="absolute z-30 text-gray-500 -translate-y-1/2 cursor-pointer right-4 top-1/2 dark:text-gray-400">
              <Image
                src={
                  showPassword ? "/icons/eye-open.svg" : "/icons/eye-close.svg"
                }
                alt="Eye icon"
                width={20}
                height={20}
                onClick={() => setShowPassword(!showPassword)}
              />
            </span>
          </div>
        </div>

        {/* <!-- Button --> */}
        <div>
          <button
            onClick={handleSubmit}
            className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white transition rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600"
          >
            Sign In
          </button>
        </div>
      </div>
    </form>
  );
}
