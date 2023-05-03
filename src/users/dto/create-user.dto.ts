import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {

	@ApiProperty({example: 'user@mail.ru', description: 'E-Mail'})
	@IsString({message: 'Должно быть строкой'})
	@IsEmail({}, {message: 'Некорректный E-Mail'})
	readonly email: string;

	@ApiProperty({example: 'qwerty123', description: 'Пароль'})
	@IsString({message: 'Должно быть строкой'})
	@Length(4, 16, {message: 'Не меньше 4 и не больше 16'})
	readonly password: string;
}