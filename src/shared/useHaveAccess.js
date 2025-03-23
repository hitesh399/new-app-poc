"use client";

import { myProfileStore } from "@/store/my-profile.store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const useHaveAccess = (pageName) => {
  const router = useRouter();

  const [goodToGo, setGoodToGo] = useState(false);

  useEffect(() => {
    if (myProfileStore.busy || !myProfileStore.id) {
      setGoodToGo(false);
      return;
    }

    if (!myProfileStore.haveAccess(pageName)) {
      setGoodToGo(false);
      router.push("/protected/");
    } else {
      setGoodToGo(true);
    }
  }, [myProfileStore.busy, myProfileStore.id]);

  return goodToGo;
};

export default useHaveAccess;
