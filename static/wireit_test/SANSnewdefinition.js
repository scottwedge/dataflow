var sans2 = {
	"propertiesFields" : [{
		"typeInvite" : "Enter a title",
		"type" : "string",
		"name" : "name",
		"label" : "Title"
	}, {
		"type" : "text",
		"name" : "description",
		"cols" : 30,
		"label" : "Description"
	}],
	"modules" : [{
		"container" : {
			"width" : 120,
			"terminals" : [{
				"direction" : [1, 0],
				"multiple" : true,
				"name" : "output",
				"required" : false,
				"alwaysSrc" : true,
				"ddConfig" : {
					"type" : "data2d.sans:out",
					"allowedTypes" : ["data2d.sans:in"]
				},
				"offsetPosition" : {
					"top" : 1,
					"right" : -16
				}
			}],
			"xtype" : "WireIt.Container",
			"height" : 16
		},
		"name" : "Load"
	}, {
		"container" : {
			"width" : 120,
			"terminals" : [{
				"direction" : [-1, 0],
				"multiple" : false,
				"name" : "input",
				"required" : true,
				"alwaysSrc" : false,
				"ddConfig" : {
					"type" : "data2d.sans:in",
					"allowedTypes" : ["data2d.sans:out"]
				},
				"offsetPosition" : {
					"top" : 1,
					"left" : -16
				}
			}],
			"xtype" : "WireIt.Container",
			"height" : 16
		},
		"name" : "Save"
	}, {
		"container" : {
			"terminals" : [{
				"direction" : [1, 0],
				"multiple" : true,
				"name" : "sample",
				"required" : false,
				"alwaysSrc" : false,
				"ddConfig" : {
					"type" : "data2d.sans:in",
					"allowedTypes" : ["data2d.sans:out"]
				},
				"offsetPosition" : {
					"top" : 10,
					"left" : 20
				}
			}, {
				"direction" : [1, 0],
				"multiple" : true,
				"name" : "empty_cell",
				"required" : false,
				"alwaysSrc" : false,
				"ddConfig" : {
					"type" : "data2d.sans:in",
					"allowedTypes" : ["data2d.sans:out"]
				},
				"offsetPosition" : {
					"top" : 20,
					"left" : 20
				}
			}, {
				"direction" : [1, 0],
				"multiple" : true,
				"name" : "blocked",
				"required" : false,
				"alwaysSrc" : false,
				"ddConfig" : {
					"type" : "data2d.sans:in",
					"allowedTypes" : ["data2d.sans:out"]
				},
				"offsetPosition" : {
					"top" : 40,
					"left" : 20
				}
			}, {
				"direction" : [1, 0],
				"multiple" : true,
				"name" : "sample",
				"required" : false,
				"alwaysSrc" : true,
				"ddConfig" : {
					"type" : "data2d.sans:out",
					"allowedTypes" : ["data2d.sans:in"]
				},
				"offsetPosition" : {
					"top" : 10,
					"left" : 20
				}
			}, {
				"direction" : [1, 0],
				"multiple" : true,
				"name" : "empty_cell",
				"required" : false,
				"alwaysSrc" : true,
				"ddConfig" : {
					"type" : "data2d.sans:out",
					"allowedTypes" : ["data2d.sans:in"]
				},
				"offsetPosition" : {
					"top" : 20,
					"left" : 20
				}
			}, {
				"direction" : [1, 0],
				"multiple" : true,
				"name" : "blocked",
				"required" : false,
				"alwaysSrc" : true,
				"ddConfig" : {
					"type" : "data2d.sans:out",
					"allowedTypes" : ["data2d.sans:in"]
				},
				"offsetPosition" : {
					"top" : 40,
					"left" : 20
				}
			}],
			"xtype" : "WireIt.ImageContainer",
			"image" : "../../static/img/deadtime.png",
			"icon" : "../../static/img/deadtime.png"
		},
		"name" : "Dead time Correction"
	}, {
		"container" : {
			"terminals" : [{
				"direction" : [1, 0],
				"multiple" : true,
				"name" : "sample",
				"required" : false,
				"alwaysSrc" : false,
				"ddConfig" : {
					"type" : "data2d.sans:in",
					"allowedTypes" : ["data2d.sans:out"]
				},
				"offsetPosition" : {
					"top" : 10,
					"left" : 20
				}
			}, {
				"direction" : [1, 0],
				"multiple" : true,
				"name" : "empty_cell",
				"required" : false,
				"alwaysSrc" : false,
				"ddConfig" : {
					"type" : "data2d.sans:in",
					"allowedTypes" : ["data2d.sans:out"]
				},
				"offsetPosition" : {
					"top" : 10,
					"left" : 20
				}
			}, {
				"direction" : [-1, 0],
				"multiple" : true,
				"name" : "Tsam",
				"required" : false,
				"alwaysSrc" : false,
				"ddConfig" : {
					"type" : "data2d.sans:in",
					"allowedTypes" : ["data2d.sans:out"]
				},
				"offsetPosition" : {
					"top" : 100,
					"left" : 0
				}
			}, {
				"direction" : [-1, 0],
				"multiple" : true,
				"name" : "Temp",
				"required" : false,
				"alwaysSrc" : false,
				"ddConfig" : {
					"type" : "data2d.sans:in",
					"allowedTypes" : ["data2d.sans:out"]
				},
				"offsetPosition" : {
					"top" : 130,
					"left" : 0
				}
			}, {
				"direction" : [1, 0],
				"multiple" : true,
				"name" : "sample",
				"required" : false,
				"alwaysSrc" : true,
				"ddConfig" : {
					"type" : "data2d.sans:out",
					"allowedTypes" : ["data2d.sans:in"]
				},
				"offsetPosition" : {
					"top" : 10,
					"left" : 20
				}
			}, {
				"direction" : [1, 0],
				"multiple" : true,
				"name" : "empty_cell",
				"required" : false,
				"alwaysSrc" : true,
				"ddConfig" : {
					"type" : "data2d.sans:out",
					"allowedTypes" : ["data2d.sans:in"]
				},
				"offsetPosition" : {
					"top" : 10,
					"left" : 20
				}
			}, {
				"direction" : [1, 0],
				"multiple" : true,
				"name" : "trans",
				"required" : false,
				"alwaysSrc" : true,
				"ddConfig" : {
					"type" : "data2d.sans:out",
					"allowedTypes" : ["data2d.sans:in"]
				},
				"offsetPosition" : {
					"top" : 10,
					"left" : 20
				}
			}],
			"xtype" : "WireIt.ImageContainer",
			"image" : "../../static/img/generate_transmission.png",
			"icon" : "../../static/img/generate_transmission.png"
		},
		"name" : "generate_transmission"
	}, {
		"container" : {
			"terminals" : [{
				"direction" : [-1, 0],
				"multiple" : true,
				"name" : "COR",
				"required" : false,
				"alwaysSrc" : false,
				"ddConfig" : {
					"type" : "data2d.sans:in",
					"allowedTypes" : ["data2d.sans:out"]
				},
				"offsetPosition" : {
					"top" : 10,
					"left" : 0
				}
			}, {
				"direction" : [1, 0],
				"multiple" : true,
				"name" : "DIV",
				"required" : false,
				"alwaysSrc" : false,
				"ddConfig" : {
					"type" : "data2d.sans:in",
					"allowedTypes" : ["data2d.sans:out"]
				},
				"offsetPosition" : {
					"top" : 10,
					"left" : 20
				}
			}, {
				"direction" : [1, 0],
				"multiple" : true,
				"name" : "DIV",
				"required" : false,
				"alwaysSrc" : true,
				"ddConfig" : {
					"type" : "data2d.sans:out",
					"allowedTypes" : ["data2d.sans:in"]
				},
				"offsetPosition" : {
					"top" : 10,
					"left" : 20
				}
			}],
			"xtype" : "WireIt.ImageContainer",
			"image" : "../../static/img/SANS/div.png",
			"icon" : "../../static/img/SANS/div.png"
		},
		"name" : "Correct Detector Sensitivity"
	}, {
		"container" : {
			"terminals" : [{
				"direction" : [-1, 0],
				"multiple" : true,
				"name" : "sample",
				"required" : false,
				"alwaysSrc" : false,
				"ddConfig" : {
					"type" : "data2d.sans:in",
					"allowedTypes" : ["data2d.sans:out"]
				},
				"offsetPosition" : {
					"top" : 10,
					"left" : 0
				}
			}, {
				"direction" : [-1, 0],
				"multiple" : true,
				"name" : "empty_cell",
				"required" : false,
				"alwaysSrc" : false,
				"ddConfig" : {
					"type" : "data2d.sans:in",
					"allowedTypes" : ["data2d.sans:out"]
				},
				"offsetPosition" : {
					"top" : 50,
					"left" : 0
				}
			}, {
				"direction" : [-1, 0],
				"multiple" : true,
				"name" : "blocked",
				"required" : false,
				"alwaysSrc" : false,
				"ddConfig" : {
					"type" : "data2d.sans:in",
					"allowedTypes" : ["data2d.sans:out"]
				},
				"offsetPosition" : {
					"top" : 90,
					"left" : 0
				}
			}, {
				"direction" : [-1, 0],
				"multiple" : true,
				"name" : "trans",
				"required" : false,
				"alwaysSrc" : false,
				"ddConfig" : {
					"type" : "data2d.sans:in",
					"allowedTypes" : ["data2d.sans:out"]
				},
				"offsetPosition" : {
					"top" : 140,
					"left" : 0
				}
			}, {
				"direction" : [1, 0],
				"multiple" : true,
				"name" : "COR",
				"required" : false,
				"alwaysSrc" : true,
				"ddConfig" : {
					"type" : "data2d.sans:out",
					"allowedTypes" : ["data2d.sans:in"]
				},
				"offsetPosition" : {
					"top" : 10,
					"left" : 20
				}
			}],
			"xtype" : "WireIt.ImageContainer",
			"image" : "../../static/img/SANS/initial_correction.png",
			"icon" : "../../static/img/SANS/initial_correction.png"
		},
		"name" : "initial_correction"
	}, {
		"container" : {
			"terminals" : [{
				"direction" : [-1, 0],
				"multiple" : true,
				"name" : "ABS",
				"required" : false,
				"alwaysSrc" : false,
				"ddConfig" : {
					"type" : "data2d.sans:in",
					"allowedTypes" : ["data2d.sans:out"]
				},
				"offsetPosition" : {
					"top" : 10,
					"left" : 0
				}
			}, {
				"direction" : [1, 0],
				"multiple" : true,
				"name" : "OneD",
				"required" : false,
				"alwaysSrc" : true,
				"ddConfig" : {
					"type" : "data2d.sans:out",
					"allowedTypes" : ["data2d.sans:in"]
				},
				"offsetPosition" : {
					"top" : 10,
					"left" : 20
				}
			}],
			"xtype" : "WireIt.ImageContainer",
			"image" : "../../static/img/SANS/annular2.png",
			"icon" : "../../static/img/SANS/annular2.png"
		},
		"name" : "annular_av"
	}, {
		"container" : {
			"terminals" : [{
				"direction" : [-1, 0],
				"multiple" : true,
				"name" : "DIV",
				"required" : false,
				"alwaysSrc" : false,
				"ddConfig" : {
					"type" : "data2d.sans:in",
					"allowedTypes" : ["data2d.sans:out"]
				},
				"offsetPosition" : {
					"top" : 10,
					"left" : 0
				}
			}, {
				"direction" : [-1, 0],
				"multiple" : true,
				"name" : "empty",
				"required" : false,
				"alwaysSrc" : false,
				"ddConfig" : {
					"type" : "data2d.sans:in",
					"allowedTypes" : ["data2d.sans:out"]
				},
				"offsetPosition" : {
					"top" : 10,
					"left" : 0
				}
			}, {
				"direction" : [-1, 0],
				"multiple" : true,
				"name" : "sensitivity",
				"required" : false,
				"alwaysSrc" : false,
				"ddConfig" : {
					"type" : "data2d.sans:in",
					"allowedTypes" : ["data2d.sans:out"]
				},
				"offsetPosition" : {
					"top" : 10,
					"left" : 0
				}
			}, {
				"direction" : [1, 0],
				"multiple" : true,
				"name" : "ABS",
				"required" : false,
				"alwaysSrc" : true,
				"ddConfig" : {
					"type" : "data2d.sans:out",
					"allowedTypes" : ["data2d.sans:in"]
				},
				"offsetPosition" : {
					"top" : 10,
					"left" : 20
				}
			}],
			"xtype" : "WireIt.ImageContainer",
			"image" : "../../static/img/SANS/abs.png",
			"icon" : "../../static/img/SANS/abs.png"
		},
		"name" : "absolute_scaling"
	}],
	"languageName" : "NCNR SANS INS"
}