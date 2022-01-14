import { Mappable } from "./CustomMap";

export class User implements Mappable {
    name: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = "Lily";
        this.location = {
            lat: 50.274,
            lng: 51.298
        };
    };

    markerContent(): string {
        return `<h1>User Name: ${this.name}</h1>`
    };
};
