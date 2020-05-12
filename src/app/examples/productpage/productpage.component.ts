import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-productpage",
  templateUrl: "productpage.component.html"
})
export class ProductpageComponent implements OnInit, OnDestroy {
  value = 1;
  constructor() {}
  up() {
    this.value++;
  }
  down() {
    if (this.value > 1) {
      this.value--;
    }
  }
  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("product-page");
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("product-page");
  }
}
