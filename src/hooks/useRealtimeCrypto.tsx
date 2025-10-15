import { useState, useEffect } from 'react';

interface CryptoData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  volume: string;
  marketCap: string;
}

const initialData: CryptoData[] = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    price: 67485.23,
    change: 5.47,
    volume: "28.5B",
    marketCap: "1.33T",
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    price: 3842.15,
    change: -2.31,
    volume: "15.2B",
    marketCap: "462.8B",
  },
  {
    symbol: "BNB",
    name: "Binance Coin",
    price: 635.89,
    change: 8.92,
    volume: "2.1B",
    marketCap: "95.7B",
  },
  {
    symbol: "ADA",
    name: "Cardano",
    price: 1.24,
    change: -1.56,
    volume: "856M",
    marketCap: "44.2B",
  },
  {
    symbol: "SOL",
    name: "Solana",
    price: 158.92,
    change: 12.34,
    volume: "3.8B",
    marketCap: "73.5B",
  },
  {
    symbol: "DOT",
    name: "Polkadot",
    price: 7.83,
    change: 4.21,
    volume: "421M",
    marketCap: "9.8B",
  }
];

export const useRealtimeCrypto = () => {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>(initialData);

  useEffect(() => {
    const interval = setInterval(() => {
      setCryptoData(prevData => 
        prevData.map(crypto => {
          // Generate random price change between -0.5% and +0.5%
          const priceChangePercent = (Math.random() - 0.5) * 1;
          const priceChange = crypto.price * (priceChangePercent / 100);
          const newPrice = crypto.price + priceChange;
          
          // Update 24h change
          const changeAdjustment = (Math.random() - 0.5) * 0.2;
          const newChange = crypto.change + changeAdjustment;

          return {
            ...crypto,
            price: parseFloat(newPrice.toFixed(crypto.price < 10 ? 4 : 2)),
            change: parseFloat(newChange.toFixed(2))
          };
        })
      );
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return cryptoData;
};
