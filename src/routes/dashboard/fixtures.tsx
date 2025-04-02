import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { useState } from "react"
import LayoutComponent from './_layout'
import { fetchAllTeams } from '@/api/teamsRequest'
import { fetchGames } from '@/api/gamesRequest'
import { MapPin, Clock8 ,CalendarDays,ChevronUp,ChevronDown} from 'lucide-react'
import { Carousel, CarouselContent, CarouselItem,CarouselNext,
  CarouselPrevious } from '@/components/ui/carousel'
import { Table, TableRow, TableHeader, TableBody, TableHead, TableCell } from '@/components/ui/table'

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

const [showMatchDetails, setShowMatchDetails] = useState(false);
const [ gameId, setGameId] = useState<number>()
function getInitialsCode(teamName:string) {
  return teamName
      .split(" ")  // Split by space
      .map(word => word[0])  // Get the first letter of each word
      .join("");  // Join them together
}
  return (
    <LayoutComponent>
      <div className="h-full w-full overflow-auto p-4">
        <h1 className="font-clash-bold text-2xl font-bold mb-4 uppercase">
          Fixtures <span className='text-orange-300'>&gt;</span> National Basketball Association
        </h1>
<div className='min-h-screen flex flex-col gap-28'>
        <Carousel className="relative flex w-full overflow-hidden  gap-4 snap-x px-10">
          <CarouselContent className='pl-5 space-x-5'>
          {teamData?.map((team: any) => (
            <CarouselItem
              key={team.id}
              className={`
                flex-shrink-0 flex justify-center items-center gap-2 
                border-2 border-black rounded-full px-4 py-1 
                hover:bg-orange-300 hover:cursor-pointer md:basis-1/4
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
            </CarouselItem>
          ))}
          </CarouselContent>
          <CarouselPrevious className='absolute top-6 left-0 bg-orange-300 hover:cursor-pointer' />
        <CarouselNext className='absolute top-6 right-0 bg-orange-300 hover:cursor-pointer' />
        </Carousel>
       

        {/* Loading and error states */}
        {isPending && <p>Loading games...</p>}
        {isError && <p>Error loading games</p>}

        {/* Games display */}
        <div className="grid grid-cols-1  gap-6 ">
          {gameInfo?.map((game: any) => (
            <div key={game.id} className="flex flex-col border border-orange-200 rounded-lg p-3 mb-2 gap-5 hover:bg-orange-100">
             <div className="flex justify-between item-start">
              <div className='flex justify-center items-center gap-2'>
              <span className="bg-gray-200 px-3 py-1  rounded-full flex justify-center items-center gap-2 text-xs font-satoshi-medium">
                  <CalendarDays size={16} />
                  {game.date.split('T')[0]}
                  </span>  
             <span className="bg-gray-200 px-3 py-1  rounded-full flex justify-center items-center gap-2 text-xs font-satoshi-medium">
                  <Clock8 size={16} />
                  {game.time} EST
                  </span>
             
                  </div>
                <span className=" flex justify-center items-center bg-orange-300/50 text-xs px-3 py-[6px] rounded-full gap-1 font-satoshi-bold text-orange-700">
                  <MapPin size={16} />
                  {game.venue}
                </span>
                
              </div>
              <div className='flex flex-col justify-center items-center gap-2'>
               
                </div>
                <div className='grid grid-cols-3 place-items-center'>
                  <div className='flex flex-col justify-center items-center gap-2'>
                  <img src={game.teams.home.logo} alt={game.teams.home.name} className='w-18 h-18'/>
                  <span className="font-clash-semibold text-sm">
                    {game.teams.home.name}
                  </span>
                  </div>

                  <div className="flex flex-col justify-center items-center gap-3">
                    <span className="font-clash-semibold text-3xl">
                      {game.scores.home.total} - {game.scores.away.total}
                      </span>
                      <span className="font-clash-medium text-xs text-gray-600">
                        {game.status.long}
                      </span>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-2'>
                  <img src={game.teams.away.logo} alt={game.teams.away.name} className='w-18 h-18'/>
                  <span className="font-clash-semibold text-sm">
                    {game.teams.away.name}
                  </span>
                  </div>
                  </div>

                  <div className=" flex justify-center items-center " onClick={()=>setGameId(game.id)}>
                    <span className=' flex justify-center items-center gap-3 font-clash-semibold text-sm text-gray-500 border-2 border-gray-500  px-4 py-2 rounded-md hover:cursor-pointer ' onClick={()=>setShowMatchDetails(!showMatchDetails)}>
                      {showMatchDetails && gameId === game.id ? "Hide" : "Show"} {" "}
                       Score Details
                       {showMatchDetails && gameId === game.id ? (
                        <ChevronUp/>
                       ): (
                        <ChevronDown/>
                       )}
                      </span>
                  </div>
              {/* Add more game details as needed */}
              {

              }
              {showMatchDetails &&gameId === game.id ? (
             <div className='flex flex-col justify-center items-center gap-2 border-b'>
             <Table>
             <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] font-satoshi-bold">Teams</TableHead>
          <TableHead className=" font-satoshi-bold">Q1</TableHead>
          <TableHead className=" font-satoshi-bold">Q2</TableHead>
          <TableHead className=" font-satoshi-bold">Q3</TableHead>
          <TableHead className=" font-satoshi-bold">Q4</TableHead>
          <TableHead className=" font-satoshi-bold">OT</TableHead>

        </TableRow>
      </TableHeader>
      <TableBody>
          <TableRow key={game.id}>
            <TableCell className="font-medium font-satoshi-medium">{getInitialsCode(game.teams.home.name)}</TableCell>
            <TableCell className='font-satoshi-medium'>{game.scores.home.quarter_1}</TableCell>
            <TableCell className='font-satoshi-medium'>{game.scores.home.quarter_2}</TableCell>
            <TableCell className="font-satoshi-medium">{game.scores.home.quarter_3}</TableCell>
            <TableCell className="font-satoshi-medium">{game.scores.home.quarter_4}</TableCell>
            <TableCell className="font-satoshi-medium">{game.scores.home.over_time}</TableCell>
          </TableRow>
          <TableRow key={game.id}>
            <TableCell className="font-satoshi-medium">{getInitialsCode(game.teams.away.name)}</TableCell>
            <TableCell className='font-satoshi-medium'>{game.scores.away.quarter_1}</TableCell>
            <TableCell className='font-satoshi-medium'>{game.scores.away.quarter_2}</TableCell>
            <TableCell className="font-satoshi-medium">{game.scores.away.quarter_3}</TableCell>
            <TableCell className="font-satoshi-medium">{game.scores.away.quarter_4}</TableCell>
            <TableCell className="font-satoshi-medium">{game.scores.away.over_time}</TableCell>
          </TableRow>
      
      </TableBody>
             </Table>
              </div>
            ): null}
            </div>

          
          ))}
        </div>
        </div>
      </div>
    </LayoutComponent>
  )
}

export default Fixtures;
