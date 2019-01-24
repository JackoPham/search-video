import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
@Entity()
export default class User {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  @IsNotEmpty()
  fullname: string;

  @Column()
  @IsNotEmpty()
  username: string;

  @Column()
  @IsNotEmpty()
  password: string;
}
