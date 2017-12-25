import { Entity } from './entity';

export class Hobbit extends Entity
{
    greet(){
        super.greet();
        console.log('I am really small');
    }

}