export class Todo {
    id: number;
    content: string;
    done: boolean;
    createdAt: number;
    
    constructor (content: string, done: boolean){
        this.id = Date.now() + Math.random()
        this.content = content;
        this.done = done;
        this.createdAt = Date.now();
    }
}