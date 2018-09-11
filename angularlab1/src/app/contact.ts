export class Contact {
  public fullName: Function;
  constructor(
    public id = 0,
    public firstName = '',
    public lastName = '',
    public address = '',
    public company = ''
  ) {
    this.fullName = () => `${this.firstName} ${this.lastName}`;
  }
}
