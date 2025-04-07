import { gql } from "@apollo/client";
export const BASE_API_URL = "https://arena-pulse-backend.onrender.com/v1/teams"

// export const fetchAllTeams= async()=>
// {
//   const teams= await fetch(`${BASE_API_URL}/`,
//     {
//       method:"GET"
//     }
//   )
//   return teams.json();
// }

export const fetchTeamById= async(id:number)=>
{
  const team= await fetch(`${BASE_API_URL}/${id}`)
  return team.json();
}

export const fetchTeamStatsById =async(id:number)=>
{
  let teamStats = await fetch(`${BASE_API_URL}/${id}/stats`);
  if (!teamStats.ok) {
    throw new Error(`Failed to fetch team stats: ${teamStats.statusText}`);
  }
  const teamStatsData = await teamStats.json();
  console.log(teamStatsData)
  return teamStatsData;
}


//GrqphQL Queries
export const GET_ALL_TEAMS = gql`
    query GetAllTeams {
      teams {
      id
      logo
      name
      country {
      flag
      name
    }
  }
    }
`;

export const GET_TEAM_STATS = gql`
query TeamStats($teamId: ID!) {
  teamStats(teamId: $teamId) {
    games {
      played {
        all
        away
        home
      }
      loses {
        all {
          total
        }
        away {
          total
        }
        home {
          total
        }
      }
      wins {
        all {
          total
        }
        away {
          total
        }
        home {
          total
        }
      }
    }
    points {
      against {
        average {
          all
          away
          home
        }
      }
      for {
        average {
          all
          away
          home
        }
      }
    }
    team {
      name
    }
  }
}
`
