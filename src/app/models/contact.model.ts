export class ContactModel{
    id: number;
    name: string;
    username: string;
    email: string;
    connections: string;
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: number,
    }
    phone: number;
    website: string;
}