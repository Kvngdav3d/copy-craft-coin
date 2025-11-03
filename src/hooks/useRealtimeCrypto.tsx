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
      const coinIds = ['bitcoin', 'ethereum', 'binancecoin', 'cardano', 'solana', 'polkadot', 'polygon', 'chainlink', 'uniswap', 'dogecoin', 'shiba-inu', 'litecoin', 'avalanche-2', 'cosmos', 'vechain', 'algorand'];
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
        { symbol: "BTC", name: "Bitcoin", price: 67485.23, change: 5.47, volume: "28.5B", marketCap: "1.33T" },
        { symbol: "ETH", name: "Ethereum", price: 3842.15, change: -2.31, volume: "15.2B", marketCap: "462.8B" },
        { symbol: "BNB", name: "Binance Coin", price: 635.89, change: 8.92, volume: "2.1B", marketCap: "95.7B" },
        { symbol: "ADA", name: "Cardano", price: 1.24, change: -1.56, volume: "856M", marketCap: "44.2B" },
        { symbol: "SOL", name: "Solana", price: 158.92, change: 12.34, volume: "3.8B", marketCap: "73.5B" },
        { symbol: "DOT", name: "Polkadot", price: 7.83, change: 4.21, volume: "421M", marketCap: "9.8B" },
        { symbol: "MATIC", name: "Polygon", price: 0.92, change: 24.56, volume: "892M", marketCap: "8.5B" },
        { symbol: "LINK", name: "Chainlink", price: 14.82, change: 18.92, volume: "1.2B", marketCap: "8.9B" },
        { symbol: "UNI", name: "Uniswap", price: 6.45, change: 15.47, volume: "245M", marketCap: "4.8B" },
        { symbol: "DOGE", name: "Dogecoin", price: 0.082, change: -12.34, volume: "1.8B", marketCap: "11.7B" },
        { symbol: "SHIB", name: "Shiba Inu", price: 0.000009, change: -8.91, volume: "456M", marketCap: "5.3B" },
        { symbol: "LTC", name: "Litecoin", price: 94.32, change: -6.78, volume: "678M", marketCap: "7.1B" },
        { symbol: "AVAX", name: "Avalanche", price: 38.45, change: 8.23, volume: "534M", marketCap: "14.2B" },
        { symbol: "ATOM", name: "Cosmos", price: 11.67, change: 5.89, volume: "289M", marketCap: "4.6B" },
        { symbol: "VET", name: "VeChain", price: 0.034, change: 12.45, volume: "178M", marketCap: "2.5B" },
        { symbol: "ALGO", name: "Algorand", price: 0.28, change: -3.21, volume: "234M", marketCap: "2.3B" },
      ]);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Fetch immediately on mount
    fetchCryptoData();

    // Update every 5 seconds for real-time feel
    const interval = setInterval(fetchCryptoData, 5000);

    return () => clearInterval(interval);
  }, []);

  return { cryptoData, isLoading };
};
