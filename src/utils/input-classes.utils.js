class InputClassesUtils {
  input = {
    base: "ark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800",
    error:
      "bg-red-50 border border-red-500 text-red-900 placeholder-red-400 focus:border-red-300 dark:bg-red-900 dark:border-red-700 dark:text-red-900 dark:placeholder-red-400 dark:focus:border-red-300",
    success:
      "bg-green-50 border border-green-500 text-green-900 placeholder-green-400 focus:border-green-300 dark:bg-green-900 dark:border-green-700 dark:text-green-900 dark:placeholder-green-400 dark:focus:border-green-300",
  };

  getInputClasses(error) {
    if (error) {
      return this.input.error + " " + this.input.base;
    }

    return this.input.base;
  }
}

export const inputClasses = new InputClassesUtils();
