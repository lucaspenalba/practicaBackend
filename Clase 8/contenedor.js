const fs = require('fs');

class Contenedor {
    constructor(ruta) {
        this.ruta = ruta;
    }
    
    async save(obj) {	
        try{
            let data = await fs.promises.readFile(this.ruta, 'utf8');
            let json = JSON.parse(data);
            if (json.length) {
                await fs.promises.writeFile(this.ruta, JSON.stringify([...json, {...obj, id: json.length + 1 }], null, 2));
    
            }else {
                await fs.promises.writeFile(this.ruta, JSON.stringify([{...obj, id: json.length + 1}], null, 2));
            //console.log(data);
            }
            console.log(`Id del nuevo registro: ${json.length + 1}`);
        } catch(error) {
            console.log(error);
        }
    }

    async getById(id) {
        try{
            let data = await fs.promises.readFile(this.ruta, 'utf8');
            let json = JSON.parse(data);
            let result = json.find(item => item.id === id);
            if (result) {
                console.log(result);
            } else {
                console.log('No existe el registro');
            }
        } catch(error) {
            console.log(error);
        }
    }

    async getAll() {
        try{
            let data = await fs.promises.readFile(this.ruta, 'utf8');
            let json = JSON.parse(data);
            if (json.length) {
                console.log(json);
                return json;
            } else {
                console.log('No hay registros');
            }
        } catch(error) {
            console.log(error);
        }
    }
    
    async deleteById(id) {
        try{
            let data = await fs.promises.readFile(this.ruta, 'utf8');
            let json = JSON.parse(data);
            let result = json.find(item => item.id === id);
            if (result) {
                let newJson = json.filter(item => item.id !== id);
                await fs.promises.writeFile(this.ruta, JSON.stringify(newJson, null, 2));
                console.log('Registro eliminado');
            } else {
                console.log('No existe el registro');
            }
        } catch(error) {
            console.log(error);
        }
    }

    async deleteAll() {
        try{
            let data = await fs.promises.readFile(this.ruta, 'utf8');
            let json = JSON.parse(data);
            if (json.length) {
                let newJson = [];
                await fs.promises.writeFile(this.ruta, JSON.stringify(newJson, null, 2));
                console.log('Registros eliminados');
            } else {
                console.log('No hay registros');
            }
        } catch(error) {
            console.log(error);
        }
    }

    async random() {
        try{
            const data = await fs.promises.readFile(this.ruta, 'utf8');
            const json = JSON.parse(data);
            const random = Math.floor(Math.random() * json.length);
            console.log(json[random]);
            return json[random];
        } catch(error) {
            console.log(error);
        }
    }

    async updateById(obj) {
        try{
            let data = await fs.promises.readFile(this.ruta, 'utf8');
            let json = JSON.parse(data);
            let result = json.findIndex(item => item.id === obj.id);
            if (result !== -1) {
                json[result] = obj;
                await fs.promises.writeFile(this.ruta, JSON.stringify(json, null, 2));
                return {message: 'Registro actualizado'};
            } else {

                return {error: 'No existe el registro'};
            }
        } catch(error) {
            console.log(error);
        }
    }
}	


module.exports = Contenedor;