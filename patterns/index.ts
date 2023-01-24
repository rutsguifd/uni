const sales = {
  x: 1 / 5,
  y: 1 / 2,
  z: 1 / 10,
  n: 1 / 20,
};
const purchaseData = {
  name: "BMW M5",
  category: "car",
  prod: "BMW",
  price: 10000,
  desc: "nice car",
  time: "day",
  payType: "card",
  consumer: "Dyadya Tolya",
};

interface Purchase {
  getEndPrice(): number;
  request(): void;
}

class RealPurchase implements Purchase {
  private sales: object;
  private purchaseData: object;
  private endPrice;
  constructor(sales, purchaseData) {
    this.sales = sales;
    this.purchaseData = purchaseData;
    this.endPrice = this.purchaseData.price;
  }
  public getEndPrice(): number {
    return this.endPrice;
  }
  public request(): void {
    if (this.purchaseData.time == "night") {
      this.endPrice = this.endPrice * (1 - this.sales.x);
    }
    if (this.purchaseData.category == "car") {
      this.endPrice = this.endPrice * (1 - this.sales.y);
    }
    if (this.purchaseData.payType == "card") {
      this.endPrice = this.endPrice * (1 - this.sales.z);
    }
    if (this.purchaseData.consumer == "Dyadya Tolya") {
      this.endPrice = this.endPrice * (1 - this.sales.n);
    }
  }
}

class Proxy implements Purchase {
  private realPurchase: RealPurchase;

  public getEndPrice(): number {
    return this.realPurchase.getEndPrice();
  }
  constructor(realPurchase) {
    this.realPurchase = realPurchase;
  }
  public request(): void {
    this.realPurchase.request();
  }
}

function clientCode(subject: Purchase) {
  subject.request();
}

const realPurchase = new RealPurchase(sales, purchaseData);
clientCode(realPurchase);

const proxy = new Proxy(realPurchase);
clientCode(proxy);
