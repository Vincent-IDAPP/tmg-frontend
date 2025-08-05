const fetcher = async (route) => {
    const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:80"
      : process.env.NEXT_PUBLIC_API_URL || "http://nginx";

      try {
        const res = await fetch(`${baseUrl}${route}`, {
          cache: "no-store", // pour éviter les caches avec SSR
        });
    
        if (!res.ok) {
          console.error("Erreur HTTP", res.status);
          return null;
        }
    
        const data = await res.json();
        return data;
      } catch (error) {
        console.error("Erreur lors du fetch :", error);
        return null;
      }
}

export default fetcher