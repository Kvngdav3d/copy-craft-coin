import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        setFavorites([]);
        setIsLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("favorites")
        .select("crypto_symbol")
        .eq("user_id", user.id);

      if (error) throw error;

      setFavorites(data?.map(f => f.crypto_symbol) || []);
    } catch (error) {
      console.error("Error loading favorites:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleFavorite = async (symbol: string, name: string) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast({
          title: "Authentication Required",
          description: "Please log in to add favorites",
          variant: "destructive",
        });
        return;
      }

      const isFavorited = favorites.includes(symbol);

      if (isFavorited) {
        const { error } = await supabase
          .from("favorites")
          .delete()
          .eq("user_id", user.id)
          .eq("crypto_symbol", symbol);

        if (error) throw error;

        setFavorites(favorites.filter(f => f !== symbol));
        toast({
          title: "Removed from favorites",
          description: `${symbol} has been removed from your watchlist`,
        });
      } else {
        const { error } = await supabase
          .from("favorites")
          .insert({
            user_id: user.id,
            crypto_symbol: symbol,
            crypto_name: name,
          });

        if (error) throw error;

        setFavorites([...favorites, symbol]);
        toast({
          title: "Added to favorites",
          description: `${symbol} has been added to your watchlist`,
        });
      }
    } catch (error) {
      console.error("Error toggling favorite:", error);
      toast({
        title: "Error",
        description: "Failed to update favorites",
        variant: "destructive",
      });
    }
  };

  const isFavorite = (symbol: string) => favorites.includes(symbol);

  return { favorites, isLoading, toggleFavorite, isFavorite };
};
