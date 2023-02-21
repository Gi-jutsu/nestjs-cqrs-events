import type { IEvent } from '@nestjs/cqrs';

export class AccountCreatedEvent implements IEvent {
  constructor(
    readonly id: string,
    readonly email: string
  ) {}
}
