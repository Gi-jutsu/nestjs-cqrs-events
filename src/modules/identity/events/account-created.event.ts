export class AccountCreatedEvent {
  constructor(
    readonly id: string,
    readonly email: string
  ) {}
}
