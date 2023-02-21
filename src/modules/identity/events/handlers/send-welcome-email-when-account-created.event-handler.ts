import { Logger } from '@nestjs/common';
import { EventsHandler, type IEventHandler } from '@nestjs/cqrs';

import { AccountCreatedEvent } from '../account-created.event';

@EventsHandler(AccountCreatedEvent)
export class SendWelcomeEmailWhenAccountCreated implements IEventHandler {
  private readonly logger = new Logger(SendWelcomeEmailWhenAccountCreated.name);

  handle(event: AccountCreatedEvent) {
    this.logger.debug(`Send WELCOME_EMAIL to ${event.email}`);
  }
}
