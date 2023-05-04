'use strict';

/**
 * welcome-post controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::welcome-post.welcome-post');
