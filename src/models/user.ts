export class UserModelState {
    _id?:string;
    name: string;
    document: string;
    address: string;
    phone: number;
  
    constructor(_id:string,name: string, document: string, address:string, phone: number) {
      this._id=_id
      this.name = name;
      this.document = document;
      this.address = address;
      this.phone = phone;
    }
  }