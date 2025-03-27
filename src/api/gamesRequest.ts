export const BASE_API_URL = "https://arena-pulse-backend.onrender.com/v1"

export const fetchGames = async(id:number | string)=>
{
  const games= await fetch(`${BASE_API_URL}/games/team/${id}`,
    {
      method:"GET"
    }
  )
  return games.json();
}
