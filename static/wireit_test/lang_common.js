// changed!

AutosizeImageContainer = function(opts, layer) {
    AutosizeImageContainer.superclass.constructor.call(this, opts, layer);
    var that = this;

    function auto_space(number, width) {
        // takes a number and places it in the width evenly
        var locs = [];
        if (number == 1) {
            locs.push(Math.round(width / 2));
        } else {
            var spacing = width / (number-1);
            for (var i=0; i<number; i++) {
                locs.push(Math.round(i*spacing));
            }
        }
        return locs;
    }
    
    function distribute_terminals(terminals, width, height) {
        var locs = [];
        var directions = {
            'left': {'fit_axis':'top', 'range': width, 'test': function(el) { return el.direction[0] < 0 } },
            'right': {'fit_axis':'top', 'range': width, 'test': function(el) { return el.direction[0] > 0 } },
            'top': {'fit_axis':'left', 'range': height, 'test': function(el) { return el.direction[1] < 0 } },
            'bottom': {'fit_axis':'left', 'range': height, 'test': function(el) { return el.direction[1] > 0 } },
        }
        
        for (var d in directions) {
            var terms = terminals.filter( directions[d].test );
            //console.log(d, terms)
            var padding = 4;
            var term_size = 16;
            var range = (directions[d].range - term_size) - (2*padding);
            var locs = auto_space(terms.length, range);
            for (var i in terms) {
                var term = terms[i];
                term.el.style.setProperty(d, (-1 * term_size), null);
                term.offsetPosition = {d: (-1 * term_size)};
                term.el.style.setProperty(directions[d].fit_axis, (locs[i] - (term_size/2) + padding), null);
                term.offsetPosition[directions[d].fit_axis] = (locs[i] - (term_size/2) + padding);
            }
        }
    }
    
    this.image_obj = new Image();
    var that = this;
    this.image_obj.onload = function() {
        // set the element size, and distribute terminals.
        that.el.style.width = that.image_obj.width + "px";
        that.el.style.height = that.image_obj.height + "px";
        distribute_terminals(that.terminals, that.image_obj.width, that.image_obj.height);
        that.redrawAllWires();
    }
    this.image_obj.src = opts.image;
}

YAHOO.lang.extend(AutosizeImageContainer, WireIt.ImageContainer, {
    xtype: 'AutosizeImageContainer',
});

// javascript to load in drop-down list of fields for join.
JoinContainer = function(opts, layer) {
    JoinContainer.superclass.constructor.call(this, opts, layer);

    //Populates the xaxis and yaxis choices drop-down menus for the config
    //DEPENDENCY: if editor.FAT.METADATA is modified (ie no longer an array) this must be fixed!!!
    fields_to_remove = ["Available Files", "counts", "primary_detector"];
    try {
        choices = editor.FAT.METADATA[0].slice(0); //copy of metadata field headers array
        for (var i = 0; i < fields_to_remove.length; ++i) {
            index = choices.indexOf(fields_to_remove[i]);
            if (index >= 0)
                choices.splice(index, 1); //remove the field if found
        }
        
        this.fields.xaxis.choices = choices
        this.fields.yaxis.choices = choices
    } catch (err) {}
};
YAHOO.lang.extend(JoinContainer, AutosizeImageContainer, {
    xtype: 'JoinContainer',
});


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
    var saveButton = document.createElement('button');
    saveButton.value = 'save';
    saveButton.innerHTML = 'Save';
    content.appendChild(saveButton); 
    
    var getCSVButton = document.createElement('button');
    getCSVButton.value = 'getCSV';
    getCSVButton.innerHTML = 'download CSV';
    content.appendChild(getCSVButton);
      
    this.setBody(content);
    this.CSVForm = getCSVForm;

    YAHOO.util.Event.addListener(saveButton, 'click', this.Save, this, true);
    YAHOO.util.Event.addListener(getCSVButton, 'click', this.getCSV, this, true);
};

YAHOO.lang.extend(SaveContainer, WireIt.Container, {
    xtype: 'SaveContainer',
    Save: function(e, f) {
        console.log('save click:', e, f);
        var reductionInstance = editor.reductionInstance;
        var wires = f.wires;
        if (wires.length == 0) {
            alert('no data to get (no wires in)');
            return
        } else {
            var wire_in = f.wires[0];
            clickedOn = {'source': wire_in.src,'target': wire_in.tgt};
        }
        editor.runAndSave(reductionInstance, clickedOn);
        //alert('save to server not yet implemented.  Try downloading CSV version of data');
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
        editor.getCSV(reductionInstance, clickedOn);
    },
});








SliceContainer = function(opts, layer) {
    jQuery.extend(true, opts, {
        'height': 16,
        'width': 120,
        'terminals': [{
            "name": "input", 
            "offsetPosition": {"left": -16, "top": 16}, 
          }, 
          {
            "name": "output_x", 
            "offsetPosition": {"left": 44,"bottom": -52}, 
          }, 
          {
            "name": "output_y", 
            "offsetPosition": {"right": -16, "top": 16}, 
          }
        ]
    });  
    SliceContainer.superclass.constructor.call(this, opts, layer);

    var content = document.createElement('div');
    content.innerHTML = '';
    //var saveButton = document.createElement('img');
    var sliceButton = document.createElement('button');
    sliceButton.value = 'slice';
    sliceButton.innerHTML = 'Slice';
    //saveButton.src = this.image;
    content.appendChild(sliceButton);
    this.setBody(content);
    YAHOO.util.Event.addListener(sliceButton, 'click', this.openSliceWindow, this, true);
    
    /*
    var directions = {
        'left': {'offsets': {'left': -16, 'top': 16}, 'test': function(el) { return el.direction[0] < 0 } },
        'right': {'offsets': {'right': -16, 'top': 16}, 'test': function(el) { return el.direction[0] > 0 } },
        'bottom': {'offsets': {'left': 44, 'bottom': -52}, 'test': function(el) { return el.direction[1] > 0 } },
    }
    var terminals = this.terminals;
    for (var d in directions) {
        var terms = terminals.filter( directions[d].test );
        for (var i in terms) {
            var term = terms[i];
            for (var j in directions[d].offsets) {
                term.el.style.setProperty(j, directions[d].offsets[j], null);
                
            }
            term.offsetPosition = directions[d].offsets;
        }
    }
    */
    //this.redrawAllWires();
};

YAHOO.lang.extend(SliceContainer, WireIt.Container, {
    xtype: 'SliceContainer',
    openSliceWindow: function(e, f) {
        var reductionInstance = editor.reductionInstance;
        var wires = f.wires;
        if (wires.length == 0) {
            alert('no data to get (no wires in)');
            return
        } else {
            var wire_in = f.wires[0];
            clickedOn = {'source': wire_in.src,'target': wire_in.tgt};
        }
        var toReduce = editor.generateReductionRecipe(reductionInstance, clickedOn);
        f.getConfig();
        editor.adapter.runReduction(toReduce, {
            success: function(result) { 
                //toPlot = result;
                var sliceWindow = window.open("/static/lib/plotting/sliceplotwindow.html", "", "status=1,width=1024,height=768");
		        sliceWindow.toPlot = result;
		        sliceWindow.container = f;
                sliceWindow.reductionInstance = reductionInstance;
            },
            failure: editor.runModuleFailure,
            scope: editor}
        );
        
        //console.log('save click:', e);
        //alert('save to server not yet implemented.  Try downloading CSV version of data');
        
    }
});




ExtractContainer = function(opts, layer) {
    jQuery.extend(true, opts, {
        'height': 16,
        'width': 120,
        'terminals': [{
            "name": "input", 
            "offsetPosition": {"left": -16, "top": 16}, 
          }, 
          {
            "name": "output", 
            "offsetPosition": {"left": 44,"bottom": -52}, 
          }, 
        ]
    });  
    ExtractContainer.superclass.constructor.call(this, opts, layer);

    var content = document.createElement('div');
    content.innerHTML = '';

    var extractButton = document.createElement('button');
    extractButton.value = 'extract';
    extractButton.innerHTML = 'Extract';

    content.appendChild(extractButton);
    this.setBody(content);
    
    YAHOO.util.Event.addListener(extractButton, 'click', this.openExtractConfig, this, true);

};

YAHOO.lang.extend(ExtractContainer, WireIt.Container, {
    xtype: 'ExtractContainer',
    openExtractConfig: function(e, f) {
        var reductionInstance = editor.reductionInstance;
        var wires = f.wires;
        if (wires.length == 0) {
            alert('no data to get (no wires in)');
            return
        } else {
            var wire_in = f.wires[0];
            clickedOn = {'source': wire_in.src,'target': wire_in.tgt};
        }
        var toReduce = editor.generateReductionRecipe(reductionInstance, clickedOn);
        f.getConfig();
        editor.adapter.runReduction(toReduce, {
            success: function(result) { 
		// Call get_metadata --> generate module config popup
                
		/*
                var sliceWindow = window.open("/static/lib/plotting/sliceplotwindow.html", "", "status=1,width=1024,height=768");
		        sliceWindow.toPlot = result;
		        sliceWindow.container = f;
                sliceWindow.reductionInstance = reductionInstance;
		*/
            },
            failure: editor.runModuleFailure,
            scope: editor}
        );
        
    }
});

FootprintCorrectContainer = function(opts, layer) {  // defines FootprintCorrectContainer
    jQuery.extend(true, opts, {  // sets wire terminal locations and size of FootprintCorrect module
        'height': 16,
        'width': 120,
        'terminals': [{
            "name": "input", 
            "offsetPosition": {"left": -16, "top": 16}, 
          }, 
          {
            "name": "output", 
            "offsetPosition": {"right": -16, "top": 16}, 
          }
        ]
    });  
    FootprintCorrectContainer.superclass.constructor.call(this, opts, layer);

    var content = document.createElement('div');
    content.innerHTML = '';
    //var saveButton = document.createElement('img');
    var footprintcorrectButton = document.createElement('button');  // creates button for module
    footprintcorrectButton.value = 'footprintcorrect';
    footprintcorrectButton.innerHTML = 'Footprint Correct';
    //saveButton.src = this.image;
    content.appendChild(footprintcorrectButton);
    this.setBody(content);
    YAHOO.util.Event.addListener(footprintcorrectButton, 'click', this.openFootprintCorrectWindow, this, true); // function called when button is clicked
};

YAHOO.lang.extend(FootprintCorrectContainer, WireIt.Container, { // 'extends' FootprintCorrectContainer defined above
    xtype: 'FootprintCorrectContainer',
    openFootprintCorrectWindow: function(e, f) {  // what happens once button is clicked
        var reductionInstance = editor.reductionInstance;
        var wires = f.wires;
        if (wires.length == 0) {
            alert('no data to get (no wires in)');
            return
        } else {
            var wire_in = f.wires[0];
            clickedOn = {'source': wire_in.src,'target': wire_in.tgt};
        }
        var toReduce = editor.generateReductionRecipe(reductionInstance, clickedOn);
        f.getConfig();
        editor.adapter.runReduction(toReduce, {
            success: function(result) { 
                //toPlot = result;
                var footprintcorrectWindow = window.open("/static/lib/plotting/footprintcorrectwindow.html", "", "status=1,width=1024,height=768"); // opens window
		        footprintcorrectWindow.toPlot = result; // passes results so that 'footprintcorrectWindow' can use them
		        footprintcorrectWindow.container = f;
                footprintcorrectWindow.reductionInstance = reductionInstance;
            },
            failure: editor.runModuleFailure,
            scope: editor}
        );
        
        //console.log('save click:', e);
        //alert('save to server not yet implemented.  Try downloading CSV version of data');
        
    }
});

BackgroundSubtractContainer = function(opts, layer) {  // defines BackgroundContainer
    jQuery.extend(true, opts, { // sets terminal locations and size of Background module
        'height': 16,
        'width': 120,
        'terminals': [{
            "name": "input", 
            "offsetPosition": {"left": -16, "top": 16}, 
          }, 
          {
            "name": "output", 
            "offsetPosition": {"right": -16, "top": 16}, 
          }
        ]
    });  
    BackgroundSubtractContainer.superclass.constructor.call(this, opts, layer);
    
    var content = document.createElement('div'); // shows a blank module
    content.innerHTML = '';
    //var saveButton = document.createElement('img');
    this.setBody(content);
};

YAHOO.lang.extend(BackgroundSubtractContainer, WireIt.Container, { // 'extends' BackgroundSubtractContainer defined above
    xtype: 'BackgroundSubtractContainer'
    }
);
