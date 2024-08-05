import Person from './person.js';


export default class Worker extends Person{
    
    constructor(readonly name: string, protected age: number, protected isMarried: boolean,  greetPhrase: string= "Whats up ",private rank: string, private company: string){
        super(name,age,isMarried,greetPhrase);
    }


    credentials(): void{
        console.log(this.name + " works at " + this.company + " as a " + this.rank)
    }
    
    get workerCompany() {
        return this.company;
    }

    set workerCompany(company: string) {
        this.company = company;
    }

    get workerRank() {
        return this.company;
    }

    set workerRank(rank: string) {
        this.rank = rank;
    }
}