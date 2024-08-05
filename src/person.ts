interface greetable {
    readonly name: string;
    greet(): void;
}
export default class Person implements greetable{
    //protected greetPhrase: string = "Whats up ";
    
    constructor(readonly name: string, protected age: number, protected isMarried: boolean,  protected greetPhrase: string= "Whats up "){}

    get personName(){
        return this.name;
    }
    get personAge(){
        return this.age;
    }
    get marriageStatus(){
        return this.isMarried;
    }
    set personAge(age: number){
        this.age = age;
    }
    set marriageStatus(isMarried: boolean){
        this.isMarried = isMarried;
    }
    greet(): void{
        console.log(this.greetPhrase + this.name);
    }

}