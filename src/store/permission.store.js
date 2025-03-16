const { makeAutoObservable, runInAction } = require("mobx");

export class PermissionStore {
  permissions = [];

  busy = false;

  constructor() {
    makeAutoObservable(this);
  }

  fetchPermissions() {
    this.busy = true;
    new Promise((resolve) => {
      setTimeout(() => {
        runInAction(() => {
          this.permissions = ["dashboard", "page1", "page2"];
          this.busy = false;
        });

        resolve(this.permissions);
      }, 1000);
    });
  }
}
