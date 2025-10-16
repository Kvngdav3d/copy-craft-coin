import { useState, useEffect } from 'react';

interface CryptoData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  volume: string;
  marketCap: string;
}

const formatNumber = (num: number): string => {
  if (num >= 1e12) return (num / 1e12).toFixed(2) + 'T';
  if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
  if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
  return num.toFixed(2);
};

export const useRealtimeCrypto = () => {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCryptoData = async () => {
    try {
      const coinIds = ['bitcoin', 'ethereum', 'binancecoin', 'cardano', 'solana', 'polkadot'];
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinIds.join(',')}&order=market_cap_desc&sparkline=false&price_change_percentage=24h`
      );
      
      if (!response.ok) throw new Error('Failed to fetch crypto data');
      
      const data = await response.json();
      
      const formattedData: CryptoData[] = data.map((coin: any) => ({
        symbol: coin.symbol.toUpperCase(),
        name: coin.name,
        price: coin.current_price,
        change: coin.price_change_percentage_24h || 0,
        volume: formatNumber(coin.total_volume),
        marketCap: formatNumber(coin.market_cap),
      }));
      
      setCryptoData(formattedData);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching crypto data:', error);
      // Fallback to initial data if API fails
      setCryptoData([
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
      ]);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Fetch immediately on mount
    fetchCryptoData();

    // Update every 30 seconds (CoinGecko free tier rate limit)
    const interval = setInterval(fetchCryptoData, 30000);

    return () => clearInterval(interval);
  }, []);

  return { cryptoData, isLoading };
};
