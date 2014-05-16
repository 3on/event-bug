/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },
    
    handleAction: {
        value: function (evt) {
            this.templateObjects.overlay.show();
        }
    },
    
    handleKeyPress: {
        value: function(evt) {
            // do nothing for now
        }
    },
    
    autocompleteShouldGetSuggestions: {
        value: function (autocomplete, searchTerm) {
             autocomplete.suggestions = ["L'aile ou la cuisse ", "La Grande Vadrouille",  "La belle Américaine"]   
        }
});
