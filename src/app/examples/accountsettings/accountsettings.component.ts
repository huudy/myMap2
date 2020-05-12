import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-accountsettings",
  templateUrl: "accountsettings.component.html"
})
export class AccountsettingsComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("account-settings");
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("account-settings");
  }
}
