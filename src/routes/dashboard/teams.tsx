import { createFileRoute } from '@tanstack/react-router'
import LayoutComponent from './_layout'
import {useQuery} from "@tanstack/react-query"
import { fetchAllTeams } from '@/api/teamsRequest'
import { Button } from '@/components/ui/button'
import {Loader2 } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from '@/components/ui/dialog'
import { useState } from 'react'
import { fetchTeamStatsById } from '@/api/teamsRequest'

export const Route = createFileRoute('/dashboard/teams')({
  component: RouteComponent,
})

function RouteComponent() {
  const { isPending, isError, data } = useQuery({
    queryKey: ["teams"],
    queryFn: fetchAllTeams
  });


  const [teamId, setTeamId] = useState<number | string>();

  const {isPending:loading, isError:error, data:TeamStats} = useQuery({
          queryKey: ["teamStats", teamId],
          queryFn: () => fetchTeamStatsById(teamId as number),
  })
    return (
      <LayoutComponent>
        <div className="h-full w-full overflow-auto">
          <h1 className="font-clash-bold text-2xl font-bold mb-4 uppercase">
            Teams{" "}<span className='text-orange-300'>&gt;</span>{" "}National Basketball Association
          </h1>
         {
          isPending? (
            <div className="h-screen flex justify-center items-center ">
            <span className="flex justify-center items-center">
               <Loader2
               size={50}
                className='animate-spin text-orange-500 '/>
            </span>
            </div>
          ): isError ? (
            <p className='flex justify-center items-center'>
            Error loading data
          </p>
          ):  (
          <div className='w-full grid grid-cols-1 md:grid-cols-3 place-items-even gap-5 overflow-visible'>
                      {data?.map((team: any) => (
                        <div key={team.id} className="flex justify-between items-center p-4 w-84 h-48 border border-gray-200 rounded-md shadow-md mb-4" onClick={()=> setTeamId(team.id)}>
                          <div className='w-4/5 flex flex-col justify-center items-start gap-2'>
                          <img src={team.logo} alt={team.name} className="w-20 h-20" />
                          <h2 className="text-lg font-clash-medium">{team.name}</h2>
                          <Dialog>
                            <DialogTrigger asChild>
                            <Button className="bg-orange-300 font-Poppins font-normal text-gray-800 text-xs px-3 py-2 rounded-md hover:cursor-pointer hover:font-satohsi-bold hover:bg-orange-500 hover:text-white"
                           >View Team Stats</Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                              <DialogTitle className="text-lg font-clash-medium">{team.name}</DialogTitle>
                              <DialogDescription className='font-clash-medium'>
            {`Here all stats related to
             ${team.name}`}
          </DialogDescription>
                              </DialogHeader>
                              {loading ? (
                                <div>
                                  <span className="flex justify-center items-center">
                                    <Loader2
                                    size={50}
                                    className='animate-spin text-orange-500 '/>
                                  </span>
                                </div>
                              ): error ? (
                                <p className='flex justify-center items-center font-satoshi-medium text-red-400'>{`There was error loading stats for ${team.name}` } </p>
                              ): !TeamStats || TeamStats.length === 0 ? (
                                <p className="flex justify-center items-center">No stats available.</p>
                              )  : (
                               <div key={TeamStats.stats.id} className="flex flex-col justify-center items-start gap-2">
                                  <h3>{TeamStats.stats.games.loses.all.total}</h3>
                               </div>
                              )}
                            </DialogContent>
                          </Dialog>
                            </div>
                         <div className="w-1/5 h-full flex justify-start items-start">
                         <div className="flex justify-center items-center gap-2  bg-green-300  px-4 py-2 rounded-md">
                         <img src={team.country.flag} alt={team.country.name} className="w-5 h-5" />
                         <p className="text-green-800 font-Poppins font-normal text-xs">{team.country.name}</p>
                        
                          </div>
                          </div>
                         
                        </div>
                      ))}
                      </div>
                    )  
          }
        </div>
      </LayoutComponent>
    );
  }
