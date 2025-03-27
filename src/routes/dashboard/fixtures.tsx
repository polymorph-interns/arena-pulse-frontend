import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { useState } from "react"
import LayoutComponent from './_layout'
import { fetchAllTeams } from '@/api/teamsRequest'
import { fetchGames } from '@/api/gamesRequest'

export const Route = createFileRoute('/dashboard/fixtures')({
  component: Fixtures,
})

function Fixtures() {
  // Fetch the teams for the tabs
  const { data: teamData } = useQuery({
    queryKey: ["teams"],
    queryFn: fetchAllTeams
  });

  const [selectedTeamId, setSelectedTeamId] = useState<number | string>(132);

  // Fetch the games data for the selected team
  const { data: gameInfo, isPending, isError } = useQuery({
    queryKey: ["games", selectedTeamId],
    queryFn: () => fetchGames(selectedTeamId),
    // Only run the query when a team is selected
    enabled: selectedTeamId !== 0
  });

  return (
    <LayoutComponent>
      <div className="h-full w-full overflow-auto p-4">
        <h1 className="font-clash-bold text-2xl font-bold mb-4 uppercase">
          Fixtures <span className='text-orange-300'>&gt;</span> National Basketball Association
        </h1>

        <div className="grid grid-col-4 gap-4 overflow-x-auto">
          {teamData?.map((team: any) => (
            <div
              key={team.id}
              className={`
                flex-shrink-0 flex justify-center items-center gap-2 
                border-2 border-black rounded-full px-4 py-1 
                hover:bg-orange-300 hover:cursor-pointer
                ${selectedTeamId === team.id ? 'bg-orange-300' : ''}
              `}
              onClick={() => setSelectedTeamId(team.id)}
            >
              <img
                src={team.logo}
                alt={team.name}
                className="w-6 h-6 object-contain"
              />
              <p className="text-sm font-clash-medium">{team.name}</p>
            </div>
          ))}
        </div>

        {/* Loading and error states */}
        {isPending && <p>Loading games...</p>}
        {isError && <p>Error loading games</p>}

        {/* Games display */}
        <div className="mt-4">
          {gameInfo?.map((game: any) => (
            <div key={game.id} className="border p-2 mb-2">
              <p>Game ID: {game.id}</p>
              {/* Add more game details as needed */}
            </div>
          ))}
        </div>
      </div>
    </LayoutComponent>
  )
}

export default Fixtures;