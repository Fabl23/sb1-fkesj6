"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const TournamentBracket = () => {
  // Ejemplo de estructura de datos para el bracket
  const bracketData = [
    { round: 'Cuartos de Final', matches: [
      { team1: 'Equipo A', team2: 'Equipo B', winner: 'Equipo A' },
      { team1: 'Equipo C', team2: 'Equipo D', winner: 'Equipo D' },
      { team1: 'Equipo E', team2: 'Equipo F', winner: 'Equipo E' },
      { team1: 'Equipo G', team2: 'Equipo H', winner: 'Equipo H' },
    ]},
    { round: 'Semifinales', matches: [
      { team1: 'Equipo A', team2: 'Equipo D', winner: 'Equipo A' },
      { team1: 'Equipo E', team2: 'Equipo H', winner: 'Equipo H' },
    ]},
    { round: 'Final', matches: [
      { team1: 'Equipo A', team2: 'Equipo H', winner: '' },
    ]},
  ];

  return (
    <div className="flex justify-around">
      {bracketData.map((round, index) => (
        <div key={index} className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold text-center">{round.round}</h3>
          {round.matches.map((match, matchIndex) => (
            <Card key={matchIndex} className="w-48">
              <CardHeader>
                <CardTitle className="text-sm">Partido {matchIndex + 1}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className={`text-sm ${match.winner === match.team1 ? 'font-bold' : ''}`}>{match.team1}</div>
                <div className={`text-sm ${match.winner === match.team2 ? 'font-bold' : ''}`}>{match.team2}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TournamentBracket;