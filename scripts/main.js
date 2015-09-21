'use strict';


function Quarterback(name, team) {
	this.name = name;
	this.team = team;
	this.type = 'Quarterback';
	this.attempts = 0;
	this.completions = 0;
	var yards = 0;
	this.touchdowns = 0;
	this.interceptions = 0;
	this.sacks = 0;
	this.longestCompletion = 0;

	this.getYards = function() {
		return yards;
	}

	this.setYards = function(y) {
		yards = y;
	}

	this.completionPercentage = function() {
		return Math.round(this.completions / this.attempts * 100)+'%';
	}
	this.yardsPerAttempt = function() {
		return this.yards / this.attempts;
	}
	this.addAttempt = function(type, yards) {
		type = type.toLowerCase();
		if(type === 'touchdown') {
			this.touchdowns++;
			this.attempts++;
			this.completions++;
			this.yards += yards;
		}
		else if(type === 'interception') {
			this.interceptions++;
			this.attempts++;
		}
		else if(type === 'incomplete') {
			this.attempts++;
		}
		else if(type === 'completion') {
			this.attempts++;
			this.completions++;
			this.yards += yards;
		}
		else if(type === 'sack') {
			this.attempts++;
			this.sacks++;
			this.yards += yards;
		}
	}
}

var tonyRomo = new Quarterback('Tony Romo', 'Dallas Cowboys');
var eliManning = new Quarterback('Eli Mannine','New York Giants');


var tonyRomo = {
	name: 'Tony Romo',
	team: 'Dallas Cowboys',
	attempts: 72,
	completions: 54,
	yards: 551,
	touchdowns: 3,
	interceptions: 2,
	sacks: 3,
	longestCompletion: 39,
	completionPercentage: function() {
		return Math.round(this.completions / this.attempts * 100)+'%';
	}
};

console.log(tonyRomo.completionPercentage());

var eliManning = {
	name: 'Eli Manning',
	team: 'New York Giants',
	attempts: 12,
	completions: 2,
	yards: 0,
	touchdowns: 0,
	interceptions: 0,
	sacks: 0,
	longestCompletion: 0,
	completionPercentage: function() {
		return Math.round(this.completions / this.attempts * 100)+'%';
	}
};

console.log(eliManning.completionPercentage());









