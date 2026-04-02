"use client";

import { motion } from "framer-motion";

export default function WorkflowDiagram({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-wrap gap-3 mt-4 justify-center">

      {steps.map((step, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.2 }}
          className="bg-white dark:bg-zinc-800 px-3 py-2 rounded-lg shadow"
        >
          {step} {i !== steps.length - 1 && "→"}
        </motion.span>
      ))}

    </div>
  );
}