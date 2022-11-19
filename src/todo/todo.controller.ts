import { Controller ,Get,Post,Delete,Put,Req, Res} from '@nestjs/common';
import { Response,Request, response } from 'express';
@Controller('todo')
export class TodoController {
    @Get('v2')
    getTodos(@Req() request: Request,
            @Res() response: Response){

        console.log('Récupérer la liste des todos')
        response.status(200);
        response.json({
            contenu: 'je suis une reponse genérée à partir de l object response de express'})

    }
    @Get()
    getTodosStandard(){

        console.log('Récupérer la liste des todos')
        return 'la liste des todos'
    }
    @Post()
    addTodo(){
        console.log('Ajouter un Todo à la liste des todos')
        return 'Post TODO';   
    }
    @Delete()
    deleteTodo(){
        console.log('Supprimer un Todo de la liste des todos')
        return 'Delete TODO';   
    }
    @Put()
    modifierTodo(){
        console.log('Modifier un Todo de la liste des todos')
        return 'Update TODO';   
    }
}
