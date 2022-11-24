import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('todo')
class TodoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  completed: boolean;
}

export default TodoEntity;
