"use client"

import { useState } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Users, ChevronRight, ChevronLeft } from 'lucide-react';
import TournamentBracket from '@/components/TournamentBracket';
import AdminPanel from '@/components/AdminPanel';
import RulesSection from '@/components/RulesSection';
import StatsChart from '@/components/StatsChart';

export default function Home() {
  const [showAdmin, setShowAdmin] = useState(false);

  return (
    <div className="min-h-screen bg-aram">
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-8">
          <div className="logo-animation">
            <Image
              src="/inacap-logo.png"
              alt="Inacap Osorno Logo"
              width={150}
              height={50}
            />
          </div>
          <h1 className="text-4xl font-bold text-white">Torneo de League of Legends: ARAM</h1>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowAdmin(!showAdmin)}
          >
            {showAdmin ? <ChevronLeft className="mr-2 h-4 w-4" /> : <ChevronRight className="mr-2 h-4 w-4" />}
            {showAdmin ? 'Volver' : 'Admin'}
          </Button>
        </header>

        {showAdmin ? (
          <AdminPanel />
        ) : (
          <Tabs defaultValue="bracket" className="space-y-4">
            <TabsList>
              <TabsTrigger value="bracket">Bracket del Torneo</TabsTrigger>
              <TabsTrigger value="rules">Reglas</TabsTrigger>
              <TabsTrigger value="stats">Estadísticas</TabsTrigger>
            </TabsList>
            <TabsContent value="bracket">
              <Card>
                <CardHeader>
                  <CardTitle>Bracket del Torneo</CardTitle>
                  <CardDescription>Sigue el progreso de los equipos en el torneo</CardDescription>
                </CardHeader>
                <CardContent>
                  <TournamentBracket />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="rules">
              <RulesSection />
            </TabsContent>
            <TabsContent value="stats">
              <Card>
                <CardHeader>
                  <CardTitle>Estadísticas del Torneo</CardTitle>
                  <CardDescription>Visualiza las estadísticas generales del torneo</CardDescription>
                </CardHeader>
                <CardContent>
                  <StatsChart />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        )}

        <footer className="mt-8 text-center text-white">
          <p>&copy; 2023 Inacap Osorno. Todos los derechos reservados.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-white hover:text-primary">Facebook</a>
            <a href="#" className="text-white hover:text-primary">Twitter</a>
            <a href="#" className="text-white hover:text-primary">Instagram</a>
          </div>
        </footer>
      </div>
    </div>
  );
}