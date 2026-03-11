"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, UserCircle, Search, Settings, LogOut, ChevronDown, Command, Clock, TrendingUp, Moon, Sun } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { theme, setTheme } = useTheme();

  const recentSearches = ["Dashboard", "User settings", "Analytics report", "Project timeline"];
  const trendingSearches = ["New users", "Revenue", "Performance", "Security"];

  return (
    <header className="h-16 border-b border-slate-200/60 dark:border-slate-700/60 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-30 shadow-sm">
      {/* Enhanced Search Section */}
      <div className="relative w-full max-w-lg hidden lg:block">
        <AnimatePresence>
          {isSearchFocused && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xl z-50"
            >
              {/* Search Header */}
              <div className="p-3 border-b border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <Command size={14} />
                  <span>Press</span>
                  <kbd className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded text-xs font-mono">⌘K</kbd>
                  <span>to search</span>
                </div>
              </div>

              {/* Search Results */}
              <div className="max-h-80 overflow-y-auto">
                {/* Recent Searches */}
                {searchQuery === "" && (
                  <div className="p-3">
                    <div className="flex items-center gap-2 mb-3">
                      <Clock size={14} className="text-slate-400 dark:text-slate-500" />
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Recent</span>
                    </div>
                    <div className="space-y-1">
                      {recentSearches.map((search, index) => (
                        <motion.button
                          key={search}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors text-left"
                        >
                          <Search size={16} className="text-slate-400 dark:text-slate-500" />
                          <span>{search}</span>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Trending Searches */}
                {searchQuery === "" && (
                  <div className="p-3 border-t border-slate-100 dark:border-slate-700">
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp size={14} className="text-slate-400 dark:text-slate-500" />
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Trending</span>
                    </div>
                    <div className="space-y-1">
                      {trendingSearches.map((search, index) => (
                        <motion.button
                          key={search}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 + 0.2 }}
                          className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors text-left"
                        >
                          <TrendingUp size={16} className="text-blue-500" />
                          <span>{search}</span>
                          <span className="ml-auto text-xs text-slate-400 dark:text-slate-500">+{Math.floor(Math.random() * 20)}%</span>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Search Results for Query */}
                {searchQuery !== "" && (
                  <div className="p-3">
                    <div className="text-xs text-slate-500 dark:text-slate-400 mb-3">Searching for "{searchQuery}"...</div>
                    <div className="space-y-1">
                      <div className="px-3 py-2 text-sm text-slate-500 dark:text-slate-400">No results found</div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative">
          <Search className={cn(
            "absolute left-3 top-1/2 -translate-y-1/2 transition-colors",
            isSearchFocused ? "text-blue-500" : "text-slate-400 dark:text-slate-500"
          )} size={18} />
          <Input 
            placeholder="Search anything... (⌘K)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
            className={cn(
              "pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg transition-all duration-200",
              "focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white dark:focus:bg-slate-700 text-slate-900 dark:text-slate-100",
              isSearchFocused && "ring-2 ring-blue-500 border-blue-500 bg-white dark:bg-slate-700"
            )}
          />
          {searchQuery && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          )}
        </div>
      </div>

      {/* Mobile Search */}
      <div className="lg:hidden">
        <Button variant="ghost" size="icon" className="text-slate-500 dark:text-slate-400">
          <Search size={20} />
        </Button>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        {/* Dark Mode Toggle */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </motion.button>

        {/* Notifications */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
        >
          <Bell size={20} />
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"
          />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold"
          >
            3
          </motion.div>
        </motion.button>

        {/* Settings */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors hidden sm:block"
        >
          <Settings size={20} />
        </motion.button>
        
        {/* Profile Section */}
        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-3 pl-4 pr-3 py-2 border-l border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-all cursor-pointer"
          >
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Admin User</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Administrator</p>
            </div>
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-md">
                A
              </div>
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white dark:border-slate-900"></div>
            </div>
            <motion.div
              animate={{ rotate: isProfileOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="hidden sm:block"
            >
              <ChevronDown size={16} className="text-slate-400 dark:text-slate-500" />
            </motion.div>
          </motion.button>

          {/* Profile Dropdown */}
          <AnimatePresence>
            {isProfileOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 top-full mt-2 w-64 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xl z-50"
              >
                {/* Profile Header */}
                <div className="p-4 border-b border-slate-100 dark:border-slate-700">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold shadow-md">
                      A
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-slate-100">Admin User</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">admin@example.com</p>
                    </div>
                  </div>
                </div>

                {/* Menu Items */}
                <div className="p-2">
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors">
                    <UserCircle size={18} className="text-slate-400 dark:text-slate-500" />
                    Profile
                  </button>
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors">
                    <Settings size={18} className="text-slate-400 dark:text-slate-500" />
                    Settings
                  </button>
                  <div className="border-t border-slate-100 dark:border-slate-700 my-2"></div>
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                    <LogOut size={18} />
                    Logout
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}