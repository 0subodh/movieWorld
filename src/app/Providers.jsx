"use client";
import { ThemeProvider } from "next-themes";

const Providers = () => {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="text-gray-700 dark:text-gray-200 min-h-screen select-none">
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Providers;
