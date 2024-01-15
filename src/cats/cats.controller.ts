import { Body, Controller, Get, Post,Param, Put, Delete  } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { updateCatDto } from './dto/Update-cat.dto';
import { Patch } from '@nestjs/common';

@Controller('cats')
export class CatsController {

    @Get() 
    findAll(): string
    {
        return 'This action returns all cats';
    }

    @Post() 
    async create(@Body() createCatDto: CreateCatDto) {
        return 'This action adds a new cat';
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateCatDto: updateCatDto) {
        return 'This action updates a cat';
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return 'This action deletes a cat';
    }
}

