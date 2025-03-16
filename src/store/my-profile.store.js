import { makeAutoObservable, runInAction } from "mobx";
import { PermissionStore } from "./permission.store";

class MyProfileStore {
  name;
  email;
  id;
  token;
  role;
  avatar;
  permissions = [];
  busy = false;

  permissionStore;

  constructor() {
    makeAutoObservable(this);

    this.name = "";
    this.email = "";
    this.id = "";
    this.token = "";
    this.role = "";
    this.avatar = "";
    this.myAccess = [];
    this.permissionStore = new PermissionStore();
  }

  doLogin({ email, password }) {
    this.busy = true;
    new Promise((resolve) => {
      setTimeout(() => {
        runInAction(() => {
          this.name = "John Doe";
          this.email = email;
          this.id = "123";
          this.busy = false;
          this.token = "1234567890";
          this.avatar = "https://randomuser.me/api/portraits";
          resolve(this.name);
          if (password === "admin") {
            this.myAccess = ["dashboard", "page1", "page2", "logout"];
          } else {
            this.myAccess = ["dashboard", "logout"];
          }
        });

        this.permissionStore.fetchPermissions();
      }, 1000);
    });
  }

  haveAccess(page) {
    return this.myAccess.includes(page);
  }

  doLogout() {
    this.name = "";
    this.email = "";
    this.id = "";
    this.token = "";
  }
}

export const myProfileStore = new MyProfileStore();
