const IconMapping = function() {};

IconMapping.translateIcon = function(iconType) {
	switch (iconType) {
		case 'roadAccident':
		case 'emergencyInformation':
		case 'dangerAccident':	
			return 'accident';
		case 'trafficMessage':
		case 'trafficMessagePlanned':
			return 'message';
		case 'roadClosed':
		case 'roadClosedPlanned':
			return 'restriction';
		case 'roadwork':
		case 'roadworkPlanned': 
			return 'roadwork';
		case 'police':
			return 'police';
		case 'ferryDepartureOnSchedule':
		case 'ferryServiceNotOperating':
			return 'ferry';
		default: return 'message';
		case 'sideRoadHazard':
		case 'roadHazard':
			return 'hazard';
		case 'weather':
			return 'weather';	
	}
}
module.exports = IconMapping;
