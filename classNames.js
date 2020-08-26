/*Создайте объект classNames со свойством cname и методами (add String[,String])
*добавляет  к cname классы remove (String) toggle(String[,boolean]).Если класс у элемента отсутствует
* добавляет, иначе убирает. Когда вторым параметром передано false - удаляет указанный класс
* если true добавляет
* Например значение classNames.cname="btn". После вызова classNames. toggle('btn-primary')
* значение должно вернуться в btn-primary
* */

const className = {
    cname: "",
    add: function (...s) {
        let cname = this.cname.split(" ");
        let tmp = {};
        for(let i in cname){
         console.log( tmp[cname[i]] = 1)   ;
        }
        s.forEach(function (e) {
            tmp[e] = 1;

        });
        this.cname = "";
        console.log(tmp)
        for (let i in tmp){
           console.log(this.cname += i+ " ")
        }
        this.cname = this.cname.slice(0, -1)

    },
    remove: function (...s) {
        let cname = this.cname.split(" ");
        let tmp = {};
        for(let i in cname){
            tmp[cname[i]] = 1;
        }
        s.forEach(function (e) {
            if(e in tmp) delete tmp[e]

        })
        this.cname = "";
        for(let i in tmp){
            this.cname += i+ " ";
        }
        this.cname = this.cname.slice(0, -1)

    },
    toggle: function (str, flag) {
        let cname = this.cname.split(" ");
        let tmp ={};
        for(let i in cname){
            tmp[cname[i]] = 1;
        }
        if((str in tmp)||(!flag && flag != undefined)){
            delete tmp[str];
        } else if(!(str in tmp) || flag){
            tmp[str] = 1;
        }
        this.cname= "";
        for(let i in tmp){
            this.cname += i+ " ";
        }
        this.cname = this.cname.slice(0, -1)
    }
}
className.cname = 'btn';
className.add("btn-primary");
console.log(className);