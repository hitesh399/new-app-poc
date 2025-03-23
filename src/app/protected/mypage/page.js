"use client";
import useHaveAccess from "@/shared/useHaveAccess";

export default function Mypage() {
  const have = useHaveAccess("page1");
  if (!have) return null;
  return (
    <div>
      <h1>Page 1</h1>
    </div>
  );
}
