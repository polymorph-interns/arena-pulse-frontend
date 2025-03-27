export const BASE_API_URL = "http://localhost:4000/v1/teams"

export const fetchAllTeams= async()=>
{
  const teams= await fetch(`${BASE_API_URL}/`,
    {
      method:"GET"
    }
  )
  return teams.json();
}

export const fetchTeamById= async(id:number)=>
{
  const team= await fetch(`${BASE_API_URL}/${id}`)
  return team.json();
}

export const fetchTeamStatsById =async(id:number)=>
{
  const teamStats = await fetch(`${BASE_API_URL}/${id}/stats`)
  return teamStats.json();
}
