import { Mappable } from "./CustomMap";

export class Company implements Mappable {
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    }

    constructor() {
        this.companyName = "Oracle";
        this.catchPhrase = "Cloud Computing is the goal";
        this.location = {
            lat: 10.578,
            lng: 10.689
        }
    };

    markerContent(): string {
        return `
        <div>
            <h1>Company Name: ${this.companyName}</h1>
            <h3>Catch Phrase: ${this.catchPhrase}</h3>
        </div>  
        `
    };

};

