
  // const red=0;
  // const blue=1;
  // const green=2;
  //   enum Color {one,two,three};
  //   let result=Color.one;
  //   console.log(result)

// class Family{
//    name: number;
//   firstName: number;
//   constructor(firtName?:number,name?:number){
//     this.name=name;
//     this.firstName=firtName;
//     console.log(this.name+" "+this.firstName);
//   }
//   draw(){
//     console.log(this.name);
//   }

// }

// let obj = new Family(1,2);
// obj.draw();


//Aceess modifiers in Construcutor Properties

class Family{
  constructor(private _firtName?:number,private _name?:number){
  }
  draw(){
    console.log(this._name);
  }

}

let obj = new Family(1,2);
obj.draw();
