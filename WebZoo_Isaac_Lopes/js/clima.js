const weatherButton = document.querySelector("#weather-button");
if (weatherButton) {
  const weatherResult = document.querySelector("#weather-result");
  const weatherTip = document.querySelector("#weather-tip");
  weatherButton.addEventListener("click", async () => {
    weatherButton.disabled = true;
    weatherResult.textContent = "Consultando a previsão do tempo...";
    weatherTip.textContent = "";
    try {
      const url = "https://api.open-meteo.com/v1/forecast?latitude=-23.65&longitude=-46.62&current=temperature_2m,precipitation&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=America%2FSao_Paulo&forecast_days=1";
      const response = await fetch(url);
      if (!response.ok) throw new Error("Falha na consulta");
      const data = await response.json();
      if (!data.current || !data.daily || !data.daily.temperature_2m_max) throw new Error("Dados indisponíveis");
      const temp = data.current.temperature_2m;
      const max = data.daily.temperature_2m_max[0];
      const min = data.daily.temperature_2m_min[0];
      const rain = data.daily.precipitation_probability_max[0];
      weatherResult.textContent = `Agora: ${temp} °C. Máxima de ${max} °C e mínima de ${min} °C. Chance de chuva: ${rain}%.`;
      if (rain >= 50) weatherTip.textContent = "Dica: há chance de chuva. Leve uma capa e confira as condições antes de sair.";
      else if (max >= 28) weatherTip.textContent = "Dica: o dia tende a ser quente. Use protetor solar, boné e leve água.";
      else if (min <= 15) weatherTip.textContent = "Dica: leve um agasalho para aproveitar a visita com conforto.";
      else weatherTip.textContent = "Dica: tempo favorável para percorrer as trilhas com calma.";
    } catch (error) {
      weatherResult.textContent = "A previsão do tempo não está disponível no momento.";
    } finally {
      weatherButton.disabled = false;
    }
  });
}
