import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'capitalizado' })
export class CapitalizadoPipe implements PipeTransform {

    transform(value: string, todas: true): string {
        const nombres = [];
        if (todas) {
            value.toLowerCase().split(' ').reduce((acc, cur) => {
                nombres.push(cur[0].toUpperCase() + cur.substr(1));
                return acc + cur.length;
            }, 0);
            value = nombres.join(' ');
        } else {
            value = value[0].toUpperCase() + value.substr(1).toLowerCase();            
        }
        return value;
    }
}