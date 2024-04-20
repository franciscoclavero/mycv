import {
  AfterInsert,
  AfterUpdate,
  AfterRemove,
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @AfterInsert()
  LogInsert() {
    console.log('Created user with id: ', this.id);
  }

  @AfterUpdate()
  LogUpdate() {
    console.log('Updated user with id: ', this.id);
  }

  @AfterRemove()
  LogRemove() {
    console.log('Deleted user with id: ', this.id);
  }
}
