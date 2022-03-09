class Taiyaki {
    constructor(name){
        this.name = name;
    }

    nakami() {
        console.log(`中身は${this.name}です`);
    }
}

let tastes = [new Taiyaki("あんこ"), new Taiyaki("クリーム"), new Taiyaki("チーズ")];
for (let i = 0; i < tastes.length; i++){
    tastes[i].nakami();
}