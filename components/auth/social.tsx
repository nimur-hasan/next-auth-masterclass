import React from "react";
import { Button } from "../ui/button";
import Google from "@/app/assets/icons/google";
import Github from "@/app/assets/icons/github";

export default function Social() {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button variant="outline" className="w-full" size="lg" onClick={() => {}}>
        <Google />
      </Button>
      <Button variant="outline" className="w-full" size="lg" onClick={() => {}}>
        <Github />
      </Button>
    </div>
  );
}
