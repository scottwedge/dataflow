var sans = {"propertiesFields": [{"typeInvite": "Enter a title", "type": "string", "name": "name", "label": "Title"}, {"type": "text", "name": "description", "cols": 30, "label": "Description"}], "modules": [{"fields": [{"type": "[file]", "name": "files", "value": [], "label": "Files"}, {"type": "string", "name": "intent", "value": "", "label": "Intent"}], "container": {"width": 120, "terminals": [{"direction": [1, 0], "multiple": true, "name": "output", "required": false, "alwaysSrc": true, "ddConfig": {"type": "data2d.sans:out", "allowedTypes": ["data2d.sans:in"]}, "offsetPosition": {"top": 1, "right": -16}}], "xtype": "WireIt.Container", "height": 16}, "name": "Load"}, {"fields": [{"type": "string", "name": "intent", "value": "", "label": "Intent"}, {"type": "[string]", "name": "ext", "value": "", "label": "Save extension"}], "container": {"width": 120, "terminals": [{"direction": [-1, 0], "multiple": false, "name": "input", "required": true, "alwaysSrc": false, "ddConfig": {"type": "data2d.sans:in", "allowedTypes": ["data2d.sans:out"]}, "offsetPosition": {"top": 1, "left": -16}}], "xtype": "WireIt.Container", "height": 16}, "name": "Save"}, {"fields": [{"type": "float", "name": "deadtimeConstant", "value": 3.4e-06, "label": "Deadtime Constant (default=3.4e-6)"}], "container": {"terminals": [{"direction": [-1, 0], "multiple": false, "name": "sample_in", "required": false, "alwaysSrc": false, "ddConfig": {"type": "data2d.sans:in", "allowedTypes": ["data2d.sans:out"]}, "offsetPosition": {"top": 10, "left": -16}}, {"direction": [-1, 0], "multiple": false, "name": "empty_cell_in", "required": false, "alwaysSrc": false, "ddConfig": {"type": "data2d.sans:in", "allowedTypes": ["data2d.sans:out"]}, "offsetPosition": {"top": 20, "left": -16}}, {"direction": [-1, 0], "multiple": false, "name": "empty_in", "required": false, "alwaysSrc": false, "ddConfig": {"type": "data2d.sans:in", "allowedTypes": ["data2d.sans:out"]}, "offsetPosition": {"top": 30, "left": -16}}, {"direction": [-1, 0], "multiple": false, "name": "blocked_in", "required": false, "alwaysSrc": false, "ddConfig": {"type": "data2d.sans:in", "allowedTypes": ["data2d.sans:out"]}, "offsetPosition": {"top": 40, "left": -16}}, {"direction": [1, 0], "multiple": true, "name": "sample_out", "required": false, "alwaysSrc": true, "ddConfig": {"type": "data2d.sans:out", "allowedTypes": ["data2d.sans:in"]}, "offsetPosition": {"top": 10, "left": 48}}, {"direction": [1, 0], "multiple": true, "name": "empty_cell_out", "required": false, "alwaysSrc": true, "ddConfig": {"type": "data2d.sans:out", "allowedTypes": ["data2d.sans:in"]}, "offsetPosition": {"top": 20, "left": 48}}, {"direction": [1, 0], "multiple": true, "name": "empty_out", "required": false, "alwaysSrc": true, "ddConfig": {"type": "data2d.sans:out", "allowedTypes": ["data2d.sans:in"]}, "offsetPosition": {"top": 30, "left": 48}}, {"direction": [1, 0], "multiple": true, "name": "blocked_out", "required": false, "alwaysSrc": true, "ddConfig": {"type": "data2d.sans:out", "allowedTypes": ["data2d.sans:in"]}, "offsetPosition": {"top": 40, "left": 48}}], "xtype": "WireIt.ImageContainer", "image": "../../static/img/SANS/deadtime.png", "icon": "../../static/img/SANS/deadtime_image.png"}, "name": "Dead time Correction"}, {"fields": [{"type": "float", "name": "monitorNormalize", "value": 100000000.0, "label": "Monitor Normalization Count (default=1e8)"}, {"type": "dict", "name": "bottomLeftCoord", "value": {"Y": 0, "X": 0}, "label": "Bottom Left Coordinate"}, {"type": "dict", "name": "topRightCoord", "value": {"Y": 0, "X": 0}, "label": "Top Right Coordinate"}], "container": {"terminals": [{"direction": [-1, 0], "multiple": false, "name": "sample_in", "required": false, "alwaysSrc": false, "ddConfig": {"type": "data2d.sans:in", "allowedTypes": ["data2d.sans:out"]}, "offsetPosition": {"top": 5, "left": -16}}, {"direction": [-1, 0], "multiple": false, "name": "empty_cell_in", "required": false, "alwaysSrc": false, "ddConfig": {"type": "data2d.sans:in", "allowedTypes": ["data2d.sans:out"]}, "offsetPosition": {"top": 15, "left": -16}}, {"direction": [-1, 0], "multiple": false, "name": "empty_in", "required": false, "alwaysSrc": false, "ddConfig": {"type": "data2d.sans:in", "allowedTypes": ["data2d.sans:out"]}, "offsetPosition": {"top": 25, "left": -16}}, {"direction": [-1, 0], "multiple": false, "name": "Tsam_in", "required": false, "alwaysSrc": false, "ddConfig": {"type": "data2d.sans:in", "allowedTypes": ["data2d.sans:out"]}, "offsetPosition": {"top": 35, "left": -16}}, {"direction": [-1, 0], "multiple": false, "name": "Temp_in", "required": false, "alwaysSrc": false, "ddConfig": {"type": "data2d.sans:in", "allowedTypes": ["data2d.sans:out"]}, "offsetPosition": {"top": 45, "left": -16}}, {"direction": [1, 0], "multiple": true, "name": "sample_out", "required": false, "alwaysSrc": true, "ddConfig": {"type": "data2d.sans:out", "allowedTypes": ["data2d.sans:in"]}, "offsetPosition": {"top": 10, "left": 48}}, {"direction": [1, 0], "multiple": true, "name": "empty_cell_out", "required": false, "alwaysSrc": true, "ddConfig": {"type": "data2d.sans:out", "allowedTypes": ["data2d.sans:in"]}, "offsetPosition": {"top": 30, "left": 48}}], "xtype": "WireIt.ImageContainer", "image": "../../static/img/SANS/gen_trans_image.png", "icon": "../../static/img/SANS/gen_trans.png"}, "name": "Generate Transmission"}, {"fields": [], "container": {"terminals": [{"direction": [-1, 0], "multiple": false, "name": "COR", "required": false, "alwaysSrc": false, "ddConfig": {"type": "data2d.sans:in", "allowedTypes": ["data2d.sans:out"]}, "offsetPosition": {"top": 10, "left": -16}}, {"direction": [-1, 0], "multiple": false, "name": "DIV_in", "required": false, "alwaysSrc": false, "ddConfig": {"type": "data2d.sans:in", "allowedTypes": ["data2d.sans:out"]}, "offsetPosition": {"top": 30, "left": -16}}, {"direction": [1, 0], "multiple": true, "name": "DIV_out", "required": false, "alwaysSrc": true, "ddConfig": {"type": "data2d.sans:out", "allowedTypes": ["data2d.sans:in"]}, "offsetPosition": {"top": 10, "left": 48}}], "xtype": "WireIt.ImageContainer", "image": "../../static/img/SANS/div_image.png", "icon": "../../static/img/SANS/div.png"}, "name": "Correct Detector Sensitivity"}, {"fields": [], "container": {"terminals": [{"direction": [-1, 0], "multiple": false, "name": "sample", "required": false, "alwaysSrc": false, "ddConfig": {"type": "data2d.sans:in", "allowedTypes": ["data2d.sans:out"]}, "offsetPosition": {"top": 8, "left": -16}}, {"direction": [-1, 0], "multiple": false, "name": "empty_cell", "required": false, "alwaysSrc": false, "ddConfig": {"type": "data2d.sans:in", "allowedTypes": ["data2d.sans:out"]}, "offsetPosition": {"top": 28, "left": -16}}, {"direction": [-1, 0], "multiple": false, "name": "blocked", "required": false, "alwaysSrc": false, "ddConfig": {"type": "data2d.sans:in", "allowedTypes": ["data2d.sans:out"]}, "offsetPosition": {"top": 48, "left": -16}}, {"direction": [1, 0], "multiple": true, "name": "COR", "required": false, "alwaysSrc": true, "ddConfig": {"type": "data2d.sans:out", "allowedTypes": ["data2d.sans:in"]}, "offsetPosition": {"top": 10, "left": 48}}], "xtype": "WireIt.ImageContainer", "image": "../../static/img/SANS/initial_correction_image.png", "icon": "../../static/img/SANS/initial_image.png"}, "name": "Initial Correction"}, {"fields": [], "container": {"terminals": [{"direction": [-1, 0], "multiple": false, "name": "ABS", "required": false, "alwaysSrc": false, "ddConfig": {"type": "data2d.sans:in", "allowedTypes": ["data2d.sans:out"]}, "offsetPosition": {"top": 10, "left": -16}}, {"direction": [1, 0], "multiple": true, "name": "OneD", "required": false, "alwaysSrc": true, "ddConfig": {"type": "data2d.sans:out", "allowedTypes": ["data2d.sans:in"]}, "offsetPosition": {"top": 10, "left": 48}}], "xtype": "WireIt.ImageContainer", "image": "../../static/img/SANS/circular_avg.png", "icon": "../../static/img/SANS/circular_avg_image.png"}, "name": "Circular Average"}, {"fields": [{"type": "string", "name": "ins_name", "value": "", "label": "Instrument Name (NG3,NG5,or NG7)"}, {"type": "dict", "name": "bottomLeftCoord", "value": {"Y": 0, "X": 0}, "label": "Bottom Left Coordinate"}, {"type": "dict", "name": "topRightCoord", "value": {"Y": 0, "X": 0}, "label": "Top Right Coordinate"}], "container": {"terminals": [{"direction": [-1, 0], "multiple": false, "name": "DIV", "required": false, "alwaysSrc": false, "ddConfig": {"type": "data2d.sans:in", "allowedTypes": ["data2d.sans:out"]}, "offsetPosition": {"top": 5, "left": -16}}, {"direction": [-1, 0], "multiple": false, "name": "empty", "required": false, "alwaysSrc": false, "ddConfig": {"type": "data2d.sans:in", "allowedTypes": ["data2d.sans:out"]}, "offsetPosition": {"top": 25, "left": -16}}, {"direction": [-1, 0], "multiple": false, "name": "sensitivity", "required": false, "alwaysSrc": false, "ddConfig": {"type": "data2d.sans:in", "allowedTypes": ["data2d.sans:out"]}, "offsetPosition": {"top": 40, "left": -16}}, {"direction": [1, 0], "multiple": true, "name": "ABS", "required": false, "alwaysSrc": true, "ddConfig": {"type": "data2d.sans:out", "allowedTypes": ["data2d.sans:in"]}, "offsetPosition": {"top": 10, "left": 48}}], "xtype": "WireIt.ImageContainer", "image": "../../static/img/SANS/abs_image.png", "icon": "../../static/img/SANS/Abs.png"}, "name": "Absolute Scaling"}], "languageName": "NCNR SANS INS"}


