import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

import { CreateAccountCommand } from './create-account.command';
import { CreateAccountHttRequest } from './create-account.http-request';

@Controller('account')
export class CreateAccountHttpController {
  constructor(private readonly commandBus: CommandBus) {}
  
  @Post()
  createAccount(@Body() { email, password }: CreateAccountHttRequest) {
    return this.commandBus.execute(
      new CreateAccountCommand(email, password)
    )
  }
}