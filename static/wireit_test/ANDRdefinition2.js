var andr2 = {
  "languageName": "NCNR ANDR", 
  "modules": [
    {
      "container": {
        "height": 16, 
        "image": "", 
        "terminals": [
          {
            "alwaysSrc": true, 
            "ddConfig": {
              "allowedTypes": [
                "data2d.ospec:in"
              ], 
              "type": "data2d.ospec:out"
            }, 
            "direction": [
              1, 
              0
            ], 
            "multiple": true, 
            "name": "output", 
            "offsetPosition": {
              "right": -16, 
              "top": 1
            }, 
            "required": false
          }
        ], 
        "width": 120, 
        "xtype": "WireIt.Container"
      }, 
      "fields": [
        {
          "label": "Files", 
          "name": "files", 
          "type": "[file]", 
          "value": []
        }, 
        {
          "label": "Intent", 
          "name": "intent", 
          "type": "string", 
          "value": ""
        }, 
        {
          "label": "Auto-polstate", 
          "name": "auto_PolState", 
          "type": "boolean", 
          "value": false
        }, 
        {
          "label": "PolStates", 
          "name": "PolStates", 
          "type": "dict:string:string", 
          "value": {}
        },
      ], 
      "name": "Load"
    }, 
    {"container": {
        "height": 16, 
        "image": "", 
        "terminals": [
          {
            "alwaysSrc": true, 
            "ddConfig": {
              "allowedTypes": [
                "data2d.ospec:in"
              ], 
              "type": "data2d.ospec:out"
            }, 
            "direction": [
              1, 
              0
            ], 
            "multiple": true, 
            "name": "output", 
            "offsetPosition": {
              "right": -16, 
              "top": 1
            }, 
            "required": false
          }
        ], 
        "width": 120, 
        "xtype": "WireIt.Container"
      }, 
      "fields": [
        {
          "label": "Files", 
          "name": "files", 
          "type": "[file]", 
          "value": []
        }, 
        {
          "label": "Center Pixel", 
          "name": "center_pixel", 
          "type": "float", 
          "value": 145.0,
        }, 
        {
          "label": "Wavelength over Time-of-Flight", 
          "name": "wl_over_tof", 
          "type": "scientific", 
          "value": 1.9050372144288577e-5,
        }, 
        {
          "label": "Pixel width/distance (to sample)", 
          "name": "pixel_width_over_dist", 
          "type": "float", 
          "value":  0.00034113856493630764,
        },
      ], 
      "name": "LoadAsterix"
    }, 
    {
      "container": {
        "height": 16, 
        "image": "", 
        "terminals": [
          {
            "alwaysSrc": true, 
            "ddConfig": {
              "allowedTypes": [
                "data2d.ospec.he3:in"
              ], 
              "type": "data2d.ospec.he3:out"
            }, 
            "direction": [
              1, 
              0
            ], 
            "multiple": true, 
            "name": "output", 
            "offsetPosition": {
              "right": -16, 
              "top": 1
            }, 
            "required": false
          }
        ], 
        "width": 120, 
        "xtype": "WireIt.Container"
      }, 
      "fields": [
        {
          "label": "Files", 
          "name": "files", 
          "type": "list:str", 
          "value": []
        }
      ], 
      "name": "Load he3"
    }, 
    {
      "container": {
        "height": 16, 
        "image": "", 
        "terminals": [
          {
            "alwaysSrc": true, 
            "ddConfig": {
              "allowedTypes": [
                "data2d.ospec.timestamp:in"
              ], 
              "type": "data2d.ospec.timestamp:out"
            }, 
            "direction": [
              1, 
              0
            ], 
            "multiple": true, 
            "name": "output", 
            "offsetPosition": {
              "right": -16, 
              "top": 1
            }, 
            "required": false
          }
        ], 
        "width": 120, 
        "xtype": "WireIt.Container"
      }, 
      "fields": [
        {
          "label": "Files", 
          "name": "files", 
          "type": "list:str", 
          "value": []
        }
      ], 
      "name": "Load stamps"
    }, 
    {
      "container": {
        "height": 16, 
        "image": "../../static/img/offspecular/save_image.png", 
        "terminals": [
          {
            "alwaysSrc": false, 
            "ddConfig": {
              "allowedTypes": [
                "data2d.ospec:out"
              ], 
              "type": "data2d.ospec:in"
            }, 
            "direction": [
              -1, 
              0
            ], 
            "multiple": false, 
            "name": "input", 
            "offsetPosition": {
              "left": -16, 
              "top": 1
            }, 
            "required": true
          }
        ], 
        "width": 120, 
        "xtype": "SaveContainer"
      }, 
      "fields": [
        {
          "label": "Intent", 
          "name": "intent", 
          "type": "string", 
          "value": ""
        }, 
        {
          "label": "Save extension", 
          "name": "ext", 
          "type": "[string]", 
          "value": ""
        }
      ], 
      "name": "Save"
    }, 
    {
      "container": {
        "icon": "../../static/img/offspecular/autogrid.png", 
        "image": "../../static/img/offspecular/autogrid_image.png", 
        "terminals": [
          {
            "alwaysSrc": false, 
            "ddConfig": {
              "allowedTypes": [
                "data2d.ospec:out"
              ], 
              "type": "data2d.ospec:in"
            }, 
            "direction": [
              -1, 
              0
            ], 
            "multiple": false, 
            "name": "input", 
            "offsetPosition": {
              "left": -12, 
              "top": 16
            }, 
            "required": true
          }, 
          {
            "alwaysSrc": true, 
            "ddConfig": {
              "allowedTypes": [
                "data2d.ospec:in"
              ], 
              "type": "data2d.ospec:out"
            }, 
            "direction": [
              1, 
              0
            ], 
            "multiple": true, 
            "name": "output", 
            "offsetPosition": {
              "left": 48, 
              "top": 16
            }, 
            "required": false
          }
        ], 
        "xtype": "AutosizeImageContainer"
      }, 
      "fields": [
        {
          "label": "extra grid point", 
          "name": "extra_grid_point", 
          "type": "bool", 
          "value": true
        }, 
        {
          "label": "minimum step", 
          "name": "min_step", 
          "type": "float", 
          "value": 1e-10
        }
      ], 
      "name": "Autogrid"
    }, 
    {
      "container": {
        "icon": "../../static/img/offspecular/sum.png", 
        "image": "../../static/img/offspecular/sum_image.png", 
        "terminals": [
          {
            "alwaysSrc": false, 
            "ddConfig": {
              "allowedTypes": [
                "data2d.ospec:out"
              ], 
              "type": "data2d.ospec:in"
            }, 
            "direction": [
              -1, 
              0
            ], 
            "multiple": false, 
            "name": "input_data", 
            "offsetPosition": {
              "left": -12, 
              "top": 4
            }, 
            "required": true
          }, 
          {
            "alwaysSrc": false, 
            "ddConfig": {
              "allowedTypes": [
                "data2d.ospec:out"
              ], 
              "type": "data2d.ospec:in"
            }, 
            "direction": [
              -1, 
              0
            ], 
            "multiple": true, 
            "name": "input_grid", 
            "offsetPosition": {
              "left": -12, 
              "top": 40
            }, 
            "required": false
          }, 
          {
            "alwaysSrc": true, 
            "ddConfig": {
              "allowedTypes": [
                "data2d.ospec:in"
              ], 
              "type": "data2d.ospec:out"
            }, 
            "direction": [
              1, 
              0
            ], 
            "multiple": true, 
            "name": "output", 
            "offsetPosition": {
              "left": 48, 
              "top": 16
            }, 
            "required": false
          }
        ], 
        "xtype": "AutosizeImageContainer"
      }, 
      "fields": [], 
      "name": "Combine"
    }, 
    {
      "container": {
        "icon": "../../static/img/offspecular/offset.png", 
        "image": "../../static/img/offspecular/offset_image.png", 
        "terminals": [
          {
            "alwaysSrc": false, 
            "ddConfig": {
              "allowedTypes": [
                "data2d.ospec:out"
              ], 
              "type": "data2d.ospec:in"
            }, 
            "direction": [
              -1, 
              0
            ], 
            "multiple": false, 
            "name": "input", 
            "offsetPosition": {
              "left": -12, 
              "top": 16
            }, 
            "required": true
          }, 
          {
            "alwaysSrc": true, 
            "ddConfig": {
              "allowedTypes": [
                "data2d.ospec:in"
              ], 
              "type": "data2d.ospec:out"
            }, 
            "direction": [
              1, 
              0
            ], 
            "multiple": true, 
            "name": "output", 
            "offsetPosition": {
              "left": 48, 
              "top": 16
            }, 
            "required": false
          }
        ], 
        "xtype": "AutosizeImageContainer"
      }, 
      "fields": [
        {
          "label": "Offset amount", 
          "name": "offsets", 
          "type": "dict:str:float", 
          "value": {
            "theta": 0.0, 
            "xpixel": 0.0
          }
        }
      ], 
      "name": "Offset"
    }, 
    {
      "container": {
        "icon": "../../static/img/offspecular/wiggle.png", 
        "image": "../../static/img/offspecular/wiggle_image.png", 
        "terminals": [
          {
            "alwaysSrc": false, 
            "ddConfig": {
              "allowedTypes": [
                "data2d.ospec:out"
              ], 
              "type": "data2d.ospec:in"
            }, 
            "direction": [
              -1, 
              0
            ], 
            "multiple": false, 
            "name": "input", 
            "offsetPosition": {
              "left": -12, 
              "top": 16
            }, 
            "required": true
          }, 
          {
            "alwaysSrc": true, 
            "ddConfig": {
              "allowedTypes": [
                "data2d.ospec:in"
              ], 
              "type": "data2d.ospec:out"
            }, 
            "direction": [
              1, 
              0
            ], 
            "multiple": true, 
            "name": "output", 
            "offsetPosition": {
              "left": 48, 
              "top": 16
            }, 
            "required": false
          }
        ], 
        "xtype": "AutosizeImageContainer"
      }, 
      "fields": [
        {
          "label": "amplitude", 
          "name": "scale", 
          "type": "float", 
          "value": 0.14000000000000001
        }
      ], 
      "name": "Wiggle"
    }, 
    {
      "container": {
        "icon": "../../static/img/offspecular/twotheta.png", 
        "image": "../../static/img/offspecular/twotheta_image.png", 
        "terminals": [
          {
            "alwaysSrc": false, 
            "ddConfig": {
              "allowedTypes": [
                "data2d.ospec:out"
              ], 
              "type": "data2d.ospec:in"
            }, 
            "direction": [
              -1, 
              0
            ], 
            "multiple": false, 
            "name": "input", 
            "offsetPosition": {
              "left": -12, 
              "top": 16
            }, 
            "required": true
          }, 
          {
            "alwaysSrc": true, 
            "ddConfig": {
              "allowedTypes": [
                "data2d.ospec:in"
              ], 
              "type": "data2d.ospec:out"
            }, 
            "direction": [
              1, 
              0
            ], 
            "multiple": true, 
            "name": "output", 
            "offsetPosition": {
              "left": 48, 
              "top": 16
            }, 
            "required": false
          }
        ], 
        "xtype": "AutosizeImageContainer"
      }, 
      "fields": [
        {
          "label": "pixels per degree", 
          "name": "pixels_per_degree", 
          "type": "float", 
          "value": 80.0
        }, 
        {
          "label": "qzero pixel", 
          "name": "qzero_pixel", 
          "type": "int", 
          "value": 309
        }, 
        {
          "label": "instrument resolution", 
          "name": "instr_resolution", 
          "type": "float", 
          "value": 9.9999999999999995e-07
        }
      ], 
      "name": "Pixels to two theta"
    }, 
    {
      "container": {
        "icon": "../../static/img/offspecular/qxqz.png", 
        "image": "../../static/img/offspecular/qxqz_image.png", 
        "terminals": [
          {
            "alwaysSrc": false, 
            "ddConfig": {
              "allowedTypes": [
                "data2d.ospec:out"
              ], 
              "type": "data2d.ospec:in"
            }, 
            "direction": [
              -1, 
              0
            ], 
            "multiple": false, 
            "name": "input", 
            "offsetPosition": {
              "left": -12, 
              "top": 4
            }, 
            "required": true
          }, 
          {
            "alwaysSrc": false, 
            "ddConfig": {
              "allowedTypes": [
                "data2d.ospec:out"
              ], 
              "type": "data2d.ospec:in"
            }, 
            "direction": [
              -1, 
              0
            ], 
            "multiple": false, 
            "name": "output_grid", 
            "offsetPosition": {
              "left": -12, 
              "top": 40
            }, 
            "required": false
          }, 
          {
            "alwaysSrc": true, 
            "ddConfig": {
              "allowedTypes": [
                "data2d.ospec:in"
              ], 
              "type": "data2d.ospec:out"
            }, 
            "direction": [
              1, 
              0
            ], 
            "multiple": true, 
            "name": "output", 
            "offsetPosition": {
              "left": 48, 
              "top": 16
            }, 
            "required": false
          }
        ], 
        "xtype": "AutosizeImageContainer"
      }, 
      "fields": [
        {
          "label": "wavelength", 
          "name": "wavelength", 
          "type": "float", 
          "value": 5.0
        }
      ], 
      "name": "Theta two theta to qxqz"
    },
    {
      "container": {
        "icon": "../../static/img/offspecular/qxqz.png", 
        "image": "../../static/img/offspecular/twothetalambda_qxqz_image.png", 
        "terminals": [
          {
            "alwaysSrc": false, 
            "ddConfig": {
              "allowedTypes": [
                "data2d.ospec:out"
              ], 
              "type": "data2d.ospec:in"
            }, 
            "direction": [
              -1, 
              0
            ], 
            "multiple": false, 
            "name": "input", 
            "offsetPosition": {
              "left": -12, 
              "top": 4
            }, 
            "required": true
          },  
          {
            "alwaysSrc": true, 
            "ddConfig": {
              "allowedTypes": [
                "data2d.ospec:in"
              ], 
              "type": "data2d.ospec:out"
            }, 
            "direction": [
              1, 
              0
            ], 
            "multiple": true, 
            "name": "output", 
            "offsetPosition": {
              "left": 48, 
              "top": 16
            }, 
            "required": false
          }
        ], 
        "xtype": "AutosizeImageContainer"
      },
      "fields": [
        {
          "label": "Sample angle (theta)", 
          "name": "theta", 
          "type": "string", 
          "value": ""
        },
        {
          "label": "Qx min", 
          "name": "qxmin", 
          "type": "float", 
          "value": -0.0030000000000000001
        }, 
        {
          "label": "Qx max", 
          "name": "qxmax", 
          "type": "float", 
          "value": 0.0030000000000000001
        }, 
        {
          "label": "Qx bins", 
          "name": "qxbins", 
          "type": "int", 
          "value": 201
        }, 
        {
          "label": "Qz min", 
          "name": "qzmin", 
          "type": "float", 
          "value": 0.0
        }, 
        {
          "label": "Qz max", 
          "name": "qzmax", 
          "type": "float", 
          "value": 0.10000000000000001
        }, 
        {
          "label": "Qz bins", 
          "name": "qzbins", 
          "type": "int", 
          "value": 201
        }
      ], 
      "name": "Two theta lambda to qxqz"
    },
    {
      "container": {
        "height": 16, 
        "image": "", 
        "terminals": [
          {
            "alwaysSrc": true, 
            "ddConfig": {
              "allowedTypes": [
                "data2d.ospec:in"
              ], 
              "type": "data2d.ospec:out"
            }, 
            "direction": [
              1, 
              0
            ], 
            "multiple": true, 
            "name": "output", 
            "offsetPosition": {
              "right": -16, 
              "top": 1
            }, 
            "required": false
          }
        ], 
        "width": 150, 
        "xtype": "WireIt.Container"
      }, 
      "fields": [
        {
          "label": "Qx min", 
          "name": "qxmin", 
          "type": "float", 
          "value": -0.0030000000000000001
        }, 
        {
          "label": "Qx max", 
          "name": "qxmax", 
          "type": "float", 
          "value": 0.0030000000000000001
        }, 
        {
          "label": "Qx bins", 
          "name": "qxbins", 
          "type": "int", 
          "value": 201
        }, 
        {
          "label": "Qz min", 
          "name": "qzmin", 
          "type": "float", 
          "value": 0.0
        }, 
        {
          "label": "Qz max", 
          "name": "qzmax", 
          "type": "float", 
          "value": 0.10000000000000001
        }, 
        {
          "label": "Qz bins", 
          "name": "qzbins", 
          "type": "int", 
          "value": 201
        }
      ], 
      "name": "Empty QxQz grid"
    },
        {
      "container": {
        "icon": "../../static/img/offspecular/autogrid.png", 
        "image": "../../static/img/offspecular/mask_image.png", 
        "height": 16, 
        "terminals": [
          {
            "alwaysSrc": false, 
            "ddConfig": {
              "allowedTypes": [
                "data2d.ospec:out"
              ], 
              "type": "data2d.ospec:in"
            }, 
            "direction": [
              -1, 
              0
            ], 
            "multiple": false, 
            "name": "input", 
            "offsetPosition": {
              "left": -12, 
              "top": 16
            }, 
            "required": true
          }, 
          {
            "alwaysSrc": true, 
            "ddConfig": {
              "allowedTypes": [
                "data2d.ospec:in"
              ], 
              "type": "data2d.ospec:out"
            }, 
            "direction": [
              1, 
              0
            ], 
            "multiple": true, 
            "name": "output", 
            "offsetPosition": {
              "right": -12, 
              "top": 16
            }, 
            "required": false
          }
        ],  
        "width": 80, 
        "xtype": "AutosizeImageContainer",
      }, 
      "fields": [
        {
          "label": "xmin pixel", 
          "name": "xmin", 
          "type": "string", 
          "value": "0"
        }, 
        {
          "label": "xmax pixel", 
          "name": "xmax", 
          "type": "string", 
          "value": ""
        }, 
        {
          "label": "ymin pixel", 
          "name": "ymin", 
          "type": "string", 
          "value": "0"
        }, 
        {
          "label": "ymax pixel", 
          "name": "ymax", 
          "type": "string", 
          "value": ""
        }, 
      ], 
      "name": "Mask Data"
    }, 
    {
      "container": {
        "icon": "../../static/img/offspecular/timestamp.png", 
        "image": "../../static/img/offspecular/timestamp_image.png", 
        "terminals": [
          {
            "alwaysSrc": false, 
            "ddConfig": {
              "allowedTypes": [
                "data2d.ospec:out"
              ], 
              "type": "data2d.ospec:in"
            }, 
            "direction": [
              -1, 
              0
            ], 
            "multiple": false, 
            "name": "input", 
            "offsetPosition": {
              "left": -12, 
              "top": 4
            }, 
            "required": true
          }, 
          {
            "alwaysSrc": false, 
            "ddConfig": {
              "allowedTypes": [
                "data2d.ospec.timestamp:out"
              ], 
              "type": "data2d.ospec.timestamp:in"
            }, 
            "direction": [
              -1, 
              0
            ], 
            "multiple": false, 
            "name": "stamps", 
            "offsetPosition": {
              "left": -12, 
              "top": 40
            }, 
            "required": true
          }, 
          {
            "alwaysSrc": true, 
            "ddConfig": {
              "allowedTypes": [
                "data2d.ospec:in"
              ], 
              "type": "data2d.ospec:out"
            }, 
            "direction": [
              1, 
              0
            ], 
            "multiple": true, 
            "name": "output", 
            "offsetPosition": {
              "left": 48, 
              "top": 16
            }, 
            "required": false
          }
        ], 
        "xtype": "AutosizeImageContainer"
      }, 
      "fields": [
        {
          "label": "Override existing?", 
          "name": "override_existing", 
          "type": "bool", 
          "value": false
        }
      ], 
      "name": "Timestamp"
    }, 
    {
      "container": {
        "icon": "../../static/img/offspecular/app_polar_matrix.png", 
        "image": "../../static/img/offspecular/app_polar_matrix_image.png", 
        "terminals": [
          { "alwaysSrc": false, 
            "ddConfig": {
              "allowedTypes": ["data2d.ospec:out" ], 
              "type": "data2d.ospec:in"
            }, 
            "direction": [-1,0], 
            "multiple": false, 
            "name": "input", 
            "offsetPosition": {"left": -12, "top": 4}, 
            "required": true
          }, 
          {
            "alwaysSrc": false, 
            "ddConfig": {
              "allowedTypes": ["data2d.ospec:out"], 
              "type": "data2d.ospec:in"
            }, 
            "direction": [-1,0], 
            "multiple": false, 
            "name": "he3cell", 
            "offsetPosition": {"left": -12,"top": 40}, 
            "required": true
          }, 
          {
            "alwaysSrc": true, 
            "ddConfig": {
              "allowedTypes": ["data2d.ospec:in"], 
              "type": "data2d.ospec:out"
            }, 
            "direction": [1,0], 
            "multiple": true, 
            "name": "output", 
            "offsetPosition": {"left": 48, "top": 16}, 
            "required": false
          }
        ], 
        "xtype": "AutosizeImageContainer"
      }, 
      "fields": [], 
      "name": "Append polarization matrix"
    },
    {
      "container": {
        "icon": "../../static/img/offspecular/autogrid.png", 
        "image": "../../static/img/offspecular/slice_image.png", 
        "terminals": [
          { "alwaysSrc": false, 
            "ddConfig": {
              "allowedTypes": ["data2d.ospec:out" ], 
              "type": "data2d.ospec:in"
            }, 
            "direction": [-1,0], 
            "multiple": false, 
            "name": "input", 
            //"offsetPosition": {"left": -12, "top": 16}, 
            "required": true
          }, 
          {
            "alwaysSrc": true, 
            "ddConfig": {
              "allowedTypes": ["data2d.ospec:in"], 
              "type": "data2d.ospec:out"
            }, 
            "direction": [0,1], 
            "multiple": true, 
            "name": "output_x", 
            //"offsetPosition": {"right": -16,"top": 4}, 
            "required": false
          }, 
          {
            "alwaysSrc": true, 
            "ddConfig": {
              "allowedTypes": ["data2d.ospec:in"], 
              "type": "data2d.ospec:out"
            }, 
            "direction": [1,0], 
            "multiple": true, 
            "name": "output_y", 
            //"offsetPosition": {"right": -16, "top": 40}, 
            "required": false
          }
        ], 
        "xtype": "AutosizeImageContainer"
      }, 
      "fields": [], 
      "name": "Slice Data"
    }, 
    {
      "container": {
        "icon": "../../static/img/offspecular/sum_polar.png", 
        "image": "../../static/img/offspecular/sum_polar_image.png", 
        "terminals": [
          {
            "alwaysSrc": false, 
            "ddConfig": {
              "allowedTypes": [
                "data2d.ospec:out"
              ], 
              "type": "data2d.ospec:in"
            }, 
            "direction": [
              -1, 
              0
            ], 
            "multiple": false, 
            "name": "input", 
            "offsetPosition": {
              "left": -12, 
              "top": 4
            }, 
            "required": true
          }, 
          {
            "alwaysSrc": false, 
            "ddConfig": {
              "allowedTypes": [
                "data2d.ospec:out"
              ], 
              "type": "data2d.ospec:in"
            }, 
            "direction": [
              -1, 
              0
            ], 
            "multiple": false, 
            "name": "grid", 
            "offsetPosition": {
              "left": -12, 
              "top": 40
            }, 
            "required": false
          }, 
          {
            "alwaysSrc": true, 
            "ddConfig": {
              "allowedTypes": [
                "data2d.ospec:in"
              ], 
              "type": "data2d.ospec:out"
            }, 
            "direction": [
              1, 
              0
            ], 
            "multiple": true, 
            "name": "output", 
            "offsetPosition": {
              "left": 48, 
              "top": 16
            }, 
            "required": false
          }
        ], 
        "xtype": "AutosizeImageContainer"
      }, 
      "fields": [], 
      "name": "Combine polarized"
    }, 
    {
      "container": {
        "icon": "../../static/img/offspecular/polar_correct.png", 
        "image": "../../static/img/offspecular/polar_correct_image.png", 
        "terminals": [
          {
            "alwaysSrc": false, 
            "ddConfig": {
              "allowedTypes": [
                "data2d.ospec:out"
              ], 
              "type": "data2d.ospec:in"
            }, 
            "direction": [
              -1, 
              0
            ], 
            "multiple": false, 
            "name": "input", 
            "offsetPosition": {
              "left": -12, 
              "top": 16
            }, 
            "required": true
          }, 
          {
            "alwaysSrc": true, 
            "ddConfig": {
              "allowedTypes": [
                "data2d.ospec:in"
              ], 
              "type": "data2d.ospec:out"
            }, 
            "direction": [
              1, 
              0
            ], 
            "multiple": true, 
            "name": "output", 
            "offsetPosition": {
              "left": 48, 
              "top": 16
            }, 
            "required": false
          }
        ], 
        "xtype": "AutosizeImageContainer"
      }, 
      "fields": [
        {
          "label": "Polarization assumptions", 
          "name": "assumptions", 
          "type": "int", 
          "value": 0
        }, 
        {
          "label": "Auto assumptions", 
          "name": "auto_assumptions", 
          "type": "bool", 
          "value": true
        }
      ], 
      "name": "Polarization correction"
    }
  ], 
  "propertiesFields": [
    {
      "label": "Title", 
      "name": "name", 
      "type": "string", 
      "typeInvite": "Enter a title"
    }, 
    {
      "cols": 30, 
      "label": "Description", 
      "name": "description", 
      "type": "text"
    }
  ]
};

SaveContainer = function(opts, layer) {
    SaveContainer.superclass.constructor.call(this, opts, layer);
    
    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    
    var content = document.createElement('div');
    content.innerHTML = '';
    //var saveButton = document.createElement('img');
    var saveButton = document.createElement('button');
    saveButton.value = 'save';
    saveButton.innerHTML = 'Save';
    //saveButton.src = this.image;
    content.appendChild(saveButton); 
    
//    var getCSVForm = document.createElement('form');
//    getCSVForm.method = "post";
//    getCSVForm.action="getCSV/";
//    getCSVForm.id = 'narf';
//    var csrf_div = document.createElement('div');
//    csrf_div.style = "display:none";
//    var csrf_input = document.createElement('input');
//    csrf_input.type = "hidden";
//    csrf_input.name = "csrfmiddlewaretoken";
//    csrf_input.value = getCookie('csrftoken');
//    csrf_div.appendChild(csrf_input);
//    getCSVForm.appendChild(csrf_div);
//    var data_input = document.createElement('input');
//    data_input.type = 'hidden';
//    data_input.id = 'data';
//    data_input.name = 'data';
//    getCSVForm.appendChild(data_input);
//    var outfilename = document.createElement('input');
//    outfilename.type='text';
//    outfilename.id = 'outfilename';
//    outfilename.value = 'data.csv';
//    getCSVForm.appendChild(outfilename);
    
    var getCSVButton = document.createElement('button');
    //getCSVButton.type = 'submit';
    getCSVButton.value = 'getCSV';
    getCSVButton.innerHTML = 'download CSV';
    //saveButton.src = this.image;
    //getCSVForm.appendChild(getCSVButton); 
    //content.appendChild(getCSVForm);
    content.appendChild(getCSVButton);
      
    this.setBody(content);
    this.CSVForm = getCSVForm;

    YAHOO.util.Event.addListener(saveButton, 'click', this.Save, this, true);
    YAHOO.util.Event.addListener(getCSVButton, 'click', this.getCSV, this, true);
};

YAHOO.lang.extend(SaveContainer, WireIt.Container, {
    xtype: 'SaveContainer',
    Save: function(e) {
        console.log('save click:', e);
        alert('save to server not yet implemented.  Try downloading CSV version of data');
    },
    getCSV: function(e, f) {
        var reductionInstance = editor.reductionInstance;
        var wires = f.wires;
        if (wires.length == 0) {
            alert('no data to get (no wires in)');
            return
        } else {
            var wire_in = f.wires[0];
            clickedOn = {'source': wire_in.src,'target': wire_in.tgt};
        }
        editor.getCSV(reductionInstance, clickedOn)
    },
});

//AutosizeImageContainer = function(opts, layer) {
//    AutosizeImageContainer.superclass.constructor.call(this, opts, layer);
//    var that = this;

//    function auto_space(number, width) {
//        // takes a number and places it in the width evenly
//        var locs = [];
//        if (number == 1) {
//            locs.push(Math.round(width / 2));
//        } else {
//            var spacing = width / (number-1);
//            for (var i=0; i<number; i++) {
//                locs.push(Math.round(i*spacing));
//            }
//        }  
//        return locs;
//    }
//    
//    function distribute_terminals(terminals, width, height) {
//        var locs = [];
//        var directions = {
//            'left': {'fit_axis':'top', 'range': width, 'test': function(el) { return el.direction[0] < 0 } },
//            'right': {'fit_axis':'top', 'range': width, 'test': function(el) { return el.direction[0] > 0 } },
//            'top': {'fit_axis':'left', 'range': height, 'test': function(el) { return el.direction[1] < 0 } },
//            'bottom': {'fit_axis':'left', 'range': height, 'test': function(el) { return el.direction[1] > 0 } },
//        }
//        
//        for (var d in directions) {
//            var terms = terminals.filter( directions[d].test );
//            console.log(d, terms);
//            var padding = 4;
//            var term_size = 16;
//            var range = (directions[d].range - term_size) - (2*padding);
//            var locs = auto_space(terms.length, range);
//            for (var i in terms) {
//                var term = terms[i];
//                term.el.style.setProperty(d, (-1 * term_size));
//                term.offsetPosition = {d: (-1 * term_size)};
//                term.el.style.setProperty(directions[d].fit_axis, (locs[i] - (term_size/2) + padding));
//                term.offsetPosition[directions[d].fit_axis] = (locs[i] - (term_size/2) + padding);
//            }
//        }
//    }
//    
//    this.image_obj = new Image();
//    var that = this;
//    this.image_obj.onload = function() {
//        // set the element size, and distribute terminals.
//        that.el.style.width = that.image_obj.width + "px";
//        that.el.style.height = that.image_obj.height + "px";
//        distribute_terminals(that.terminals, that.image_obj.width, that.image_obj.height);
//    }
//    this.image_obj.src = opts.image;
//}

//YAHOO.lang.extend(AutosizeImageContainer, WireIt.ImageContainer, {
//    xtype: 'AutosizeImageContainer',
//});
