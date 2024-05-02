import {epID} from "./epID";
export class Device{
    public id : number;
    public location: String;
    public name: String;
    public nodeId: number;
    public epID: epID[];

    constructor(id: number, location: String, name: String, nodeId: number, epID: epID[]){
        this.id = id;
        this.location = location;
        this.name = name;
        this.nodeId = nodeId;
        this.epID = epID;
    }
}