'use strict';

// Constants of commands names
exports.connectCommand = 'ApiConnectCommand';
exports.commandStatus = 'ApiCommandStatus';
exports.keepAlive = 'KeepAlive';
exports.subscriptionStatus = 'SubscriptionStatus';
exports.subscribeCommand = 'ApiSubscribeCommand';
exports.queryCommand = 'ApiQueryCommand';
exports.queryStatusModel = 'ApiQueryStatusModel';
exports.regionModel = 'ApiRegionModel';
exports.leagueModel = 'ApiLeagueModel';
exports.teamModel = 'ApiTeamModel';
exports.eventModel = 'ApiEventUpdateModel';
exports.eventUpdateModel = 'ApiEventUpdateModel';
exports.lineModel = 'ApiLineModel';
exports.priceModel = 'ApiLinePriceModel';

// Commands convert table
const commandsConvertTable = {
  4000: {name: exports.connectCommand},
  4030: {name: exports.commandStatus},
  4003: {name: exports.subscribeCommand},
  4002: {name: exports.queryCommand},
  4100: {
    name: exports.queryStatusModel ,
    emittedName: 'queryFinish'
  },
  4110: {
    name: exports.regionModel ,
    emittedName: 'region'
  },
  4111: {
    name: exports.leagueModel,
    emittedName: 'league'
  },
  4112: {
    name: exports.teamModel,
    emittedName: 'team'
  },
  4113: {
    name: exports.eventModel,
    emittedName: 'event'
  },
  4114: {
    name: exports.eventUpdateModel,
    emittedName: 'eventUpdate'
  },
  4115: {
    name: exports.lineModel,
    emittedName: 'line'
  },
  4116: {
    name: exports.priceModel,
    emittedName: 'betOffer'
  }
};
commandsConvertTable[-10] = {
  name: exports.keepAlive ,
  isEmpty: true
};
commandsConvertTable[-12] = {name: exports.subscriptionStatus};


exports.commandsConvertTable = commandsConvertTable;

// Constants part end

exports.commandSocketIdentity = 'Octopol_Command';
exports.dataSocketIdentity = 'Octopol_Data';
