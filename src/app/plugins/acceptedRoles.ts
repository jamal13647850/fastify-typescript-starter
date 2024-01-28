"use strict";

const fp = require("fastify-plugin");

// Administrator
// Student
// Teacher
// Reporter
// Operator
// Expert

async function acceptedRoles(fastify: any, options: any, done: () => void) {
  const rolesMethodes = {
    listLevelCategory: ["Administrator", "Expert", "operator"],
    getLevelCategory: ["Administrator", "Expert", "operator"],
    addLevelCategory: ["Administrator", "operator"],
    updateLevelCategory: ["Administrator", "operator"],
    deleteLevelCategory: ["Administrator", "operator"],

    getLevelsSetting: ["Administrator", "Expert", "operator"],
    listLevelsSetting: ["Administrator", "Expert", "operator"],
    addLevelsSetting: ["Administrator", "Expert", "operator"],
    updateLevelsSetting: ["Administrator", "Expert", "operator"],
    deleteLevelsSetting: ["Administrator", "Expert", "operator"],

    getClassRegistrationLink: ["Administrator", "Expert", "operator"],
    listClassRegistrationLink: ["Administrator", "Expert", "operator"],
    addClassRegistrationLink: ["Administrator", "Expert", "operator"],
    updateClassRegistrationLink: ["Administrator", "Expert", "operator"],
    deleteClassRegistrationLink: ["Administrator", "Expert", "operator"],

    getBuyBooksLink: ["Administrator", "Expert", "operator"],
    listBuyBooksLink: ["Administrator", "Expert", "operator"],
    addBuyBooksLink: ["Administrator", "Expert", "operator"],
    updateBuyBooksLink: ["Administrator", "Expert", "operator"],
    deleteBuyBooksLink: ["Administrator", "Expert", "operator"],

    getResultPlacementTest: ["Administrator"],
    listResultPlacementTest: ["Administrator"],
    addResultPlacementTest: ["Administrator", "Expert", "operator"],
    updateResultPlacementTest: ["Administrator",  "operator"],
    deleteResultPlacementTest: ["Administrator",  "operator"],


   

    

    

   
  };

  fastify.decorate("rolesMethodes", rolesMethodes);
  done();
}

module.exports = fp(acceptedRoles, {
  name: "acceptedRoles",
});
export default fp(acceptedRoles, {
  name: "acceptedRoles",
});
