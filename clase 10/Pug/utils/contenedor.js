const fs = require('fs');

let idglobalcreados;

let ultimoborrado;


class Contenedor {
        constructor(fileName) {
            this.fileName = fileName;
    }


    save(obj) {
        let data = this.getAll();
            if (data.length > 0) {
                let proximoid = data[data.length -1].id + 1;
                if (proximoid != ultimoborrado) {
                    obj.id = proximoid;
                }
                else {
                    obj.id = proximoid + 1;
                }  
            data.push(obj);
                
            }
            else {
                obj.id = 1
                data = [(obj)]
            }                   
        fs.writeFileSync(this.fileName, JSON.stringify(data),'utf-8');
        idglobalcreados++;
    }

    getById(id) {
        let obj = JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
        return obj.find(object => object.id == id);
    }    

    getAll() {
        let obj = JSON.parse(fs.readFileSync(this.fileName, 'utf-8'))
        return obj;
    }
    
  
    deleteAll() {
        let data = this.getAll();
        fs.writeFileSync(this.fileName, '[]', 'utf-8');
    }

    deleteById(id){
        let json = JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
        let nuevadata = json.filter(item => item.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(nuevadata));
        ultimoborrado = id;
    }

    
}

module.exports = Contenedor;