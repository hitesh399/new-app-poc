"use client";
import Sidebar from "@/shared/layout/sidebar";
import { myProfileStore } from "@/store/my-profile.store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import Header from "@/shared/layout/Header";

function ProtectedLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    if (!myProfileStore.busy && !myProfileStore.id) {
      router.push("/");
    }
  }, [myProfileStore.busy, myProfileStore.id]);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
        <Header />
        <main>{children}</main>
        {/* <!-- ===== Main Content End ===== --> */}
      </div>
      {/* <!-- ===== Content Area End ===== --> */}
    </div>
  );
}

export default observer(ProtectedLayout);
