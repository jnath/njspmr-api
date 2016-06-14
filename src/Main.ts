
import { Server, ServerConnection } from 'hapi';

export default class Main {
    
    public static APPLICATION:string = 'application';

    private server: Server;

    private register:Array<string> = [
        'inert'
    ];

    constructor() {
        
        this.server = new Server();
        this.server.connection({port:8080, labels:[ Main.APPLICATION ]});

        this.server.register(this.register, ()=>{
            
        })
    }

    start(){
        this.server.start((err:any) => {
            if(err){
                return console.error(err);
            }
            console.log('Server started....');
        })
    }
}

let main: Main = new Main();
main.start();