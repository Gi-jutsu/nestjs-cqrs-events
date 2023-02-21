import {
  CommandHandler,
  EventBus,
  type ICommandHandler
} from '@nestjs/cqrs';
import { AccountCreatedEvent } from '../../events/account-created.event';

import { CreateAccountCommand } from './create-account.command';

@CommandHandler(CreateAccountCommand)
export class CreateAccountCommandHandler implements ICommandHandler {
  constructor(private readonly eventBus: EventBus) {}

  execute({ email }: CreateAccountCommand): Promise<void> {
    const account = {
      id: '99c8f3c3-b3bf-41fd-914c-6a7a437d1118',
      email,
    };
    
    this.eventBus.publish(
      new AccountCreatedEvent(account.id, account.email)
    )

    return Promise.resolve();
  }
}