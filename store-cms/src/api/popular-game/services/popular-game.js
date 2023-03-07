'use strict';

/**
 * popular-game service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::popular-game.popular-game');
