import { Address } from "./address.model";
import { LocationCoordinates } from "./location-coordinates.model";
import { UserCompany } from "./user-company.model";

export class User {
  constructor(
    public id: number,
    public name: string,
    public username: string,
    public email: string,
    public phone: string,
    public website: number,
    public address: Address,
    public geo: LocationCoordinates,
    public company: UserCompany
  ) {}
}
