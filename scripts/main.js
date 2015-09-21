'use strict';

// Quarterback Stats 

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
				if(yards > this.longestCompletion){
					this.longestCompletion = yards;
				}
		}
		else if(type === 'sack') {
			this.attempts++;
			this.sacks++;
			this.yards += yards;
		}
	}
}

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
	attempts: 76,
	completions: 47,
	yards: 485,
	touchdowns: 2,
	interceptions: 0,
	sacks: 3,
	longestCompletion: 67,
	completionPercentage: function() {
		return Math.round(this.completions / this.attempts * 100)+'%';
	}

};

console.log(eliManning.completionPercentage());

//Rushing Stats

function Rushing(name, team) {
	this.name = name;
	this.team = team;
	this.type = 'Rushing';
	this.attempts = 0;
	var yards = 0;
	this.touchdowns = 0;
	this.firstDowns = 0;
	this.fumbles = 0;
	this.longestRush = 0;
	this.over20 = 0;

	this.yardsPerAttempt = function(){
    return this.yards / this.attempts;
  	}
  	this.addAttempt = function(type, yards){
    	type = type.toLowerCase();
    	if(type === 'fumble'){
	      	this.attempts++;
	      	this.fumbles++;
	      	this.yards += yards;
	    }else if(type === 'first down'){
		    this.firstDowns++;
		    this.attempts++;
		    this.yards += yards;
	    }else if(type === 'touchdown'){
		    this.touchdowns++;
		    this.attempts++;
		    this.yards += yards;
		      if(yards > this.longestRush){
		        this.longestRush = yards;
		      }
		      if(yards > 20){
		        this.over20++;
		      }
    	}
  	}
}

// Kicking Stats

function Kicking(name, team) {
  	this.name = name;
  	this.team = team;
  	this.type = 'Kicking';
  	this.attempts = 0;
  	this.made = 0;
  	this.longestFieldGoal = 0;
  	this.missed = 0;

  	this.fieldGoalPercentage = function(){
    	return Math.round(this.attempts / this.made * 100)+'%';
  		};
  	this.addAttempt = function(type,yards){
  		type = type.toLowerCase();
    	if(type === 'made'){
      		this.made++;
      		this.attempts++;
      	if(yards > this.longestFieldGoal){
        	this.longestFieldGoal = yards;
      	}
    }	
    	else if(type === 'missed'){
      		this.attempts++;
    }
  }
}



var tonyRomo = new Quarterback('Tony Romo', 'Dallas Cowboys');
var eliManning = new Quarterback('Eli Manning','New York Giants');

var deAngelo = new Rushing('DeAngelo Williams', 'Pittsburg Steelers');
var carlosHyde = new Rushing('Carlos Hyde','San Francisco 49ers');

var joshBrown = new Kicking('Josh Brown','New York Giants');
var shaunSuisham = new Kicking('Shaun Suisham', 'Pittsburg Steelers');






