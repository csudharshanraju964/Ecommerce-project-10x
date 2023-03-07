'use strict';

/**
 * puzzle-game service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::puzzle-game.puzzle-game');
