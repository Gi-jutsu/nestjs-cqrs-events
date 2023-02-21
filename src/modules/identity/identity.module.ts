import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { CreateAccountCommandHandler } from './commands/create-account/create-account.command-handler';
import { CreateAccountHttpController } from './commands/create-account/create-account.http-controller';
import { SendWelcomeEmailWhenAccountCreated } from './events/handlers/send-welcome-email-when-account-created.event-handler';

@Module({
  imports: [CqrsModule],
  controllers: [CreateAccountHttpController],
  providers: [
    CreateAccountCommandHandler,
    SendWelcomeEmailWhenAccountCreated,
  ]
})
export class IdentityModule {}
