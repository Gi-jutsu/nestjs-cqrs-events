import type { ICommand } from '@nestjs/cqrs';

export class CreateAccountCommand implements ICommand {
  constructor(
    readonly email: string,
    readonly password: string
  ) {}
}
