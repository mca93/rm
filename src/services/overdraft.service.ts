export class OverdraftService{
  private overdrafts: {customer: string, balance: number, amount: number, overdraf: number} [] = [];

  addOverdraft(overdraft: {customer: string, balance: number, amount: number, overdraf: number} ){
    this.overdrafts.push(overdraft);
  }
  getOverdrafts(){
    return this.overdrafts.slice();
  }
}
