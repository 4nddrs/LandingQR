// src/i18n/event.ts
export interface Event {
    id: string; // ID del documento
    name: string; // Nombre del evento
    avaStock: number; // Entradas disponibles
    stock: number; // Stock total
    date: string; // Fecha del evento
    ubi: string; // Ubicación
  }