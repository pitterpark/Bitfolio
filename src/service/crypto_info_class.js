

export class CryptoInformation{

    name;
    fullName;
    imageUrl;
    price;
    todayChange;
    marketCap;
    volumn;
    currentSupply;

    constructor(data) {
        this.name = data.symbol;
        this.fullName = data.name;
        this.imageUrl = data.image;
        this.current_price = data.price;
        this.marketCap = data.market_cap;
        this.volumn = data.total_volume;
        this.price = data.current_price;
        this.todayChange = data.price_change_percentage_24h.toFixed(2)+"%";
        this.currentSupply = data.circulating_supply;
        // this.name = data["CoinInfo"].Name;
        // this.fullName = data["CoinInfo"].FullName;
        // this.imageUrl = data["CoinInfo"].ImageUrl;
        // this.price = "$"+data["RAW"].USD.PRICE;
        // this.openDayPrice = data["RAW"].USD.OPENDAY;
        // this.highDayPrice = data["RAW"].USD.HIGHDAY;
        // this.todayChange = (100 - data["RAW"].USD.OPENDAY / data["RAW"].USD.PRICE * 100).toFixed(2) 
        // + "%";
        // this.marketCap = data["DISPLAY"].USD.MKTCAP;
        // this.volumn = data["DISPLAY"].USD.VOLUMEDAY;
        // this.currentSupply = data["DISPLAY"].USD.CIRCULATINGSUPPLY;
    }
}
//  "id": "bitcoin",
//     "symbol": "btc",
//     "name": "Bitcoin",
//     "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
//     "current_price": 63822,
//     "market_cap": 1202965325006,
//     "market_cap_rank": 1,
//     "fully_diluted_valuation": 1340269559099,
//     "total_volume": 40494937921,
//     "high_24h": 64608,
//     "low_24h": 61705,
//     "price_change_24h": 1881.44,
//     "price_change_percentage_24h": 3.03747,
//     "market_cap_change_24h": 34009515770,
//     "market_cap_change_percentage_24h": 2.90939,
//     "circulating_supply": 18848650,
//     "total_supply": 21000000,
//     "max_supply": 21000000,
//     "ath": 64805,
//     "ath_change_percentage": -1.47921,
//     "ath_date": "2021-04-14T11:54:46.763Z",
//     "atl": 67.81,
//     "atl_change_percentage": 94055.82574,
//     "atl_date": "2013-07-06T00:00:00.000Z",
//     "roi": null,
//     "last_updated": "2021-10-20T02:23:04.273Z"