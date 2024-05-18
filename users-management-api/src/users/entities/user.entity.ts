export class User {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  shortDescription: string;

  constructor(data: User) {
    const { id, firstName, lastName, gender, email, shortDescription } = data;

    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.email = email;
    this.shortDescription = shortDescription;
  }
}
