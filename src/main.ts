import { NestFactory } from '@nestjs/core';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { ApplicationModule } from './application.module';

async function bootstrap(): Promise<void> {
  const application = await NestFactory.create(ApplicationModule, {
    cors: { origin: '*' },
  });
  application.useGlobalPipes(new ValidationPipe({ transform: true }));
  application.setGlobalPrefix('api');
  application.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1.0',
  });

  const config = new DocumentBuilder()
    .setTitle('CQRS - Events')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(application, config);
  SwaggerModule.setup('docs', application, document);

  await application.listen(process.env['PORT'] ?? '8080', '0.0.0.0');
  console.log(`🚀 API launched on ${await application.getUrl()}/api/v1.0 !`);
}

void bootstrap();
