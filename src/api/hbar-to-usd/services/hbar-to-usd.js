'use strict';

/**
 * hbar-to-usd service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hbar-to-usd.hbar-to-usd');
