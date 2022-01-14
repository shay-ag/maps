// import { User } from "./User";
// import { Company } from "./Company";

export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
    markerContent(): string; 
}

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divID: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divID), {
            zoom: 2,
            center: {
                lat: 0,
                lng: 0
            }
        })
    };

    addMarker(mappable: Mappable): void {
        
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            });

            infoWindow.open(this.googleMap, marker);
        })
    };


    //this is the bad code we would have written
    //but this is repetitive, so we have used an interface

    // addUserMarker(user: User): void {
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: {
    //             lat: user.location.lat,
    //             lng: user.location.lng
    //         }
    //     });
    // };

    // addCompanyMarker(company: Company): void {
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: {
    //             lat: company.location.lat,
    //             lng: company.location.lng
    //         }
    //     });
    // };
}