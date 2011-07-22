var sans = {
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
				"direction" : [-1, 0],
				"multiple" : false,
				"name" : "sample_in",
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
				"multiple" : false,
				"name" : "empty_cell_in",
				"required" : false,
				"alwaysSrc" : false,
				"ddConfig" : {
					"type" : "data2d.sans:in",
					"allowedTypes" : ["data2d.sans:out"]
				},
				"offsetPosition" : {
					"top" : 20,
					"left" : 0
				}
			}, {
				"direction" : [-1, 0],
				"multiple" : false,
				"name" : "empty_in",
				"required" : false,
				"alwaysSrc" : false,
				"ddConfig" : {
					"type" : "data2d.sans:in",
					"allowedTypes" : ["data2d.sans:out"]
				},
				"offsetPosition" : {
					"top" : 30,
					"left" : 0
				}
			}, {
				"direction" : [-1, 0],
				"multiple" : false,
				"name" : "blocked_in",
				"required" : false,
				"alwaysSrc" : false,
				"ddConfig" : {
					"type" : "data2d.sans:in",
					"allowedTypes" : ["data2d.sans:out"]
				},
				"offsetPosition" : {
					"top" : 40,
					"left" : 0
				}
			}, {
				"direction" : [1, 0],
				"multiple" : true,
				"name" : "sample_out",
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
				"name" : "empty_cell_out",
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
				"name" : "empty_out",
				"required" : false,
				"alwaysSrc" : true,
				"ddConfig" : {
					"type" : "data2d.sans:out",
					"allowedTypes" : ["data2d.sans:in"]
				},
				"offsetPosition" : {
					"top" : 30,
					"left" : 20
				}
			}, {
				"direction" : [1, 0],
				"multiple" : true,
				"name" : "blocked_out",
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
			"image" : "../../static/img/SANS/deadtime.png",
			"icon" : "../../static/img/SANS/deadtime.png"
		},
		"name" : "Dead time Correction"
	}, {
		"container" : {
			"terminals" : [{
				"direction" : [-1, 0],
				"multiple" : false,
				"name" : "sample_in",
				"required" : false,
				"alwaysSrc" : false,
				"ddConfig" : {
					"type" : "data2d.sans:in",
					"allowedTypes" : ["data2d.sans:out"]
				},
				"offsetPosition" : {
					"top" : 5,
					"left" : 0
				}
			}, {
				"direction" : [-1, 0],
				"multiple" : false,
				"name" : "empty_cell_in",
				"required" : false,
				"alwaysSrc" : false,
				"ddConfig" : {
					"type" : "data2d.sans:in",
					"allowedTypes" : ["data2d.sans:out"]
				},
				"offsetPosition" : {
					"top" : 15,
					"left" : 0
				}
			}, {
				"direction" : [-1, 0],
				"multiple" : false,
				"name" : "empty_in",
				"required" : false,
				"alwaysSrc" : false,
				"ddConfig" : {
					"type" : "data2d.sans:in",
					"allowedTypes" : ["data2d.sans:out"]
				},
				"offsetPosition" : {
					"top" : 25,
					"left" : 0
				}
			}, {
				"direction" : [-1, 0],
				"multiple" : false,
				"name" : "Tsam_in",
				"required" : false,
				"alwaysSrc" : false,
				"ddConfig" : {
					"type" : "data2d.sans:in",
					"allowedTypes" : ["data2d.sans:out"]
				},
				"offsetPosition" : {
					"top" : 35,
					"left" : 0
				}
			}, {
				"direction" : [-1, 0],
				"multiple" : false,
				"name" : "Temp_in",
				"required" : false,
				"alwaysSrc" : false,
				"ddConfig" : {
					"type" : "data2d.sans:in",
					"allowedTypes" : ["data2d.sans:out"]
				},
				"offsetPosition" : {
					"top" : 45,
					"left" : 0
				}
			}, {
				"direction" : [1, 0],
				"multiple" : true,
				"name" : "sample_out",
				"required" : false,
				"alwaysSrc" : true,
				"ddConfig" : {
					"type" : "data2d.sans:out",
					"allowedTypes" : ["data2d.sans:in"]
				},
				"offsetPosition" : {
					"top" : 10,
					"left" : 30
				}
			}, {
				"direction" : [1, 0],
				"multiple" : true,
				"name" : "empty_cell_out",
				"required" : false,
				"alwaysSrc" : true,
				"ddConfig" : {
					"type" : "data2d.sans:out",
					"allowedTypes" : ["data2d.sans:in"]
				},
				"offsetPosition" : {
					"top" : 30,
					"left" : 30
				}
			}],
			"xtype" : "WireIt.ImageContainer",
			"image" : "../../static/img/SANS/gen_trans_image.png",
			"icon" : "../../static/img/SANS/gen_trans_image.png"
		},
		"name" : "generate_transmission"
	}, {
		"container" : {
			"terminals" : [{
				"direction" : [-1, 0],
				"multiple" : false,
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
				"direction" : [-1, 0],
				"multiple" : false,
				"name" : "DIV_in",
				"required" : false,
				"alwaysSrc" : false,
				"ddConfig" : {
					"type" : "data2d.sans:in",
					"allowedTypes" : ["data2d.sans:out"]
				},
				"offsetPosition" : {
					"top" : 30,
					"left" : 0
				}
			}, {
				"direction" : [1, 0],
				"multiple" : true,
				"name" : "DIV_out",
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
			"image" : "../../static/img/SANS/div_image.png",
			"icon" : "../../static/img/SANS/div_image.png"
		},
		"name" : "Correct Detector Sensitivity"
	}, {
		"container" : {
			"terminals" : [{
				"direction" : [-1, 0],
				"multiple" : false,
				"name" : "sample",
				"required" : false,
				"alwaysSrc" : false,
				"ddConfig" : {
					"type" : "data2d.sans:in",
					"allowedTypes" : ["data2d.sans:out"]
				},
				"offsetPosition" : {
					"top" : 8,
					"left" : 0
				}
			}, {
				"direction" : [-1, 0],
				"multiple" : false,
				"name" : "empty_cell",
				"required" : false,
				"alwaysSrc" : false,
				"ddConfig" : {
					"type" : "data2d.sans:in",
					"allowedTypes" : ["data2d.sans:out"]
				},
				"offsetPosition" : {
					"top" : 28,
					"left" : 0
				}
			}, {
				"direction" : [-1, 0],
				"multiple" : false,
				"name" : "blocked",
				"required" : false,
				"alwaysSrc" : false,
				"ddConfig" : {
					"type" : "data2d.sans:in",
					"allowedTypes" : ["data2d.sans:out"]
				},
				"offsetPosition" : {
					"top" : 48,
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
			"image" : "../../static/img/SANS/initial_correction_image.png",
			"icon" : "../../static/img/SANS/initial_correction_image.png"
		},
		"name" : "initial_correction"
	}, {
		"container" : {
			"terminals" : [{
				"direction" : [-1, 0],
				"multiple" : false,
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
			"image" : "../../static/img/SANS/annular2_image.png",
			"icon" : "../../static/img/SANS/annular2_image.png"
		},
		"name" : "annular_av"
	}, {
		"container" : {
			"terminals" : [{
				"direction" : [-1, 0],
				"multiple" : false,
				"name" : "DIV",
				"required" : false,
				"alwaysSrc" : false,
				"ddConfig" : {
					"type" : "data2d.sans:in",
					"allowedTypes" : ["data2d.sans:out"]
				},
				"offsetPosition" : {
					"top" : 5,
					"left" : 0
				}
			}, {
				"direction" : [-1, 0],
				"multiple" : false,
				"name" : "empty",
				"required" : false,
				"alwaysSrc" : false,
				"ddConfig" : {
					"type" : "data2d.sans:in",
					"allowedTypes" : ["data2d.sans:out"]
				},
				"offsetPosition" : {
					"top" : 25,
					"left" : 0
				}
			}, {
				"direction" : [-1, 0],
				"multiple" : false,
				"name" : "sensitivity",
				"required" : false,
				"alwaysSrc" : false,
				"ddConfig" : {
					"type" : "data2d.sans:in",
					"allowedTypes" : ["data2d.sans:out"]
				},
				"offsetPosition" : {
					"top" : 40,
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
			"image" : "../../static/img/SANS/abs_image.png",
			"icon" : "../../static/img/SANS/abs_image.png"
		},
		"name" : "absolute_scaling"
	}],
	"languageName" : "NCNR SANS INS"
}