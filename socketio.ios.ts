import common = require('./socketio.common');
let jsonHelper = require('./helpers/jsonHelper');

export class SocketIO extends common.SocketIO {
    constructor() {
        super();
    }

    on(event, callback) {

    };

    connect() {

    };

    emit(event) {

    };

    disconnect() {

    };

    getInstance() {

    };
}



/*
import common = require('./socketio.common');
export declare class SocketIO extends common.SocketIO {
    constructor();
    on(event: any, callback: any): void;
    connect(): void;
    emit(event: any): void;
    disconnect(): void;
    getInstance(): void;
}
*/