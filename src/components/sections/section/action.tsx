"use client";
import { SpotlightButton } from "@/components/ui/Button/Spotlight";
import React, { useEffect } from "react";
import { useCopyToClipboard } from "react-use";
import { toast } from "sonner";

export const Action = ({ codeText }: { codeText: string }) => {
  const [state, copyToClipboard] = useCopyToClipboard();
  useEffect(() => {
    if (state.value) {
      toast("Copied to clipboard");
    }
  }, [state.value]);
  return (
    <SpotlightButton
      title="Copy code"
      handleClick={() => copyToClipboard(codeText)}
      className="w-32 h-8 [&>button]:text-xs"
    />
  );
};
