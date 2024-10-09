"use client"

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const RulesSection = () => {
  const rules = [
    "El torneo se jugará en el mapa Abismo de los Lamentos (ARAM).",
    "Cada equipo estará compuesto por 5 jugadores.",
    "Los campeones serán asignados aleatoriamente, como es habitual en ARAM.",
    "Las partidas serán al mejor de 1 (Bo1) hasta la final, que será al mejor de 3 (Bo3).",
    "Se prohíbe el uso de hacks, scripts o cualquier software que otorgue ventajas injustas.",
    "Los jugadores deben mantener un comportamiento deportivo y respetuoso en todo momento.",
    "En caso de desconexión, se permitirá una pausa de hasta 10 minutos por equipo por partida.",
    "El equipo ganador será el que destruya el nexo enemigo o el que tenga ventaja si se alcanza el límite de tiempo.",
    "Las decisiones de los árbitros del torneo son definitivas.",
    "Los premios serán entregados al finalizar el torneo en la ceremonia de clausura."
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Reglas del Torneo</CardTitle>
        <CardDescription>Asegúrate de conocer y seguir todas las reglas del torneo</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-2">
          {rules.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default RulesSection;