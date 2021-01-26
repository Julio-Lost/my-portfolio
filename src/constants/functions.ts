export function salvarEstadoDarkOuLight(darkMode: boolean) {
  if (darkMode) {
    localStorage.setItem("darkMode", "dark");
  } else {
    localStorage.setItem("darkMode", "light");
  }
}

export function BuscarEstadoDarkOuLight() {
  const darkModeAtivo = localStorage.getItem("darkMode");

  if (darkModeAtivo === "dark") {
    return true;
  } else {
    return false;
  }
}

export function IncrementarAnoDeExperiencia(anoInicial: number) {
  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();

  if (anoAtual > anoInicial) {
    return anoAtual - anoInicial;
  } else {
    return anoAtual / anoInicial;
  }
}

export function AjustarTextoDeExperiencia(anoInicial: number) {
  const retornoExperiencia = IncrementarAnoDeExperiencia(anoInicial);

  if (retornoExperiencia > 1) {
    return "anos";
  } else {
    return "ano";
  }
}
