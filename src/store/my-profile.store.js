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

    try {
      const userProfile = localStorage.getItem("user-profile");

      if (userProfile) {
        const profile = JSON.parse(userProfile);
        this.name = profile.name;
        this.email = profile.email;
        this.id = profile.id;
        this.token = profile.token;
        this.avatar = profile.avatar;
        this.myAccess = profile.myAccess;
      } else {
        this.name = "";
        this.email = "";
        this.id = "";
        this.token = "";
        this.role = "";
        this.avatar = "";
        this.myAccess = [];
      }
    } catch (error) {
      this.name = "";
      this.email = "";
      this.id = "";
      this.token = "";
      this.role = "";
      this.avatar = "";
      this.myAccess = [];
    }
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

        localStorage.setItem("user-profile", this.asJson);

        this.permissionStore.fetchPermissions();
      }, 1000);
    });
  }

  haveAccess(page) {
    return this.myAccess.includes(page);
  }

  get asJson() {
    return JSON.stringify({
      name: this.name,
      email: this.email,
      id: this.id,
      token: this.token,
      avatar: this.avatar,
      myAccess: this.myAccess,
    });
  }

  doLogout() {
    this.name = "";
    this.email = "";
    this.id = "";
    this.token = "";
    this.role = "";
    this.avatar = "";
    this.myAccess = [];

    localStorage.removeItem("user-profile");
  }
}

export const myProfileStore = new MyProfileStore();
