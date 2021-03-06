var tas = {
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
		"fields" : [{
			"type" : "[file]",
			"name" : "files",
			"value" : "",
			"label" : "Files"
		}],
		"container" : {
			"width" : 120,
			"terminals" : [{
				"direction" : [1, 0],
				"multiple" : true,
				"name" : "output",
				"required" : false,
				"alwaysSrc" : true,
				"ddConfig" : {
					"type" : "data1d.tas:out",
					"allowedTypes" : ["data1d.tas:in"]
				},
				"offsetPosition" : {
					"top" : 1,
					"right" : -16
				}
			}],
			"xtype" : "WireIt.Container",
			"image" : "",
			"height" : 16
		},
		"name" : "Load"
	}, {
		"fields" : [{
			"type" : "string",
			"name" : "intent",
			"value" : "",
			"label" : "Intent"
		}, {
			"type" : "[string]",
			"name" : "ext",
			"value" : "",
			"label" : "Save extension"
		}, {
			"type" : "[string]",
			"name" : "ext",
			"value" : "",
			"label" : "Save extension"
		}],
		"container" : {
			"width" : 120,
			"terminals" : [{
				"direction" : [-1, 0],
				"multiple" : false,
				"name" : "input",
				"required" : true,
				"alwaysSrc" : false,
				"ddConfig" : {
					"type" : "data1d.tas:in",
					"allowedTypes" : ["data1d.tas:out"]
				},
				"offsetPosition" : {
					"top" : 1,
					"left" : -16
				}
			}],
			"xtype" : "WireIt.Container",
			"image" : "",
			"height" : 16
		},
		"name" : "Save"
	}, {
		"fields" : [{
			"type" : "string",
			"name" : "xaxis",
			"value" : "",
			"label" : "X axis for 2D plotting"
		}, {
			"type" : "string",
			"name" : "yaxis",
			"value" : "",
			"label" : "Y axis for 2D plotting"
		}],
		"container" : {
			"terminals" : [{
				"direction" : [-1, 0],
				"multiple" : true,
				"name" : "input",
				"required" : false,
				"alwaysSrc" : false,
				"ddConfig" : {
					"type" : "data1d.tas:in",
					"allowedTypes" : ["data1d.tas:out"]
				},
				"offsetPosition" : {
					"top" : 16,
					"left" : -12
				}
			}, {
				"direction" : [1, 0],
				"multiple" : true,
				"name" : "output",
				"required" : false,
				"alwaysSrc" : true,
				"ddConfig" : {
					"type" : "data1d.tas:out",
					"allowedTypes" : ["data1d.tas:in"]
				},
				"offsetPosition" : {
					"top" : 16,
					"left" : 48
				}
			}],
			"xtype" : "WireIt.ImageContainer",
			"image" : "../../static/img/TAS/join.png",
			"icon" : "../../static/img/TAS/join.png"
		},
		"name" : "Join"
	}, {
		"fields" : [{
			"type" : "float",
			"name" : "target_monitor",
			"value" : 165000,
			"label" : "Target monitor"
		}],
		"container" : {
			"terminals" : [{
				"direction" : [-1, 0],
				"multiple" : false,
				"name" : "input",
				"required" : false,
				"alwaysSrc" : false,
				"ddConfig" : {
					"type" : "data1d.tas:in",
					"allowedTypes" : ["data1d.tas:out"]
				},
				"offsetPosition" : {
					"top" : 16,
					"left" : -12
				}
			}, {
				"direction" : [1, 0],
				"multiple" : true,
				"name" : "output",
				"required" : false,
				"alwaysSrc" : true,
				"ddConfig" : {
					"type" : "data1d.tas:out",
					"allowedTypes" : ["data1d.tas:in"]
				},
				"offsetPosition" : {
					"top" : 16,
					"left" : 48
				}
			}],
			"xtype" : "WireIt.ImageContainer",
			"image" : "../../static/img/TAS/monitor_normalization.png",
			"icon" : "../../static/img/TAS/monitor_normalization.png"
		},
		"name" : "Normalize Monitor"
	}, {
		"fields" : [],
		"container" : {
			"terminals" : [{
				"direction" : [-1, 0],
				"multiple" : false,
				"name" : "input",
				"required" : false,
				"alwaysSrc" : false,
				"ddConfig" : {
					"type" : "data1d.tas:in",
					"allowedTypes" : ["data1d.tas:out"]
				},
				"offsetPosition" : {
					"top" : 16,
					"left" : -12
				}
			}, {
				"direction" : [1, 0],
				"multiple" : true,
				"name" : "output",
				"required" : false,
				"alwaysSrc" : true,
				"ddConfig" : {
					"type" : "data1d.tas:out",
					"allowedTypes" : ["data1d.tas:in"]
				},
				"offsetPosition" : {
					"top" : 16,
					"left" : 48
				}
			}],
			"xtype" : "WireIt.ImageContainer",
			"image" : "../../static/img/TAS/detailed_balance.png",
			"icon" : "../../static/img/TAS/detailed_balance.png"
		},
		"name" : "Detailed Balance"
	}, {
		"fields" : [{
			"type" : "string",
			"name" : "instrument_name",
			"value" : "BT7",
			"label" : "Instrument name"
		}],
		"container" : {
			"terminals" : [{
				"direction" : [-1, 0],
				"multiple" : false,
				"name" : "input",
				"required" : false,
				"alwaysSrc" : false,
				"ddConfig" : {
					"type" : "data1d.tas:in",
					"allowedTypes" : ["data1d.tas:out"]
				},
				"offsetPosition" : {
					"top" : 16,
					"left" : -12
				}
			}, {
				"direction" : [1, 0],
				"multiple" : true,
				"name" : "output",
				"required" : false,
				"alwaysSrc" : true,
				"ddConfig" : {
					"type" : "data1d.tas:out",
					"allowedTypes" : ["data1d.tas:in"]
				},
				"offsetPosition" : {
					"top" : 16,
					"left" : 48
				}
			}],
			"xtype" : "WireIt.ImageContainer",
			"image" : "../../static/img/TAS/harmonic_monitor_correction.png",
			"icon" : "../../static/img/TAS/harmonic_monitor_correction.png"
		},
		"name" : "Monitor Correction"
	}, {
		"fields" : [],
		"container" : {
			"terminals" : [{
				"direction" : [-1, 0],
				"multiple" : false,
				"name" : "input",
				"required" : false,
				"alwaysSrc" : false,
				"ddConfig" : {
					"type" : "data1d.tas:in",
					"allowedTypes" : ["data1d.tas:out"]
				},
				"offsetPosition" : {
					"top" : 16,
					"left" : -12
				}
			}, {
				"direction" : [1, 0],
				"multiple" : true,
				"name" : "output",
				"required" : false,
				"alwaysSrc" : true,
				"ddConfig" : {
					"type" : "data1d.tas:out",
					"allowedTypes" : ["data1d.tas:in"]
				},
				"offsetPosition" : {
					"top" : 16,
					"left" : 48
				}
			}],
			"xtype" : "WireIt.ImageContainer",
			"image" : "../../static/img/TAS/volume_resolution_correction.png",
			"icon" : "../../static/img/TAS/volume_resolution_correction.png"
		},
		"name" : "Volume Correction"
	}],
	"languageName" : "NCNR BT7"
};
