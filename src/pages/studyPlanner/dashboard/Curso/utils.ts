export function numeroAordinal(numero: number | undefined): string {
  const ordinales: { [key: number]: string } = {
    1: "Primero",
    2: "Segundo",
    3: "Tercero",
    4: "Cuarto",
    5: "Quinto",
    6: "Sexto",
    7: "Séptimo",
    8: "Octavo",
    9: "Noveno",
    10: "Décimo"
  }

  return numero !== undefined ? ordinales[numero] || numero.toString() : "";
}

