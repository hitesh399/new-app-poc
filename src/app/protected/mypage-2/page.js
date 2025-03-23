"use client";

import useHaveAccess from "@/shared/useHaveAccess";

export default function Mypage() {
  const have = useHaveAccess("page2");
  if(!have) return null;
  return (
    <div>
      <h1>Page 2</h1>
    </div>
  );
}
