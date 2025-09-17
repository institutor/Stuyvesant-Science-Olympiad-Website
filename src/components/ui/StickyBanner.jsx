import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyBanner = ({
  className,
  children,
  hideOnScroll = false
}) => {
  const [open, setOpen] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (hideOnScroll && latest > 40) {
      setOpen(false);
    } else if (hideOnScroll) {
      setOpen(true);
    }
  });

  return (
    <motion.div
      className={cn(
        "sticky inset-x-0 top-0 z-50 flex min-h-[56px] w-full items-center justify-center px-4 py-2",
        "border-b border-white/10 bg-black/20 backdrop-blur-sm",
        className
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: open ? 0 : -100, opacity: open ? 1 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer"
        onClick={() => setOpen(false)}
        aria-label="Close banner"
      >
        <CloseIcon className="h-5 w-5 text-slate-300 hover:text-white" />
      </motion.button>
    </motion.div>
  );
};

const CloseIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M18 6l-12 12" />
    <path d="M6 6l12 12" />
  </svg>
);