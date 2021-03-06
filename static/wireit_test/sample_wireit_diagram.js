wireit_diagram = {
	"clickedOn" : {
		"source" : {
			"moduleId" : 11,
			"terminal" : "DIV"
		},
		"target" : {
			"moduleId" : 8,
			"terminal" : "input"
		}
	},
	"language" : "sans2",
	"modules" : [{
		"config" : {
			"files" : ["SILIC003.SA3_SRK_S103"],
			"position" : [5, 20],
			"xtype" : "WireIt.Container"
		},
		"name" : "Load",
		"value" : {}
	}, {
		"config" : {
			"position" : [5, 30],
			"xtype" : "WireIt.Container"
		},
		"name" : "Load",
		"value" : {}
	}, {
		"config" : {
			"position" : [5, 40],
			"xtype" : "WireIt.Container"
		},
		"name" : "Load",
		"value" : {}
	}, {
		"config" : {
			"position" : [5, 50],
			"xtype" : "WireIt.Container"
		},
		"name" : "Load",
		"value" : {}
	}, {
		"config" : {
			"position" : [360, 50],
			"xtype" : "WireIt.ImageContainer"
		},
		"name" : "Dead time Correction",
		"value" : {}
	}, {
		"config" : {
			"position" : [50, 100],
			"xtype" : "WireIt.Container"
		},
		"name" : "Load",
		"value" : {}
	}, {
		"config" : {
			"position" : [50, 100],
			"xtype" : "WireIt.Container"
		},
		"name" : "Load",
		"value" : {}
	}, {
		"config" : {
			"position" : [120, 80],
			"xtype" : "WireIt.ImageContainer"
		},
		"name" : "generate_transmission",
		"value" : {}
	}, {
		"config" : {
			"position" : [500, 500],
			"xtype" : "WireIt.Container"
		},
		"name" : "Save",
		"value" : {}
	}, {
		"config" : {
			"position" : [360, 100],
			"xtype" : "WireIt.ImageContainer"
		},
		"name" : "initial_correction",
		"value" : {}
	}, {
		"config" : {
			"position" : [100, 300],
			"xtype" : "WireIt.Container"
		},
		"name" : "Load",
		"value" : {}
	}, {
		"config" : {
			"position" : [360, 200],
			"xtype" : "WireIt.ImageContainer"
		},
		"name" : "Correct Detector Sensitivity",
		"value" : {}
	}, {
		"config" : {
			"position" : [100, 300],
			"xtype" : "WireIt.Container"
		},
		"name" : "Load",
		"value" : {}
	}, {
		"config" : {
			"position" : [360, 300],
			"xtype" : "WireIt.ImageContainer"
		},
		"name" : "absolute_scaling",
		"value" : {}
	}, {
		"config" : {
			"position" : [360, 400],
			"xtype" : "WireIt.ImageContainer"
		},
		"name" : "annular_av",
		"value" : {}
	}],
	"name" : "test sans",
	"properties" : {
		"description" : "example sans data",
		"name" : "test sans"
	},
	"wires" : [{
		"src" : {
			"moduleId" : 0,
			"terminal" : "output"
		},
		"tgt" : {
			"moduleId" : 4,
			"terminal" : "sample"
		},
		"xtype" : "WireIt.BezierWire"
	}, {
		"src" : {
			"moduleId" : 1,
			"terminal" : "output"
		},
		"tgt" : {
			"moduleId" : 4,
			"terminal" : "empty_cell"
		},
		"xtype" : "WireIt.BezierWire"
	}, {
		"src" : {
			"moduleId" : 3,
			"terminal" : "output"
		},
		"tgt" : {
			"moduleId" : 4,
			"terminal" : "blocked"
		},
		"xtype" : "WireIt.BezierWire"
	}, {
		"src" : {
			"moduleId" : 4,
			"terminal" : "sample"
		},
		"tgt" : {
			"moduleId" : 7,
			"terminal" : "sample"
		},
		"xtype" : "WireIt.BezierWire"
	}, {
		"src" : {
			"moduleId" : 4,
			"terminal" : "empty_cell"
		},
		"tgt" : {
			"moduleId" : 7,
			"terminal" : "empty_cell"
		},
		"xtype" : "WireIt.BezierWire"
	}, {
		"src" : {
			"moduleId" : 5,
			"terminal" : "output"
		},
		"tgt" : {
			"moduleId" : 7,
			"terminal" : "Tsam"
		},
		"xtype" : "WireIt.BezierWire"
	}, {
		"src" : {
			"moduleId" : 6,
			"terminal" : "output"
		},
		"tgt" : {
			"moduleId" : 7,
			"terminal" : "Temp"
		},
		"xtype" : "WireIt.BezierWire"
	}, {
		"src" : {
			"moduleId" : 7,
			"terminal" : "sample"
		},
		"tgt" : {
			"moduleId" : 9,
			"terminal" : "sample"
		},
		"xtype" : "WireIt.BezierWire"
	}, {
		"src" : {
			"moduleId" : 7,
			"terminal" : "empty_cell"
		},
		"tgt" : {
			"moduleId" : 9,
			"terminal" : "empty_cell"
		},
		"xtype" : "WireIt.BezierWire"
	}, {
		"src" : {
			"moduleId" : 4,
			"terminal" : "blocked"
		},
		"tgt" : {
			"moduleId" : 9,
			"terminal" : "blocked"
		},
		"xtype" : "WireIt.BezierWire"
	}, {
		"src" : {
			"moduleId" : 9,
			"terminal" : "COR"
		},
		"tgt" : {
			"moduleId" : 11,
			"terminal" : "COR"
		},
		"xtype" : "WireIt.BezierWire"
	}, {
		"src" : {
			"moduleId" : 10,
			"terminal" : "output"
		},
		"tgt" : {
			"moduleId" : 11,
			"terminal" : "DIV"
		},
		"xtype" : "WireIt.BezierWire"
	}, {
		"src" : {
			"moduleId" : 11,
			"terminal" : "DIV"
		},
		"tgt" : {
			"moduleId" : 8,
			"terminal" : "input"
		},
		"xtype" : "WireIt.BezierWire"
	}, {
		"src" : {
			"moduleId" : 11,
			"terminal" : "DIV"
		},
		"tgt" : {
			"moduleId" : 13,
			"terminal" : "DIV"
		},
		"xtype" : "WireIt.BezierWire"
	}, {
		"src" : {
			"moduleId" : 12,
			"terminal" : "output"
		},
		"tgt" : {
			"moduleId" : 13,
			"terminal" : "empty"
		},
		"xtype" : "WireIt.BezierWire"
	}, {
		"src" : {
			"moduleId" : 10,
			"terminal" : "output"
		},
		"tgt" : {
			"moduleId" : 13,
			"terminal" : "sensitivity"
		},
		"xtype" : "WireIt.BezierWire"
	}, {
		"src" : {
			"moduleId" : 13,
			"terminal" : "ABS"
		},
		"tgt" : {
			"moduleId" : 14,
			"terminal" : "ABS"
		},
		"xtype" : "WireIt.BezierWire"
	}, {
		"src" : {
			"moduleId" : 14,
			"terminal" : "OneD"
		},
		"tgt" : {
			"moduleId" : 8,
			"terminal" : "input"
		},
		"xtype" : "WireIt.BezierWire"
	}]
}