"use strict";
var hapi_1 = require('hapi');
var Main = (function () {
    function Main() {
        this.register = [
            'inert'
        ];
        this.server = new hapi_1.Server();
        this.server.connection({ port: 8080, labels: [Main.APPLICATION] });
        this.server.register(this.register, function () {
        });
    }
    Main.prototype.start = function () {
        this.server.start(function (err) {
            if (err) {
                return console.error(err);
            }
            console.log('Server started....');
        });
    };
    Main.APPLICATION = 'application';
    return Main;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Main;
var main = new Main();
main.start();
