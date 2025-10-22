const quotes = [ 
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Don’t watch the clock; do what it does. Keep going.",
    "It always seems impossible until it’s done.",
    "The future depends on what you do today.",
    "Believe you can and you’re halfway there.",
    "Dream big and dare to fail.",
    "Be yourself; everyone else is already taken.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "Happiness is not something ready made. It comes from your own actions.",
    "In the middle of every difficulty lies opportunity.",
   "The best way to get started is to quit talking and begin doing.",
   "Act as if what you do makes a difference.",
   "Keep your face toward the sunshine.",
   "The best way to get started is to begin.",
   "The journey matters more than the destination.",
   "Opportunities don’t happen. You create them.",
   "Doubt kills more dreams than failure ever will.",
   "Small daily improvements lead to big results.",
   "Life begins at the end of your comfort zone.",
   "Be fearless in pursuit of what sets your soul on fire.",
];

const button = document.querySelector('button');
const quote = document.querySelector('h1');

button.addEventListener('click',()=>{
    const index = Math.floor(Math.random()*20);
    quote.textContent = quotes[index];
})

