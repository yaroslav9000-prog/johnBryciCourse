import {Device} from "./Device";
export class smartHome{
    public id: number;
    public name: String;
    public devices: Device[];

    constructor(id: number, name: String, devices: Device[]){
        this.id = id;
        this.name = name;
        this.devices = devices;
    }
}