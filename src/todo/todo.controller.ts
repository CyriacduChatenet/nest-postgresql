import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import CreateInputDto from './dto/createInputDto';
import UpdateInputDto from './dto/updateInputDto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  getAll() {
    return this.todoService.getAll();
  }

  @Get(':id')
  getOne(@Param() id: number) {
    return this.todoService.getOne(id);
  }

  @Post()
  create(@Body() createInputDto: CreateInputDto) {
    return this.todoService.create(createInputDto);
  }

  @Put(':id')
  update(@Body() updateInputDto: UpdateInputDto, @Param() id: number) {
    return this.todoService.update(updateInputDto, id);
  }

  @Delete(':id')
  delete(@Param() id: number) {
    return this.todoService.delete(id);
  }
}
