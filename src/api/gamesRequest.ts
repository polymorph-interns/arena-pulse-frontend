import { gql } from "@apollo/client";

// export const BASE_API_URL = "https://arena-pulse-backend.onrender.com/v1"

// export const fetchGames = async(id:number | string)=>
// {
//   const games= await fetch(`${BASE_API_URL}/games/team/${id}`,
//     {
//       method:"GET"
//     }
//   )
//   return games.json();
// }


export const GET_GAMES = gql`
query GetAllGames($teamId: ID!, $leagueId: String, $season: String) {
  fixtures(teamId: $teamId, leagueId: $leagueId, season: $season) {
    id
    teams {
      away {
        logo
        name
      }
      home {
        logo
        name
      }
    }
    status {
      long
    }
    venue
    scores {
      away {
        over_time
        quarter_1
        quarter_2
        quarter_3
        quarter_4
        total
      }
      home {
        quarter_1
        over_time
        quarter_2
        quarter_3
        quarter_4
        total
      }
    }
    time
    date
  }
}
`
