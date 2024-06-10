const mineflayer = require('mineflayer');
const pvp = require('mineflayer-pvp').plugin;
const { pathfinder, Movements, goals } = require('mineflayer-pathfinder');
const armorManager = require('mineflayer-armor-manager');
const AutoAuth = require('mineflayer-auto-auth');

const config = require('./config');

const bot = mineflayer.createBot(config);

// Load plugins and set up event listeners
bot.loadPlugin(pvp);
bot.loadPlugin(armorManager);
bot.loadPlugin(pathfinder);

// Set up event listeners for bot behavior
bot.on('playerCollect', (collector, itemDrop) => {
  // ...
});

bot.on('physicTick', () => {
  // ...
});

bot.on('chat', (username, message) => {
  // ...
});

bot.on('kicked', () => {
  console.log('Kicked from server. Reconnecting...');
  createBot(); // Restart the bot when kicked
});

bot.on('error', (err) => {
  console.log('Error:', err);
});

bot.on('end', () => {
  console.log('Bot disconnected. Reconnecting...');
  createBot(); // Restart the bot when disconnected
});

// Start the bot
bot.start();
