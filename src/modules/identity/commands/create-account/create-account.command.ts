export class CreateAccountCommand {
  constructor(
    readonly email: string,
    readonly password: string
  ) {}
}
