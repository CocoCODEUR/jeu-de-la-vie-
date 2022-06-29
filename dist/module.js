export class Module {
    constructor() {
        this.tableOfLife = new Array(24);
    }
    InitTableLife() {
        for (let x = 0; x <= 24; x++) {
            this.tableOfLife[x] = new Array(24);
            for (let y = 0; y <= 24; y++) {
                this.tableOfLife[x][y] = 0;
            }
        }
        return this.tableOfLife;
    }
}
