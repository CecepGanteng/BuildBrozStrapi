'use strict';

/**
 * usd-to-idr service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::usd-to-idr.usd-to-idr');
