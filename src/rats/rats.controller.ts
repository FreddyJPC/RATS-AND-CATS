import { Body, Controller, Get, Post, Param, Put, Delete } from '@nestjs/common';
import { CreateRatDto } from './dto/create-rat.dto';
import { UpdateRatDto } from './dto/update-rat.dto';
import { Patch } from '@nestjs/common';

@Controller('rats')
export class RatsController {

    @Get()
    findAll(): string {
        return 'This action returns all rats';
    }

    @Post()
    async create(@Body() createRatDto: CreateRatDto) {
        return 'This action adds a new rat';
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateRatDto: UpdateRatDto) {
        return 'This action updates a rat';
    }

    @Delete(':id')
async remove(@Param('id') id: string) {
    return `This action deletes a rat with ID ${id}`;}
}

