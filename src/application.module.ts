import { Module } from '@nestjs/common';
import { IdentityModule } from './modules/identity/identity.module';

@Module({
  imports: [IdentityModule]
})
export class ApplicationModule {}