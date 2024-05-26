
export default class carData{
        public carNumber: number;
        public manufacturer: string;
        public year: number;
        public test: string;
        public ownership: string;
        public carColor: string;
        public engineType: string;
        public isCarSold: boolean = false;
        constructor(carNumber: number, manufacturer: string, year: number, test: string, ownership: string,
             carColor: string, engineType: string){
                this.carNumber =carNumber;
                this.manufacturer = manufacturer;
                this.year = year;
                this.test = test;
                this.ownership = ownership;
                this.carColor = carColor;
                this.engineType = engineType;
            }
}