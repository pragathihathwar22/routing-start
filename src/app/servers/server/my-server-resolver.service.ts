import { Injectable } from "@angular/core";
import { ActivatedRoute,  ActivatedRouteSnapshot,  Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServersService } from "../servers.service";

interface Server{
    id:number;
    name:string;
    status:string;
}

@Injectable()
export class ServerReslover implements Resolve<Server>{

    constructor(private serversService:ServersService,private route:ActivatedRoute){

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
     Server | Observable<Server> | Promise<Server> {
        const id = +this.route.snapshot.params['id'];
       return this.serversService.getServer(id);
    }
}