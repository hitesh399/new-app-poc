import { makeAutoObservable } from "mobx";

class AppStore {
  showSidebar = true;

  constructor() {
    makeAutoObservable(this);
  }

  sidebarToggle() {
    this.showSidebar = !this.showSidebar;
  }
}

export const appStore = new AppStore();
