"use client";

import { myProfileStore } from "@/store/my-profile.store";
import { useRouter } from "next/navigation";

import { useEffect } from "react";

export default function Home(props) {
  const router = useRouter();
  console.log(myProfileStore.id, router);
  useEffect(() => {
    console.log(myProfileStore.id);
    if (myProfileStore.id) {
      router.push("/protected/");
    } else {
      router.push("/public/");
    }
  });

  return null;
}
