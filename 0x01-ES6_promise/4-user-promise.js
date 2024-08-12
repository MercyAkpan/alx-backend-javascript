export default function signUpUser(firstName, lastName) {
    // To use "this" to refer to an instance of a class.
    // SignUpUser need to be defined as a method of a class.
    // this.firstName = firstName;
    // else, use the below code

    return Promise.resolve({
        firstName: firstName,
        lastName: lastName,
      });
}