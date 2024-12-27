'use strict';

/**
 * product-email service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::product-email.product-email');
