export interface signUp {
    isAdmin: any;
    name: string;
    email: string;
    password: string;
  }
  export interface login {
    email: String;
    password: String;
  }
  export interface admin {
    email: String;
    password: String;
  }
  
  export interface product{
    name:string,
    price:number,
    title:string,
    color:string,
    image:string,
    description:string,
    id:number,
    quantity:undefined | number,
    productId:undefined|number
  }
  export interface clock{
    name:string,
    price:number,
    category:string,
    color:string,
    image:string,
    description:string,
    id:number,
    quantity:undefined | number,
    productId:undefined|number
  }
  export interface mirror{
    name:string,
    price:number,
    category:string,
    color:string,
    image:string,
    description:string,
    id:number,
    quantity:undefined | number,
    productId:undefined|number
  }
  export interface shelves{
    name:string,
    price:number,
    category:string,
    color:string,
    image:string,
    description:string,
    id:number,
    quantity:undefined | number,
    productId:undefined|number
  }
  export interface statue{
    name:string,
    price:number,
    category:string,
    color:string,
    image:string,
    description:string,
    id:number,
    quantity:undefined | number,
    productId:undefined|number
  }
  export interface light{
    name:string,
    price:number,
    category:string,
    color:string,
    image:string,
    description:string,
    id:number,
    quantity:undefined | number,
    productId:undefined|number
  }
  export interface cup{
    name:string,
    price:number,
    title:string,
    color:string,
    image:string,
    description:string,
    id:number,
    quantity:undefined | number,
    productId:undefined|number
  }
  export interface cart{
    name:string,
    price:number,
    category:string,
    color:string,
    image:string,
    description:string,
    id:number| undefined,
    quantity:undefined | number,
    productId:number,
    userId:number
  }
  
  export interface priceSummary{
    price:number,
    discount:number,
    tax:number,
    delivery:number,
    total:number
  }
  
  export interface order {
    email:string,
    address:string,
    contact:string,
    totalPrice:number,
    userId:string,
    // userName:string,
    id:number|undefined
  }