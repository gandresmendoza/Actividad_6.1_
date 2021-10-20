import express, {Application} from "express";
import morgan from "morgan";

export class App {
    app: Application
    
    constructor(
      private port?:number | string
    ){
        this.app = express();
        this.settings();
        this.middlewares();
    }

    private middlewares(){

        this.app.use(morgan(`dev`));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended : false}))
        
        }

    private settings(){
        this.app.set("port", this.port|| 3000)

    }


    async listen(){
        await this.app.listen(this.app.get("port"));
        console.log("server on port", this.app.get("port"));
    }
}