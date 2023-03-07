'use strict';

/**
 * puzzle-game controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::puzzle-game.puzzle-game');
