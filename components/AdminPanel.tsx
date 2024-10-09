"use client"

import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const AdminPanel = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    // Implementar lógica de autenticación aquí
    if (password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Contraseña incorrecta');
    }
  };

  if (!isAuthenticated) {
    return (
      <Card className="w-[350px] mx-auto">
        <CardHeader>
          <CardTitle>Acceso Administrador</CardTitle>
          <CardDescription>Ingrese la contraseña para acceder al panel de administración</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Contraseña</Label>
              <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={handleLogin}>Ingresar</Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Gestión del Torneo</CardTitle>
          <CardDescription>Actualice el estado del torneo y los equipos</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="match">Seleccionar Partido</Label>
              <Select>
                <SelectTrigger id="match">
                  <SelectValue placeholder="Seleccione un partido" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="m1">Cuartos 1: Equipo A vs Equipo B</SelectItem>
                  <SelectItem value="m2">Cuartos 2: Equipo C vs Equipo D</SelectItem>
                  {/* Agregar más partidos aquí */}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="winner">Seleccionar Ganador</Label>
              <Select>
                <SelectTrigger id="winner">
                  <SelectValue placeholder="Seleccione el ganador" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="team1">Equipo A</SelectItem>
                  <SelectItem value="team2">Equipo B</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button>Actualizar Resultado</Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Editar Reglas del Torneo</CardTitle>
          <CardDescription>Modifique las reglas del torneo</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="rules">Reglas del Torneo</Label>
            <textarea
              id="rules"
              className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Ingrese las reglas del torneo aquí"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Guardar Cambios</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AdminPanel;