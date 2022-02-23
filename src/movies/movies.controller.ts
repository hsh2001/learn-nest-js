import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'movies';
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `Id is ${id}`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return `This will delete ${id}`;
  }
}
