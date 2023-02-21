import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class CreateAccountHttRequest {
  @ApiProperty({ example: 'luffy@one-piece.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'M0nKeY.d.LuFfy' })
  @IsString()
  password: string;
}
