class animal{
    constructor(move){
        this.move=move;
    }
}
class Cat extends animal{
    moves(){
        console.log(`cat ${this.move}`);
    }
}
let cat=new Cat('moves fast');
cat.moves()
