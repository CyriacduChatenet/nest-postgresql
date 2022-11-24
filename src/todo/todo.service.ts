import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CreateInputDto from './dto/createInputDto';
import UpdateInputDto from './dto/updateInputDto';
import TodoEntity from './todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoEntity)
    private todoRepository: Repository<TodoEntity>,
  ) {}

  async getAll(): Promise<TodoEntity[]> {
    return await this.todoRepository.find();
  }

  async getOne(id: number): Promise<TodoEntity[]> {
    return await this.todoRepository.findBy({ id });
  }

  create(createInputDto: CreateInputDto) {
    return this.todoRepository.save(this.todoRepository.create(createInputDto));
  }

  async update(updateInputDto: UpdateInputDto, id: number) {
    return await this.todoRepository.update(id, updateInputDto);
  }

  async delete(id: number) {
    return await this.todoRepository.delete(id);
  }
}
