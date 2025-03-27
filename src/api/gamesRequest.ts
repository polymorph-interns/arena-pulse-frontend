export const BASE_API_URL = "http://localhost:4000/v1"

export const fetchGames = async(id:number | string)=>
{
  const games= await fetch(`${BASE_API_URL}/games/team/${id}`,
    {
      method:"GET"
    }
  )
  return games.json();
}