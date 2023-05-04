'use strict';

/**
 * welcome-post service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::welcome-post.welcome-post');
