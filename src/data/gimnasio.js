// Datos de Área Fit tomados de su Instagram @areafit.cali (12-nov-2026). Cambiar aquí, no en la página.
// Las tarifas son de ejemplo: el gimnasio no las publica. Reemplazar por las reales.

// En la maqueta los botones abren chat con José David. Para la página real: '573157809404' (WhatsApp del gimnasio).
export const WHATSAPP = '573145727863';

export const GIMNASIO = {
  nombre: 'Área Fit',
  direccion: 'Calle 52 # 12-31, Villa Colombia, Cali',
  telefono: '315 780 9404',
  instagram: 'https://www.instagram.com/areafit.cali/',
};

export const DATOS = [
  { valor: 'Grupales', texto: 'clases' },
  { valor: 'Funcional', texto: 'entrenamiento' },
  { valor: '5 a. m.', texto: 'abrimos entre semana' },
  { valor: '7 días', texto: 'abiertos' },
];

// Tarifas de ejemplo. `meses` sirve para calcular el precio por mes de los planes largos.
export const PLANES = [
  { nombre: 'Día', precio: 10000, detalle: 'Para probar o si viene de visita.', grupo: 'corto' },
  { nombre: 'Semana', precio: 30000, detalle: '7 días seguidos.', grupo: 'corto' },
  { nombre: '15 días', precio: 45000, detalle: '15 días seguidos.', grupo: 'corto' },
  { nombre: '1 mes', precio: 75000, meses: 1, detalle: 'Toda la sala y las clases grupales.', grupo: 'mes', destacado: true },
  { nombre: 'Plan pareja', precio: 70000, detalle: 'El mes para dos. Precio por persona.', grupo: 'mes', sufijo: 'c/u' },
  { nombre: '3 meses', precio: 210000, meses: 3, grupo: 'largo' },
  { nombre: '6 meses', precio: 400000, meses: 6, grupo: 'largo' },
  { nombre: '1 año', precio: 750000, meses: 12, grupo: 'largo', destacado: true },
];

export const PRECIO_MES = 75000;

export const pesos = (n) => '$' + Math.round(n).toLocaleString('es-CO');
