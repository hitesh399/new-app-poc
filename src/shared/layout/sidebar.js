"use client";
const { appStore } = require("@/store/app.store");
import { observer } from "mobx-react-lite";
import { NavItem } from "./NavItem";
import { myProfileStore } from "@/store/my-profile.store";

const Sidebar = () => {
  const Menus = [
    {
      name: "dashboard",
      title: "Dashboard",
      path: "/protected/",
    },
    {
      name: "page1",
      title: "Page 1",
      path: "/protected/mypage/",
    },
    {
      name: "page2",
      title: "Page 2",
      path: "/protected/mypage-2/",
    },
  ];

  return (
    <aside
      className={`sidebar fixed left-0 top-0 z-9999 flex h-screen w-[290px] flex-col overflow-y-hidden border-r border-gray-200 bg-white px-5 dark:border-gray-800 dark:bg-black lg:static lg:translate-x-0 ${
        appStore.showSidebar ? "translate-x-0 lg:w-[90px]" : "-translate-x-full"
      }`}
    >
      <div
        className={`flex items-center gap-2 pt-8 sidebar-header pb-7 ${
          appStore.showSidebar ? "justify-center" : "justify-between"
        }`}
      >
        <button onClick={() => appStore.sidebarToggle()}>
          <span className={`logo ${appStore.showSidebar ? "hidden" : ""}`}>
            <img
              className="dark:hidden"
              src="/images/logo/logo.svg"
              alt="Logo"
            />
            <img
              className="hidden dark:block"
              src="/images/logo/logo-dark.svg"
              alt="Logo"
            />
          </span>

          <img
            className={`logo-icon ${
              appStore.showSidebar ? "lg:block" : "hidden"
            }`}
            src="/images/logo/logo-icon.svg"
            alt="Logo"
            width="auto"
            height="auto"
          />
        </button>
      </div>

      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        <nav>
          <ul className="flex flex-col gap-4 mb-6">
            {!myProfileStore.busy
              ? Menus.map((menu) =>
                  myProfileStore.haveAccess(menu.name) ? (
                    <NavItem key={menu.name} {...menu} />
                  ) : null
                )
              : null}

            <NavItem
              title="Logout"
              path="#"
              name="logout"
              onClick={() => {
                myProfileStore.doLogout();
              }}
            />
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default observer(Sidebar);
