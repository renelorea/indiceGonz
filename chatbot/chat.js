const respuestasGenericas = [
  "¡Buena pregunta! Te recomiendo seguir una rutina equilibrada 💪",
  "Eso depende de tus objetivos, pero siempre es bueno consultar con un entrenador.",
  "¡Gran duda! La constancia es clave en el gym 🏋️",
  "Recuerda calentar y cuidar tu técnica.",
  "La alimentación juega un papel crucial. ¡No la descuides! 🍎",
  "Entrenar con amigos puede motivarte más.",
  "Dormir bien es parte del progreso 💤",
  "Escucha a tu cuerpo. Si algo duele, descansa.",
  "No hay fórmulas mágicas: disciplina, paciencia y esfuerzo.",
  "¡Sigue así, vas por buen camino! 🔥"
];

function handleUserInput() {
  const inputField = document.getElementById("user-input");
  const userInput = inputField.value.trim();
  const chatLog = document.getElementById("chat-log");

  if (!userInput) return;

  chatLog.innerHTML += `<div class="user">Tú: ${userInput}</div>`;

  const randomIndex = Math.floor(Math.random() * respuestasGenericas.length);
  const reply = respuestasGenericas[randomIndex];

  chatLog.innerHTML += `<div class="bot">GymBot: ${reply}</div>`;
  inputField.value = "";
  chatLog.scrollTop = chatLog.scrollHeight;
}