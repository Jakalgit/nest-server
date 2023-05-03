import { BelongsToMany, Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Role } from "../roles/roles.model";
import { UserRoles } from "../roles/user-roles.model";
import { Post } from "../posts/posts.model";

interface UserCreationAttrs {
	email: string;
	password: string;

}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs>{

	@ApiProperty({example: '1', description: 'Уникальный идентификатор'})
	@Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
	id: number;

	@ApiProperty({example: 'user@mail.ru', description: 'E-Mail'})
	@Column({type: DataType.STRING, unique: true, allowNull: false})
	email: string;

	@ApiProperty({example: 'qwerty123', description: 'Пароль'})
	@Column({type: DataType.STRING, allowNull: false})
	password: string;

	@ApiProperty({example: 'false', description: 'Забанен или нет'})
	@Column({type: DataType.BOOLEAN, allowNull: false, defaultValue: false})
	banned: boolean;

	@ApiProperty({example: 'За хулиганство', description: 'Причина бана'})
	@Column({type: DataType.STRING, allowNull: true})
	banReason: string;

	@BelongsToMany(() => Role, () => UserRoles)
	roles: Role[]

	@HasMany(() => Post)
	posts: Post[]
}