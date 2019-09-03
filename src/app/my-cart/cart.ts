export class Cart{
  id:number;
  productName:string;
  description:string;
  image:string;
  constructor(id:number,productName:string,description:string,image:string)
  {
    this.id=id;
    this.productName=productName;
    this.description=description;
    this.image=image;
  }
}