export class User {
  constructor(
    public _id: number,
    public username: string,
    public name: string,
    public bio: string,
    public password: string,
    public email: string,
    public photo: string,
    public linked_in: string,
    public github: string,
    public type: string
  ) {}
}
