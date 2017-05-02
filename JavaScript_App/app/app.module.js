/**
 * Created by Anastasia on 02.05.2017.
 */

var AppModule = ng.core.NgModule({
    imports: [ng.platformBrowser.BrowserModule, ng.forms.FormsModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
    .Class({
        constructor: function() { }
    });