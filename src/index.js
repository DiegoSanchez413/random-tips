const tips = [
    "Maintaining correct posture ✔.",
    "Take breaks during the workday 🧑‍💻.",
    "Having a good chair 🪑.",
    "Avoiding carpal tunnel syndrome at all costs 🖐.",
    "Have a good night's sleep 💤.",
    "Deal with anxiety and stress 👨‍💻👩‍💻.",
    "Exercising regularly 🏃🏃‍♀️.",
    "Do not overdo your daily coffee consumption ☕."
]

const randomTip = () => {
    const tip = tips[Math.floor(Math.random()* tips.length)]
    console.log(tip);
}

export {randomTip}
