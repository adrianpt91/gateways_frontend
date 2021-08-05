import { Device } from "./device.model";

export class Gateway {
    id?: any;
    serial?: string;
    name?: string;
    address?: string;
    validip?: boolean;
    devices?: Device[]
}
