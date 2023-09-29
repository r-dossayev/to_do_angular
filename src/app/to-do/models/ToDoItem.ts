export class Todo{
  constructor(id:number, name:string, isDone:boolean) {
    this.id  = id ;
    this.name = name;
    this.isDone = isDone;
  }
  id:number;
  name:string;
  isDone:boolean;
}
